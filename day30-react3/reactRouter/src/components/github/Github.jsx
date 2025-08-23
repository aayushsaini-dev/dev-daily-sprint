import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center transform hover:scale-[1.02] transition-transform duration-300">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={data.avatar_url}
            alt={data.login}
            className="w-32 h-32 rounded-full ring-4 ring-purple-500 shadow-lg"
          />
        </div>

        {/* Name + Username */}
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-400">@{data.login}</p>

        {/* Bio */}
        {data.bio && (
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            {data.bio}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-700 rounded-xl p-4 shadow-inner">
            <p className="text-lg font-bold">{data.public_repos}</p>
            <p className="text-xs text-gray-400">Repos</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4 shadow-inner">
            <p className="text-lg font-bold">{data.followers}</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4 shadow-inner">
            <p className="text-lg font-bold">{data.following}</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
        </div>

        {/* Location */}
        {data.location && (
          <p className="mt-4 text-sm text-gray-400">📍 {data.location}</p>
        )}

        {/* GitHub Link */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-lg transition"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/aayushsaini-dev");
  return res.json();
};
