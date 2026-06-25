import React from 'react'

const Videos = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="section-title text-center mb-16 text-2xl reveal">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto overflow-hidden reveal-stagger">
        <div className="video-card relative group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <img
            alt="Showroom"
            className="w-full h-[400px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKklY-rfszENFZtZ0kCxWlnkTbnHi44XzOQ7nm9aheg0sXlX_qRspbRWzUPPuUzdlThLBbRtxfKPF19p-ARY8BUktHWP-XiMdZ31tlvhK-QhPkS5KN6WETkeWcCW_11GUdu8cU36qHmUwZ3AkCOW7QD3Q-3k-nl8s7SN8nIAiz7EcxyEWkrtoSS7z9fNtg7k3MlJo9pzEZbI8zvlfnccyCk05T4ImbPn1mRwFRvtcd58fv0Bo579WLOqce6wK3BHqud5APt63-yQ"
          />
          <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="video-card relative group cursor-pointer md:scale-105 z-10 shadow-2xl">
          <img
            alt="Our Factory"
            className="w-full h-[400px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_OGmYTodKH-aYOHNxMxbDjhJ5FgJyzuuRruVyYvpOd1IKbRBPirGyL_IXvkEVqywmktXI0a4A82xhGmKPfspN82ZEu8SOajrY74lHsa_tOQ1I6aD4qFTUTq0NCN1FyNopz5Gmr8Iw6LN8P4aRA-JsqBrZwFdMEmbbs4Df2sea4172E1LzgX7w9-slbDf1QScceOZsjB35jWGtdInYEXoEltDugGWjzVsVIRciPujHwifKIJPpMT76fEsIIzMc2oZeAW5lkNLc-A"
          />
          <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-20 h-20 border-2 border-white/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="uppercase tracking-[0.3em] font-semibold text-lg">
              Our Factory
            </span>
          </div>
        </div>
        <div className="video-card relative group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <img
            alt="Craftsmanship"
            className="w-full h-[400px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1hhkcNEFW0hLHSyDI0aDnofC3JuyZK3AblClH5AwZhxI7_H7BZV0g5bO5WsSLKpmSOjtF2a8lOquHqM6yrbBd3G-gQS5_0tElfoPG8kiRu6XWDAHMVwQL0R4q_7EksSd-20SmrOB3NXj8jCbymnlhwmGkGjHNRjTTzWvrLHITfm5MGoy66KdQlh2MtAEBFxWcHjvlPVTaiRIJXgNUHUVLxHpFWe2JdY4fYH4czJxTAkZZzCS3oSGhx6xuze3kzCE5OIoo3yPpng"
          />
          <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-12 reveal">
        <button className="p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
          ←
        </button>
        <button className="p-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
          →
        </button>
      </div>
    </section>
  )
}

export default Videos