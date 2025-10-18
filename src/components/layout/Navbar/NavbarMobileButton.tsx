interface NavbarMobileButtonProps {
  onClick: () => void;
}

export function NavbarMobileButton({ onClick }: NavbarMobileButtonProps) {
  return (
    <button
      id="mobile-menu-button"
      className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
}
