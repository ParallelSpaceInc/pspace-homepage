'use client';
import CareersHero from './components/CareersHero';
import CareersJobList from './components/CareersJobList';
import CareersSubmission from './components/CareersSubmission';

export default function Page() {
  return (
    <div className='w-full flex flex-col'>
      <CareersHero />
      <CareersJobList />
      <CareersSubmission />
    </div>
  );
}
