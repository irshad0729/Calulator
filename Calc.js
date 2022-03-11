// var a=document.getElementsByTagName('div');
// var b=document.getElementsByTagName('input');
// var count=0;
// function countClick() {
// 	console.log(count);
// 	count++;
// }
// // b[0].addEventListener('keypress',countClick); 
// document.addEventListener('keydown',function(event){
// 	console.log('keydown',event.keyCode);

// } );

// var scroll=document.getElementById('scroll');
// var id;
// function scroll2() {
// 	window.scrollBy(0,60);
// 	window.pageYOffset
// 	scroll.innerText=window.pageYOffset;
// 	if(window.pageYOffset>300){
// 		clearInterval(id);
// 	}

// }

// function scroll1() {
// 		id=setInterval(scroll2,100);
// }

// scroll.addEventListener('click',scroll1);


var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');
var zero=document.getElementById('zero');
var zero=document.getElementById('zero');

var add=document.getElementById('add');
var minus=document.getElementById('minus');
var mul=document.getElementById('mul');
var div=document.getElementById('div');
var per=document.getElementById('per');
var plusMinus=document.getElementById('plusMinus');
var dot=document.getElementById('dot');
var ac=document.getElementById('ac');
var equal=document.getElementById('equal');
var output=document.getElementById('result');
var total="";

function one1() {
		
		total+=one.innerText;
		output.innerText=total;
	}
function two1() {
		total+=two.innerText;
		output.innerText=total;
	}
	function three1() {
		total+=three.innerText;
		output.innerText=total;
	}
	function four1() {
		total+=four.innerText;
		output.innerText=total;
	}


	function five1() {
		total+=five.innerText;
		output.innerText=total;
	}
	function six1() {
		total+=six.innerText;
		output.innerText=total;
	}
	function seven1() {
		total+=seven.innerText;
		output.innerText=total;
	}
	function eight1() {
		total+=eight.innerText;
		output.innerText=total;
	}
	function nine1() {
		total+=nine.innerText;
		output.innerText=total;
	}
	function zero1() {
		total+=zero.innerText;
		output.innerText=total;
	}

	function add1() {
		total+=add.innerText;
		output.innerText=total;
	}
	function minus1() {
		total+=minus.innerText;
		output.innerText=total;
	}
	function mul1() {
		total+=mul.innerText;
		output.innerText=total;
	}
	function div1() {
		total+=div.innerText;
		output.innerText=total;
	}
	function dot1() {
		total+=dot.innerText;
		output.innerText=total;
	}
	function plusMinus1() {
		let str=total;
		let sign=str.substr(0,1);
		let restStr=str.substr(1)
		if(sign=="-")
			total="+"+restStr;
		else 
			total="-"+total;

		output.innerText=total;
	}


	function equal1(){
		output.innerText=eval(total);
		total=output.innerText;
	};
	function ac1(){
		output.innerText="";
		total="";
	};
	function per1(){
		total+="/100";
		output.innerText=total;
		
	};


one.addEventListener('click',one1); 	
two.addEventListener('click',two1); 
three.addEventListener('click',three1); 
four.addEventListener('click',four1); 
five.addEventListener('click',five1); 
six.addEventListener('click',six1);
seven.addEventListener('click',seven1);
eight.addEventListener('click',eight1);
nine.addEventListener('click',nine1);
zero.addEventListener('click',zero1);
add.addEventListener('click',add1);
minus.addEventListener('click',minus1);
mul.addEventListener('click',mul1);
div.addEventListener('click',div1);
equal.addEventListener('click',equal1);
ac.addEventListener('click',ac1);
dot.addEventListener('click',dot1);
plusMinus.addEventListener('click',plusMinus1);
per.addEventListener('click',per1);

// Add keyboard event 

function useKeyboard(event) {
	

		if(event.keyCode==107){
			total+="+";
			output.innerText=total;
		}else if (event.keyCode==106) {
			total+="*";
			output.innerText=total;
		}else if(event.keyCode==111){
			total+="/";
			output.innerText=total;
		}else if(event.keyCode==109){
			total+="-";
			output.innerText=total;
		}else if(event.keyCode==13){
			total=eval(total);
			output.innerText=total;
		}


		else{
			total+=event.keyCode-96;
			output.innerText=total;
		}


		
	}
document.addEventListener('keydown',useKeyboard);





//var opr='*';
//var result=eval(a+" "+opr+" "+b);
//console.log(result);