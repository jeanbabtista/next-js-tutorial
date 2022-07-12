import Link from 'next/link'
import NavigationUtil from '../utils/NavigationUtil'

const Navbar: React.FC = () => (
  <ul>
    {NavigationUtil.getNavbarLinksArray().map(({ url, label }) => (
      <li key={url}>
        <Link href={url}>{label}</Link>
      </li>
    ))}
  </ul>
)

export default Navbar
