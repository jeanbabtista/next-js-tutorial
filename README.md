# Next JS Tutorial

## Static Generation (SG)

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

## Incremental Static Generation (ISG)

Issues for SG:

- Build time is slow (more pages, more time to build).
- Pages can contain stale data till the next build
- Even *getStaticPaths* combined with *getStaticProps* won't render new data, because they are called only at build time (*getStaticProps*) or at first request to URL (*getStaticPaths*).

ISG enables us to render new data without rebuilding the whole application, since it only replaces data. To enable it, we can specify a `revalidate` key in the object returned by *getStaticProps* function. This key is a number, and it represents the time in seconds after which the data should be revalidated. If the data is not valid anymore, it will be fetched again.

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
