import './styleAlbum.css';
import heart from './corazon.png';

function Album(props) {
  const {image, title, artist} = props

  return(
    <div className='card'>
      <figure className='card__figure'>
        <img className='card__img' alt="under the grave" src={image}/>
      </figure>
      <section className='card_text'>
        <h2 className='card__artist'>{artist}</h2>
        <p className='card__rol'>Solista</p>
        <p className='card__title'>{title}</p>
        <p className='card__year'>(2016)</p>
        <div className='card__buttom'>
          <button className='card__button'>dance</button>
          <img className='card__icon' alt="heart" src={heart}/>
        </div>

      </section>
    </div>
  )
}

export default Album;
