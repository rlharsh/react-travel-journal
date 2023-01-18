import React from 'react'

import '../assets/css/travel_card.css'

function TravelCard(props) {
  return (
    <div className='card-container'>
      <div className='travel-card'>
          <div className="travel-card__image__container">
            <img className='travel-card__image__container__image' src={props.imageUrl} alt="" />
          </div>
          <div className="travel-card__information__container">
            <div className="travel-card__header">
              <i class="fa-solid fa-location-dot"></i>
              <h3>{props.location}</h3>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.startDate} - {props.endDate}</h2>
            <p>
              {props.description}
            </p>
            </div>
      </div>
      <hr />
    </div>
  )
}

export default TravelCard