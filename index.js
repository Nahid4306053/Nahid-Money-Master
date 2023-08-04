let allCalculatorElemnt = document.querySelectorAll('.inputVal');

 const [Income,Food, Rent,  Cloth,  Others, totalExpencess , exAfterBalance , savingPercent , savingAmount ,remainingBalance ] = allCalculatorElemnt;
 let afterExpenseBalance = 0;
 let calculatebuttons =  document.querySelectorAll('.buttons');
  let calculateExpenses = 0;
 const [ExCalButton , savingButton] = calculatebuttons;
   ExCalButton.addEventListener("click",()=>{
    let getInt = [Income , Food , Rent , Cloth , Others ];
     if(Income.getAttribute('type') === 'number' && Income.value !== "" &&  Income.value > 0 ){
       let  chekinpArray = [] 
       getInt.map((getitems)=>{
            if(getitems.getAttribute('type') === "number" &&  getitems.value != "" && getitems.value > 0 ){
                let convertInt =  getitems.value; //parseInt(getitems.value);
                chekinpArray.push(convertInt);
            }
            else{
            }
        });
        let additionEx = 0;
        for(let get of chekinpArray.slice(1)){
            if(get !== ""){
                additionEx+= parseInt(get);
            }
        }
        if(chekinpArray[0] > additionEx){
            totalExpencess.innerText = additionEx ;
            afterExpenseBalance = chekinpArray[0] - additionEx ;
            exAfterBalance.innerText = afterExpenseBalance;
        }
        else{
            alert("Hey! You can't spent your money greter then Your Income")
        }
     }  
     else{
        alert("Please Give me a Income Amount")
     }
}) 

savingButton.addEventListener('click',()=>{
  
    if(afterExpenseBalance > 0){
      if(savingPercent.value == "" || savingPercent.value <0 || savingPercent.value >100){
        alert("You need to dicliare a number 1 to 100")
      }
      else{
        var getpercentAmount = (afterExpenseBalance * savingPercent.value )/100
        savingAmount.innerText = getpercentAmount;
        remainingBalance.innerText =  afterExpenseBalance - getpercentAmount;
      }
    } 
    else{
       alert('Your Balance Is 0')
    }
  
})

