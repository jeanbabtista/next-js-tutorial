import { IUserComponentProps } from '../types'

const User: React.FC<IUserComponentProps> = ({ user: { name, email, phone, address } }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{address.street}</p>
  </div>
)

export default User
