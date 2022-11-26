const submit=document.querySelector('button');    
const text1=document.querySelector('input');
const result=document.querySelector(".result")
let right=[];
let left=[];

text1.addEventListener('change',function(){
    right=[];
    left=[];
    for (let i=0;i<text1.value.length;i++){
        if (text1.value[i]==="("){
            right.push(i);
        }else if (text1.value[i]===")"){
            left.push(i);
        }
    }
    if (left.indexOf(0)==-1){ //check if the input does not start with a ")"
        if (left.length===right.length){
            // for (let j=0;j<left.length;j++){
            //     if (right[i]<left[i]){
            //         result.innerHTML="Invalid, revise the order of the parenthesis"
            //     }
            // }// check if the number of ( & ) is equal
            result.innerHTML="Valid";
        }else{
            result.innerHTML="Invalid";
        }
    }else{
        result.innerHTML="Invalid";
    }
})

// })




