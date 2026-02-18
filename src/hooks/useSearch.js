import { useState } from 'react';

// Ye function filtering ka saara ganda kaam karega
export const useSearch = (products) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = products.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );
  });

  return {
    searchQuery,
    setSearchQuery,
    filteredItems
  };
};