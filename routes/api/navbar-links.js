exports = module.exports = function(req, res) {

    var keystone = require('keystone'),
        Link = keystone.list('Link');


    Link.model.find()
        .exec(function(err, links){

            if(err) console.log(err);
            else
            {
                res.send(links);
            }

        })


};
