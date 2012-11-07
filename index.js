var AbstractError = require('abstract-error');
var RenderedError = AbstractError.create('RenderedError';)
module.exports = {
	Error: function (tmpl, msg){
		var err = new RenderedError(msg || "");
		err.tmpl = tmpl;
	},
	middleware: function(err, req, res, next){
		if (err instanceof RenderedError) {
			res.render(err.tmpl || 'index', {
				message: err.message
			});
		} else {
			next(err);
		}
	}
};