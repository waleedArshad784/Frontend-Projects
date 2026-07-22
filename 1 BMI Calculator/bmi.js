const Button = document.getElementById('btn');
const heading = document.getElementById('h1');

const Result = document.getElementById('result');
const bmivalue = document.getElementById('bmi');

Button.addEventListener('click', calculateBmi);




function calculateBmi(){
  const height = Number(document.getElementById('height').value);
const weight = Number(document.getElementById('weight').value);

  
      if(height <= 0   ){
     Result.innerHTML="<h2>Invalid height</h2>";
      // Result.innerHTML = "<h3>Please enter the valid height </h3>"
     return
    
    }
    
    else if (weight <= 0   ){
       Result.innerHTML="<h2>Invalid weight</h2>";
      
       return
       
   
    }


  
    
 const heightinMeter = height * 0.3048;
  

  const BMI = Number  ( Math.floor(weight / (heightinMeter * heightinMeter)));

 

   if (BMI < 18.5){
    Result.innerHTML = "<h2> Catagory : Under weight </h2> ";
     bmivalue.innerHTML =  `<h2> BMI Value : ${BMI} </h2>`;
    
     return;

  }
   else if (BMI >= 18.5  &&  BMI <=24.9){

       Result.innerHTML = "<h2> Catagory : Normal </h2> ";
       bmivalue.innerHTML =  `<h2> BMI Value : ${BMI} </h2>`;
     return;


   }
   else if (BMI >= 25  &&  BMI <=29.9){

       Result.innerHTML = "<h2> Catagory : Overweight </h2> ";
       bmivalue.innerHTML =  `<h2> BMI Value : ${BMI} </h2>`;
     return;
     

   }
    else {

       Result.innerHTML = "<h2> Catagory : Obess </h2> ";
       bmivalue.innerHTML =  `<h2> BMI Value : ${BMI} </h2>`;
     console.log(BMI);
     return;
     

   }
 




 
}