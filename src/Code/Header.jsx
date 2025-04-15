
import React from "react";

export default function Header() {
  return (
    <header
      className="w-full h-[400px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/banners/truthfirst_hero_banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">TruthFirst Media</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          Satire Meets Substance. Memes Meet Movement. Powered by $ANTY.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="#governance"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500"
          >
            Join the DAO
          </a>
          <a
            href="#donate"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Support the Mission
          </a>
        </div>
      </div>
    </header>
  );
}
