
import { useState } from "react";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRight from "./navbar/NavbarRight";
import useTheme from "./hooks/useTheme";

export default function Navbar({ itemsCart }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-q  (--border-color) bg-(--bg-surface) text-(--text-primary) shadow-sm transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-2 py-3 sm:px-2 lg:px-8">
        <NavbarLeft
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        <NavbarRight itemsCart={itemsCart} />
      </div>
    </nav>
  );
}
