import HeroSection from "./ui/indexSection/HeroSection";
import ServiceSection from "./ui/indexSection/ServiceSection";
import ContactSection from "./ui/indexSection/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* 对应锚点 #home */}
      <section id="home" className="w-[70%] text-white py-16 px-6   justify-center">
        <HeroSection />
      </section>

      {/* 对应锚点 #services */}
      <section id="services" className="w-[70%] bg-white py-16 px-6">
        <ServiceSection />
      </section>

      {/* 对应锚点 #contact */}
      <section id="contact" className="w-[70%] bg-gray-50 py-16 px-6">
        <ContactSection />
      </section>
    </main>
  );
}
