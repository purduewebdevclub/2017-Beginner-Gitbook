window.onload = () => {
	init();
}

let init = () => {
	//grabbing the keys here
	let keys = document.querySelectorAll('.btn');
	let keyInst;

	// grabbing the output here
	let output = document.querySelector('.screen');

	//instantiating the screen here
	let screen = new Screen(output);



	// instantiating each key here
	keys.forEach((key) => {
		if(key.id) {
			keyInst = new Key(key, key.innerHTML, true)
		}else {
			keyInst = new Key(key, key.innerHTML, false)
		}

		keyInst.addClickListener(screen);
	});	
}

class Screen {
	constructor(element) {
		this.element = element;
	}

	evaluate() {
		try {
			let result = eval(this.element.value);
			this.element.value = result;
		}
		catch(e) {
			if(e instanceof SyntaxError) {
				window.alert("Please check your equation again");
			}else {
				window.alert("Oops something went wrong! Please try again");
				this.clearScreen();
			}
		}
	}

	updateScreen(newElement) {
		this.element.value += newElement;
	}

	clearScreen() {
		this.element.value = ""
	}
}

class Key {
	constructor(element, value, operatorBoolean) {
		this.element = element;
		this.value = value;
		this.operator = operatorBoolean; //boolean to check if operator or not
	}

	getValue() {
		return this.value;
	}

	isOperator() {
		return this.operator;
	}

	//method to add click listener to each key element instance 
	addClickListener(screen) { //providing access to the screen instance here

		this.element.addEventListener("click", () => {
			let clickedValue = this.getValue();

			if(this.isOperator()) {
				if(this.value == "=") {
					screen.evaluate();
				}else if(this.value == "AC" || this.value == "C") {
					screen.clearScreen();
				}else {
					screen.updateScreen(clickedValue);
				}
			}else {
				screen.updateScreen(clickedValue);
			}

		});	
	}
}