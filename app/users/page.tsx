// pages/repositories.tsx
import { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

const Repositories = ({ repositories }: { repositories: Repository[] }) => {
  return (
    <div>
      <h1>Your Repositories</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/repositories"); // Use the correct URL in production
    const repositories = await response.json();

    return {
      props: {
        repositories,
      },
    };
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return {
      props: {
        repositories: [],
      },
    };
  }
}

export default Repositories;
