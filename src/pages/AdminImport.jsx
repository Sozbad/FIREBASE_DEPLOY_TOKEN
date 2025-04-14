import React from 'react';
import UploadProducts from '../components/UploadProducts';

export default function AdminImport() {
  return (
    <div className="p-4 pt-6 pb-16">
      <h1 className="text-xl font-semibold mb-2">Admin Tools</h1>
      <UploadProducts />
    </div>
  );
}
