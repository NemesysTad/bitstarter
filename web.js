var express = require('express');

var app = express.createServer(express.logger());
var file = fopen(getScriptPath("index.html"),o));
app.get('/',function(request,response){
   response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
		 console.log("Listening on " + port);
});




