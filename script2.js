let getEl = selector => document.querySelector(selector);
let form2 = getEl('.form2');

function choose(){
    getEl('.select').classList.remove('none');
    getEl('.choose-b').classList.add('none');
    var select = getEl('.select'); 
    let banks = JSON.parse(localStorage.allBank); 
        for(let a = 0; a< banks.length; a++){
            var opt = banks[a];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
}

let option;
function findOption(select) {
    option = select.querySelector(`option[value="${select.value}"]`)
   
}

function count(){
    let init1Loan = form2.elements[0].value;
    let downPay = form2.elements[1].value;
    let banks = JSON.parse(localStorage.allBank); 
    let interRates = JSON.parse(localStorage.allInterRate); 
    let initLoan = JSON.parse(localStorage.allMaxLoan); 
    let minPayments = JSON.parse(localStorage.allMinPayment); 
    let terms = JSON.parse(localStorage.allTerm); 
    let num;
    for(let a = 0; a< banks.length; a++){
        if(option.value == banks[a]){
           num = a;
        }
    }
    
    
    if(parseInt(init1Loan)>parseInt(initLoan[num])){
        getEl('.err').classList.remove('none');
        getEl('.super').classList.add('none');
        getEl('.err').textContent = "Maximum loan in "+banks[num]+" is "+initLoan[num];
        }
        else if(parseInt(init1Loan)<=parseInt(initLoan[num])){
            if(parseInt(minPayments[num])>parseInt(downPay)){
                getEl('.err').classList.remove('none');
                getEl('.super').classList.add('none');
                getEl('.err').textContent = "Minimum down payment in "+banks[num]+" is "+minPayments[num];
            }
            else if(parseInt(minPayments[num])<=parseInt(downPay)){
                    getEl('.err').classList.add('none');
                    getEl('.super').classList.remove('none');
                    var i = parseFloat( interRates[num] / 100 / 12 );
                    var payment = ( init1Loan - downPay ) * ( ( i * Math.pow( 1+i, terms[num] ) ) / ( Math.pow( 1+i, terms[num] ) - 1 ) );
                    getEl('.credit-term').textContent = terms[num];
                    getEl('.credit-pay').textContent = payment.toFixed(2);
                }
        }
    
}

