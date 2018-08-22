// // Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings 1233333你好啊 33333331321231!";
//     return greet;
//   };

// // use config.json
// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// }


//Greeter,js
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter