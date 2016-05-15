var request = require('request'),
    hash = require('./murmurhash'),
    assign = require('object-assign'),
    path = require('path');

module.exports = function hashAssets(opts) {
    opts = assign(opts,{
        hash: hash
    });

    request(opts.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            opts.callback && opts.callback(opts.hash(body), body);
        }
    });
}