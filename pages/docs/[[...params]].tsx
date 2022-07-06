/* IMPORTANT
 * File is named `[[...params]].tsx` because
 * it is a so-called optional catch-all route,
 * which is a route that matches all paths that
 * don't match any other routes, so with name
 * [[...params]].tsx we can also access /docs,
 * but with [...params].tsx we cannot
 */

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'
import Navbar from '../../components/Navbar'

const Documentation: NextPage = () => {
  const { params } = useRouter().query
  // console.log('params', params)

  switch (params?.length) {
    case 1:
      return (
        <div>
          <Navbar />
          <h1>Documentation for feature {params[0]}</h1>
        </div>
      )
    case 2:
      return (
        <div>
          <Navbar />
          <h1>
            Docs for feature {params[0]} and its concept {params[1]}
          </h1>
        </div>
      )
    case 3:
      return (
        <div>
          <Navbar />
          <h1>
            Example {params[2]} of {params[1]} feature in {params[0]} concept
          </h1>
        </div>
      )
    default:
      return (
        <div>
          <Navbar />
          <h1>Documentation</h1>
        </div>
      )
  }
}

export default Documentation
