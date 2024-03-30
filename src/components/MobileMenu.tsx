import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      <div className="flex size-6 items-center justify-center rounded-full px-3.5 py-2.5 md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FiX className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
      </div>

      <nav className={`${isMenuOpen ? "md:hidden" : "invisible"}`}>
        <div className=" absolute inset-x-0 top-24 z-10 mx-auto mt-10 flex h-svh w-full animate-fade-down flex-col items-center justify-start gap-y-10 bg-zinc-800 animate-ease-out">
          <div className="mt-10 flex flex-col gap-y-20">
            {" "}
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href=""
              className="flex items-center justify-center rounded border px-10 py-4 text-2xl"
            >
              Blog
            </a>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href=""
              className="flex items-center justify-center rounded border px-10 py-4 text-2xl"
            >
              Me
            </a>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href=""
              className="flex items-center justify-center rounded border px-10 py-4 text-2xl"
            >
              Projects
            </a>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href=""
              className="flex items-center justify-center rounded border px-10 py-4 text-2xl"
            >
              Stack
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
