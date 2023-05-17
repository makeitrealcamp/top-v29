import axios from './util'

import useForm from '../../hooks/useForm'

const URL = '/posts'

const PostAxiosExample = () => {
  const {form, handleChange} = useForm({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }

    // fetch(URL, options)

    const { data, status } = await axios.post(URL, form)
    if (status === 201) console.log(data)
  }

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

export default PostAxiosExample
