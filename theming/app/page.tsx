import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-[image:radial-gradient(60%_60%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),transparent)]">
      <Navbar />
      <Hero />
    </div>
  );
}
