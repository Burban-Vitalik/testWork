import { useState } from "react";
import { GalleryPage } from "./components/gallery/GalleryPage";
import { Panel } from "./components/panel";
import { Header } from "./components/header";

type ViewMode = "rows" | "tiles";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("rows");

  return (
    <div className="min-h-screen bg-[#f4f7f6] relative overflow-x-hidden pb-12 font-sans selection:bg-teal-500 selection:text-white">      
      <div className="absolute top-0 left-0 w-[689px] h-[482px] pointer-events-none z-0 hidden md:block">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 689 482" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 0H689C620 180 540 280 460 330C360 390 220 280 150 340C70 410 40 482 0 482V0Z" 
            fill="url(#figmaMainWaveGrad)" 
          />
          <defs>
            <linearGradient id="figmaMainWaveGrad" x1="0" y1="0" x2="689" y2="482" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#40AF79" />
              <stop offset="100%" stopColor="#124757" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[140px] md:hidden bg-gradient-to-r from-[#40AF79] to-[#124757] z-0 pointer-events-none" />

      <div className="absolute right-0 bottom-0 w-[315px] h-[368px] pointer-events-none z-0 hidden xl:block">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 315 368" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M315 0C235 20 140 60 75 140C10 220 5 310 0 368H315V0Z" 
            fill="url(#figmaRightVectorGrad)" 
          />
          <defs>
            <linearGradient id="figmaRightVectorGrad" x1="315" y1="0" x2="0" y2="368" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#40AF79" />
              <stop offset="100%" stopColor="#124757" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <header className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)] relative z-10">
        <div className="w-full max-w-[960px] mx-auto px-4 sm:px-6">
          <Header />
        </div>
      </header>

      <div className="w-full max-w-[960px] mx-auto px-4 sm:px-6 relative z-10 mt-6 flex flex-col gap-4">
        <Panel viewMode={viewMode} setViewMode={setViewMode} />
        <GalleryPage viewMode={viewMode} />
      </div>
    </div>
  );
}