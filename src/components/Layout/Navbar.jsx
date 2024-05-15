import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navStyle, setNavStyle] = useState("text-green-700");
  const router = useRouter();
  const { pathname } = router;

  const handleScroll = () => {
    if (window.scrollY >= 100 && window.scrollY < 500) {
      setNavStyle(" transform -translate-y-16 ");
    } else if (window.scrollY > 500) {
      setNavStyle("bg-green-700 text-white backdrop-blur-sm");
    } else if (window.scrollY < 100) {
      setNavStyle("text-green-700");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` fixed top-0 w-full transition duration-500 ease-in-out ${navStyle}`}
    >
      <div className=" font-bold py-4 flex justify-between w-4/5 mx-auto">
        <Image src="/images/logo.svg" width={180} height={40} alt="Logo"/>
        <div className="flex gap-4 text-lg">
          <Link href="/">
            <button
              className={` ${
                pathname === "/"
                  ? "text-customOrange underline decoration-4 underline-offset-8  decoration-500"
                  : " text-gray-700"
              } `}
            >
              Home
            </button>
          </Link>
          <Link href="/essen">
            <button
              className={` ${
                pathname === "/essen"
                  ? "text-customOrange underline decoration-4 underline-offset-8 decoration-500 "
                  : " text-gray-700"
              }`}
            >
              Foodlist
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
