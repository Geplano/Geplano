import { NAV_LINKS } from "./navbar.types";

interface NavbarDesktopMenuProps {
  activeSection: string;
}

export function NavbarDesktopMenu({ activeSection }: NavbarDesktopMenuProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="ml-10 flex items-center space-x-4">
      {NAV_LINKS.map((link) => {
        const isActive = !link.external && link.href === `#${activeSection}`;

        console.log(
          `Link: ${link.href}, Active Section: #${activeSection}, IsActive: ${isActive}`,
        ); // Debug

        return (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive ? "active" : ""
            }`}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
