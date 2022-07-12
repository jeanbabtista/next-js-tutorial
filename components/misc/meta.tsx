import Head from 'next/head'
import { IMetaProps } from '../../types/misc'

const Meta: React.FC<IMetaProps> = ({ title = 'Next JS', description = 'Next JS Tutorial Series', keywords = ['website', 'blog', 'foo', 'bar'] }) => {
  return (
    <Head>
      <meta httpEquiv="content-language" content="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords.join(',')} />
      <meta name="author" content="John Doe" />
      <meta name="publisher" content="John Doe" />
      <meta name="copyright" content="John Doe" />
      <meta name="description" content={description} />
      <meta name="page-topic" content="Media" />
      <meta name="page-type" content="Blogging" />
      <meta name="audience" content="Everyone" />

      <title>{title}</title>
    </Head>
  )
}

export default Meta
