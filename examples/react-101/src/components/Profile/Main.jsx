import PropTypes from 'prop-types'

import './style.css'

// las props son un objeto que contiene
// las propiedades que le pasamos al componente

// En este caso, el componente Profile recibe
// una propiedad llamada fullName
function Profile(props) {
  const { fullName, age } = props

  return (
    <div className="profile-card">
      <h2 className="profile-card__name">
        {fullName}
      </h2>
      <p className="profile-card__age">
        {age}
      </p>
      <img
        className="profile-card__image"
        src="/img/thumb-10.jpg"
        alt=""
        width={400}
      />
    </div>
  )
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

export default Profile
