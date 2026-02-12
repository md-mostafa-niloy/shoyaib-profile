"use client";
import Image from 'next/image';
import { GeneralSettings } from '@/system/GeneralSettings';

export default function ProfileHeader() {
  return (
    <div className="relative w-full mb-10 group">
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500 opacity-75 blur-sm animate-pulse transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#cbd5e1_50%,#0f172a_100%)]" />
      </div>

      <section className="relative overflow-hidden text-center p-6 sm:p-12 bg-slate-900 rounded-3xl shadow-2xl z-10 h-full">
        
        <div className="absolute top-0 left-0 w-full h-full opacity-90 z-0 pointer-events-none overflow-hidden mix-blend-screen">
           <iframe
              src={`${GeneralSettings.profile.profileBackground}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-0 grayscale contrast-125 object-cover pointer-events-none"
              allow="autoplay; fullscreen"
           ></iframe>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-slate-900/90 via-slate-900/80 to-slate-900/90 rounded-3xl"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-50"></div>

        <div className="relative z-20 mx-auto w-36 h-36 p-1 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.2)] bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500">
          <div className="w-full h-full rounded-full border-[3px] border-slate-900 overflow-hidden bg-slate-800 relative">
              <Image 
                src={GeneralSettings.profile.image} 
                alt={GeneralSettings.profile.name} 
                width={144} 
                height={144} 
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                priority
                unoptimized={true}
              />
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center mt-6">
          <div className="flex items-center justify-center space-x-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 drop-shadow-lg animate-fade-in-up">
                  {GeneralSettings.profile.name}
              </h1>
              {GeneralSettings.profile.verified && (
                  <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" title="Verified Gamer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
                      </svg>
                  </span>
              )}
          </div>
          <p className="text-sm text-slate-300 font-medium mt-2 tracking-wide uppercase opacity-90 drop-shadow-md">
              {GeneralSettings.profile.subtitle}
          </p>
        </div>

        <div className="relative z-20 mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4">
          
          <a href={`mailto:${GeneralSettings.profile.email}`} className="group/btn relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0F172A_0%,#cbd5e1_50%,#0F172A_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-bold text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                  <i className="fas fa-envelope mr-2 text-slate-300"></i> Email Me
              </span>
          </a>

          {GeneralSettings.social.youtube && (
             <a href={GeneralSettings.social.youtube} target="_blank" className="group/btn relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#450a0a_0%,#ef4444_50%,#450a0a_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-bold text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                    <i className="fab fa-youtube mr-2 text-red-500"></i> YouTube
                </span>
             </a>
          )}
          
          {GeneralSettings.social.facebook && (
             <a href={GeneralSettings.social.facebook} target="_blank" className="group/btn relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#172554_0%,#3b82f6_50%,#172554_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-bold text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                    <i className="fab fa-facebook mr-2 text-blue-500"></i> Facebook
                </span>
             </a>
          )}
        </div>
      </section>
    </div>
  );
}
