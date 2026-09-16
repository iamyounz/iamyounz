import Hero from "@/components/Hero";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-[#F5F2ED] selection:bg-[#C9A46A] selection:text-[#0B0B0B]">
    {/* Navbar */}
    <main className="flex-glow">
      <Hero />
    </main>
   </div>
  );
}
