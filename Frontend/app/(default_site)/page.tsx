import { Hero } from "@/app/ui/landing/Hero";

export default function Home(): JSX.Element {
  return (
    <div className="w-full h-fit flex flex-col gap-16">
      <Hero />
    </div>
  );
}
