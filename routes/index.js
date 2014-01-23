
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.locals({
                title:'Test!',
                message: "Hello"
              });
  res.render('index');
};