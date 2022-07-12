import Image from 'next/image'
import Layout from '../../components/layout'
import { NextPageWithLayout } from '../_app'

const Images: NextPageWithLayout = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <Image src={`/${i}.jpg`} alt={`Image ${i}`} width={200} height={200} />
        </div>
      ))}
    </div>
  )
}

Images.getLayout = (page: React.ReactElement) => (
  <Layout title="Images" description="Images Page">
    {page}
  </Layout>
)

export default Images
