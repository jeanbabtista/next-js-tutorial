# Next JS Tutorial

## Static Generation (SG)

### SG Overview

- HTML is statically generated at build time. The built page is then cached and reused for each request.

- For dynamic pages with *getStaticPaths* and fallback set to true, the page is not generated at build time, but on the inital request.

- With ISG (incremental static generation), a page can be regenerated for a request after the revalidation time has elapsed.

### 1. function `getStaticProps`

> Implementation can be found in `pages/user.tsx` page.

Function `getStaticProps` is a function that enables Static Generation (SG) for a page. Runs before build, so we can access data before the page is even compiled. This code is rendered only on server side, so if we log something, it will be seen only here in terminal and not in the browser.

- If you navigate directly to the page route, only the HTML file is served.
- If you navigate to the page route from a different route, the page is created client side using the JS and JSON prefetched from the server.

Moreover, this code won't even be included in the JS bundle that is sent to the browser. Because it is a server side job, we can use filesystem operations to access data, or even use an API. That's why this function can only be implemented in pages folder, and not in components folder, since it is only used on server side. The function should always return an object with `props` set to the data that is needed to render the page.

Next generates HTML file and fills it with data from getStaticProps, but it also generates a JSON file, which holds the result of the data fetching. This JSON file is used in client-side routing through `next/router` or `next/link` libraries. Next generates the HTML file and injects the JSON data into it, so it doesn't have anything to do with getStaticProps function.

In the development mode, the function will be called
every time the page is rendered. In the production
mode, the function will be called only once, when
the page is compiled.

### 2. function `getStaticPaths`

> Implementation can be found in `pages/post/[postId].tsx` page.

This function is required for dynamic routing. It is used to generate the list of all the pages that can be accessed. We combine this function with *getStaticProps* by passing parameter *context* into the function *getStaticProps*. What happens is that the function *getStaticPaths* is called first, and it returns an array of objects with `params` set to the data that is needed to render the page. Then, the function *getStaticProps* is called with the same context, and it returns the data that is needed to render the page.

#### Fallback

Function *getStaticPaths* accepts two arguments: paths and fallback. If fallback is set to false (by default), any route that does not match the path will result in 404 page not found. If fallback is set to true, then the function will return a custom fallback page, which has very complex behavior, but it basically sets similar parameters as we set in *getStaticProps* function and it renders the page on click (not on build). If we are not happy with the response, we can always return object from *getStaticPaths* with `notFound` set to true, which renders 404 error page and not dynamically fetched fallback page.

All in all - fallback set to true is very useful, when you have a large e-commerce site with thousands of products, and want to show only a few of them to user, and want for others to generate based on the URL, you set fallback to true. [Here](https://www.youtube.com/watch?v=j4nAZaPQzwc&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=27) is a detailed explanation.

### Incremental Static Generation (ISG)

Issues for SG:

- Build time is slow (more pages, more time to build).
- Pages can contain stale data till the next build
- Even *getStaticPaths* combined with *getStaticProps* won't render new data, because they are called only at build time (*getStaticProps*) or at first request to URL (*getStaticPaths*).

ISG enables us to render new data without rebuilding the whole application, since it only replaces data. To enable it, we can specify a `revalidate` key in the object returned by *getStaticProps* function. This key is a number, and it represents the time in seconds after which the data should be revalidated. If the data is not valid anymore, it will be fetched again.

`Stale while revalidate` strategy: we make a request to [http://some-url/posts] for the first time. Next.js serves an HTML file that was generated in the build. Lets say revalidate is set to 10 seconds. Then, the next time we visit the page, we will get served the same HTML file. In the background, Next.js will check if the data changed. If it did, it will fetch the data again and replace the old data, which will be visible on the next request. So in order to see newly fetched data, we need to make atleast 2 requests after 10 seconds. This 10 second revalidate time does not mean that the page will be refreshed every 10 seconds. It means that the page will be refreshed only after 10 seconds only if an

### Pros of SG

- Pre-rendered HTML file is cached and served to the user, very fast

- SEO friendly

### Cons of SG

- Stale data in case of a very dynamic content (ISG can help only to a certain extent, even if revalidation interval is set to 1 second)

- User-specific data cannot be fetched, since, for example, we require a user id to fetch the data, which cannot be pre-rendered, therefore we miss out on SEO friendlyness.

---

## Server Side Rendering (SSR)

### SSR Overview

- HTML page is rendered not at build time, but at request time, so HTML is generated for every incomming request.

### 1. function `getServerSideProps`

> Implementation can be found in `pages/news` page.

Function is very similar to *getStaticProps*, the difference is that *getStaticProps* is called only at build time (HTML page is rendered before requests are made, faster), while *getServerSideProps* is called at every request (HTML is rendered at every request, slower).

Function is called only on the server side, never on client side, the code won't be accessible in the JS bundle that is sent to the browser.

Return object is the same as in *getStaticProps* function, but we cannot pass in the option to *revalidate*.

Optional parameter is *context*, which we can destructure and access *params*, *req* and *res* from it, that way we can render user-specific data on the server and then send it as an HTML response to the client (for example, we may fetch cookies or authorization data from the request object).

---

## Client Side Rendering (CSR)

> Implementation can be found in `pages/client` page.

This enables us to render pages using plain React. For example, we can use *useEffect* hook to fetch data from the server and render it on the client. However, we usually have some state, like *isLoading*, which will be rendered initially (we usually put in some text, like *Loading ...*), untill the data is fetched. Because this is the initial state of our page, Next.js will server HTML with response *Loading ...* every time, and all the data from *useEffect* will be fetched via client. This enables us to achieve real-time functionality, but it is very bad for SEO.

---

## Routing

| Route | Description |
| ------ | ----------- |
| */* | Homepage |
| */about* | About page |
| */product* | List of all products |
| */product/:id* | Product details |
| */product/:id/review* | List of reviews of a product |
| */product/:id/review/:id* | Review of a product |
| */docs/*** | Catch-all route, for example */docs/feature1/concept1/example1* and any number of params are captured in a single file |
| */user/* | Users list |
| */post/* | Posts list |
| */post/:id* | Pre-rendered post details |
