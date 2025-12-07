import React, { useEffect, useState } from 'react';
import { database, ref, onValue, set, increment } from '../firebase';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Reference to the visitor count in the database
    const visitorRef = ref(database, 'visitorCount');

    // Listen for changes in visitor count
    const unsubscribe = onValue(visitorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVisitorCount(data);
      } else {
        // If no data exists, initialize with 1
        set(visitorRef, 1);
        setVisitorCount(1);
      }
    });

    // Increment visitor count on page load
    const incrementVisitorCount = async () => {
      try {
        await set(visitorRef, increment(1));
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    incrementVisitorCount();

  
    return () => unsubscribe();
  }, []);

  return (
    <div className="visitor-count text-sm text-gray-600">
      Visitors: {visitorCount}
    </div>
  );
};

export default VisitorCount;
