function getHistory(){
 return document.getElementById("history_value").innerText;
}
// alert(getHistory());
function printHistory(num) {
    document.getElementById("history_value").innerText=num;
    
}
function getOutput(){
    return document.getElementById("output_value").innerText;
}
function printOutput(num) {
    if(num==""){
        document.getElementById("output_value").innerText=num;
    }
    else{
    document.getElementById("output_value").innerText=getFormattedNumber(num);
}
}
function getFormattedNumber(num){ 
if(num=="-"){ //when minus sign is present in result we backspace
    return "";
}
    let n = Number(num);
    let value = n.toLocaleString("en"); //for comma to separating numbers
    return value;
    
}
// printOutput("");
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));
var operator = document.getElementsByClassName("operator");
for(var i = 0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){ //for clearing the number
        printHistory("");
        printOutput("");
        }
      else if (this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                //condition?true:false
                output=output==""?
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
        //alert("the operator clicked:"+this.id);
    });
}
    var number = document.getElementsByClassName("number");
for(var i = 0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if (output!=NaN){//if output is anumber
            output=output+this.id;
            printOutput(output);
        }
        //alert("the number clicked:"+this.id);
    });
}