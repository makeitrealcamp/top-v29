import { FC } from 'react'


type CardProps = {
  /* Title */
  title: string
  /* Description */
  description: string
  /* Number of votes */
  numVote: number
}


// const Card = ({ title, description, numVote }: CardProps) => {
const Card: FC<CardProps> = ({ title, description, numVote }) => {
  return(
    <div>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <p>{ numVote }</p>
    </div>
  )
}

export default Card
