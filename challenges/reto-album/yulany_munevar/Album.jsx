function Album(props){
    const {image,title,artist}=props
    return(
        <div className="cardContainer">
            <section className="cardContainer__image">
                <img src={image} alt="imagen" />
            </section>

            <section className="cardContainer__text">
                <h1 className="cardContainer__title">{title}</h1>
                <p className="cardContainer__artist">{artist}</p>
            </section>
        </div>
    )
}

export default  Album
