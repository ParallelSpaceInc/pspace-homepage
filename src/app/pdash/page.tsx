'use client';
import PDashHero from './components/PDashHero';
import PDashFeatures from './components/PDashFeatures';
import PDashUseCases from './components/PDashUseCases';

export default function Page() {
  return (
    <div className='w-full flex flex-col'>
      <PDashHero />
      <PDashFeatures />
      <PDashUseCases />
    </div>
  );
}
