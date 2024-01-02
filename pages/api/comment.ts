import { client } from '@/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, comment } = req.body;

    console.log('Received Data:', { name, email, comment }); // Log received data

    // Initialize Sanity client or use Sanity's API directly to send the comment data
    const createdComment = await client.create({
      _type: 'comment',
      name,
      email,
      comment,
    });

    return res.status(201).json({ message: 'Comment submitted successfully', comment: createdComment });
  } catch (error) {
    console.error('Error while submitting comment:', error);
    return res.status(500).json({ error: 'Something went wrong while submitting the comment' });
  }
}


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method Not Allowed' });
//     }
  
//     try {
//       const { name, email, comment } = req.body;
  
//       const owner = 'thegypsyboyo';
//       const repo = 'comments';
//       const token = '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';
  
//       const commentData = {
//         title: 'New Comment', // Issue title
//         body: `Name: ${name}\nEmail: ${email}\nComment: ${comment}`, // Comment content
//         labels: ['comment'], // Optional: Labels to categorize comments
//       };
  
//       const response = await axios.post(`https://api.github.com/repos/${owner}/${repo}/issues`, commentData, {
//         headers: {
//           Authorization: `token ${token}`,
//         },
//       });
  
//       return res.status(201).json({ message: 'Comment submitted successfully', comment: response.data });
//     } catch (error) {
//       console.error('Error while submitting comment:', error);
//       return res.status(500).json({ error: 'Something went wrong while submitting the comment' });
//     }
//   }