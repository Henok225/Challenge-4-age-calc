const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function calculate(){
    const dayInput = document.getElementById('day-input').value;
    const dayInput1 = document.getElementById('day-input');
    const monthInput = document.getElementById('month-input').value;
    const monthInput1 = document.getElementById('month-input');
    const yearInput = document.getElementById('year-input').value;
    const yearInput1 = document.getElementById('year-input');

    let dOut = 0;
    let mOut = 0;
    let yOut = 0;

dOut = currentDay - dayInput;
mOut = currentMonth - monthInput;
yOut = currentYear - yearInput;

var t1;
var t2;
var t3;
var t4;
var test2;
var test3;
var test4;

// for months that has 30 days
if(monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11){
    test4 = 1;
}


///// on blank field day
// if(test == 1){

if(dayInput === ""){
    console.log("empty field");
    document.querySelector('.day-err').innerText = "This field is required";
    dayInput1.style.borderColor = 'red';
    document.querySelector('.day-tit').style.color = "red";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    
}
else if(dayInput == 0 || dayInput > 31 || dayInput < 0){
    document.querySelector('.day-err').innerText = "Must be a valid day";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    dayInput1.style.borderColor = 'red';
}
else{
    document.querySelector('.day-err').innerText = "";
    dayInput1.style.borderColor = ' #dbdbdb ';
   t1 = 1;
}

///// on blank field month
if(monthInput === ""){
    
    document.querySelector('.month-err').innerText = "This field is required";
    monthInput1.style.borderColor = 'red';
    document.querySelector('.month-tit').style.color = "red";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
}
else if(monthInput == 0 || monthInput > 12 || monthInput < 0){
    document.querySelector('.month-err').innerText = "Must be a valid month";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    monthInput1.style.borderColor = 'red';
}
else{
    document.querySelector('.month-err').innerText = "";
    monthInput1.style.borderColor = ' #dbdbdb ';
t2 = 1;
}

///// on blank field year
if(yearInput === ""){
    
    document.querySelector('.year-err').innerText = "This field is required";
    yearInput1.style.borderColor = 'red';
    document.querySelector('.year-tit').style.color = "red";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
}
else if(yearInput == 0 || yearInput < 0){
    document.querySelector('.year-err').innerText = "Must be a valid year";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    yearInput1.style.borderColor = 'red';
}
else if(yearInput > currentYear ){
    document.querySelector('.year-err').innerText = "Must be in the past";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    yearInput1.style.borderColor = 'red';
}
else{
    document.querySelector('.year-err').innerText = "";
    t3 = "1";
    yearInput1.style.borderColor = '#dbdbdb ';
}

/// on invalid date


 //day

 if(test4 == 1 && dayInput > 30 ){

     document.querySelector('.day-err').innerText = "Must be a valid date";
document.querySelector('.result-year-num').innerText = "--";
document.querySelector('.result-month-num').innerText = "--";
document.querySelector('.result-day-num').innerText = "--";
yearInput1.style.borderColor = 'red';
monthInput1.style.borderColor = 'red';
dayInput1.style.borderColor = 'red';

 }

 else if(monthInput == 2 && dayInput > 29){
    
    document.querySelector('.day-err').innerText = "Must be a valid date";
    document.querySelector('.result-year-num').innerText = "--";
    document.querySelector('.result-month-num').innerText = "--";
    document.querySelector('.result-day-num').innerText = "--";
    yearInput1.style.borderColor = 'red';
monthInput1.style.borderColor = 'red';
dayInput1.style.borderColor = 'red';
}
else{
    t4 = 1;
}


//////////////////////////////////////////////////////////////////

 if(t1 == 1 && t2 == 1 && t3 == 1 && t4 == 1){

//////////


    if(dOut < 0){
        if(monthInput == 1 || monthInput == 3 || monthInput == 5 || monthInput == 7  || monthInput == 8 || monthInput == 10 || monthInput == 12){
            dOut += 31;
            mOut = mOut - 1;
            document.querySelector('.month-err').innerText = "";
            
        }
        else if(test4 == 1){
            
            dOut += 30;
            mOut = mOut - 1;
            document.querySelector('.month-err').innerText = "";
            
        }
        else if(monthInput == 2){
            dOut = dOut + 29;
            mOut = mOut - 1;
            document.querySelector('.month-err').innerText = "";
        }
        else{
            document.querySelector('.month-err').innerText = "Must be a valid month";
        }
    }
    
    else{
    document.querySelector('.day-err').innerText = "";
    }
    
    test2 = "finished";
}
////////////////////////////////////////////////////////

 if(test2 == "finished"){
// month
if(mOut < 0){
    mOut += 12;
    yOut = yOut - 1;
}
else{
document.querySelector('.month-err').innerText = "";
}
test3 = "finished";
}
/////////////////////////////////////
if(test3 == "finished"){
    document.querySelector('.result-month-num').innerText = mOut;
    document.querySelector('.result-year-num').innerText = yOut;
    document.querySelector('.result-day-num').innerText = dOut;
}

}