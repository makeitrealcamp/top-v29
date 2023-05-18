import { useState, useEffect } from "react"

const LocationApiExample = () => {
  const [location, setLocation] = useState({})


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setLocation({ latitude, longitude })
    })
  }, [])


  return(
    <div>
      <h1>Location Browser Api</h1>

      <p>
        Location: {JSON.stringify(location)}
      </p>
    </div>
  )
}

export default LocationApiExample
