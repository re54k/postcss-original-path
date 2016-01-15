/**
 * Just remove the loader path rudely.
 */

var postcss = require("postcss");

module.exports = postcss.plugin('postcss-original-path', function () {
	return function(css) {
		css.walkDecls(function (decl) {
			var input = decl.source.input;
			input.file = input.file.split('.js!').pop();
		});
	};
});