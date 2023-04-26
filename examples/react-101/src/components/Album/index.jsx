import './style.css'

const Album = (props) => {
  const { artist, song, year, genre, cover } = props

  return(
    <div className="card">
      <div className="card__cover">
        <img src={cover} alt="" className="card__cover__img" />
      </div>
      <div className="card__info">
        <div className="card__info__text">
          <h2 className="card_info-artist">{artist}</h2>
          <div className="card-container">
            <h3 className="card_info-song">{song}</h3>
            <h4 className="card_info-year">({year})</h4>
          </div>
          <h4 className="card_info-genre">{genre}</h4>
        </div>
      </div>
    </div>
  )
}

export default Album
