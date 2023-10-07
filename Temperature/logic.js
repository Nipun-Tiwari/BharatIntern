const search1=document.querySelector('#inp1')
const searchbtn1=document.querySelector('.submit1')
const search2=document.querySelector('#inp2')
const searchbtn2=document.querySelector('.submit2')
const reset=document.querySelector('.button-33')
function c2f(x){
    return (x*9/5)+32
}
function f2c(x){
    return (x-32)*5/9
}
searchbtn1.addEventListener('click', ()=>{
    document.querySelector('h2').style.display="block"
    document.getElementById('sec2').style.display="flex";
    document.querySelector('#res').innerHTML=`${c2f(search1.value).toFixed(2)}°F`
    document.querySelector('.button-33').style.color="red";
    window.scrollTo({top:document.body.scrollHeight, behavior: "smooth"})
})
searchbtn2.addEventListener('click', ()=>{
    document.querySelector('h2').style.display="block"
    document.getElementById('sec2').style.display="flex";
    document.querySelector('.result p').innerHTML=`${f2c(search2.value).toFixed(2)}°C`
    document.querySelector('.button-33').style.color="blue";
    window.scrollTo({top:document.body.scrollHeight, behavior: "smooth"})
})
reset.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(function(){
        location.reload();
    },500)
})

