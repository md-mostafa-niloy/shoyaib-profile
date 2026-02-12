import ProfileHeader from '@/components/layout/ProfileHeader';
import GamerDetails from '@/components/sections/GamerDetails';
import QrCodeSection from '@/components/sections/QrCodeSection';
import Footer from '@/components/layout/Footer';
import PageBackground from '@/components/ui/PageBackground';
import { GeneralSettings } from '@/system/GeneralSettings';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;
}

const SectionCard = ({ title, children, className = "", icon }: SectionCardProps) => (
  <div className={`group relative h-full bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-500/30 p-1 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:border-slate-400/50 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-400/5 via-transparent to-slate-400/5 rounded-3xl pointer-events-none"></div>
    
    <div className="absolute -top-[1px] -left-[1px] w-20 h-20 bg-gradient-to-br from-slate-400/30 to-transparent rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute -bottom-[1px] -right-[1px] w-20 h-20 bg-gradient-to-tl from-slate-400/30 to-transparent rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative h-full bg-slate-950/50 rounded-[22px] p-6 sm:p-8 overflow-hidden flex flex-col">
       <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
          {icon && <i className={`${icon} text-slate-300 text-lg drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}></i>}
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 bg-[length:200%_auto] animate-gradient-x drop-shadow-sm">
            {title}
          </h2>
       </div>
       <div className="relative z-10 flex-grow">
         {children}
       </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <PageBackground />
      
      <div className="w-full max-w-[1100px] mx-auto px-4 py-8 sm:py-12">
        
        <ProfileHeader />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            
            <div className="flex-1">
                <SectionCard title={GeneralSettings.home.about.title} icon="fas fa-user-astronaut">
                    <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-light tracking-wide text-justify">
                    {GeneralSettings.home.about.description}
                    </p>
                </SectionCard>
            </div>

            <div className="flex-1">
                <SectionCard title="My Content" icon="fas fa-layer-group">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {GeneralSettings.home.contentServices.map((service, index) => (
                            <div key={index} className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-300">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border border-slate-600 shadow-inner">
                                    <i className={`${service.icon} text-slate-200 text-sm`}></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-bold text-slate-100 text-base mb-1">{service.title}</h3>
                                    <p className="text-auto text-slate-400 leading-snug">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>

            <div className="flex-1">
                <SectionCard title="Gameplay Highlights" icon="fas fa-gamepad">
                    <div className="space-y-4">
                        {GeneralSettings.home.highlights.map((highlight, index) => (
                            <div key={index} className="group/item p-4 rounded-xl bg-gradient-to-r from-slate-900/50 to-transparent border-l-4 border-slate-500 hover:border-white transition-all duration-300 hover:bg-slate-800/50">
                                <h3 className="font-bold text-slate-200 text-lg group-hover/item:text-white transition-colors">{highlight.title}</h3>
                                <p className="text-sm sm:text-base text-slate-400 mt-1">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>

            <div className="flex-1">
                <SectionCard title="From My Viewers" icon="fas fa-comments">
                    <div className="grid grid-cols-1 gap-5">
                        {GeneralSettings.home.testimonials.map((testimonial, index) => (
                            <div key={index} className="relative bg-slate-800/20 p-6 rounded-2xl border border-slate-700/30">
                                <i className="fas fa-quote-left absolute top-4 left-4 text-slate-700/50 text-4xl"></i>
                                <blockquote className="relative z-10 text-base text-slate-300 italic leading-relaxed pl-6">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center justify-end mt-4 gap-2">
                                    <div className="h-[1px] w-8 bg-slate-500/50"></div>
                                    <p className="font-bold text-slate-200 uppercase text-sm tracking-wider">{testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>

          </div>
          
          <div className="lg:col-span-1 space-y-8 flex flex-col h-full">
            
            <SectionCard title="Contact Me" icon="fas fa-address-card">
                <div className="space-y-5">
                   <a href={`mailto:${GeneralSettings.profile.email}`} className="flex items-center p-3 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-slate-500 transition-all group/link">
                      <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover/link:text-blue-300 group-hover/link:scale-110 transition-all">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <span className="ml-3 font-medium text-slate-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis group-hover/link:text-white transition-colors">{GeneralSettings.profile.email}</span>
                   </a>
                   <div className="flex items-center p-3 rounded-xl bg-slate-800/40 border border-slate-700">
                      <div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center text-emerald-400">
                        <i className="fas fa-map-location-dot"></i>
                      </div>
                      <span className="ml-3 font-medium text-slate-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{GeneralSettings.profile.address}</span>
                   </div>
                </div>
            </SectionCard>

            <SectionCard title="Gamer Details" icon="fas fa-fingerprint">
               <GamerDetails />
            </SectionCard>

            <SectionCard title="My Skills" icon="fas fa-bolt">
               <div className="grid grid-cols-1 gap-3">
                  {GeneralSettings.home.skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/30 transition-colors group/skill">
                          <span className="font-medium text-slate-300 group-hover/skill:text-white transition-colors">{skill}</span>
                          <i className="fas fa-check-circle text-slate-500 group-hover/skill:text-green-400 transition-colors"></i>
                      </div>
                  ))}
               </div>
            </SectionCard>

            <SectionCard 
            title={<span className="text-lg">Official Website</span>} 
            icon="fas fa-globe">
               <div className="flex justify-center py-2">
                  <QrCodeSection />
               </div>
            </SectionCard>

          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}
