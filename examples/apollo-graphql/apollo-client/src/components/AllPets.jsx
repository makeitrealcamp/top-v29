import { useQuery, gql } from '@apollo/client';

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const ALL_PETS = gql`
  query AllPets($category: PetCategory, $status: PetStatus) {
    allPets(category: $category, status: $status) {
      name
      id
      weight
      status
      category
    }
    totalPets
  }
`


const AllPets = (props) => {
  const { category, status } = props;
  const options = {
    variables: {
      category,
      status,
    },
  }
  const {data, loading, error} = useQuery(ALL_PETS, options)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <ul>
      {
        data?.allPets?.map(pet => (
          <li key={pet.id}>
            <strong>
              {CATEGORIES[pet.category]} {pet.name}
            </strong> : {pet.weight} kg
          </li>
        ))
      }
    </ul>
  )
}

export default AllPets;
