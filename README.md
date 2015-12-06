# common

JS - Create nested elements with this function. 

    Returns an array of the Element nodes for further customization.
     Only allowed tags under matchTag(Array)
      Require at least 1 element tag. Add optional element tags separated by space ' '
      Example Usage: 
      
      var createWrapper = createNestedElements('div div p');
      //returns ['div', 'div', 'p']
      //Access 'p' node with createWrapper[2]
      
         Result : 
      <div>
        <div>
          <p></p>
        </div>
      </div>
      
      Example 2: 
      
      var createWrapper = createNestedElements('div div p');
      
      createWrapper[2].innerText = 'This is a paragraph';
      
          Result : 
      <div>
        <div>
          <p>This is a paragraph</p>
        </div>
      </div>
      
        Example 3: 
      
      var createWrapper = createNestedElements('div div');
      
      var anotherDiv = createNestedElements('div p');
      anotherDiv[1].innerText = 'A paragraph';
      
      createWrapper[1].appendChild(anotherDiv[0]);
      
      
          Result : 
      <div>
        <div>
          <div><p>A paragraph</p></div>
        </div>
      </div>
       
      
