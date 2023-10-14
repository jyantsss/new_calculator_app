let string = ""; // Initial string
let memory = 0 ; // Initial memory
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);    // Evaluating the string by using eval()
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "" ;   
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'M+') {
        memory += parseFloat(string);
        string = "";
        document.querySelector('input').value = string;
        
      } 
      else if (e.target.innerHTML == 'M-') {
        memory -= parseFloat(string); 
        string = "";
        document.querySelector('input').value = string;
      } 
      else if (e.target.innerHTML == 'MRC') {
        string = memory.toString();
        document.querySelector('input').value = string;
        memory = 0; // reset memory once the MRC button is pressed. 
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})