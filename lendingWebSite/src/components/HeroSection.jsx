import { Button, Tooltip } from "antd";
import { RocketOutlined } from "@ant-design/icons";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/video1.mp4"
          // "https://res.cloudinary.com/dltauawkh/video/upload/v1756402986/video1_ye1gpb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content (Left Aligned) */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full pl-6 ">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl leading-tight">
          The Future is Orbitra{" "}
          <RocketOutlined className="ml-2 text-pink-400 animate-bounce drop-shadow-lg text-2xl sm:text-3xl" />
        </h1>

        <p className="mt-6 text-gray-200 text-base font-semibold sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          🚀 We’re redefining how people work & create —
          <br className="hidden sm:block" />
          with powerful, smart, and interactive experiences.
        </p>

        <Tooltip title="Be the first to know when we launch!">
          <Button
            type="primary"
            size="large"
            href="https://www.instagram.com/orbit_ra/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 !rounded-full px-8 sm:px-12 py-4 sm:py-5 !bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 !border-none shadow-xl hover:shadow-2xl transition transform hover:scale-110 text-base sm:text-lg font-semibold text-white"
          >
            Notify Me
          </Button>
        </Tooltip>
      </div>
    </section>
  );
}
