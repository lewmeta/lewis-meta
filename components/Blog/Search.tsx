"use client"
import React, { useState, useEffect } from 'react';
import { postQuery } from '@/lib/queries';
import { client } from '@/lib/sanity.client';
import { toast } from "react-hot-toast"
import { FaTruckLoading } from 'react-icons/fa';
import Link from 'next/link';

interface SearchProps {
    searchQuery: string;
}
const Search = ({ searchQuery }: SearchProps) => {
    const [postResults, setPostResults] = useState<Post[]>([]);
    const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);



    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            toast.loading("Loading search ...")

            try {
                if (searchQuery.trim() !== '') {
                    setSearchInitiated(true); // Set search intitated flag to true
                    // Fetch the data from sanity based on the postQuery
                    const data = await client.fetch(postQuery);

                    // Filter the data based on the seach query
                    const filteredResults = data.filter((post: any) =>
                        post.title.toLowerCase().includes(searchQuery.toLowerCase()));

                    setPostResults(filteredResults);
                } else {
                    setSearchInitiated(false); // Reset the search initiated flag
                    setLoading(false); // Reset loading state even if there's an error 
                }
            } catch (error) {
                toast.error('Error fetching data!');
            } finally {
                setLoading(false) // Reset loading state even if there's an error 
            }
        }

        // Call fetchPosts whenever the searchQuery changes
        fetchPosts();
    }, [searchQuery])

    const mes = "Loading search ..."

    return (
        <div>
            {loading ? (
                <div className="">
                    {mes}
                </div>
            ) : searchInitiated ? (
                <div className="">
                    {postResults.length > 0 && (
                        <div className="">
                            <p className="">Post results</p>
                            {postResults.map((item, index) => (
                                <div className="t-50" key={index}>
                                    <Link href={`/blog/blog-details/${item.slug.current}`}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>

                    )}
                </div>
            ) : null}
        </div>
    )
}

export default Search