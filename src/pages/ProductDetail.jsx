import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Layout from '../components/Layout';
import ScoreBreakdownPie from '../components/ScoreBreakdownPie';
import HazardIcons from '../components/HazardIcons';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [swaps, setSwaps] = useState([]);

  // Helper to calculate average score
  const getAvgScore = (p) =>
    (Number(p.health || 0) + Number(p.environment || 0) + Number(p.handling || 0)) / 3;

  useEffect(() => {
    const fetchProduct = async () => {
      const ref = doc(db, 'products', id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setProduct(data);

        // fetch all, filter better matches
        const all = await getDocs(collection(db, 'products'));
        const allData = all.docs.map((d) => ({ id: d.id, ...d.data() }));

        const alternatives = allData.filter((p) =>
          p.id !== id &&
          p.function &&
          data.function &&
          p.function === data.function &&
          getAvgScore(p) > getAvgScore(data)
        );

        setSwaps(alternatives);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <p className="text-sm text-gray-500">Loading product...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#2e7d32] mb-2">{product.name}</h1>
        <img
          src={product.imageUrl || '/images/placeholder.jpg'}
          alt={product.name}
          className="mx-auto h-24 my-4"
        />
        <ScoreBreakdownPie
          health={product.health}
          environment={product.environment}
          handling={product.handling}
        />
        {product.hazards?.length > 0 && (
          <div className="mt-4">
            <HazardIcons codes={product.hazards} />
          </div>
        )}
        <p className="text-sm text-gray-600 mt-4">
          Function: <strong>{product.function || 'Uncategorized'}</strong>
        </p>
      </div>

      {swaps.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[#2e7d32] mb-4">Better-rated alternatives:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {swaps.map((swap) => (
              <ProductCard key={swap.id} {...swap} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
