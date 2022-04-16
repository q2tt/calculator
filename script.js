let getEl = selector => document.querySelector(selector);
let form1 = getEl('.form1');
let form2 = getEl('.form2');

let allBank = JSON.parse(localStorage.getItem('allBank')) || [];
let allInterRate = JSON.parse(localStorage.getItem('allInterRate')) || [];
let allMaxLoan = JSON.parse(localStorage.getItem('allMaxLoan')) || [];
let allMinPayment = JSON.parse(localStorage.getItem('allMinPayment')) || [];
let allTerm = JSON.parse(localStorage.getItem('allTerm')) || [];

let regExp = /^\d{1,3}$/ ;
let regExp2 = /^\d{1,7}$/ ;
let regExp3 = /^\d{1,5}$/ ;

getEl('.max-sum').oninput = function(){
    let testTerm = regExp2.test(getEl('.max-sum ').value)
    if(testTerm){
        getEl('.max-sum').classList.remove('red_brd');
    }
   else{
    getEl('.max-sum').classList.add('red_brd');
   }
}
getEl('.min-sum').oninput = function(){
    let testTerm = regExp3.test(getEl('.min-sum ').value)
    if(testTerm){
        getEl('.min-sum').classList.remove('red_brd');
    }
   else{
    getEl('.min-sum').classList.add('red_brd');
   }
}
getEl('.term').oninput = function(){
    let testTerm = regExp.test(getEl('.term').value)
    if(testTerm){
        getEl('.term').classList.remove('red_brd');
    }
   else{
    getEl('.term').classList.add('red_brd');
   }
}
getEl('.rate').oninput = function(){
    let testRate = regExp.test(getEl('.rate').value)
    if(testRate){
        getEl('.rate').classList.remove('red_brd');
    }
   else{
    getEl('.rate').classList.add('red_brd');
   }
}

let i;

function addUser() {
    let bank = form1.elements[0].value;
    let interRate = form1.elements[1].value;
    let maxLoan = form1.elements[2].value;
    let minPayment = form1.elements[3].value;
    let term = form1.elements[4].value;
    form1.reset();
    getEl('.max-sum').classList.remove('red_brd');
    getEl('.min-sum').classList.remove('red_brd');
    getEl('.term').classList.remove('red_brd');
    getEl('.rate').classList.remove('red_brd');
    allBank.push(bank);
    localStorage.setItem('allBank', JSON.stringify(allBank));
    allInterRate.push(interRate);
    localStorage.setItem('allInterRate', JSON.stringify(allInterRate));
    allMaxLoan.push(maxLoan);
    localStorage.setItem('allMaxLoan', JSON.stringify(allMaxLoan));
    allMinPayment.push(minPayment);
    localStorage.setItem('allMinPayment', JSON.stringify(allMinPayment));
    allTerm.push(term);
    localStorage.setItem('allTerm', JSON.stringify(allTerm));
     rander();
}
function rander(){
    getEl('.tb').innerHTML = ' ';
     getEl('.tb').innerHTML += `<tr class="tr"><td>Bank</td><td>Interest rate</td><td>Maximum loan</td><td>Minimum down payment</td><td>Loan term</td><td></td><td></td></tr>`

    for( i=0; i<allBank.length; i++){
        getEl('.tb').innerHTML += `<tr class="tr"><td class="bolt">${allBank[i]}</td><td>${allInterRate[i]}</td><td>${allMaxLoan[i]}</td><td>${allMinPayment[i]}</td><td>${allTerm[i]}</td><td><input type="button" onclick="editUser(${i})" class="btn-edit" value="EDIT"></td><td><input type="button" onclick="deleteUser(${i})" class="btn-del" value="DELETE"></td></tr>`

    }
}
rander();

function deleteUser(i) {
    allBank.splice(i, 1)
    allInterRate.splice(i, 1)
    allMaxLoan.splice(i, 1)
    allMinPayment.splice(i, 1)
    allTerm.splice(i, 1)
    rander();
}

function editUser(i){
    form1.elements[0].value= allBank[i];
    form1.elements[1].value= allInterRate[i];
    form1.elements[2].value= allMaxLoan[i];
    form1.elements[3].value= allMinPayment[i];
    form1.elements[4].value= allTerm[i];
    deleteUser(i);
}

