'use client';
import HomeSlider from '@/components/HomeSlider/HomeSlider';
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeSlider />
      <MovieCarousel />
    </main>
  );
}
