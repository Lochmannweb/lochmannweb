'use client'

import React, { useEffect, useState } from 'react';
import supabaseClient from '@/app/lib/supabaseClient';

const MyComponent = () => {
  const [erfaring, setErfaring] = useState([]);

  useEffect(() => {
    const fetchErfaring = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('LochmannWeb')
          .select('erfaring')
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }

        setErfaring(data); // Opdaterer komponentens state med de hentede titler
      } catch (error) {
        console.error('Error fetching titles:', error.message);
      }
    };

    fetchErfaring();
  }, []);

  return (
    <div>
      <ul>
        {erfaring.map((item, index) => (
          <li key={index}>{item.erfaring}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
