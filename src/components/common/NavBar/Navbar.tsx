"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos livianos
// import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-dark border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo + Título */}
                    <div className="flex items-center gap-3">
                        {/* Reemplazá esta imagen si querés */}
                        {/* <Image
                            src="/logo.svg"
                            alt="La Comarca"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        /> */}
                        <span className="text-xl font-semibold">La Comarca</span>
                    </div>

                    {/* Navegación en desktop */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-blue-600 transition">
                            Inicio
                        </Link>
                        <Link href="/mapa" className="hover:text-blue-600 transition">
                            Mapa
                        </Link>
                        <Link href="/contacto" className="hover:text-blue-600 transition">
                            Contacto
                        </Link>
                    </div>

                    {/* Botón hamburguesa en mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú desplegable móvil */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link href="/" className="block" onClick={toggleMenu}>
                        Inicio
                    </Link>
                    <Link href="/mapa" className="block" onClick={toggleMenu}>
                        Mapa
                    </Link>
                    <Link href="/contacto" className="block" onClick={toggleMenu}>
                        Contacto
                    </Link>
                </div>
            )}
        </nav>
    );
}
