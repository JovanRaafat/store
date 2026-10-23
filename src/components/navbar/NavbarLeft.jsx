
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export default function NavbarLeft({
  darkMode,
  toggleTheme,
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Button
        variant="ghost"
        isIconOnly
        aria-label="Toggle theme"
        aria-pressed={darkMode}
        onPress={toggleTheme}
        className="relative h-9 w-16 min-w-16 overflow-hidden rounded-full border border-(--border-color) bg-(--bg-secondary) p-1"
      >
        <span
          className={`absolute left-1 flex h-7 w-7 items-center justify-center rounded-full bg-(--bg-surface) text-(--primary) shadow transition-transform duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"
            }`}
        >
          {darkMode ? <Moon  className="size-4" /> : <Sun className="size-4" />}
        </span>
      </Button>
    </div>
  );
}
