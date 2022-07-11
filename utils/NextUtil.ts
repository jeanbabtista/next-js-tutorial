type INextJSPaths = {
  params: {
    [key: string]: string
  }
}

class NextUtil {
  error() {
    return {
      notFound: true,
    }
  }

  getStaticProps<Type>(name: string, props: Type | Type[] | null, revalidate?: number) {
    return {
      props: { [name]: props },
      revalidate: revalidate || false,
    }
  }

  getStaticPaths(paths: INextJSPaths[], fallback = false) {
    return {
      paths,
      fallback,
    }
  }

  getServerSideProps<Type>(name: string, props: Type | Type[] | null) {
    return {
      props: { [name]: props },
    }
  }
}

export default new NextUtil()
