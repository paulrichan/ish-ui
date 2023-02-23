import React from 'react';

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnamesExports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".storybook-button {\r\n   font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n   font-weight: 700;\r\n   border: 0;\r\n   border-radius: 3em;\r\n   cursor: pointer;\r\n   display: inline-block;\r\n   line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n   color: white;\r\n   background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n   color: #333;\r\n   background-color: transparent;\r\n   box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n   font-size: 12px;\r\n   padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n   font-size: 14px;\r\n   padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n   font-size: 16px;\r\n   padding: 12px 24px;\r\n}\r\n";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'primary' : _b, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 'medium' : _c, onClick = _a.onClick, label = _a.label;
    return (React.createElement("button", { type: 'button', className: classNames('storybook-button', "storybook-button--".concat(size), "storybook-button--".concat(type)), style: textColor ? { color: textColor } : {}, onClick: onClick }, label));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
