import React from 'react'
import { Star } from "lucide-react";
import { useState } from 'react'

function StarsGive() {

    const [rating, setRating] = useState(0);

  return (
    <div className = "flex flex-row item-center pt-8 sticky z-10">
    <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, index) => {
            return (
            <Star
                key={index}
                fill={index < rating ? "currentColor" : "none"}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setRating(index + 1)}
            />
            );
        })}
    </div>
    <div className = "flex items-center ml-3">
        <span>Be the first to review Blue T-shirt</span>
    </div>
</div>
  )
}

export default StarsGive