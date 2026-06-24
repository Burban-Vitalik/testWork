import { LayoutGrid, List } from "lucide-react";

type ViewMode = "rows" | "tiles";

interface PanelProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export function Panel({ viewMode, setViewMode }: PanelProps) {
  const buttonClass = (mode: ViewMode) =>
    `p-1.5 rounded-md transition-all cursor-pointer ${
      viewMode === mode
        ? "bg-white text-[#1a7a66] shadow-sm"
        : "text-slate-400 hover:text-slate-600"
    }`;

  return (
    <div className="flex justify-end items-center pb-3 mb-4">
      <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-100">
        <button 
          onClick={() => setViewMode("tiles")} 
          className={buttonClass("tiles")}
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
        <button 
          onClick={() => setViewMode("rows")} 
          className={buttonClass("rows")}
        >
          <List className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}