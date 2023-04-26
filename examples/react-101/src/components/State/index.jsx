import UpdatatingObjectState from "./Object";
import UpdatingArrayState from "./Array";

import Album from "../Album";
import './style.css'

const albums = [
  {
    artist: "The Beatles",
    song: "Here Comes the Sun",
    year: "1969",
    genre: "Rock",
    cover: "https://de10.com.mx/sites/default/files/2019/09/26/vinilo-abbey-road-the-beatles-50_anios_0.jpg"
  },
  {
    artist: "Bad Bunny",
    song: "Yonaguni",
    year: "2021",
    genre: "Reggaeton",
    cover: "https://images.genius.com/573a07cba6e81c8bf69f279565093eca.1000x1000x1.png"
  },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
    year: "2020",
    genre: "Pop",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cv0ytl2fqO0XP1TqBM4w3xs9wFGZDjs1Uo-kxnwrfiu1oqFaIOfGGy4GURSrboaFjrg&usqp=CAU"
  }
]

const StateExample = () => {
  return(
    <div>
      <h1>State Example</h1>
      {/* <UpdatatingObjectState /> */}
      <UpdatingArrayState />


      {/* {
        albums.map((album, index) => {
          return (
            <Album
              key={index}
              artist={album.artist}
              song={album.song}
              year={album.year}
              genre={album.genre}
              cover={album.cover}
            />
          )
        })
      } */}
    </div>
  )
}

export default StateExample
