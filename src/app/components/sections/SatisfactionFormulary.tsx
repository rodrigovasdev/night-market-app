'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Button from '@/app/components/ui/Button'

export default function SatisfactionForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({ ...formData, rating });
    alert('Formulario enviado con éxito');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Formulario de Satisfacción</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Correo Electrónico</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Calificación</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-6 h-6 cursor-pointer ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Comentarios</label>
          <textarea 
            name="comments" 
            value={formData.comments} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className = "flex justify-center">
            <Button type="submit" content = "Enviar">
                Enviar
            </Button>
        </div>
      </form>
    </div>
  );
}
