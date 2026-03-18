import React from 'react'

import Card from '../assets/card.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Card5 from '../assets/card5.png'
import Card6 from '../assets/card6.png'

const CardData = [
  { title: 'SALIENCE LABS', image: Card },
  { title: 'CARDBOARD SPACESHIP', image: Card2 },
  { title: 'PROJECT NEON', image: Card3 },
  { title: 'PIXEL WAVE', image: Card4 },
  { title: 'ZARA COLLAB', image: Card5 },
  { title: 'DRAGONFLY', image: Card6 },
]

function Featured() {
  return (
    <div data-scroll data-scroll-speed="-0.08" className="w-full px-4 py-20 bg-[#f4f4f4] flex justify-center">
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full ">
        {CardData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden   hover:scale-[1.05] duration-300"
          >
            {/* Top Title */}
            <div className="flex items-center gap-2 px-6 py-4">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-black">
                {item.title}
              </h2>
            </div>

            {/* Image Section */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-3/4 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
