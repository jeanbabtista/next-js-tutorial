import { GetStaticProps, NextPage } from 'next'

import Navbar from '../components/Navbar'
import User from '../components/User'

import { IUser } from '../types'

const Users: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      {users.length && users.map((user: IUser) => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users

interface UsersPageProps {
  users: IUser[]
}

export const getStaticProps: GetStaticProps = async () => {
  const getProps = (users: IUser[] = []) => ({ props: { users } })

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return getProps(users)
  } catch (e) {
    return getProps()
  }
}
