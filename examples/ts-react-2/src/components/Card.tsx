
type CardProps = {
  /* Title */
  title: string
  /* Description */
  description: string
  /* Number of votes */
  numVote: number
}


const Card = ({ title, description, numVote }: CardProps) => {
  return(
    <div>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <p>{ numVote }</p>
    </div>
  )
}

export default Card

