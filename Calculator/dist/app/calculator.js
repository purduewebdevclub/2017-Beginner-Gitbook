'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	new Init();
};

/** Class to initiate the calculator functionality*/

var Init = function () {
	/**
 *Create keys, output and screen selectors
 */
	function Init() {
		_classCallCheck(this, Init);

		// grabbing the keys here
		this.keys = document.querySelectorAll('.btn');

		// grabbing the output here
		this.output = document.querySelector('.screen');

		// instantiating the screen here
		this.screen = new Screen(this.output);

		// adding click listener for each key here
		this.addClickListeners(this.keys);
	}

	/**
 * Create key instance for each key, and add click listener
 * @param {array} keys - Array of key selectors
 */


	_createClass(Init, [{
		key: 'addClickListeners',
		value: function addClickListeners(keys) {
			var _this = this;

			var keyInst = void 0;

			this.keys.forEach(function (key) {
				if (key.id) {
					keyInst = new Key(key, key.innerHTML, true);
				} else {
					keyInst = new Key(key, key.innerHTML, false);
				}

				keyInst.addClickListener(_this.screen);
			});
		}
	}]);

	return Init;
}();

/** 
Class wrapper for the request object
*/


var _Request = function () {
	/**
 *Create a request object
 * @param {string} param1 - String representation of number
 * @param {string} param2 - String representation of number
 * @param {string} operator - String representation of operator
 */
	function _Request(param1, param2, operator) {
		_classCallCheck(this, _Request);

		console.log(param1, param2, operator);
		this.param1 = param1;
		this.param2 = param2;
		this.operator = operator;
		this.url = '';
		this.buildUrl();
	}

	/**
 *A description of the buildUrl function
 *Build the url endpoint based on operator
 */


	_createClass(_Request, [{
		key: 'buildUrl',
		value: function buildUrl() {
			var baseUrl = 'http://localhost:3000';

			switch (this.operator) {
				case '+':
					this.url = baseUrl + ('/add?num1=' + this.param1 + '&num2=' + this.param2);
					break;
				case '-':
					this.url = baseUrl + ('/sub?num1=' + this.param1 + '&num2=' + this.param2);
					break;
				case '*':
					this.url = baseUrl + ('/mul?num1=' + this.param1 + '&num2=' + this.param2);
					break;
				case '/':
					this.url = baseUrl + ('/div?num1=' + this.param1 + '&num2=' + this.param2);
					break;
				case '%':
					this.url = baseUrl + ('/mod?num1=' + this.param1 + '&num2=' + this.param2);
				default:
					this.url = '';
			}
		}

		/**
  Build the request object 
  @return {Request} The request object
  */

	}, {
		key: 'buildRequest',
		value: function buildRequest() {
			return new Request(this.url, {
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				method: 'GET'
			});
		}
	}]);

	return _Request;
}();

/**
*Class representing the screen
*/


var Screen = function () {
	/**
 * Create an instance of the screen
 * @param {selector} element - Object referencing the output screen
 */
	function Screen(element) {
		_classCallCheck(this, Screen);

		console.log(typeof element === 'undefined' ? 'undefined' : _typeof(element));
		this.element = element;
	}

	/**
 *This is a description of the evaluate function
 */


	_createClass(Screen, [{
		key: 'evaluate',
		value: function evaluate() {
			// identifying the operator here
			var re = new RegExp('[^0-9a-zA-Z]');
			var operator = this.element.value.match(re);

			// identifying the input numbers here
			var values = this.element.value.match(/\d+/g); // grab the numbers here
			this.makeFetchRequest(operator, values);
		}

		/**
  * This is a description of the updateScreen function
  *@param {selector} newElement - Each new button that is clicked on
  */

	}, {
		key: 'updateScreen',
		value: function updateScreen(newElement) {
			this.element.value += newElement;
		}

		/**
  *This is a description of the clearScreen function
  *Clears the input screen
  */

	}, {
		key: 'clearScreen',
		value: function clearScreen() {
			this.element.value = '';
		}

		/**
  *This is a description of the makeFetchRequest function
  *@param {string} operator - String representation of the operator
  *@param {Array<string>} values - Array of input values as strings
  */

	}, {
		key: 'makeFetchRequest',
		value: function makeFetchRequest(operator, values) {
			var _this2 = this;

			var request = new _Request(values[0], values[1], operator[0]).buildRequest();
			fetch(request).then(function (response) {
				return response.json();
			}).then(function (data) {
				_this2.updateWithResponse(data);
			});
		}

		/**
  *This is a description of the updateWithResponse function
  *@param {string} res - String representing return value from server
  */

	}, {
		key: 'updateWithResponse',
		value: function updateWithResponse(res) {
			this.clearScreen();
			this.updateScreen(res);
		}
	}]);

	return Screen;
}();

/**
*Represents each key on the calculator
*/


var Key = function () {
	/**
 *Create a key
 * @param {selector} element - The element object of the key
 * @param {string} value - This innerHTML of the key
 * @param {boolean} operatorBoolean - Denotes whether key is operand or not
 */
	function Key(element, value, operatorBoolean) {
		_classCallCheck(this, Key);

		this.element = element;
		this.value = value;
		this.operator = operatorBoolean; // boolean to check if operator or not
	}

	/**
 * Get the value of the key
 * @return {string} - Returns the value of the key
 */


	_createClass(Key, [{
		key: 'getValue',
		value: function getValue() {
			return this.value;
		}

		/**
  * Check if key is operator or not
  * @return {boolean} - Returns boolean for whether the key is an operand or not
  */

	}, {
		key: 'isOperator',
		value: function isOperator() {
			return this.operator;
		}

		/**
   *Method to add click listener to each key element instance 
   * @param {Screen} screen - instance of the screen class
   */

	}, {
		key: 'addClickListener',
		value: function addClickListener(screen) {
			var _this3 = this;

			this.element.addEventListener('click', function () {
				var clickedValue = _this3.getValue();

				if (_this3.isOperator()) {
					if (_this3.value == '=') {
						screen.evaluate();
					} else if (_this3.value == 'AC' || _this3.value == 'C') {
						screen.clearScreen();
					} else {
						screen.updateScreen(clickedValue);
					}
				} else {
					screen.updateScreen(clickedValue);
				}
			});
		}
	}]);

	return Key;
}();