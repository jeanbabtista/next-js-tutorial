const BASE_URL = '/'
const NAVLINKS = {
  HOME: '',
  ABOUT: 'about',
  CONTACT: 'contact',
  PRODUCT: 'product',
  REVIEW: 'review',
  DOCS: 'docs',
}

const getUrl = (navlink: string) => `${BASE_URL}${navlink}`

const urls = {
  home: () => getUrl(NAVLINKS.HOME),
  about: () => getUrl(NAVLINKS.ABOUT),
  products: () => getUrl(NAVLINKS.PRODUCT),
  productById: (id: string) => getUrl(`${NAVLINKS.PRODUCT}/${id}`),
  productByIdReviews: (id: string) => getUrl(`${NAVLINKS.PRODUCT}/${id}/${NAVLINKS.REVIEW}`),
  productByIdReviewById: (productId: string, reviewId: string) => getUrl(`${NAVLINKS.PRODUCT}/${productId}/${NAVLINKS.REVIEW}/${reviewId}`),
  docs: () => getUrl(NAVLINKS.DOCS),
  docsByFeature: (feature: string) => getUrl(`${NAVLINKS.DOCS}/${feature}`),
  docsByFeatureAndConcept: (feature: string, concept: string) => getUrl(`${NAVLINKS.DOCS}/${feature}/${concept}`),
}

export default urls
