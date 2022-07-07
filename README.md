# Next JS Tutorial

## Help

### Function `getStaticProps`

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
