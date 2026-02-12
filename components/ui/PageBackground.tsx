'use client';
import { GeneralSettings } from '@/system/GeneralSettings';

export default function PageBackground() {
  const vimeoId = GeneralSettings.backgroundVideo.vimeo;
  const youtubeId = GeneralSettings.backgroundVideo.youtube;

  const getVideoSrc = () => {
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=720p`;
    } 
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`;
    }
    return "";
  };

  const videoSrc = getVideoSrc();

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        {videoSrc && (
          <iframe
            src={videoSrc}
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 border-0 scale-110 grayscale brightness-[0.6] contrast-125"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          ></iframe>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-slate-900/40 opacity-70"></div>

        <div className="relative w-full h-[50vh] sm:h-[60vh] translate-z-0">
          <svg className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-10" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 50 C 250 20 250 80 500 50 C 750 20 750 80 1000 50 V 100 H 0 Z" fill="#ffffff" />
          </svg>

          <svg className="absolute bottom-0 w-[200%] h-[92%] animate-wave-medium opacity-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 60 C 250 30 250 90 500 60 C 750 30 750 90 1000 60 V 100 H 0 Z" fill="#94a3b8" />
          </svg>

          <svg className="absolute bottom-0 w-[200%] h-[82%] animate-wave-fast opacity-100" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 70 C 250 40 250 100 500 70 C 750 40 750 100 1000 70 V 100 H 0 Z" fill="#020617" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 z-20"></div>

      <style jsx>{`
        .translate-z-0 { transform: translateZ(0); }
        @keyframes wave {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-wave-slow { animation: wave 45s linear infinite; will-change: transform; backface-visibility: hidden; }
        .animate-wave-medium { animation: wave 32s linear infinite; will-change: transform; backface-visibility: hidden; }
        .animate-wave-fast { animation: wave 22s linear infinite; will-change: transform; backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
