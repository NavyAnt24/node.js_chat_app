var fs = require('fs');

function Router (req, res) {
  this.req = req;
  this.res = res;
}

Router.prototype.route = function(){
  var that = this;
  if (this.req.url == '/') {
    fs.readFile('./public/index.html', function(err, data){
      if(err) { throw err }
      that.res.writeHead(200, {'Content-Type' : 'text/html'});
      that.res.write(data, 'utf8');
      that.res.end();
    });
  } else {
    fs.readFile(this.req.url.slice(1), function(err, data) {
      if (err) {
        that.res.writeHead(404, {'Content-Type' : 'text/html'});
        that.res.write("The file you requested does not exist.");
        that.res.end();
      } else {
        that.res.writeHead(200, {'Content-Type' : 'text/javascript'});
        that.res.write(data, 'utf8');
        that.res.end();
      }
    });
  }
}

exports.Router = Router;