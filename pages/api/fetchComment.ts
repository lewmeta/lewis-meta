import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const owner = 'thegypsyboyo'; // Replace with your GitHub username
    const repo = 'comments'; // Replace with your repository name

    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      // Add authentication if the repository is private
      // headers: {
      //   Authorization: `token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
      // },
    });

    const comments = response.data.map((issue: any) => ({
      id: issue.id,
      title: issue.title,
      body: issue.body,
      // Additional data or parsing as needed from the issue payload
    }));

    return res.status(200).json(comments);
  } catch (error) {
    console.error('Error while fetching comments:', error);
    return res.status(500).json({ error: 'Failed to fetch comments from GitHub' });
  }
}
