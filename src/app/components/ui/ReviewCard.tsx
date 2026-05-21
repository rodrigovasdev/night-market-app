import { Star } from "lucide-react";

export interface Review {
    name: string;
    rating: number;
    comment: string;
}

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="flex items-center gap-3 pt-5">
            <div className="flex flex-row flex-1 gap-4">
                <div className="flex flex-col items-center gap-1 min-w-fit">
                    <div className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center text-lg font-bold">
                        {review.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm">{review.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                fill="currentColor"
                                stroke="none"
                                className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm pt-1">{review.comment}</span>
                </div>
            </div>
        </div>
    );
}
