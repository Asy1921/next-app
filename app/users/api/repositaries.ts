// pages/api/repositories.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Replace 'YOUR_GITHUB_TOKEN' with your actual GitHub token
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: 'process.env.YOUR_GITHUB_TOKEN',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
