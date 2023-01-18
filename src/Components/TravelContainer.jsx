import React from 'react'
import TravelCard from './TravelCard'
import Data from '../assets/data/data.js'

import '../assets/css/travel_container.css'

function TravelContainer() {

    const cards = Data.map(item => {
        return (
            <TravelCard
                key={item.id}
                {...item}
            />
        )
    })

  return (
    <div className='travel-wrapper'>
        {cards}
    </div>
  )
}

export default TravelContainer