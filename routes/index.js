
/*
 * GET home page.
 */

exports.index = function(req, res){
  var got = +Date.parse('31 March 2013') - +Date.now()
  res.render('index', { title: 'Game Of Thrones Countdown', time: Math.floor(got / 1000 / 60 / 60 / 24) });
};