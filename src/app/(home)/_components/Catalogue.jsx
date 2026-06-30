import React from 'react'

const Catalogue = () => {
  return (
    <section className="py-24 bg-white px-6 reveal">
      <h2 className="section-title text-center mb-16 text-4xl">Catalogue 2026</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 flex justify-end">
          <div className="relative shadow-2xl p-2 bg-white rounded-sm">
            <img
              alt="Catalogue Cover"
              className="w-full max-w-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJHmMmNNgMMKcRbrKqa-rRV7ZNrDzsAK3MRGoo__iqumdyY_bTAVUGpP8VvP1ZmXSkyBuRa7Y6EI2bHPwURHQJ2fnXZoQkwKm_JE3Qz32Nk-ymgKonmxrIhxR1RrwYtXOtRuTsFDIDqDjjTpoMuC0Ldg539AIJvlqHq8iGWVW783FHn6acPe8uryuqK2oD3YM-KmGgNmUzOng-EPAzqCUFn0gZJ2sxW5xUQWw2Ow05Uau6xFGeiX5xaKdSCefvD0dnVM5X2908_A"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left space-y-8">
          <h3 className="text-4xl font-serif italic text-atcGold">Get inspired</h3>
          <button className="uppercase tracking-widest text-sm border border-atcDark py-4 px-10 hover:bg-atcDark hover:text-white transition-all">
            Receive Catalogue
          </button>
        </div>
      </div>
    </section>
  )
}

export default Catalogue