'use client';

import { useState, useEffect } from 'react'
import { ChangeEvent, FormEvent } from 'react';
import { Star } from 'lucide-react';
import Button from '@/app/components/ui/Button'
import FormField from '@/app/components/ui/FormField'
import { useUserStore } from '@/store/user.store'
import { createProductReview } from '@/services/products.service'
import { toast } from 'sonner'
import ReviewCard from '@/app/components/ui/ReviewCard'

interface ReviewFormProps {
  productId: number;
}

export default function ReviewForm({ productId }: ReviewFormProps) {
  const storedName = useUserStore((state) => state.name);
  const storedMail = useUserStore((state) => state.mail);
  const sentReviews = useUserStore((state) => state.sentReviews);
  const saveSentReview = useUserStore((state) => state.saveSentReview);
  const sentReview = sentReviews.find((review) => review.productId === productId);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: storedName || '',
    email: storedMail || '',
    comments: ''
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: storedName || '',
      email: storedMail || '',
    }));
  }, [storedName, storedMail]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      username: formData.name,
      email: formData.email,
      stars: rating,
      reviewText: formData.comments,
    };

    const ok = await createProductReview(productId, payload);
    if (!ok) {
      toast.error('No se pudo enviar la reseña');
      return;
    }

    saveSentReview({ productId, ...payload });
    setRating(0);
    setHover(0);
    setFormData((prev) => ({ ...prev, comments: '' }));
    toast.success('Reseña enviada con éxito');
  };

  return (
    <div className="w-6/8 mx-auto p-6">
      <h1 className="font-bold text-3xl md:text-4xl text-center w-4/5 md:w-3/5 mx-auto py-5">DEJA UNA RESEÑA</h1>
      {sentReview ? (
        <div className="pt-6">
          <p className="text-center font-semibold text-green-600">Reseña enviada</p>
          <ReviewCard
            review={{
              name: sentReview.username,
              rating: sentReview.stars,
              comment: sentReview.reviewText,
            }}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Nombre"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Max Gonzalez"
            required
          />
          <FormField
            label="Correo Electrónico"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="max@correo.cl"
            required
          />
          <div>
            <label className="block text-sm font-medium">Calificación</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  fill="currentColor"
                  stroke="none"
                  className={`w-6 h-6 cursor-pointer transition-colors ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <FormField
            label="Comentarios"
            id="comments"
            name="comments"
            multiline
            rows={4}
            value={formData.comments}
            onChange={handleChange}
          />
          <Button content='Enviar' width="w-full" paddingY="py-3" heigth="h-full" variant='primary' />
        </form>
      )}
    </div>
  );
}
