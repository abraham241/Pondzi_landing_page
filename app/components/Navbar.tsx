"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "@/public/log.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "A propos", href: "#propos" },
    { label: "Fonctionnalités", href: "#foctionalité" },
    { label: "Nos offres", href: "#offres" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 px-6 md:px-20 bg-white shadow z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="h-16 w-24 flex items-center">
            <Link href="#home">
              <Image src={log} alt="Le logo" height={50} />
            </Link>
          </div>

          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-semibold hover:text-bg-sky-950"
                scroll={false}
              >
                {item.label}
              </Link>
            ))}

            {/* Boutons pour desktop */}
            <div className="flex space-x-4">
              <Link href="https://gestionstock241.vercel.app/">
                <Button variant="outline" className="rounded-full">
                  Se connecter
                </Button>
              </Link>
              <Link href="formulaire">
                <Button className="bg-sky-950 text-white rounded-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>

          {/* Menu mobile (menu burger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block font-semibold text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button className="font-semibold focus:outline-none text-gray-700">
                Modules
              </button>
            </div>

            {/* Boutons dans le menu mobile */}
            <div className="space-y-2">
              <Link href="connexion">
                <Button variant="outline" className="w-full">
                  Se connecter
                </Button>
              </Link>
              <Link href="formulaire">
                <Button className="bg-sky-950 text-white w-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
