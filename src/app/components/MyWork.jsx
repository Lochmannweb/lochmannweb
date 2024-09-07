'use client'

import supabaseClient from '@/app/lib/supabaseClient';
import React, { useEffect, useState } from 'react'

const MyWork = () => {
    const [mywork, setMywork] = useState([]);

    useEffect(() => {
        const fetchMywork = async () => {
            try {
            const { data, error } = await supabaseClient
            .from('LochmannWeb')
            .select('mywork')
            .order('id', { ascending: true });

            if (error) {
            throw error;
            } 
            
            setMywork(data);
            } catch (error) {
                console.error('Something went wrong with My Work', error.message);
            }
           };

           fetchMywork();
    }, []);
  return (
    <div>
        <ul>
            {mywork.map((item, index) => (
                <li key={index}>
                    <h1>{item.mywork}</h1>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MyWork