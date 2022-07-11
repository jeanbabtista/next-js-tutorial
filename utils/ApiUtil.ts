import { IUser } from '../types'

const getData = <T>(error: Error | boolean, message: string | null = null, data: T | null = null): [boolean, string, T | null] => {
  if (typeof error === 'boolean') {
    if (!message) throw new Error('`message` argument is required')
    return [error, message, data]
  }

  if (error instanceof Error) return [true, error.message, null]

  return [true, 'Internal Server Error', null]
}

class ApiUtil {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
  }

  async getUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users`)
      const users: IUser[] = await response.json()
      return getData(false, 'Successfully fetched users', users)
    } catch (e) {
      return getData(true, `Failed to fetch users: ${(e as Error).message}`, [] as IUser[])
    }
  }
}

export default new ApiUtil()
