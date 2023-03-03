import Image from "next/image";
import Link from "next/link";

import Logo from "../public/Logo.svg";

function Header() {
  return (
    <>
      <header className="container h-[72px] flex justify-between items-center ">
        <Link className="text-lg font-bold" href={"/"}>
          <Image src={Logo} alt="Logo" />
        </Link>
        <Link href={"/"}>About </Link>
      </header>
    </>
  );
}

export default Header;
