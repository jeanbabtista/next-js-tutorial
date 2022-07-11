import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Error from 'next/error'

import { useState } from 'react'
import Navbar from '../../components/navbar'

import { INews, INewsPageProps } from '../../types'
import NextUtil from '../../utils/NextUtil'
import NavigationUtil from '../../utils/NavigationUtil'

const News: NextPage<INewsPageProps> = ({ news }) => {
  const [search, setSearch] = useState('')
  const [body, setBody] = useState({ show: false, body: '' })

  const router = useRouter()

  const handleSearchNews = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(NavigationUtil.getNewsBySearchQuery(search).url)
  }

  if (!news) return <Error statusCode={503} title="Unable to fetch news" />

  return (
    <div>
      <Navbar />
      <h1>News</h1>

      <form onSubmit={(e) => handleSearchNews(e)}>
        <input type="text" placeholder="Search ..." onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" />
      </form>

      {body.show && <p>{body.body}</p>}
      <ul>
        {news.map(({ id, title, body }) => (
          <li key={id}>
            <p>{title}</p>
            <button onClick={(e) => setBody({ show: true, body })}>Show more</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('fetching news server-side')

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const news: INews[] = await response.json()

    return NextUtil.getServerSideProps<INews>('news', news)
  } catch (e) {
    return NextUtil.getServerSideProps('news', null)
  }
}
