// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR
/* Write a JavaScript program to display the current day and time in the following format:
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function date(){
    let date = new Date();
    let days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let today = days[date.getDay()];
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds= date.getSeconds();
   
    let hora; 

    if(minutes < 10){
      minutes =`0${minutes}`;
    } 

    if(seconds <10){
      seconds =`0${seconds}`;
    }
    
    if(hour > 12){
      hour = hour -12;
      hora = `${hour} PM : ${minutes} : ${seconds}`;
    } else {
      hora =`${hour} AM : ${minutes} : ${seconds}`;
    }

    console.log(`Today is: ${today}`);
    console.log(`Current time is: ${hora}`); 
  }


  /*CURRENT OUTPUT
  Today is: Friday
  Current time is: 10 PM : 08 : 46*/
   
  date();