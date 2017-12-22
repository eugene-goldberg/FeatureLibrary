module.exports = function(app) {

    var http = require("http");

	app.get('*', function(req, res) {
		res.sendfile('./index.html');
	});
};
