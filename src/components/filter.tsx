import { useState } from "react";
import { format } from "date-fns";
import { CalendarDays, X, LayoutList, Grid2X2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type ViewMode = "rows" | "tiles";
type SortTab = "date" | "new";

interface FilterBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  activeTab: SortTab;
  onTabChange: (tab: SortTab) => void;
  onDateChange: (date: Date | undefined) => void;
}

export function FilterBar({
  viewMode,
  onViewModeChange,
  activeTab,
  onTabChange,
  onDateChange,
}: FilterBarProps) {
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date("2016-08-09")
  );

  function handleFromSelect(d: Date | undefined) {
    setFromDate(d);
    onDateChange(d);
    setFromOpen(false);
  }

  function handleToSelect(d: Date | undefined) {
    setToDate(d);
    setToOpen(false);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 justify-between border-b border-gray-100 pb-2">
      <div className="flex items-center gap-1">
        <button
          onClick={() => onTabChange("date")}
          data-testid="tab-date"
          className={`px-3 py-1.5 text-sm font-medium transition-colors relative ${
            activeTab === "date"
              ? "text-teal-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Date
          {activeTab === "date" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
          )}
        </button>
        <button
          onClick={() => onTabChange("new")}
          data-testid="tab-new"
          className={`px-3 py-1.5 text-sm font-medium transition-colors relative ${
            activeTab === "new"
              ? "text-teal-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          New
          {activeTab === "new" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
          )}
        </button>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1 flex-wrap">
          <DateInput
            placeholder="from"
            value={fromDate}
            open={fromOpen}
            onOpenChange={setFromOpen}
            onSelect={handleFromSelect}
            onClear={() => { setFromDate(undefined); onDateChange(undefined); }}
            testIdPrefix="from"
          />

          <DateInput
            placeholder="to"
            value={toDate}
            open={toOpen}
            onOpenChange={setToOpen}
            onSelect={handleToSelect}
            onClear={() => setToDate(undefined)}
            testIdPrefix="to"
          />
        </div>

        <div className="flex items-center border border-gray-200 rounded overflow-hidden bg-white ml-1">
          <button
            onClick={() => onViewModeChange("tiles")}
            data-testid="btn-view-tiles"
            className={`p-1.5 transition-colors ${
              viewMode === "tiles"
                ? "bg-teal-500 text-white"
                : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
            }`}
            aria-label="Tiles view"
          >
            <Grid2X2 size={15} />
          </button>
          <button
            onClick={() => onViewModeChange("rows")}
            data-testid="btn-view-rows"
            className={`p-1.5 transition-colors ${
              viewMode === "rows"
                ? "bg-teal-500 text-white"
                : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
            }`}
            aria-label="Rows view"
          >
            <LayoutList size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

interface DateInputProps {
  placeholder: string;
  value: Date | undefined;
  open: boolean;
  onOpenChange: (o: boolean) => void;
  onSelect: (d: Date | undefined) => void;
  onClear: () => void;
  testIdPrefix: string;
}

function DateInput({
  placeholder,
  value,
  open,
  onOpenChange,
  onSelect,
  onClear,
  testIdPrefix,
}: DateInputProps) {
  return (
    <div
      className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 bg-white text-xs text-gray-600 min-w-[108px]"
      data-testid={`date-input-${testIdPrefix}`}
    >
      <span className="flex-1 text-gray-400 select-none">
        {value ? format(value, "dd_MM_yyyy") : placeholder}
      </span>

      {value && (
        <button
          onClick={onClear}
          data-testid={`btn-clear-${testIdPrefix}`}
          className="text-gray-400 hover:text-red-400 transition-colors"
          aria-label={`Clear ${placeholder} date`}
        >
          <X size={11} />
        </button>
      )}

      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <button
            data-testid={`btn-calendar-${testIdPrefix}`}
            className="text-gray-400 hover:text-teal-500 transition-colors"
            aria-label={`Open ${placeholder} calendar`}
          >
            <CalendarDays size={13} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-gray-200 shadow-lg z-50" align="start">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={onSelect}
            className="p-3"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
