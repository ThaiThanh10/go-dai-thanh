import React from 'react'

const Story = () => {
  return (
    <section className="pb-24 px-6 md:px-24 reveal grid place-items-center ">
      <div className="bg-atcGray rounded-tr-[100px] rounded-bl-[100px] p-12 md:p-24 flex flex-col w-max gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-light tracking-widest uppercase">
            Đại Thành Furniture Story
          </h2>
          <p className="text-atcMuted leading-loose text-sm max-w-3xl">
            Founded in 2006 as a humble workshop, we have grown into one of
            Vietnam's foremost manufacturers and wholesalers of patio furniture and
            hospitality furniture. Operating from our 30,000-square-meter facility,
            we specialize not only as an outdoor patio furniture manufacturer but
            also as a hospitality furniture manufacturer in Vietnam, catering to
            resorts, hotels, and commercial spaces. Today, we proudly export our
            products to over 45 countries worldwide, bringing the essence of
            Vietnamese craftsmanship to customers around the world.
          </p>
          <button className="flex items-center gap-4 text-xs tracking-widest uppercase border border-atcDark/20 rounded-full py-4 px-8 hover:bg-atcDark hover:text-white transition-all duration-300">
            Learn More
            <span className="w-6 h-6 border border-current rounded-full flex items-center justify-center text-[10px]">
              →
            </span>
          </button>
        </div>
        <div className="hidden md:block w-1/3" />
      </div>
    </section>
  )
}

export default Story