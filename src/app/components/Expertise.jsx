'use client'

import React, { useEffect, useState } from 'react';
import supabaseClient from '@/app/lib/supabaseClient';

const MyComponent = () => {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('LochmannWeb')
          .select('expertise')
          .order('id', { ascending: true});

        if (error) {
          throw error;
        }

        setExpertise(data); // Opdaterer komponentens state med de hentede titler
      } catch (error) {
        console.error('Something went wrong at expertise:', error.message);
      }
    };

    fetchExpertise();
  }, []);

  return (
    <div>
      <ul>
        {expertise.map((item, index) => (
          <li key={index}>
            <h1>{item.expertise}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
