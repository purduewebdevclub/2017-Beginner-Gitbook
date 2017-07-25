'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	init();
};

var init = function init() {
	//grabbing the keys here
	var keys = document.querySelectorAll('.btn');
	var keyInst = void 0;

	// grabbing the output here
	var output = document.querySelector('.screen');

	//instantiating the screen here
	var screen = new Screen(output);

	// instantiating each key here
	keys.forEach(function (key) {
		if (key.id) {
			keyInst = new Key(key, key.innerHTML, true);
		} else {
			keyInst = new Key(key, key.innerHTML, false);
		}

		keyInst.addClickListener(screen);
	});
};

var Screen = function () {
	function Screen(element) {
		_classCallCheck(this, Screen);

		this.element = element;
	}

	_createClass(Screen, [{
		key: 'evaluate',
		value: function evaluate() {
			try {
				var result = eval(this.element.value);
				this.element.value = result;
			} catch (e) {
				if (e instanceof SyntaxError) {
					window.alert("Please check your equation again");
				} else {
					window.alert("Oops something went wrong! Please try again");
					this.clearScreen();
				}
			}
		}
	}, {
		key: 'updateScreen',
		value: function updateScreen(newElement) {
			this.element.value += newElement;
		}
	}, {
		key: 'clearScreen',
		value: function clearScreen() {
			this.element.value = "";
		}
	}]);

	return Screen;
}();

var Key = function () {
	function Key(element, value, operatorBoolean) {
		_classCallCheck(this, Key);

		this.element = element;
		this.value = value;
		this.operator = operatorBoolean; //boolean to check if operator or not
	}

	_createClass(Key, [{
		key: 'getValue',
		value: function getValue() {
			return this.value;
		}
	}, {
		key: 'isOperator',
		value: function isOperator() {
			return this.operator;
		}

		//method to add click listener to each key element instance 

	}, {
		key: 'addClickListener',
		value: function addClickListener(screen) {
			var _this = this;

			//providing access to the screen instance here

			this.element.addEventListener("click", function () {
				var clickedValue = _this.getValue();

				if (_this.isOperator()) {
					if (_this.value == "=") {
						screen.evaluate();
					} else if (_this.value == "AC" || _this.value == "C") {
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