
/**
 *
 * Method to create nested Elements.
 * Returns an array of the Element nodes for further customization.
 * Only allowed tags under matchTag(Array)
 * Require at least 1 element tag. Add Optional element tags separated by space ' '
 * Example : createNestedElements('div div p')
 * @param elements (string)
 * @returns {Array}
 */
function createNestedElements(elements){

    var matchTag = [
        'div',
        'span',
        'p',
        'ul',
        'li'
    ];
    var domHolder = new Array();

    if(arguments.length === 1 && typeof elements === 'string'){

        var eleTagArray = elements.split(' ');

        //Check if argument match matchTag
        for(var i = 0; i < eleTagArray.length; i++){
            var check = matchTag.indexOf(eleTagArray[i]);
            if(check === -1){ //invalid tag
                console.log('Invalid HTML Tag. Please check again. Allowed Tags are ' + matchTag);
                return;
            }
        }


        //Create Element Node
        for(var i = 0; i < eleTagArray.length; i++){
            console.log(eleTagArray[i]);
            domHolder.push(document.createElement(eleTagArray[i]));
        }

        //Append Elements
        for(var i = 0; i < domHolder.length; i++){


            if(i+1 === domHolder.length){ //break appendChild on last element

                break;
            }
            domHolder[i].appendChild(domHolder[i+1]);



        }
        console.log(domHolder);
        return domHolder; // Return array of nodes to be customized


    }
    else{
        console.log('Please provide at least 1 Html tag from this list - ' + matchTag);
    }
}

console.log('what');

