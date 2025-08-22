import React from "react";

function Card({username = "AS", post ="not assigned yet"}) {
 // console.log(props);
  
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-60 shadow-xl rounded-md"
            alt=""
            src="https://i.ytimg.com/vi/5YTL4azG2Po/maxresdefault.jpg"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">{username }</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{post}</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
