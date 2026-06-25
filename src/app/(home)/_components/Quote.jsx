import React from 'react'

const Quote = () => {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto reveal">
      <div className="mb-6">
        <svg
          className="w-10 h-10 mx-auto text-atcGold opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11C3.017 11.5523 2.56928 12 2.017 12H1.017V5H11.017V15C11.017 18.3137 8.3307 21 5.017 21H3.017Z"></path>
        </svg>
      </div>
      <p className="font-serif italic text-2xl text-atcMuted leading-relaxed mb-4">
        Perfection is no small thing, but it is made up of small things.
      </p>
      <cite className="not-italic text-sm tracking-widest text-atcMuted uppercase">
        - Michelangelo
      </cite>
    </section>

  )
}

export default Quote