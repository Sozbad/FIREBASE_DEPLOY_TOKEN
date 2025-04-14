import React from 'react';

export default function SwapSuggestion({ swap }) {
  if (!swap) return null;

  return (
    <div className="px-6 py-6 mt-4 bg-green-50 border border-green-200 rounded-xl shadow-sm">
      <h3 className="text-sm font-bold text-green-800 mb-2">Suggested Safer Alternative</h3>

      <div className="flex items-start gap-4">
        <img
          src={swap.image || '/icons/placeholder.svg'}
          alt={swap.name}
          className="w-16 h-16 object-cover rounded-lg border bg-white"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-800">{swap.name}</p>
          <p className="text-xs text-gray-600">{swap.function}</p>
          <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full w-fit">
            {swap.score}/10 EcoRank
          </span>
          {swap.affiliate?.enabled && (
            <a
              href={swap.affiliate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              Buy on {swap.affiliate.partner}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
