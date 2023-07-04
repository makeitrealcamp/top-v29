import { FC, ReactNode, SyntheticEvent } from 'react'


type ButtonProps = {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {

  const handleClick = (e: SyntheticEvent) => {
    console.log(e.target)
  }

  return(
    <div onClick={handleClick}>
      {children}
    </div>
  )
}

export default Button
