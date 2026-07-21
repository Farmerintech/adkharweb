import { Home, Moon, Sun } from "lucide-react";

export const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Morning Adkhar",
      href: "/morning",
      icon: Sun,
    },
    {
      name: "Evening Adkhar",
      href: "/evening",
      icon: Moon,
    },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#4A154B] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <p className="text-2xl font-bold tracking-wide  tracking-[0.3em] uppercase text-white">
            Adkhar
          </p>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:opacity-80 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#4A154B] border-t border-white/10">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center text-white gap-1 hover:opacity-80 transition"
              >
                <Icon size={22} />
                <span className="text-xs font-medium">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};