import { createProduct } from '../lib/firebase'

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, price } = e.target.elements

    const product = {
      name: name.value,
      price: price.value
    }

    const result = await createProduct(product)
    console.log("🚀 ~ file: Form.jsx:14 ~ handleSubmit ~ result:", result)
    e.target.reset()
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="number" name="price" />

      <button type="submit">Create</button>
    </form>
  )
}

export default Form
