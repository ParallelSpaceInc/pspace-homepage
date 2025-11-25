import PDashHero from "../imports/Frame181083-9-3264";
import PDashFeatures from "../imports/Frame181087";
import PDashUseCases from "../imports/Frame181086";

export default function PDashPage() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full relative">
        <PDashHero />
      </section>
      <section className="w-full relative">
        <PDashFeatures />
      </section>
      <section className="w-full relative">
        <PDashUseCases />
      </section>
    </div>
  );
}
