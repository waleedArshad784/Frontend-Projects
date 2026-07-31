    const input = document.querySelector('#title');
    const note = document.querySelector('#description');
    const addButton = document.querySelector('#addBtn');
    const notescontainer = document.querySelector('#notesContainer');
    const totalNotes = document.querySelector('#totalNotes');
    const emptyState = document.querySelector('#emptyState');

    let arr =[
    
    ]
    
    addButton.addEventListener('click', addNote);
    
    function addNote(){
        console.log("Button Clicked");
        const title=input.value;
        const notes = note.value;

     if (title != "" && notes != "") {

    const obj = {
        id: crypto.randomUUID(),
        title: title,
        description: notes,
        date: new Date(),
    };

    arr.push(obj);
    console.log(arr)
    display(); 
    input.value ="";
    note.value ="";

}

      



    }
function display() {

    notescontainer.innerHTML = "";

    for (const item of arr) {


        const card = document.createElement("div");

        card.className = "bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300";

        card.innerHTML = `

         <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">

            <div class="flex justify-between items-start">

                <div>

                    <h3 class="text-2xl font-semibold text-slate-800">
                        ${item.title};
                    </h3>

                    <p class="text-slate-500 text-sm mt-1">
                     ${item.date};
                    
                    </p>

                </div>

                <span
                    class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">

                    Design

                </span>

            </div>

            <p class="text-slate-600 leading-7 mt-5">

                 ${item.description};

            </p>

            <div class="flex justify-end gap-3 mt-6">

                <button
                    class="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-medium transition">

                    ✏ Edit

                </button>

                <button
                    class="deleteBtn px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition">

                    🗑 Delete

                </button>

            </div>

        </div>
     
        `;

        notescontainer.appendChild(card);


        const deleteBtn = card.querySelector('.deleteBtn');


    deleteBtn.addEventListener('click', ()=>{
       

        deleteNote(item.id);

    })
    }
  
}





function deleteNote(id){
   arr = arr.filter(item =>{
    return item.id !== id;
   });
   display();


      console.log(newArr);


        
};



 
