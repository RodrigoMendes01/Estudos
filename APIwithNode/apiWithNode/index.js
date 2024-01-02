const http = require("http");
const routes = require("./routes")
const { URL } = require("url");
const bodyParser = require("./helpers/bodyParser");

const server = http.createServer((request, response) => {
  const parseUrl = new URL(`http://localhost:3000${request.url}`)
  console.log(parseUrl)
  console.log(`Request method: ${request.method} | Endpoint: ${parseUrl.pathname}`)

  let { pathname } = parseUrl
  let id = null

  const splitEndPoint = pathname.split("/").filter(Boolean)

  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`
    id = splitEndPoint[1]
  }

  const route = routes.find((routeObject) => (
    routeObject.endpoint === pathname && routeObject.method === request.method
  ))

  if (route) {
    request.query = Object.fromEntries(parseUrl.searchParams)
    request.params = {id}

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-Type": "application/json"});
      response.end(JSON.stringify(body))
    }

    if (["POST", "PUT"].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response))
    } else {
      route.handler(request, response)
    }

  } else {
    response.writeHead(404, {"Content-Type": "text/html"})
    response.end(`Cannot ${request.method} ${parseUrl.pathname}`)
  }
});

server.listen(3000, () => console.log("Server started at http://localhost:3000"))