import axios from 'axios';
import React, { useState, FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify';

const Comment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<CommentProps[]>([]);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, comment }),
            });

            if (response.ok) {
                // Handle successful comment submission
                // For example, show a success toast
                toast.success('Comment submitted successfully');
                setName('');
                setEmail('');
                setComment('');
            } else {
                // Handle error case
                const errorData = await response.json();
                toast.error(errorData.error || 'Something went wrong');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            toast.error('Network error occurred');
        }
    };
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('/api/fetchComment'); // Fetch comments from your API route
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);
    console.log("Coments", comments)
    return (
        <div>
            <div className="mt-[70px] py-9 lg:px-11 md:px-8 px-5 flex-wrap rounded-3xl bg-white dark:bg-black relative w-full">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 z-10' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-50' />
                {/* <h1>Comments</h1>
                <ul>
                    {comments.map((comment, id) => (
                        <li key={id}>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul> */}
                <h1 className="text-2xl leading-8 dark:text-white text-ligthText mb-10" >{comment.length} comments</h1>
                <span className="comments"></span>
                <div className="relative w-full">
                    <h1 className="text-2xl leading-8 dark:text-white text-ligthText mb-10">Leave a reply</h1>
                    <form action="" className="relative z-30" onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full outline-none dark:bg-white/10 bg-white border border-black/[0.09] resize-none h-[145px] rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" name="comment" required placeholder="Leave your message"></textarea>
                        </div>
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                placeholder="Name *"
                                required
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full  outline-none dark:bg-white/10 border border-black/[0.09] resize-none rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" />
                        </div>
                        <div className="mb-4 w-full">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" aria-required="true" required name="email" className="w-full border border-black/[0.09] outline-none dark:bg-white/10  resize-none rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" />
                        </div>
                        <div className="w-full">
                            <button type="submit" className="w-full text-center py-4 border-none px-8 transition-all duration-300 rounded-2xl font-normal dark:bg-dark bg-blueColor text-white text-base capitalize">send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Comment