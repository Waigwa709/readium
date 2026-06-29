const getFirstOrValue = (val) => {
  if (Array.isArray(val)) {
    return val[0] || '';
  }
  return val || '';
};

export async function getAllBooks() {
  try {
    const res = await fetch('/api/books');
    if (!res.ok) {
      throw new Error(`Proxy route returned HTTP status ${res.status}`);
    }
    const data = await res.json();

    if (data.error || !data.books || !data.books.nodes) {
      throw new Error(data.error || "Invalid GraphQL node array format");
    }

    // Helper for category gradients
    const getCategoryStyles = (category) => {
      const cleanCat = (category || '').toLowerCase();
      if (cleanCat.includes('tech')) {
        return {
          accentColor: '#FFCC00',
          gradient: 'linear-gradient(135deg, #1e293b, #0f172a)'
        };
      }
      if (cleanCat.includes('biz') || cleanCat.includes('wealth') || cleanCat.includes('busin')) {
        return {
          accentColor: '#D4AF37',
          gradient: 'linear-gradient(135deg, #2e1065, #0f052d)'
        };
      }
      if (cleanCat.includes('mind') || cleanCat.includes('growth') || cleanCat.includes('person')) {
        return {
          accentColor: '#FF9900',
          gradient: 'linear-gradient(135deg, #4c0519, #1c000a)'
        };
      }
      return {
        accentColor: '#D4AF37',
        gradient: 'linear-gradient(135deg, #1e1e24, #0f0f12)'
      };
    };

    return data.books.nodes.map(node => {
      const details = node.bookDetails || {};
      
      // Extract first value if array (handles ACF checkbox/multiselect values)
      const author = getFirstOrValue(details.author);
      const availability = getFirstOrValue(details.availability);
      const bookCategory = getFirstOrValue(details.bookCategory);
      const bookDescription = getFirstOrValue(details.bookDescription);
      const borrowMessage = getFirstOrValue(details.borrowMessage);
      
      // Capture full list of categories as array of strings
      const rawCategories = Array.isArray(details.bookCategory) 
        ? details.bookCategory 
        : (details.bookCategory ? [details.bookCategory] : []);
      
      const styles = getCategoryStyles(bookCategory);
      
      return {
        id: node.slug || node.id,
        title: node.title,
        author: author || 'Unknown Author',
        category: bookCategory || 'Uncategorized',
        categories: rawCategories,
        description: bookDescription || '',
        price: 'KSh 3,500', // Standard membership display price
        priceVal: 3500,
        rating: 5, // Five star curated rating
        pages: 350,
        year: 2024,
        accentColor: styles.accentColor,
        gradient: styles.gradient,
        coverImage: details.bookCover?.node?.sourceUrl || null,
        availability: availability || 'Available',
        borrowMessage: borrowMessage || ''
      };
    });
  } catch (error) {
    console.error("WordPress GraphQL query failed. Reason:", error.message);
    return [];
  }
}
