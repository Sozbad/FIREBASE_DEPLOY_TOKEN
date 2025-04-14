import React from 'react';
import UploadProducts from '../components/UploadProducts';

export default function AdminImport() {
  return (
    <div className="min-h-screen bg-white pb-28 px-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">Admin: Upload Products</h1>
      <p className="text-sm text-gray-600 mb-6">
        Upload a JSON file to import SDS product data into EcoRank.
      </p>
      <UploadProducts />
    </div>
  );
}
