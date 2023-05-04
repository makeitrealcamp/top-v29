
const Item = ({ user, onSelectUser }) => {

  const handleClick = () => {
    onSelectUser(user)
  }

  return(
    <li onClick={handleClick}>{user.name}</li>
  )
}

export default Item
