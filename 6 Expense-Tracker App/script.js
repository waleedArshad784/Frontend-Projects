

const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const categorySelect= document.getElementById('category');
const typeSelect = document.getElementById('type');
const addTransactionBtn = document.getElementById('addTransactionBtn');
const darkMode = document.getElementById('darkmode');
const transactionTable = document.getElementById('transactionTableBody');

let editingId= null;

let transactions = [];

addTransactionBtn.addEventListener('click', addTransaction);



function addTransaction(){
    
const title = titleInput.value;
const amount = Number(amountInput.value);
const category= categorySelect.value;
const type = typeSelect.value;

if(title === "" ){
    console.log("title is empty");
    return;
}
else if(amount === 0){
    console.log("amount is empty ")
 return;
}
else if(category === ""){
    console.log('cateory not select')
    return;
}
else if( type === ""){
    console.log('type is not select')
    return;



};
 const transcation = {
    id : crypto.randomUUID(),
    title ,
    amount ,
    category ,
    type  ,
    date :new Date(),

 }
 if (editingId == null){

 
 transactions.push(transcation);

 saveToLocalStorage();



updateDashboard();



displayTransactions();



clearForm();



toggleEmptyState();
 } 
 else {
   const foundtransection = transactions.find(item => item.id === editingId);

    foundtransection.title = title;
    foundtransection.amount= amount;
    foundtransection.category = category;
    foundtransection.type = type;
    editingId =null;
    displayTransactions();
    clearForm();
   


 }


}

function  displayTransactions(){
    transactionTable.innerHTML = "";
  transactions.forEach((transaction,index) => {
    let display = index+1;



        const row = document.createElement('tr');

        row.innerHTML =`
        <td>${display}</td> 
        <td> ${transaction.title}</td>
        
        <td>${transaction.amount}</td>
        <td>${transaction.category}</td>
        <td>${transaction.type}</td> 
        <td>${transaction.date}</td> 
        <td> <button class="editid">Edite </button>
        <button class="deleteBtn">Delete</button> </td>
         `;

        transactionTable.appendChild(row);
       

        const edittransection = row.querySelector('.editid');
        edittransection.addEventListener('click', ()=>{
            editTransectionId(transaction.id);
        })


        const deleteBtn =row.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click',() =>{
            deleteTransection(transaction.id);

        })
         });

}



 function deleteTransection(id){
    transactions = transactions.filter(item =>{
        return item.id !== id;
    })

    displayTransactions();
    updateDashboard();
    saveToLocalStorage();

toggleEmptyState();



 }

 function editTransectionId(id){
    const finditem = transactions.find( item =>{
      
        return item.id === id;
    });
    titleInput.value = finditem.title;
    amountInput.value = finditem.amount;
    categorySelect.value = finditem.category;
    typeSelect.value = finditem.type;
    editingId = id;


   






 }

 function clearForm(){
     titleInput.value="";
    amountInput.value = "";
    categorySelect.value = "";
    typeSelect.value = "";
 }

 function saveToLocalStorage(){

 }
 function updateDashboard(){

 }
 function toggleEmptyState(){

 }