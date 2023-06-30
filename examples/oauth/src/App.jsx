import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import './App.css'

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()

  const handleFacebookLogin = () => {
    const options = {
      authorizationParams: {connection: 'facebook'}
    }

    loginWithRedirect(options)
  }

  const handleGoogleLogin = () => {
    const options = {
      authorizationParams: {connection: 'google-oauth2'}
    }

    loginWithRedirect(options)
  }

  const handleDefaultLogin = () => {
    const options = {
      authorizationParams: {connection: 'Username-Password-Authentication'}
    }

    loginWithRedirect(options)
  }

  return (
    <>
      {
        isAuthenticated
          ? (
            <>
              <h1>Hello {user.name}</h1>
              <p>{user.email}</p>
              <div>
                <img src={user.picture} alt={user.name} />
              </div>

              <button onClick={logout}>
                Logout
              </button>
            </>
          ): (
            <>
              <button onClick={handleDefaultLogin}>
                  Login default auth0
                </button>
                <button onClick={handleGoogleLogin}>
                  Login Google
                </button>
                <button onClick={handleFacebookLogin}>
                  Login Facebook
                </button>
            </>
          )
      }

    </>
  )
}

export default App
