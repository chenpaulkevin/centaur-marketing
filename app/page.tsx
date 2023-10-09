import Image from "next/image";
import Hero from "./landing-sections/hero";
import Clients from "./landing-sections/clients";
import LearnMore from "./landing-sections/LearnMore";
import Helping from "./landing-sections/helping";
import HowToDesign from "./landing-sections/HowToDesign";
import Customers from "./landing-sections/Customers";
import Caring from "./landing-sections/Caring";
import CTA from "./landing-sections/CTA";

export default function Home() {
  return (
    <main className="bg-silver pt-24">
      <Hero />
      <Clients />
      <LearnMore />
      <Helping />
      <HowToDesign />
      <Customers />
      <Caring />
      <CTA />
    </main>
  );
}
