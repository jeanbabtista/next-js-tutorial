import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { useState } from 'react'
import Navbar from '../../components/navbar'

import { IUser } from '../../types'
import NextUtil from '../../utils/NextUtil'

interface ICombinedPageProps {
  users: IUser[]
}

const Combined: NextPage<ICombinedPageProps> = ({ users }) => {
  const [state, setState] = useState({
    search: '',
    users,
  })

  const router = useRouter()

  const handleShareUrl = async () => {
    navigator.clipboard.writeText(`${window.location.href}?search=${state.search}`)
    router.push(`/swr/combined?search=${state.search}`, undefined, { shallow: true })
  }

  return (
    <div>
      <Navbar />
      <h1>Combined</h1>
      <input type="text" placeholder="Filter by name ..." onChange={(e) => setState((prev) => ({ ...prev, search: e.target.value }))} />
      <button onClick={handleShareUrl}>Share URL with friends</button>
      <ul>
        {state.search
          ? state.users
              .filter((user) => user.name.toLowerCase().includes(state.search.toLowerCase()))
              .map((user) => <li key={user.id}>{user.name}</li>)
          : state.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Combined

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: IUser[] = await response.json()

  if (query.search)
    return NextUtil.getServerSideProps(
      'users',
      data.filter((user) => user.name.toLowerCase().includes((query.search as string).toLowerCase())),
    )

  return NextUtil.getServerSideProps('users', data)
}
