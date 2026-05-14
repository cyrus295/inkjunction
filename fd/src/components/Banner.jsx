import React from 'react';

export function Banner() {
  return (
    <div className="relative w-full h-48 md:h-80 overflow-hidden bg-black border-y border-white/10 my-12">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source
          src="/bgvideo1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    </div>
  );
}
