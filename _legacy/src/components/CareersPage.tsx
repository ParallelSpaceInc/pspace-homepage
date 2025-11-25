import CareersHero from "../imports/CareersHero";
import CareersJobList from "../imports/CareersJobList";
import CareersSubmission from "../imports/CareersSubmission";

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full relative">
        <CareersHero />
      </section>
      <section className="w-full relative py-20">
        <CareersJobList />
      </section>
      <section className="w-full relative pb-20">
        <CareersSubmission />
      </section>
    </div>
  );
}
