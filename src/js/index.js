//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
// import "../component/icons.js";
// We don´t need home minute 4.
// //import your own components
// import { Home } from "./component/home.js";
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="puntos">{props.digitPuntos}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="puntos">{props.digitPuntos}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.PropTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitPuntos: PropTypes.string,
	digitOne: PropTypes.number
};
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
setInterval(function() {
	const six = Math.floor(counter6 / 1);
	const five = Math.floor(counter5 / 1);
	const four = Math.floor(counter4 / 1);
	const three = Math.floor(counter3 / 1);
	const two = Math.floor(counter2 / 1);
	const puntos = ":";
	const one = Math.floor(counter1 / 1);
	if (one == 9) {
		counter1 = 0;
		counter2++;
	}
	if (two == 6) {
		counter2 = 0;
		counter3++;
	}
	if (three == 9) {
		counter3 = 0;
		counter4++;
	}
	if (four == 6) {
		counter4 = 0;
		counter5++;
	}
	if (five == 9) {
		counter5 = 0;
		counter6++;
	}
	console.log(six, five, four, three, two, puntos, one);
	counter1++;
	// counter2++;
	// counter3++;
	// counter4++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitPuntos={puntos}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
