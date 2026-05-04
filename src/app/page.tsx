import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import ColorInspiration from "@/sections/Color";
import Contact from "@/sections/Contact";
import About from "@/sections/About";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Products />

      {/* Color Section */}
      <ColorInspiration />

      <About />

      <Contact />

      {/* WhatsApp */}
      <a
        href="https://wa.me/919963029955?text=Hi%20I%20am%20interested%20in%20Lancer%20Paints%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
      >
        💬 WhatsApp
      </a>

    </main>
  );
}