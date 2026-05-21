"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import ReviewCard, { Review } from "@/app/components/ui/ReviewCard";
import { getProductReviews } from "@/services/products.service";

interface ReviewCarouselProps {
    productId: number;
}

export default function ReviewCarousel({ productId }: ReviewCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function loadReviews() {
            setIsLoading(true);
            try {
                const data = await getProductReviews(productId);
                if (!isMounted) return;

                setReviews(
                    data.map((review) => ({
                        name: review.username,
                        rating: review.stars,
                        comment: review.reviewText,
                    }))
                );
                setCurrent(0);
            } catch {
                if (!isMounted) return;
                setReviews([]);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        }

        loadReviews();

        return () => {
            isMounted = false;
        };
    }, [productId]);

    if (isLoading) {
        return (
            <div className="flex items-center gap-3 pt-5 animate-pulse" aria-hidden="true">
                <div className="w-7 h-7 rounded-full bg-gray-200" />

                <div className="flex-1 rounded-xl border border-gray-200 p-4 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="h-4 w-1/3 bg-gray-200 rounded" />
                        <div className="h-4 w-1/4 bg-gray-100 rounded" />
                    </div>
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-11/12 bg-gray-100 rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                    <div className="h-3 w-14 bg-gray-100 rounded" />
                </div>

                <div className="w-7 h-7 rounded-full bg-gray-200" />
            </div>
        );
    }

    const hasReviews = reviews.length > 0;

    if (!hasReviews) {
        return <p className="pt-5 text-sm text-gray-500">Aún no hay reseñas.</p>;
    }

    return (
        <div className="flex items-center gap-3 pt-5">
            <button
                onClick={() => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
                <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
            </button>

            <div className="flex-1">
                <ReviewCard review={reviews[current]} />
                <span className="text-xs text-gray-400">{current + 1} / {reviews.length}</span>
            </div>

            <button
                onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
                <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </button>
        </div>
    );
}
