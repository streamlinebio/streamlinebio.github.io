"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/mainl.png"

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[70px] fixed w-full z-[99] transition-all duration-300 ease-in group border-b-[1px] border-b-[#0000]">
      <div className="bg-white flex justify-between items-center h-full w-full px-4">
        <Link
          className="bg-transparent ml-2 lg:h-full lg:flex lg:justify-center lg:items-center"
          aria-label="Home"
          href="/"
        >
          <div className="relative bg-transparent">
            <div>
            <Image src={Logo} alt="Logo" height={32}/>
            </div>
          </div>
        </Link>
        <nav className="bg-transparent hidden lg:self-end lg:block ">
          <div className="bg-transparent flex gap-x-[40px] mr-52 font-medium uppercase text-[11px] leading-[20px] tracking-[0.8px] h-fit items-center text-neoFrost transition-colors duration-300">
            <div className="bg-transparent flex gap-x-[50px]">
              <Link
                className="bg-transparent text-black font-bold block relative whitespace-nowrap transition-opacity duration-200 h-[37px] opacity-50 hover:opacity-100"
                href="/"
              >
                Home
              </Link>
              <Link
                className="bg-transparent block relative text-black whitespace-nowrap font-bold transition-opacity duration-200 h-[37px] opacity-50 hover:opacity-100"
                href="/about"
              >
                About
                {pathname === "/about" && (
                  <div
                    className="w-full bottom-[-1px] bg-black left-0 absolute mb-2 z-[1] h-[2px] bg-neoFrost transition-colors duration-300"
                    style={{ opacity: "1", transformOrigin: "50% 0px 0px" }}
                  ></div>
                )}
              </Link>
            </div>
          </div>
        </nav>
        <Link
          className="whitespace-nowrap font-medium uppercase text-[12px] tracking-[0.8px] leading-[20px] text-white self-end hidden h-[37px] hover:opacity-50 [transition:opacity_0.3s,color_0.3s] lg:block"
          href="/"
        ></Link>
         <button
          onClick={toggleMenu}
          className="w-[24px] flex justify-between gap-y-[5px] mr-6 flex-col z-[100] lg:hidden"
        >
          <span className="w-full h-[2px] bg-black block rounded-full transition-colors duration-300"></span>
          <span className="w-full h-[2px] bg-black block rounded-full transition-[background-color,transform]  duration-300"></span>
          <span className="w-full h-[2px] bg-black block rounded-full transition-[background-color,transform] duration-300"></span>
          <span className="w-full h-[2px] bg-black block rounded-full transition-colors duration-300"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[98] flex flex-col bg-[#fff] pt-[88px] w-full h-[100dvh] lg:hidden"
          style={{ transform: "translateX(0%) translateZ(0px)" }}
        >
          <div className="flex-grow overflow-y-auto">
            <nav className="flex flex-col px-[32px]">
              <Link
                href="/"
                className="bodyRegular border-b-[1px] py-[16px] text-neoGrey"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="bodyRegular border-b-[1px] py-[16px] text-neoGrey"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="px-[32px] py-[32px] bodyRegular text-neoGrey flex flex-col gap-y-[12px]">
            {/* <Link
              href="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy & Cookies
            </Link>
            <Link
              href="/terms-and-conditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Use
            </Link> */}
            <span className="opacity-60">StreamlineBio © 2024</span>
          </div>
        </div>
      )}
    </header>
  );
}
