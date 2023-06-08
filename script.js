const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d')
// canvas.width=window.innerWidth-100

const circle={
    x:300,
    y:300,
    radius:40,
    dx:5,
    dy:4
}

function drawCircle(){
    ctx.beginPath()
    ctx.arc(circle.x,circle.y,circle.radius,0,Math.PI*2)
    ctx.fillStyle="red"
    ctx.fill()
}

drawCircle()

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCircle()
    circle.x+=circle.dx
    circle.y+=circle.dy

    if(circle.x+circle.radius > canvas.width || circle.x-circle.radius < 0){
        circle.dx*=-1;
    }

    if(circle.y+circle.radius > canvas.height || circle.y-circle.radius < 0){
        circle.dy *=-1;
    }
    requestAnimationFrame(update)
}
update()