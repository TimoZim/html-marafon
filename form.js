let textField = document.querySelector("textarea");
let submitBtn = document.querySelector("input[type=submit]");

submitBtn.disabled = true;

textField.oninput = function() {
	if(textField.value.length < 10 || textField.value.length > 200) {
		submitBtn.disabled = true;
		textField.style.color = 'red';
	} 
	else {
		submitBtn.disabled = false;
		textField.style.color = 'black'
	}
}
