import { NextPage } from 'next'
import React from 'react'

import { IUserComponentProps } from '../types'

const User: NextPage<IUserComponentProps> = ({ user }) => {
  const { name, email, phone, address } = user

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address.street}</p>
    </div>
  )
}

export default User
