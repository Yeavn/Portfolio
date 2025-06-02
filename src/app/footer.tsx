import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright-Bereich */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Tim Stoepel. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-1">Erstellt mit Next.js & Tailwind CSS</p>
        </div>

        {/* Navigationslinks */}
        <nav className="flex space-x-6">
          <Link href="/impressum" className="hover:text-white transition-colors duration-200">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors duration-200">
            Datenschutz
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-200">
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;