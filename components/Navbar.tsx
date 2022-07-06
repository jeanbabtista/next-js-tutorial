import Link from 'next/link'

import React from 'react'

import urls from '../utils/navlinks'

const Navbar: React.FC = () => {
  return (
    <ul>
      <li>
        <Link href={urls.home()}>Home</Link>
      </li>
      <li>
        <Link href={urls.about()}>About</Link>
      </li>
      <li>
        <Link href={urls.docs()}>Docs</Link>
      </li>
    </ul>
  )
}

export default Navbar
