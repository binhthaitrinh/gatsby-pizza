static folder: where you put files that you files that you simply want to serve, such as favicon, html. But don't put images, css... here, since files in this folder will not go through Gatsby and get the bonus that Gatsby gives
src/pages: this is Gatsby specific

navigate programmatically: using navigate from 'gatsby'
navigate('/')

gatsby-browser.js: gatsby file that allows us to hook into different API of gatsby: run when the page is generated
gatsby-ssr.js: lets you alter content of static HTML files as they are being SSR by Gatsby and Node.js

current page prop on nav item: use &[aria-current="page"]

# Gatsby queries

## Page queries

- Can be dynamic with variables
- can only be run on a top level page

## Static queries:

- Cannot be dynamic, no var passed in
- Can be run anywhere

to rename allSanityPizza to pizza, use pizza: allSanityPizza

## React helmet allows us to stick HTML tags into document head

you can stick a helmet anywhere you want

intro to serverless functions
similar to running Node server
functions that do one thing ,then set itself down after the fact
