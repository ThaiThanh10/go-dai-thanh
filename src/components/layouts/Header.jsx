const Header = () => {
  return <header className="relative h-screen min-h-[600px] overflow-hidden reveal">
    <div className="absolute inset-0 z-0">
      {/* <img alt="ATC Furniture Hero" class="w-full h-full object-cover" */}
      {/* src="https://daithanhfurniture.com/wp-content/uploads/2025/04/daithanh-yellow.svg" /> */}
      <iframe
        id="youtubeIframe"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Y8nxWWj855E?autoplay=1&mute=0"
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen=""
      />
    </div>
    <nav className="relative z-10 flex items-center justify-between px-12 py-8 text-white uppercase text-xs tracking-widest font-medium">
      <div className="flex gap-8">
        <a className="nav-link" href="#">
          Products
        </a>
        <a className="nav-link" href="#">
          Showroom
        </a>
        <a className="nav-link" href="#">
          Projects
        </a>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-6">
        <img
          alt="ATC Logo"
          className="h-16  "
          src="https://daithanhfurniture.com/wp-content/uploads/2025/04/daithanh-yellow.svg"
        />
      </div>
      <div className="flex gap-8 items-center">
        <a className="nav-link" href="#">
          Our Story
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
        <div className="flex gap-4 ml-4">
          <svg
            className="w-4 h-4 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span>EN</span>
        </div>
      </div>
    </nav>
  </header>
    ;
};

export default Header;
