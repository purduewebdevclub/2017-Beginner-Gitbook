window.onload = () => {
  new Init();
};

/** Class to initiate the calculator functionality*/
class Init {
  /**
  *Create keys, output and screen selectors
  */
  constructor() {
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
  addClickListeners(keys) {
    let keyInst;

    this.keys.forEach((key) => {
      if (key.id) {
        keyInst = new Key(key, key.innerHTML, true);
      } else {
        keyInst = new Key(key, key.innerHTML, false);
      }

      keyInst.addClickListener(this.screen);
    });
  }
}

/**
Class wrapper for the request object
*/
class _Request {
  /**
  *Create a request object
  * @param {string} param1 - String representation of number
  * @param {string} param2 - String representation of number
  * @param {string} operator - String representation of operator
  */
  constructor(param1, param2, operator) {
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
  buildUrl() {
    const baseUrl = 'http://localhost:3000';

    switch (this.operator) {
      case '+':
        this.url = baseUrl + `/add?num1=${this.param1}&num2=${this.param2}`;
        break;
      case '-':
        this.url = baseUrl + `/sub?num1=${this.param1}&num2=${this.param2}`;
        break;
      case '*':
        this.url = baseUrl + `/mul?num1=${this.param1}&num2=${this.param2}`;
        break;
      case '/':
        this.url = baseUrl + `/div?num1=${this.param1}&num2=${this.param2}`;
        break;
      case '%':
        this.url = baseUrl + `/mod?num1=${this.param1}&num2=${this.param2}`;
      default:
        this.url = '';
    }
  }

  /**
  Build the request object
  @return {Request} The request object
  */
  buildRequest() {
    return new Request(this.url, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'GET',
    });
  }
}

/**
*Class representing the screen
*/
class Screen {
  /**
  * Create an instance of the screen
  * @param {selector} element - Object referencing the output screen
  */
  constructor(element) {
    console.log(typeof(element));
    this.element = element;
  }

  /**
  *This is a description of the evaluate function
  */
  evaluate() {
    // identifying the operator here
    let re = new RegExp('[^0-9a-zA-Z]');
    let operator = this.element.innerHTML.match(re);

    // identifying the input numbers here
    let values = this.element.innerHTML.match(/\d+/g); // grab the numbers here
    this.makeFetchRequest(operator, values);
  }

  /**
  * This is a description of the updateScreen function
  *@param {selector} newElement - Each new button that is clicked on
  */
  updateScreen(newElement) {
    this.element.innerHTML += newElement;
  }

  /**
  *This is a description of the clearScreen function
  *Clears the input screen
  */
  clearScreen() {
    this.element.innerHTML = '';
  }

  /**
  *This is a description of the makeFetchRequest function
  *@param {string} operator - String representation of the operator
  *@param {Array<string>} values - Array of input values as strings
  */
  makeFetchRequest(operator, values) {
    let request = new _Request(values[0], values[1], operator[0]).buildRequest();
    fetch(request).then((response) => {
      return response.json();
    }).then((data) => {
      this.updateWithResponse(data);
    });
  }

  /**
  *This is a description of the updateWithResponse function
  *@param {string} res - String representing return value from server
  */
  updateWithResponse(res) {
    this.clearScreen();
    this.updateScreen(res);
  }
}

/**
*Represents each key on the calculator
*/
class Key {
  /**
  *Create a key
  * @param {selector} element - The element object of the key
  * @param {string} value - This innerHTML of the key
  * @param {boolean} operatorBoolean - Denotes whether key is operand or not
  */
  constructor(element, innerHTML, operatorBoolean) {
    this.element = element;
    this.innerHTML = innerHTML;
    this.operator = operatorBoolean; // boolean to check if operator or not
  }

  /**
  * Get the value of the key
  * @return {string} - Returns the value of the key
  */
  getValue() {
    return this.innerHTML;
  }

  /**
  * Check if key is operator or not
  * @return {boolean} - Returns boolean for whether the key is an operand or not
  */
  isOperator() {
    return this.operator;
  }

  /**
  *Method to add click listener to each key element instance
  * @param {Screen} screen - instance of the screen class
  */
  addClickListener(screen) {
    this.element.addEventListener('click', () => {
      let clickedValue = this.getValue();

      if (this.isOperator()) {
        if (this.innerHTML == '=') {
          screen.evaluate();
        } else if (this.innerHTML == 'AC' || this.innerHTML == 'C') {
          screen.clearScreen();
        } else {
          screen.updateScreen(clickedValue);
        }
      } else {
        screen.updateScreen(clickedValue);
      }
    });
  }
}
