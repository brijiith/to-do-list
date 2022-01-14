const fs = require("fs");
const http = require("http");
const port = 3000;
const server = http.createServer(function (req, res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  console.log("request was made:" + req.url);
  if (req.url === "/home" || req.url === "/") {
    // console.log(req.body);

    var body = "";
    const todos = [];
    req.on("data", function (val) {
      body += val;
      // console.log("Partial body: " + body);
      fs.readFile("returnValue.txt", function (err, data) {
        let parsedData;
        if(data.length===0) parsedData=[];
        else{
         parsedData=JSON.parse(data);
        }
        parsedData.push(JSON.parse(body));
        // console.log('<<<<<<<',JSON.parse(body));
        // todos.push(JSON.parse(data),);
        // todos.push(JSON.parse(body));
        // const todoString=JSON.stringify(todos);
        // console.log('......',todoString);
        fs.writeFile('returnValue.txt','\n'+JSON.stringify(parsedData),(err)=>{
          if (err) throw err;
          console.log("Saved!");
        });
        // const myJSON = JSON.parse(body);
      });
    });
    req.on("end", function () {
      console.log("Body: " + body);
      const data = JSON.parse(body);
      //   res.writeHead(200, {'Content-Type': 'text/html'})
      //   res.end('post received')
    });

    res.writeHead(200, headers);
    res.write(`{"text": "Hello world!!!"}`);
    res.end();
  } else if (req.url === "/list") {
    res.writeHead(200, headers);
    fs.readFile("returnValue.txt", (err, data) => {
      if (err) throw err;
      const payload = data.toString();
      // payload = ['+ payload + ']
      console.log(data.toString());
      res.write(payload);
      res.end();
    });

    // res.headersSent({})
  }
});
server.listen(port, function (error) {
  if (error) {
    console.log("oops,wrong!!", error);
  } else {
    console.log("server is active" + port);
  }
});
