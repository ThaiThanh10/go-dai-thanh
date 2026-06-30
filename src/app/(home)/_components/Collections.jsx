import React from 'react'

const Collections = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <h2 className="section-title text-center mb-16 text-4xl reveal">
        Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto reveal-stagger">
        <div data-purpose="product-card">
          <div className="overflow-hidden mb-6 h-[300px]">
            <img
              alt="Sofa Sets"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7WKBN4xfu5YjfwMUXQ8e5o8ROAVdx3a6LmR1M6bnzQuVY-Z3vy87QO5dK3VcatPchL5ZrYRWljpvTguz-xnWsDCkQlofZIxDIfKf0bjCt61zKOCzrQ_F9W0bTgp2DpnmRr-koJ0ASmSMIgNSJpvfbTxZwo5yfoIDnwWCpyLW5wptZzL0JZp3C9kqCrrYZXiQy_0AQzo2xKcCWw2X7Qs63qbpHfU3TF4DLuSVEG5mJDQmf3TYyIcNawtrUDn57SonzHAuEeR4Sfg"
            />
          </div>
          <h3 className="text-atcGold font-semibold uppercase tracking-widest text-[22px] mb-4">
            Sofa Sets
          </h3>
          <p className="text-lg text-atcMuted leading-relaxed mb-4 line-clamp-2">
            Outdoor wicker sofa sets lead 2025 trends with HDPE durability,
            UV/weather resistance &amp; refined style – unlike natural rattan...
          </p>
          <a
            className="text-sm uppercase tracking-widest border-l border-gray-300 pl-4 hover:text-atcGold transition-colors flex items-center gap-2"
            href="#"
          >
            View More <span>→</span>
          </a>
        </div>
        <div data-purpose="product-card">
          <div className="overflow-hidden mb-6 h-[300px]">
            <img
              alt="Dining Sets"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85A06WWDZAt8kfPDfqf8knGewhNWQbRlshqjoKJqJMTVlzxgHlS-yUyqLmMNWzMqYe3myDfSaYNXReR-PloyNDSd8YA1QCZ145lTnGVpYTueH24VuSWGB3RzxasFjQ0YRRywtcvwmsQmw8vNdC0aRz5tHSq-0-GDyqFII3okOV47NEYLUxFVvSFzMORH4YcsdbxOvRanFdurwcONi8odQOQ1fdjb1FtTzEvMP8JMu-lS3wLfiU71ZoL3pd5y9IzeP7-ltZWmw3w"
            />
          </div>
          <h3 className="text-atcGold font-semibold uppercase tracking-widest text-[22px] mb-4">
            Dining Sets
          </h3>
          <p className="text-lg text-atcMuted leading-relaxed mb-4 line-clamp-2">
            Outdoor wicker dining chairs represent a popular architectural style,
            admired for the elegance and practicality they bring to...
          </p>
          <a
            className="text-sm uppercase tracking-widest border-l border-gray-300 pl-4 hover:text-atcGold transition-colors flex items-center gap-2"
            href="#"
          >
            View More <span>→</span>
          </a>
        </div>
        <div data-purpose="product-card">
          <div className="overflow-hidden mb-6 h-[300px]">
            <img
              alt="Teak Sofas"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7g7MiUz1WjA0bfYtjysu3ZgpXJWbZb4xMHQjjmzUScK52j7oNm9Zy3DDHZnMz7zXMJxRlKLw-j41vjrS5tJL3y8Ilmr0ki5kiqPHaT4NnJnFUOtXqs9-Kuwpd-SBHhpynX91JRqqmIw3LO3HlxgTUeLHBGmRLqoe211juEp5Cw9txvFBWB3rhG6ylK7UeNyrOw6qnRumts34dxfRZDBTUd_0Xh1gxcpBWERLLnAngotD2J3Vv8b7c-NSOTLckHDSN351kikAYBA"
            />
          </div>
          <h3 className="text-atcGold font-semibold uppercase tracking-widest text-[22px] mb-4">
            Teak Sofas
          </h3>
          <p className="text-lg text-atcMuted leading-relaxed mb-4 line-clamp-2">
            Crafted from Grade A Teak wood, these sofas offer unrivaled comfort and
            style for any luxurious outdoor living space...
          </p>
          <a
            className="text-sm uppercase tracking-widest border-l border-gray-300 pl-4 hover:text-atcGold transition-colors flex items-center gap-2"
            href="#"
          >
            View More <span>→</span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Collections