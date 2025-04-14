import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, setDoc, doc } from 'firebase/firestore';

export default function UploadProducts() {
  const [status, setStatus] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setStatus('Reading file...');
    const text = await file.text();

    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error('Expected an array of products');

      setStatus(`Uploading ${data.length} products...`);

      const uploadPromises = data.map((product) => {
        const id = product.id || crypto.randomUUID();
        return setDoc(doc(collection(db, 'products'), id), product);
      });

      await Promise.all(uploadPromises);
      setStatus(`Uploaded ${data.length} products successfully!`);
    } catch (err) {
      console.error(err);
      setStatus('Failed to upload. Invalid JSON?');
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept=".json" onChange={handleFileUpload} />
      <p className="text-sm text-gray-600">{status}</p>
    </div>
  );
}
