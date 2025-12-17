import React from 'react';
import { Section } from '../ui/Section';
import { TestimonialsGrid } from '../ui/TestimonialsGrid'; // ✅ Nuevo componente

export const Testimonials = () => {
  return (
    <Section id="testimonios" title="Testimonios" titleCenter={false}>
       <div className="mb-12">
           <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
             Lo que dicen mis clientes
           </h3>
           <p className="text-zinc-400 max-w-2xl text-lg">
             Historias reales de colaboración, retos superados y objetivos cumplidos.
           </p>
       </div>
       <TestimonialsGrid />
    </Section>
  );
};