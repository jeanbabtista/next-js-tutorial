import Meta from '../misc/meta'
import Footer from '../misc/footer'
import Header from '../misc/header'

import { ILayoutProps } from '../../types'

const Layout: React.FC<ILayoutProps> = ({ title, description, keywords, children }) => {
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
