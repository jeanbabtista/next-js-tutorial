import { ReactElement, useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { NextPageWithLayout } from '../_app'

const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

const Client: NextPageWithLayout = () => {
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

  return <>{loading ? <p>Loading...</p> : <p>Hello {name}</p>}</>
}

Client.getLayout = (page: ReactElement) => (
  <Layout title="Client" description="Client Page">
    {page}
  </Layout>
)

export default Client
