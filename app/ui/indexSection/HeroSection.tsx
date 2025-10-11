import Image from "next/image";
import globeImage from "../../../public/global trade.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#3279b9] text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="
        max-w-6xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        items-center 
        gap-8 md:gap-10 lg:gap-12
      ">
        {/* 左侧文字区 */}
        <div className="w-full text-center md:text-left">
          <h1
            className="
              font-bold tracking-tight
              leading-tight
              text-4xl sm:text-5xl md:text-[40px] lg:text-6xl
              mx-auto md:mx-0
              max-w-[10ch] md:max-w-[12ch]
            "
          >
            HSM AUS
            <br className="hidden md:block" />
            PTY LTD
          </h1>

          <p className="
            mt-4 text-sm sm:text-base md:text-[15px] 
            text-blue-100 
            max-w-md mx-auto md:mx-0
          ">
            A professional Australian agricultural exporter, delivering premium
            beef, dairy, and wine to Asian markets.
          </p>

          <div className="mt-5">
            <a href="#services" >
            <button
              className="
                bg-[#1b588e] hover:bg-[#60b3fd] 
                text-white font-semibold 
                py-2.5 px-6 rounded transition-colors cursor-pointer
              "
            >
              More Info
            </button></a>
          </div>
        </div>

        {/* 右侧图片区（平板重点优化） */}
        <div
          className="
            relative
            w-full
            h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px]
            flex md:block
            justify-center
            overflow-hidden
          "
        >
          {/* 用 fill + object-contain，保证“高度等于父容器”，不变形 */}
          <Image
            src={globeImage}
            alt="Globe"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}

  