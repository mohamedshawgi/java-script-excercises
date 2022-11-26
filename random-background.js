const btn=document.querySelector('button');
const heading=document.querySelector('h1');

function makeRandomColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const randomColor=`rgb(${r},${g},${b})`;
    return randomColor;

}

btn.addEventListener('click',function(){
    const newClr=makeRandomColor();
    document.body.style.backgroundColor=newClr;
    heading.innerText=newClr;
}   
)