import { GetStaticProps, NextPage } from 'next'

import Navbar from '../components/navbar'
import User from '../components/user'

import { IUser, IUsersPageProps } from '../types'
import NextUtil from '../utils/NextUtil'

const Users: NextPage<IUsersPageProps> = ({ users }) => {
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      {users.length && users.map((user: IUser) => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return NextUtil.getStaticProps('users', users)
  } catch (e) {
    return NextUtil.getStaticProps('users', [])
  }
}
