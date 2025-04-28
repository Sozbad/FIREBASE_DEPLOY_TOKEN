import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust path if needed
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-6 text-center">Loading Product...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#2e7d32] mb-4">{product.name}</h1>
      <p>Score: {product.score}</p>
      <p>Primary Category: {product.primary_category}</p>
      <p>Subcategory: {product.subcategory}</p>
      <p>Recommended: {product.recommended ? "Yes" : "No"}</p>

      {/* Show hazards */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Hazards:</h2>
        <ul className="list-disc list-inside">
          {product.hazards && product.hazards.map((hazard, index) => (
            <li key={index}>{hazard}</li>
          ))}
        </ul>
      </div>

      {/* Later: Add pie chart or risk breakdown here! */}
    </div>
  );
};

export default ProductDetail;
