"use client"
import React, { useState, useEffect } from 'react';
import { postQuery } from '@/lib/queries';
import { client } from '@/lib/sanity.client';
import { toast } from "react-hot-toast"
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
                            {postResults.map((item, index) => (
                                <div className="" key={index}>
                                    <div className="border-b  border-solid border-[#dbdfe4] mb-3.5 pb-3.5 text-sm leading-6">
                                        <Link href={`/blog/blog-details/${item.slug.current}`} className="block leading-6 text-base dark:text-white text-ligthText opacity-80 hover:text-blueColor transition-all duration-300 ease-in">{item.title}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    )}
                    {postResults.length === 0 && (
                        <div className='w-full h-full '>
                            <h1 className="text-base dark:text-textDark font-light text-ligthText">Oops 🤔, no search found for <strong className='uppercase'>{searchQuery}</strong></h1>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default Search