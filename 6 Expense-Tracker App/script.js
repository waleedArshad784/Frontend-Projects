

const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const categorySelect= document.getElementById('category');
const typeSelect = document.getElementById('type');
const addTransactionBtn = document.getElementById('addTransactionBtn');
const darkMode = document.getElementById('darkmode');
const transactionTable = document.getElementById('transactionTableBody');

const transactions = [];

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
 transactions.push(transcation);

 saveToLocalStorage();



updateDashboard();



displayTransactions();



clearForm();



toggleEmptyState();


}

function  displayTransactions(){
    transactionTable.innerHTML = "";
    for (const transaction of transactions) {

        const row = document.createElement('tr');

        row.innerHTML =`
        <td>${transaction.id}</td> 
        <td> ${transaction.title}</td>
        
        <td>${transaction.amount}</td>
        <td>${transaction.category}</td>
        <td>${transaction.type}</td> 
        <td>${transaction.date}</td> 
        <td> <button>Edite </button>
        <button>Delete</button> </td>
         `;

        transactionTable.appendChild(row);

}
}

