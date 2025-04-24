import React from 'react';
import Layout from '../components/Layout';
import UploadProducts from '../components/UploadProducts';

export default function AdminImport() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-[#2e7d32] mb-4">Developer Import Tools</h1>
      <p className="text-sm text-gray-600 mb-6">Upload your own JSON product batch to test.</p>
      <UploadProducts />
    </Layout>
  );
}
