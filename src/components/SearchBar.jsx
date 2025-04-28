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
      setFilteredProducts([]
