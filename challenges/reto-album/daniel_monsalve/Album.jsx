function Album(props) {
  const containerStyle = {
    display: "flex",
    width: "40%",
    borderRadius: "0.7em",
    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5em",
  };

  const albumStyle = {
    width: "50%",
    margin: "0 0 -0.2em -4.5em",
  };

  const albumImgStyle = {
    width: "100%",
    margin: "0",
    borderTopLeftRadius: "0.7em",
    borderBottomLeftRadius: "0.7em",
  };

  const titleStyle = {
    textAlign: "left",
    margin: "0 2em",
  };

  const buttonDanceStyle = {
    backgroundColor: "pink",
    borderRadius: "1em",
    border: "none",
    fontSize: "14px",
    padding: "0.5em 1em",
    position: "relative",
    bottom: "1em",
  };

  const heartStyle = {
    position: "relative",
    left: "10em",
    width: "10%",
  };

  return (
    <section className="container" style={containerStyle}>
      <figure className="album" style={albumStyle}>
        <img
          className="album__img"
          src={props.image}
          alt="album cover art"
          style={albumImgStyle}
        />
      </figure>
      <div className="title" style={titleStyle}>
        <h1 className="title__song">{props.song}</h1>
        <p className="title__artist">
          <em>{props.artist}</em>
        </p>
        <p className="title__album">{props.album}</p>
        <p className="title__year">{props.year}</p>
        <div className="button">
          <button className="button__dance" style={buttonDanceStyle}>
            dance
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={heartStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Album;
