class NextUtil {
  getStaticProps(name: string, props: any) {
    return {
      props: {
        [name]: props,
      },
    }
  }

  getStaticPaths(paths: any[], fallback = false) {
    return {
      paths,
      fallback,
    }
  }
}

export default new NextUtil()
