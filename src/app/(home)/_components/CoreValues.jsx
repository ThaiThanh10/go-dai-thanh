import React from 'react'

const CoreValues = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <h2 className="section-title text-center mb-16 text-4xl reveal">
        Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-full reveal-stagger">
        {/* Integrity */}
        <div className="bg-atcGray p-12 text-center border-r border-white flex flex-col items-center">
          <div className="w-16 h-16 mb-8 text-atcMuted">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h4 className="uppercase tracking-widest font-semibold mb-6 text-lg">
            Integrity
          </h4>
          <p className="text-xs text-atcMuted leading-loose uppercase">
            Integrity shapes everything we do. We're a trusted Vietnam furniture
            supplier and outdoor furniture manufacturer specializing in resort
            furniture and hotel furniture, known for honest, transparent dealings
            &amp; ensuring seamless international shipments on time.
          </p>
        </div>
        {/* Ace */}
        <div className="bg-atcGray p-12 text-center border-r border-white flex flex-col items-center">
          <div className="w-16 h-16 mb-8 text-atcMuted">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h4 className="uppercase tracking-widest font-semibold mb-6 text-lg">
            Ace
          </h4>
          <p className="text-xs text-atcMuted leading-loose uppercase">
            We deliver excellence in both product and service. Our reputation as a
            premium garden furniture manufacturer and hotel furniture supplier
            ensures our outdoor patio collections provide lasting solutions for
            homes, restaurants, and resorts globally.
          </p>
        </div>
        {/* Trust */}
        <div className="bg-atcGray p-12 text-center border-r border-white flex flex-col items-center">
          <div className="w-16 h-16 mb-8 text-atcMuted">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h4 className="uppercase tracking-widest font-semibold mb-6 text-lg">
            Trust
          </h4>
          <p className="text-xs text-atcMuted leading-loose uppercase">
            Trust is built through reliability and open communication. As a patio
            furniture wholesaler, resort furniture provider, and hotel furniture
            exporter, we ensure our clients receive top-quality products and
            continuous support, strengthening long-term relationships.
          </p>
        </div>
        {/* Care */}
        <div className="bg-atcGray p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-8 text-atcMuted">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <h4 className="uppercase tracking-widest font-semibold mb-6 text-lg">
            Care
          </h4>
          <p className="text-xs text-atcMuted leading-loose uppercase">
            Care reflects our commitment to sustainability, customer satisfaction,
            and ethical practices. We are proud to be an outdoor furniture company
            that offers customizable, eco-friendly designs ideal for hotel furniture
            projects and resort outdoor spaces, tailored to meet the specific needs
            of each client.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CoreValues