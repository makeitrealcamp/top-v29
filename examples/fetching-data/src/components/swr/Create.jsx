import useSWRMutation from 'swr/mutation'

import useForm from '../../hooks/useForm'

const URL = 'https://jsonplaceholder.typicode.com/posts'

async function sendRequest(url, { arg }) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg)
  }

  const res = await fetch(url, options)
  const data = await res.json()
  return data
}


const PostSWRExample = () => {
  const {form, handleChange} = useForm({})
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await trigger(form)
    console.log("🚀 ~ file: Create.jsx:16 ~ handleSubmit ~ result:", result)
  }

  if (isMutating) return <div>Adding post...</div>
  if (error) return <div>{error.message}</div>

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="body" placeholder="Body" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostSWRExample
