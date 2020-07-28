console.log('connected')


function displayResult(test) {
    console.log('displayResult called on', test)
    if(palindrome(test)){
        // console.log('it is a palindrome!')
        document.getElementById('answer').innerHTML ="<h2 id='rightAnswer'> You did it mah boi</h2>"
    } else {
        // console.log("that's not a palindorm you dumbass")
        document.getElementById('answer').innerHTML ="<h2 id='wrongAnswer'> JIFFFFFF! </h2>"
    }
}
 
function palindrome(str) {
    
    var ok = str.toLowerCase();

    var regex = /[a-zA-Z0-9]/gi;
    var lettersOnly= ok.match(regex)
    // console.log(lettersOnly)
    
    
    var reversedArray =[...lettersOnly].reverse();
    console.log(lettersOnly,reversedArray)
    for (var i = 0; i < lettersOnly.length; i++){
      if (lettersOnly[i] !== reversedArray[i]){

        return false
      } 
      else {
        
      }
        }    
        return true;
    }

  
     
    
  

