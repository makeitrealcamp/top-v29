import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

import AllPets from '../components/AllPets';
import Filters from '../components/Filters';

const TOTAL_PETS = gql`
  query TotalPets {
    # total de mascotas
    checkout: totalPets(status: CHECKEDOUT)
    available: totalPets(status: AVAILABLE)
    total: totalPets
  }
`

function HomePage() {
  const [filters, setFilters] = useState({ status: null, category: null});
  const [getTotalPets, { loading, error, data }] = useLazyQuery(TOTAL_PETS);

  const handleFilterChange = type => {
    setFilters({ ...filters, ...type })
  }

  const handleClick = async () => {
    getTotalPets();
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Pet library 🐳</h1>

      <button onClick={handleClick}> Mostrar mas info</button>
      {
        data ? (
          <div>
            <p>Available: {data.available}</p>
            <p>Checked out: {data.checkout}</p>
            <p>Total: {data.total}</p>
          </div>
        ): null
      }

      <div>
        <Filters handleChange={handleFilterChange} />
      </div>

      <AllPets {...filters} />

    </div>
  );
}

export default HomePage;
