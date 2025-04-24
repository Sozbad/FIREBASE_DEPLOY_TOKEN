import React from 'react';

const posts = [
  {
    title: 'Top 5 Eco-Friendly Degreasers (2025)',
    excerpt: 'We tested the most popular degreasers for their environmental impact. Here are the top 5 that balance performance and planet.',
    tag: 'Green Products',
    date: 'April 2025',
    image: '/images/blog-degreasers.jpg',
  },
  {
    title: 'How to Read a Safety Data Sheet (SDS)',
    excerpt: 'Ever felt confused by all the codes and hazard icons? This guide breaks down the key things to look for in an SDS.',
    tag: 'Safety Tips',
    date: 'March 2025',
    image: '/images/blog-sds.jpg',
  },
  {
    title: 'Why “Eco” Doesn’t Always Mean Safe',
    excerpt: 'Many products are labelled green but still pose health risks. Learn how to spot greenwashing and find truly safe swaps.',
    tag: 'Label Myths',
    date: 'February 2025',
    image: '/images/blog-eco-labels.jpg',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#2e7d32] mb-6">EcoRank Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="bg-[#f8fafc] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img
              src={post.image}
              alt={post.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <span className="text-xs uppercase tracking-widest text-[#2e7d32] font-medium">{post.tag}</span>
              <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-3">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
