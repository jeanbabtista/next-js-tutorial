interface NavLinkType {
  url: string
  label: string
}

class NavigationUtil {
  private baseUrl: string

  private getUrl(link: string) {
    return `${this.baseUrl}${link}`
  }

  private getReturnType(url: string, label: string) {
    return { url: this.getUrl(url), label } as NavLinkType
  }

  constructor() {
    this.baseUrl = '/'
  }

  getNavbarLinksArray() {
    return [this.getHomeUrl(), this.getAboutUrl(), this.getProductsUrl(), this.getDocsUrl(), this.getUsersUrl(), this.getPostsUrl()]
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

  getContactUrl() {
    return this.getReturnType('contact', 'Contact')
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
}

export default new NavigationUtil()
