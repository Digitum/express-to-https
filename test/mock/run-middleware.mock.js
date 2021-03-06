
module.exports = function(middleware, proto, host, url) {

    var result = {}

    var req = {
        headers: {
            'x-forwarded-proto': proto,
            host: host
        },
        originalUrl: url
    }

    var res = {
        redirect: function(url) {
            result.redirect = url
        }
    }

    var next = function() {
        result.next = true
    }

    middleware(req, res, next)

    return result
}
