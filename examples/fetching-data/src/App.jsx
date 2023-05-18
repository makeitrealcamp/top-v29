import ParallelExample from './components/parallel'
import { GetAxiosExample, PostAxiosExample } from './components/axios'
import { GetSWRExample, PostSWRExample } from './components/swr'
import RickMorty from './components/parallel/RickAndMorty'

function App() {

  return (
    <>
      {/* Parallel example  */}
      {/* <ParallelExample /> */}

      {/* Get Axios example  */}
      {/* <GetAxiosExample /> */}

      {/* Post Axios example  */}
      {/* <PostAxiosExample /> */}

      {/* Get SWR example  */}
      {/* <GetSWRExample /> */}

      {/* Post SWR example  */}
      {/* <PostSWRExample /> */}

      <RickMorty />
    </>
  )
}

export default App
