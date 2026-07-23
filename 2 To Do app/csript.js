const todo =[];
 const buttonAdd = document.getElementById('btn1'); 
const showtask = document.getElementById('show'); 
buttonAdd.addEventListener('click', taskinput);


function taskinput(){
    const inputT = document.getElementById('input');
    const inputTask = inputT.value;
    if(!inputTask){
        return ;
    }

    todo.push(inputTask);
    inputT.value ="";

const newdiv =   document.createElement('div');
 newdiv.classList.add('task-item');
 newdiv.textContent= `${inputTask}`;
 showtask.appendChild(newdiv);

 const newbutton =   document.createElement('button');
 newbutton.classList.add('delete-btn');
 newbutton.textContent= `Delete Task`;
 newdiv.appendChild(newbutton);

 newbutton.addEventListener('click', function(){
 newdiv.remove();

 const index = todo.indexOf(inputTask);
        if (index > -1) {
            todo.splice(index, 1);
        }


 }
);

    return;
   
 };


 







  




   

  
 
   


    

    


