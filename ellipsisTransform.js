/**
Usage ellipsisTransform('hello there', 5, '...')
return 'hello...'

@params string (required), number (required), string (optional)
returns edited inputString
*/
function ellipsisTransform(inputString, maxLength, ellipsis){

	var append = '..';
	var splitted;
	var finalString;

	if(arguments.length !== 2 && arguments.length !== 3){
		throw new Error('Missing arguments')
	}

	if(typeof inputString !== 'string'){
		inputString = String(inputString);
	}

	if(typeof maxLength !== 'number'){
		throw new Error('maxLength must be a number')
		
	}

	if(arguments.length === 3){

		append = String(ellipsis);
	}
	
		
	

	if(inputString.length <= maxLength){
		return inputString;
	}
	
	if(inputString.length > maxLength){
		inputString = inputString.substring(0, maxLength);
		splitted = inputString.split('');
		if(splitted[maxLength-1] === ' '){
			splitted[maxLength-1] = append;
			finalString = splitted.join('');
		}else{
			finalString = inputString + append;
		}
	};

	return finalString;

	
}
