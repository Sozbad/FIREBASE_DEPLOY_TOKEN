import React from 'react';

const blogPosts = [
  {
    title: 'How to Choose Safer Cleaning Products',
    summary: 'Learn how to interpret hazard icons, ingredient labels, and EcoRank scores to make smarter, safer choices for your home or workplace.',
    image: '/illustrations/cleaning-guide.svg',
    tag: 'Guides'
  },
  {
    title: 'What Makes a Product Truly Eco-Friendly?',
    summary: 'Not all "green" labels are trustworthy. Discover how EcoRank filters greenwashing and what certifications actually matter.',
    image: '/illustrations/eco-labels.svg',
    tag: 'Awareness'
  },
  {
    title: 'The Hidden Risk of Common Degreasers',
    summary: 'Some industrial degreasers score dangerously low. We break down the risks, hazards, and safe alternatives.',
    image: '/illustrations/hazards.svg',
    tag: 'Safety'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pb-28 bg-white">
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-2xl font-bold mb-1">EcoRank Blog</h1>
        <p className="text-sm text-gray-600">Learn how to reduce your impact and choose safer products with confidence.</p>
      </div>

      <div className="px-6 space-y-6">
        {blogPosts.map((post, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow-sm border p-4 space-y-2">
            <img src={post.image} alt={post.title} className="w-full h-40 object-contain rounded-lg bg-white" />
            <span className="text-xs font-semibold text-green-600 uppercase">{post.tag}</span>
            <h2 className="text-base font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.summary}</p>
            <button className="text-sm text-green-600 font-medium hover:underline">Read more →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
