import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation LogIn($password: String!, $username: ID!) {
    logIn(password: $password username: $username){
      token
      customer {
        name
      }
    }
  }
`

const LoginPage = () => {
  const [loginAccount, {loading, error}] = useMutation(LOGIN)

  const handleSubmit = async(event) => {
    const { target } = event
    event.preventDefault()

    const formData = new FormData(target)

    const options = {
      variables: {
        username: formData.get('username'),
        password: formData.get('password')
      }
    }

    const { data } = await loginAccount(options)

    if (data) {
      localStorage.setItem('token', data.logIn.token)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return(
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
