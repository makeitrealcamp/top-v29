import useForm from '../hooks/useForm'

const FormEdit = () => {
  const { form, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" cols="30" rows="10" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <select name="author" id="author" onChange={handleChange}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </div>
        <div>
          <button type="submit">Update Blog</button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
