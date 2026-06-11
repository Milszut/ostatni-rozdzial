import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { id: "main", label: "Główne Przesłanie" },
  { id: "register", label: "Rejestracja" },
  { id: "speakers", label: "Mówcy" },
  { id: "lectures", label: "Wykłady" },
  { id: "contact", label: "Kontakt" },
];

const REGISTER_URL = "https://forms.gle/uWBXJun74Z4KgYiC6";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg">
        <div className="h-20 w-full grid grid-cols-3 items-center">
          <div className="flex items-center pl-2 md:pl-4 xl:pl-6">
            <button onClick={() => scrollToSection("home")}>
              <img src="/images/dynamis.webp" alt="Dynamis" className="h-18 w-auto cursor-pointer"/>
            </button>
          </div>

          <div className="flex justify-center">
            <nav className="hidden xl:flex gap-10 text-xl font-playpen text-white">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="whitespace-nowrap hover:text-orange-600 hover:underline underline-offset-8 cursor-pointer transition">
                  {item.label}
                </button>
              ))}
            </nav>

            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="xl:hidden px-5 py-2 rounded-full font-playpen text-white border-2 border-white text-md font-medium hover:bg-white hover:text-black transition whitespace-nowrap">
              Zarejestruj się
            </a>
          </div>

          <div className="flex items-center justify-end pr-4 xl:pr-6">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hidden xl:inline-flex px-5 py-2 rounded-full font-playpen text-white border-2 border-white text-md font-medium hover:bg-white hover:text-black transition whitespace-nowrap">
              Zarejestruj się
            </a>

            <button className="xl:hidden ml-3 text-white" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? (
                <FiX className="w-8 h-8 cursor-pointer" />
              ) : (
                <FiMenu className="w-8 h-8 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed left-0 right-0 bottom-0 top-20 z-40 bg-black/80 backdrop-blur-lg text-white xl:hidden">
          <nav className="flex flex-col p-6 gap-6 text-xl">
            {menuItems.map((item) => (
              <button key={item.id} onClick={() => {scrollToSection(item.id); setIsOpen(false);}} className="whitespace-nowrap hover:text-orange-600 cursor-pointer hover:underline font-playpen underline-offset-8 transition">
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}