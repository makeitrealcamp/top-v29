import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'

const ME = gql`
  query Me{
    me{
      name
      currentPets {
        id
        name
        category
      }
      checkoutHistory {
        checkInDate
        checkOutDate
      }
    }
  }
`

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const ProfilePage = (props) => {
  const [getMeInfo, { data, loading, error } ]= useLazyQuery(ME)

  useEffect(() => {
    const token = localStorage?.getItem('token')
    const context = {
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    }

    getMeInfo({ context })

  }, [getMeInfo])

  return(
    <div>
      <h1>{data?.me.name} 🐶</h1>
      <ul>
        {
          data?.me.currentPets.map(pet => (
            <li key={pet.id}>
              <strong>{pet.name}</strong> : {CATEGORIES[pet.category]}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProfilePage
