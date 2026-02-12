import { GeneralSettings } from '@/system/GeneralSettings';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-8 w-full max-w-4xl mx-auto">
      {/* Decorative Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent mb-6"></div>

      <div className="relative group overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-slate-300/20 rounded-2xl p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        
        {/* Animated RGB Border Edge */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-blue-400 transition-all duration-1000"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Icons Section */}
          <div className="flex items-center space-x-5">
            {[
              { id: 'youtube', icon: 'fab fa-youtube', link: GeneralSettings.social.youtube },
              { id: 'instagram', icon: 'fab fa-instagram', link: GeneralSettings.social.instagram },
              { id: 'twitter', icon: 'fab fa-twitter', link: GeneralSettings.social.twitter },
              { id: 'twitch', icon: 'fab fa-twitch', link: GeneralSettings.social.twitch },
              { id: 'discord', icon: 'fab fa-discord', link: GeneralSettings.social.discord }
            ].map((social) => (
              social.link && social.link !== "#" && (
                <a 
                  key={social.id}
                  href={social.link} 
                  target="_blank" 
                  className="group/icon relative p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-slate-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <i className={`${social.icon} text-lg`}></i>
                  <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/0 via-white/10 to-purple-500/0 opacity-0 group-hover/icon:opacity-100 transition-opacity"></span>
                </a>
              )
            ))}
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right space-y-1">
            <div className="text-sm font-medium tracking-wide">
              <span className="text-slate-500 uppercase text-[11px] font-bold block mb-1">Authenticated Gaming Profile</span>
              <p className="text-slate-300">
                &copy; {GeneralSettings.footer.copyrightStart} - {currentYear} 
                <a href="#" className="ml-1 font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 hover:to-white transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {GeneralSettings.profile.name}
                </a>
              </p>
            </div>

            <div className="text-[12px] text-slate-500 font-semibold tracking-tighter">
              DESIGNED BY :
              <a 
                href="https://visernic.com" 
                target="_blank" 
                className="ml-1 text-slate-400 hover:text-blue-400 transition-colors duration-300 border-b border-dotted border-slate-600 hover:border-blue-400"
              >
                Visernic Limited
              </a>
            </div>
          </div>

        </div>

        {/* Reflection Effect */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
}
