import { useState, useRef } from "react";
import { Calendar, X } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("2016-08-09"); 

  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full overflow-hidden shadow-xs font-sans">
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start px-6 pt-8 pb-6 sm:px-12 gap-6 max-w-7xl mx-auto w-full max-w-[960px] mx-auto px-4 sm:px-6 relative z-10 mt-4 flex flex-col gap-20">
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col gap-3 text-center md:text-left w-full mt-4 md:mt-2">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              monblanproject
            </h1>
            <span
              className="text-[11px] font-bold text-blue-500 border border-blue-200 rounded px-2 py-0.5 bg-blue-50 whitespace-nowrap"
              data-testid="profile-start-date"
            >
              Start on 17-02-2016
            </span>
          </div>

          <div
            className="flex items-center gap-5 text-xs sm:text-sm text-slate-600 justify-center md:justify-start"
            data-testid="profile-stats"
          >
            <span className="space-x-1">
              <strong className="text-slate-900 font-extrabold">870</strong>
              <span className="text-slate-500 font-medium">posts</span>
            </span>
            <span className="space-x-1">
              <strong className="text-slate-900 font-extrabold">11,787</strong>
              <span className="text-slate-500 font-medium">followers</span>
            </span>
            <span className="space-x-1">
              <strong className="text-slate-900 font-extrabold">112</strong>
              <span className="text-slate-500 font-medium">following</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start pt-3 text-xs text-slate-800 font-bold">
            <span className="text-slate-600 font-semibold pr-1">Date</span>
            
            <div 
              onClick={() => fromInputRef.current?.showPicker()} 
              className="relative flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-2xs gap-2 min-w-[130px] h-8 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <input
                ref={fromInputRef}
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                placeholder="from"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
              />
              <span className={`w-full font-medium ${dateFrom ? 'text-slate-800' : 'text-gray-400'}`}>
                {dateFrom ? new Date(dateFrom).toLocaleDateString('uk-UA').replace(/\./g, '_') : 'from'}
              </span>
              {dateFrom && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setDateFrom(""); }} 
                  className="text-gray-400 hover:text-gray-600 relative z-20"
                >
                  <X size={12} />
                </button>
              )}
              <span className="text-gray-300 font-light">|</span>
              <Calendar size={14} className="text-gray-400 flex-shrink-0" />
            </div>

            <div 
              onClick={() => toInputRef.current?.showPicker()} 
              className="relative flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-2xs gap-2 min-w-[130px] h-8 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <input
                ref={toInputRef}
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
              />
              <span className="w-full font-medium text-slate-800">
                {dateTo ? new Date(dateTo).toLocaleDateString('uk-UA').replace(/\./g, '_') : 'to'}
              </span>
              {dateTo && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setDateTo(""); }} 
                  className="text-gray-400 hover:text-gray-600 relative z-20"
                >
                  <X size={12} />
                </button>
              )}
              <span className="text-gray-300 font-light">|</span>
              <Calendar size={14} className="text-gray-400 flex-shrink-0" />
            </div>

          </div>

        </div> 
      </div>
    </div>
  );
}
