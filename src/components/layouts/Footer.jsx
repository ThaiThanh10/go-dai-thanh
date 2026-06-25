import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-8 px-12 relative reveal">
      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <img
            alt="ATC Footer Logo"
            className="h-24 mb-6"
            src="https://daithanhfurniture.com/wp-content/uploads/2025/04/daithanh-yellow.svg"
          />
          <div className="flex gap-4 mt-8">
            <a
              className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-atcDark hover:text-white transition-all"
              href="#"
            >
              f
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-atcDark hover:text-white transition-all"
              href="#"
            >
              t
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-atcDark hover:text-white transition-all"
              href="#"
            >
              in
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-atcDark hover:text-white transition-all"
              href="#"
            >
              y
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-atcDark hover:text-white transition-all"
              href="#"
            >
              p
            </a>
          </div>
        </div>
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] tracking-widest uppercase text-atcMuted leading-loose">
          <div>
            <div className="flex items-start gap-4 mb-4">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <path
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <p>
                Head Office: 147 Nguyen Van Huong, An Khanh Ward, Ho Chi Minh City,
                Vietnam.
                <br />
                Factory: My Loi Hamlet, Long Kien Village, An Giang Province,
                Vietnam.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <p>(+84) 94 567 8910</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <p>(+84) 94 567 8910</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <p>info@atcfurniture.com.vn</p>
            </div>
          </div>
        </div>
        <button className="absolute right-12 bottom-24 border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-atcGold hover:text-white transition-all">
          ↑
        </button>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between text-[8px] uppercase tracking-widest text-atcMuted">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a className="hover:text-atcGold" href="#">
            Terms &amp; Conditions
          </a>
          <a className="hover:text-atcGold" href="#">
            Company News
          </a>
          <a className="hover:text-atcGold" href="#">
            Consent Preferences
          </a>
          <a className="hover:text-atcGold" href="#">
            Factory Gallery
          </a>
        </div>
        <div>© ATC FURNITURE. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>

  )
}

export default Footer