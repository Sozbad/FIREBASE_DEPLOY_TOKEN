import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust the path if needed
import { collection, getDocs } from "firebase/firestore";

const SearchBar = ({ onProductSelected }) => {
  const [searchInput, setSearchInput] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAllProducts(products);
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 0) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 10)); // limit to 10 suggestions
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSuggestionClick = (product) => {
    setSearchInput(product.name);
    setFilteredProducts([]);
    onProductSelected(product); // pass selected product back to parent
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <input
        type="text"
        placeholder="Search for a product..."
        className="w-full p-2 border rounded"
        value={searchInput}
        onChange={handleInputChange}
      />

      {filteredProducts.length > 0 && (
        <div className="bg-white border mt-1 rounded shadow">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSuggestionClick(product)}
              className="p-2 hover:bg-green-100 cursor-pointer"
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
