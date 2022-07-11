import { GetStaticProps, NextPage } from 'next'

import Navbar from '../components/navbar'
import User from '../components/user'

import { IUser, IUsersPageProps } from '../types'
import ApiUtil from '../utils/ApiUtil'
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
  const [e, message, users] = await ApiUtil.getUsers()
  console.log(message)

  if (e) return NextUtil.getStaticProps('users', [] as IUser[])
  return NextUtil.getStaticProps('users', users)
}
