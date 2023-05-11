import PropTypes from "prop-types"

import Album from "./Album"

const AlbumList = ({ list }) => {
  return(
    <div>
      {
        list.map((album, index) => {
          return(
            <Album key={index} {...album} />
          )
        })
      }
    </div>
  )
}

AlbumList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string.isRequired,
      song: PropTypes.string.isRequired,
      year: PropTypes.string,
      genre: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default AlbumList
