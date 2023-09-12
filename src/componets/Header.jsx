function Header() {
  return (
    <header className="hidden sm:sticky sm:flex items-center justify-between px-10 lg:px-18 py-8 transition-all">
      <figure>
        <img src="./images/logo-bookmark.svg" alt="logo de Bookmark" />
      </figure>

      <nav>
        <ul className="flex items-center gap-2 lg:gap-8 transition-all">
          <a href="#" className="hover:text-SoftRed transition-colors">
            FEATURES
          </a>
          <a href="#" className="hover:text-SoftRed transition-colors">
            PRICING
          </a>
          <a href="#" className="hover:text-SoftRed transition-colors">
            CONTACT
          </a>
          <a
            href="#"
            className="bg-SoftRed px-8 py-2 rounded-lg border border-transparent text-white hover:bg-transparent hover:border hover:border-SoftRed hover:text-SoftRed transition-colors"
          >
            LOGIN
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
