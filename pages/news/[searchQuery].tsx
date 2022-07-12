import { GetServerSideProps, NextPage } from 'next'
import NextError from 'next/error'

import NextUtil from '../../utils/NextUtil'
import { INews, INewsPageProps } from '../../types'

const NewsBySearchQuery: NextPage<INewsPageProps> = ({ news }) => {
  if (!news) return <NextError statusCode={503} title="Unable to fetch news" />

  return (
    <>
      <h1>NewsBySearchQuery</h1>
      <ul>
        {news.map(({ id, title, body }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NewsBySearchQuery

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { req, res, query } = context

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const news: INews[] = await response.json()
    const filtered = news.filter(({ title }) => title.includes(query.searchQuery as string))

    console.log(`Searching for news with query = ${query.searchQuery}`)
    console.log(`Found ${filtered.length} news`)

    return NextUtil.getServerSideProps('news', filtered)
  } catch (e) {
    return NextUtil.getServerSideProps('news', null)
  }
}
