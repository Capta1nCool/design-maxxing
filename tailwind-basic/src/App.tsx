import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="h-screen relative bg-[radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <Container className="relative z-10">
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <Navbar />

        <Hero />
      </Container>
      <div className="relative">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r  from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div class="max-w-5xl mx-auto py-5">
          <img
            src="./hero-ui-v6.webp"
            alt="ui"
            class="rounded-2xl w-full object-cover object-left shadow-md border border-neutral-200 mask-b-from-0% to-100%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
