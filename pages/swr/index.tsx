import NextError from 'next/error'
import useSwr from 'swr'

import { IUser } from '../../types'

const fetcher = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
}

const SWR = () => {
  const { data, error } = useSwr('users', fetcher)

  if (error) return <NextError statusCode={404} title="Failed to fetch users using SWR hoo" />
  if (!data) return <p>Loading...</p>

  return (
    <>
      <h1>SWR</h1>

      <ul>
        {(data as IUser[]).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default SWR
