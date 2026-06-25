import React from 'react'

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="section-title text-center mb-16 text-2xl reveal">
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
            <h3 className="uppercase tracking-[0.2em] font-medium text-atcMuted">
              Mia Resort Nha Trang
            </h3>
            <a
              className="text-[10px] uppercase tracking-widest border-l border-gray-300 pl-4 flex items-center gap-2 group-hover:text-atcGold"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOiq_tDXvSqplgMrrfWUO3Dz4M2kQ89gvrHwyX-1uy47W0VEu-x4OPU9C3D31xF5roIX2kYgE51SyHkgpUW3rSuHzTFwfOc-ecQ-yQHtwtw7vEEFx_VNOKeBxC8u3Drw9M3qjp_O2dWJT1YBMO5AROcSKWsn6Uv2W_JgMNYhsF2vKxyK2j1Y1MgomZbE4X5xL_lQR-L0nd2rAEH1rKQdDqA6GL9h4TDkNHHCgvuZxuPEvXRuTjQT1fWq5Mes8H6mGVd4HEfxACFA"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="uppercase tracking-[0.2em] font-medium text-atcMuted">
              Alma Oasis
            </h3>
            <a
              className="text-[10px] uppercase tracking-widest border-l border-gray-300 pl-4 flex items-center gap-2 group-hover:text-atcGold"
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