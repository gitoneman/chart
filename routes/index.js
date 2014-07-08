
/*
 * GET home page.
 */

exports.index = function(req, res){

	res.sendfile("./views/index.html");
	// res.sendfile("./views/layout-100-50-50.html");
  // res.render('index', { title: 'Express' });
};