// JavaScript Document

//change display
function d(val) {
		document.getElementById("d").value = val;
}

//Type numbers and operators
function v(val) {
		document.getElementById("d").value += val;
}

//evaluate the equation
function e() {
		try {
			  d(eval(document.getElementById("d").value));
		}
		catch(err) {
			d("Error");
		}
//my own function

}