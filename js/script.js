var str1 = document.inputform.calcinput.value;
var str2 = document.resultform.resultinput.value;

function D() {
	document.resultform.resultinput.value = document.resultform.resultinput.value.substring(0,document.resultform.resultinput.value.length-1);
}
function C() {
	document.inputform.calcinput.value = "";
	document.resultform.resultinput.value = "";
}
function CE(){
	document.resultform.resultinput.value = "";
}
function plusminus() {
	document.resultform.resultinput.value = '(' + '-' + (document.resultform.resultinput.value) + ')';
}
function dotinsert() {
	var nums = document.inputform.calcinput.value;
	if(document.inputform.calcinput.value = "") {
	alert('Число не может начинаться с точки');
	} else if(document.resultform.resultinput.value.indexOf('.') < 0) {
		document.resultform.resultinput.value = document.resultform.resultinput.value + '.';
		document.inputform.calcinput.value = nums;
	} else {
		alert("В числе точка может быть только одна!");
	}
}
function numinsert(num) {
	document.resultform.resultinput.value = document.resultform.resultinput.value + num;
}
function operinsert(oper) {
	if(document.resultform.resultinput.value == "") {
		document.inputform.calcinput.value = document.inputform.calcinput.value.substring(0,document.inputform.calcinput.value.length-1);
		document.inputform.calcinput.value = document.inputform.calcinput.value + document.resultform.resultinput.value + oper;
	} else if(document.inputform.calcinput.value.indexOf('=') > 0) {
		document.inputform.calcinput.value = document.resultform.resultinput.value + oper;
		document.resultform.resultinput.value = "";
	} else {
		document.inputform.calcinput.value = document.inputform.calcinput.value + document.resultform.resultinput.value + oper;
		document.resultform.resultinput.value = "";
	}
}
function calc() {
	if(document.resultform.resultinput.value == "") {
		document.inputform.calcinput.value = document.inputform.calcinput.value.substring(0,document.inputform.calcinput.value.length-1);
		var str = document.inputform.calcinput.value + document.resultform.resultinput.value;
		var num = document.resultform.resultinput.value;
		str = eval(str);
		document.resultform.resultinput.value = str;
		document.inputform.calcinput.value = document.inputform.calcinput.value + num + "=";
	} else if(document.inputform.calcinput.value.indexOf('=') > 0) {
		document.inputform.calcinput.value = "";
	} else {
	var str = document.inputform.calcinput.value + document.resultform.resultinput.value;
	var num = document.resultform.resultinput.value;
	str = eval(str);
	document.resultform.resultinput.value = str;
	document.inputform.calcinput.value = document.inputform.calcinput.value + num + "=";
	}
}


document.addEventListener('keyup',(event) => {
        switch (event.key){
			case '1':
				numinsert('1');
				break;
			case '2':
				numinsert('2');
				break;
			case '3':
				numinsert('3');
				break;
			case '4':
				numinsert('4');
				break;
			case '5':
				numinsert('5');
				break;
			case '6':
				numinsert('6');
				break;
			case '7':
				numinsert('7');
				break;
			case '8':
				numinsert('8');
				break;
			case '9':
				numinsert('9');
				break;
			case '0':
				numinsert('0');
				break;
			case '.':
				dotinsert();
				break;
			case '+':
				operinsert('+');
				break;
			case '-':
				operinsert('-');
				break;
			case '*':
				operinsert('*');
				break;
			case '/':
				operinsert('/');
				break;
			case 'Enter':
				calc();
				break;
			case 'Backspace':
				D();
				break;
			case 'Delete':
				CE();
				break;
			case 'Escape':
				C();
				break;
			case ' ':
				plusminus();
				break;
				
        }
})






