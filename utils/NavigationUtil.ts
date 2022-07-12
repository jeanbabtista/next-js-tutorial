interface NavLinkType {
  url: string
  label: string
}

class NavigationUtil {
  private baseUrl: string

  private getUrl(link: string) {
    return `${this.baseUrl}${link}`
  }

  private getReturnType(url: string, label: string): NavLinkType {
    return { url: this.getUrl(url), label }
  }

  constructor(baseUrl = '/') {
    this.baseUrl = baseUrl
  }

  getNavbarLinksArray() {
    return [
      this.getApiUrl(),
      this.getHomeUrl(),
      this.getAboutUrl(),
      this.getProductsUrl(),
      this.getDocsUrl(),
      this.getUsersUrl(),
      this.getPostsUrl(),
      this.getNewsUrl(),
      this.getClientUrl(),
      this.getSWRUrl(),
      this.getSWRCombinedUrl(),
      this.getCommentsUrl(),
    ]
  }

  getApiUrl() {
    return this.getReturnType('api/v1', 'API')
  }

  getHomeUrl() {
    return this.getReturnType('', 'Home')
  }

  getAboutUrl() {
    return this.getReturnType('about', 'About')
  }

  getProductsUrl() {
    return this.getReturnType('product', 'Products')
  }

  getProductByIdUrl(id: string | number) {
    return this.getReturnType(`product/${id}`, `Product ${id}`)
  }

  getProductByIdReviewsUrl(id: string | number) {
    return this.getReturnType(`product/${id}/review`, `Product ${id} Reviews`)
  }

  getProductByIdReviewByIdUrl(productId: string, reviewId: string) {
    return this.getReturnType(`product/${productId}/review/${reviewId}`, `Product ${productId} Review ${reviewId}`)
  }

  getDocsUrl() {
    return this.getReturnType('docs', 'Docs')
  }

  getDocsByFeatureUrl(feature: string) {
    return this.getReturnType(`docs/${feature}`, `Docs ${feature}`)
  }

  getDocsByFeatureAndConceptUrl(feature: string, concept: string) {
    return this.getReturnType(`docs/${feature}/${concept}`, `Docs ${feature} ${concept}`)
  }

  getUsersUrl() {
    return this.getReturnType('user', 'Users')
  }

  getPostsUrl() {
    return this.getReturnType('post', 'Posts')
  }

  getPostByIdUrl(id: string | number) {
    return this.getReturnType(`post/${id}`, `Post ${id}`)
  }

  getNewsUrl() {
    return this.getReturnType('news', 'News')
  }

  getNewsBySearchQuery(query: string) {
    return this.getReturnType(`news/${query}`, `News ${query}`)
  }

  getClientUrl() {
    return this.getReturnType('client', 'CSR')
  }

  getSWRUrl() {
    return this.getReturnType('swr', 'SWR')
  }

  getSWRCombinedUrl() {
    return this.getReturnType('swr/combined', 'CSR and SSR combined')
  }

  getCommentsUrl() {
    return this.getReturnType('comments', 'Comments')
  }
}

export default new NavigationUtil()
