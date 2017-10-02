'use restric'

var lcd = document.getElementById('screen'),
	key = document.getElementsByClassName('key'),
	validKeys = ['1','2','3','4','5','6','7','8','9','0','.','-','+','÷','x','CE','=','BCK','-/+'],
	// strValidKeys = ['1234567890.-+÷x=','CE','BCK','-/+'],
	tempLcd = '',
	calcResult = 0;


var isEmpty = function( strLcd , oprators ){
	return oprators.indexOf(strLcd[strLcd.length-1]) >= 0 || strLcd[strLcd.length-1] === '.';
}


var calculate = function( parse ){
	var answer = 0;
	for(let index = 0; index < parse.length - 1; index++){
		switch(parse[index]){
			case '+':
				answer += parse[index+1];
				index++;
				break;
			case '-':
				answer -= parse[index+1];
				index++;
				break;
			case '÷':
				answer /= parse[index+1];
				index++;
				break;
			case 'x':
				answer *= parse[index+1];
				index++;
				break;
			default:
				answer = parse[index];
				break;
		}
	}
	return answer;
}

var renderScreen = function(){
	lcdText = tempLcd === '' ? '0' : tempLcd;
	lcd.style.height = lcd.getAttribute('data-h') + 'px';
	lcd.innerHTML    = lcdText + '<hr/><div id="result">' + calcResult + "</div>";
}
renderScreen();


var converNumber = number => ( number.indexOf('.') > 0 ) ? parseFloat(number) : parseInt(number);

var makeNegative = function( oprators ){
	if( tempLcd === '' || tempLcd[tempLcd.length-1] === '0' || isEmpty(tempLcd, oprators)) 
		return '';


	var last ,sp;
	

	var ee = '12+32-(-11)-12÷(-34)x(-234)+2',
		isNeg = tempLcd.search(/\(\-\d+\)$/g) >= 0;

	if( isNeg ){
		last = '-' + tempLcd.split(/[+÷x-]\(\-/).pop().replace(/\(\-|\)/g,'');
		sp   = tempLcd.replace(new RegExp( "\\(" + last + "\\)$", 'g' ),'');
		// last 	= converNumber(tempLcd[tempLcd.length-1] === ')' ? '-' + last: last)*-1; 
	} else {
		last = tempLcd.split(/[+÷x-]+/).pop();
		sp   = tempLcd.replace( new RegExp( last + "$", 'i' ),'');
	}

	last 	= converNumber(last)*-1; 
	tempLcd = sp + (last > 0 ? last : '(' + last + ')');
	return ''
}

var parser = function( strLcd, oprators ){
	if( isEmpty( strLcd, oprators ) )
		strLcd = strLcd.slice(0,strLcd.length-1);

	var parse  = [],
		number = '';

	strLcd = strLcd.replace(/\(\-(\d+)\)/g,'N$1');

	for( let index = 0; index < strLcd.length; index++ ){
		if( oprators.indexOf(strLcd[index]) >= 0 ){
			parse.push(converNumber(number));
			number = '';
			parse.push(strLcd[index]);
		} else {
			if(strLcd[index] === 'N'){
				number += '-';
			}else{
				number += strLcd[index];
			}
		}
	}
	parse.push(converNumber(number));
	return calculate( parse );
}


var keyPress = function( event, keyValue = '' ){
	var keyValue = typeof event === 'string' ? event : this.innerHTML.trim(),
		indexKey = validKeys.indexOf(keyValue),
		oprators = validKeys.slice(11,15);

	if( indexKey < 0 )
		throw new Error('Key is not defined in this Calculator');


	if( keyValue === '=' ){
		calcResult = parser(tempLcd, oprators);
		keyValue = '';
	}

	if( keyValue === 'CE' ){
		calcResult = 0;
		keyValue = tempLcd = '';
	}

	if ( keyValue === '-/+' ){
		keyValue = makeNegative( oprators );
	}

	if ( keyValue === 'BCK' ){
		if( tempLcd[tempLcd.length-1] === ')' ){
			let backN = tempLcd.lastIndexOf('(-');
			tempLcd = tempLcd.slice(0,backN) + tempLcd.slice(backN+2);
		}
		tempLcd = tempLcd.slice(0,tempLcd.length-1);
		keyValue = '';
	}

	if( oprators.indexOf(tempLcd[tempLcd.length-1]) >= 0 || tempLcd === '' ){
		if( oprators.indexOf(keyValue) >= 0 )
			tempLcd = tempLcd.slice(0,tempLcd.length-1);
		else if( keyValue === '.' )
			keyValue = '0.';
	}

	if( tempLcd == '' && oprators.indexOf(keyValue) >= 0  )
		keyValue = '';

	if( tempLcd[tempLcd.length-1] == ')' && oprators.indexOf(keyValue) < 0  )
		keyValue = '';


	tempLcd += keyValue;
	renderScreen();
}


for( let index = 0; index < key.length; index++ ) {
	key[index].addEventListener("click", 
		keyPress,
		false
	);
}

document.addEventListener("keydown", keyDown, false);

function keyDown(e) {
	var keyCode = e.keyCode;


	if( keyCode === 13 ) 
		keyPress( '=' );

	if( keyCode >= 48 && keyCode <= 57)
		keyPress( String.fromCharCode(keyCode) );

	if( keyCode === 8 )
		keyPress( 'BCK' );

	if( keyCode === 27 )
		keyPress( 'CE' );

	if( keyCode === 187 )
		keyPress( '+' );

	if( keyCode === 190 )
		keyPress( '.' );

	if( keyCode === 191 )
		keyPress( '÷' );

	if( keyCode === 189 )
		keyPress( '-' );

	if( keyCode === 88 )
		keyPress( 'x' );

	if( keyCode === 192 )
		keyPress( '-/+' );
}




$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})