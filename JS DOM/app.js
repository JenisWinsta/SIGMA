let btn=document.querySelector('button')
let div_color=document.querySelector('div').style;
btn.addEventListener("click",function(){
    let h3=document.querySelector('h3')
    h3.innerText=getRandomColor()
    div_color.backgroundColor=getRandomColor()
    console.log(getRandomColor())
})



function getRandomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    color=`rgb(${red},${green},${blue})`
    return color
    
}