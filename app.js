const http = require('http');

http.createServer((req, res) => {
    console.log("api=s===>", req.body)
    api(req.url.split("/api/")[1], res, req)
}).listen(3000)

async function api(url, res, req) {
    switch (url) {
        case "add":
            if(req.method !== "POST") {
                return (res.writeHead(400) ,res.end("wrong method"))
            }  
            res.end("add testing");
            break;
        case "edit":
            if(req.method !== "PUT") {
                return (res.writeHead(400) ,res.end("wrong method"))
            }  
            res.end("edit testing");
            break;
        default:
            res.writeHead(404);
            res.end("api url not found");
            break;
    }
}
