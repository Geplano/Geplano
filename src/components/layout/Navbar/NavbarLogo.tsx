import Image from "next/image";

export function NavbarLogo() {
  return (
    <a href="#home" className="flex items-center">
      <Image
        src="/img/LogoBrancaGrande.png"
        alt="Geplano Logo"
        width={160}
        height={96}
        priority
        style={{ width: "auto", height: "60px" }}
        className="logo logo-white"
      />
      <Image
        src="/img/LogoPretaGrande.png"
        alt="Geplano Logo"
        width={160}
        height={96}
        priority
        style={{ width: "auto", height: "60px" }}
        className="logo logo-black"
      />
    </a>
  );
}
