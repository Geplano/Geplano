import { NAV_LINKS } from "./navbar.types";

interface NavbarMobileMenuProps {
  open: boolean;
  onLinkClick: () => void;
  activeSection: string;
}

export function NavbarMobileMenu({
  open,
  onLinkClick,
  activeSection,
}: NavbarMobileMenuProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      return; // Let external links work normally
    }

    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close menu after clicking internal link
    onLinkClick();
  };

  return (
    <div id="mobile-menu" className={`lg:hidden ${open ? "" : "hidden"}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white text-gray-800 shadow-lg">
        {NAV_LINKS.map((link) => {
          const isActive = !link.external && link.href === `#${activeSection}`;

          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`flex items-center p-3 text-base font-medium rounded-md hover:bg-gray-100 hover:text-geplano-gold border-b border-gray-200 transition-colors ${
                isActive ? "text-geplano-gold font-bold bg-gray-50" : ""
              }`}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
