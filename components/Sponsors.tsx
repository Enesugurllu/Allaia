'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Sponsor {
  id: number;
  image: string;
  alt: string;
}

const Sponsors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const sponsors: Sponsor[] = [
    { id: 1, image: '/image/adidas.png', alt: 'Adidas' },
    { id: 2, image: '/image/nike.png', alt: 'Nike' },
    { id: 3, image: '/image/puma.png', alt: 'Puma' },
    { id: 4, image: '/image/channel.png', alt: 'Channel' },
    { id: 5, image: '/image/fanta.jpeg', alt: 'Fanta' },
    { id: 6, image: '/image/newbalance.png', alt: 'New Balance' },
    { id: 7, image: '/image/gucci.png', alt: 'Gucci' },
    { id: 8, image: '/image/thenortface.png', alt: 'The North Face' },
    { id: 9, image: '/image/inci.webp', alt: 'Inci' },
    { id: 10, image: '/image/hummel.png', alt: 'Hummel' },
    { id: 11, image: '/image/lacoste.png', alt: 'Lacoste' },
    { id: 12, image: '/image/audi.png', alt: 'Audi' },
    { id: 13, image: '/image/bmw.jpeg', alt: 'BMW' },
    { id: 14, image: '/image/mercedes.jpeg', alt: 'Mercedes' },
    { id: 15, image: '/image/koc.jpeg', alt: 'Koç' },
    { id: 16, image: '/image/burger.png', alt: 'Burger King' }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sponsors.length - 8 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sponsors.length]);

  const visibleSponsors = sponsors.slice(currentIndex, currentIndex + 8);

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center">

            <div className="flex items-center justify-center gap-8">
              {visibleSponsors.map((sponsor) => (
                <div 
                  key={sponsor.id} 
                  className="w-28 h-14 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center" 
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.alt}
                    width={112}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
