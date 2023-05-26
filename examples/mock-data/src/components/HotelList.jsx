import { useState, useEffect } from 'react'

import { getAllHotels } from '../services/hotel'

const HotelList = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {

    getAllHotels()
      .then(hotels => {
        setHotels(hotels)
      })

  }, [])

  return(
    <div>
      <ol>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <img src={hotel.image} alt="" />
            <strong>{hotel.price}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default HotelList
