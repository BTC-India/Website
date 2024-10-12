import { Hero } from "@/app/ui/landing/Hero";
import { AboutAndVision } from "@/app/ui/landing/AboutAndVision";
import { Ribbon } from "@/app/ui/landing/Ribbon";
import {Details} from '@/app/ui/landing/Details'
import { WhyJoin } from "@/app/ui/landing/WhyJoin";
import { FAQ } from "@/app/ui/landing/FAQ";

export default function Home(): JSX.Element {
  return (
    <div className="w-full h-fit flex flex-col gap-24">
      <Hero />
      <AboutAndVision />
      <Ribbon />
      <Details />
      <WhyJoin />
      <FAQ />
    </div>
  );
}
