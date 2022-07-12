import type { NextPageWithLayout } from '../_app'
import SidebarLayout from '../../components/layout/sidebarLayout'

const About: NextPageWithLayout = () => {
  return <h1>About</h1>
}

About.getLayout = (page: React.ReactElement) => (
  <SidebarLayout>
    <h3>Custom layout for About page</h3>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
    <div>{page}</div>
  </SidebarLayout>
)

export default About
