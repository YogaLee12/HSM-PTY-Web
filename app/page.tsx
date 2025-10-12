import HeroSection from "./ui/indexSection/HeroSection";
import ServiceSection from "./ui/indexSection/ServiceSection";
import ContactSection from "./ui/indexSection/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      {/* 对应锚点 #home */}
      <section
        id="home"
        className="w-full md:w-[85%] lg:w-[70%] text-white py-16 px-4 sm:px-6 md:px-8"
      >
        <HeroSection />
      </section>

      {/* 对应锚点 #services */}
      <section
        id="services"
        className="w-full md:w-[85%] lg:w-[70%] bg-white py-16 px-4 sm:px-6 md:px-8"
      >
        <ServiceSection />
      </section>

      {/* 对应锚点 #contact */}
      <section
        id="contact"
        className="w-full md:w-[85%] lg:w-[70%] bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      >
        <ContactSection />
      </section>
    </main>
  );
}

