import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'

const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

const Client = () => {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      await sleep(2)
      setName('John Doe')
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      {loading ? <p>Loading...</p> : <p>Hello {name}</p>}
    </div>
  )
}

export default Client
