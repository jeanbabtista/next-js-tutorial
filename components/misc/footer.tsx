import { useSession, signIn, signOut } from 'next-auth/react'

const Footer = () => {
  const { data: session } = useSession()

  if (session)
    return (
      <div>
        <hr />
        <p>Copyright 2022</p>
        <h2>Signed in as {session.user?.email}</h2>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )

  return (
    <div>
      <hr />
      <p>Copyright 2022</p>
      <button onClick={() => signIn('github')}>Sign in</button>
    </div>
  )
}

export default Footer
