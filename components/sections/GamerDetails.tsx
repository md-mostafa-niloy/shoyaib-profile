'use client';
import { useState } from 'react';

export default function GamerDetails() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ShoyaibYT");
    setIsCopied(true);
    
    // Reset back to original state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      
      {/* In-Game Name */}
      <div className="flex items-start">
        <i className="fas fa-user-tie text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3 w-full">
          <h3 className="text-sm font-medium text-slate-400">In-Game Name</h3>
          <div className="flex items-center gap-3 mt-1">
            <p className="font-semibold text-slate-200 text-[15px]">ShoyaibYT</p>
            
            <button 
              onClick={copyToClipboard}
              className={`
                flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold tracking-wide transition-all duration-300 transform active:scale-95
                ${isCopied 
                  ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]' 
                  : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_10px_rgba(37,99,235,0.4)]'}
              `}
              title="Click to copy ID"
            >
              {isCopied ? (
                <>
                  <i className="fas fa-check"></i> <span>COPIED</span>
                </>
              ) : (
                <>
                  <i className="fas fa-copy"></i> <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Started Streaming */}
      <div className="flex items-start">
        <i className="fas fa-calendar-alt text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-slate-400">Started Streaming</h3>
          <p className="font-semibold text-slate-200">January 2024</p>
        </div>
      </div>

      {/* Main Platform */}
      <div className="flex items-start">
        <i className="fas fa-desktop text-slate-400 w-5 text-center pt-1"></i>
        <div className="ml-3">
           <h3 className="text-sm font-medium text-slate-400">Main Platform</h3>
           <p className="font-semibold text-slate-200">PC & Mobile</p>
        </div>
      </div>

    </div>
  );
}
