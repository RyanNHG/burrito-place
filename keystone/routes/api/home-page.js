exports = module.exports = function(req, res) {

    var keystone = require('keystone'),
        Page = keystone.list('Page');
        

    Page.model.find()
        .where('name', 'Home Page')
        .populate('topLinks foods people footerLinks')
        .exec(function(err, posts){

            if(err) console.log(err);
            else
            {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'GET');
                res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
                res.send(posts[0]);
            }

        })


};