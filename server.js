var express = require('express')
var http = require('http')
var fs = require('fs')
var app = express()

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
//  res.send('Hello World!')

app.use('/tate',express.static('my-angular-page'));

/*fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });
})
*/

})

app.listen(port, function () {
  console.log('Example app listening on port: ' + port)
})