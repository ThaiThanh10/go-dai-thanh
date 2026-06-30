import React from 'react'

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="section-title text-center mb-16 text-4xl reveal">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto reveal-stagger">
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-6 h-[400px]">
            <img
              alt="Mia Resort"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf-2hgQ666JrtcziyWpUric0ifML13vK0oKFbth52EI9yGJhplUE8jTrz94jG_QYz3-o0h3WOKXEpxaEIsT9_g9Zq6uInY86Rxs5JKNJHXNOJjOJINMTNJlll5A7uZR-26lqFd4F_kUBsbjLTaW8m3_0-tUUN4G7ST7oS0qYNAR5oM1a7ng1RojTkv7ce1HSx6Gv6E8c0Yp1QgKvhDsNlxoYkj5ixrC7MkO18v6O4meh6JebKW-8Rjl7szzziy_4XvCQOy-FOE-A"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="uppercase text-xl tracking-[0.2em] font-medium text-atcMuted">
              Mia Resort Nha Trang
            </h3>
            <a
              className="text-xs uppercase tracking-widest border-l border-gray-300 pl-4 flex items-center gap-2 group-hover:text-atcGold"
              href="#"
            >
              Discover <span>→</span>
            </a>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-6 h-[400px]">
            <img
              alt="Alma Oasis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/01.png"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="uppercase text-xl tracking-[0.2em] font-medium text-atcMuted">
              Alma Oasis
            </h3>
            <a
              className="text-xs uppercase tracking-widest border-l border-gray-300 pl-4 flex items-center gap-2 group-hover:text-atcGold"
              href="#"
            >
              Discover <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects