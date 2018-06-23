document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById("mycanvas")
  canvas.width = 500
  canvas.height = 500

  let ctx = canvas.getContext("2d")
  ctx.fillStyle = "purple"
  ctx.fillRect(0,0,500,500)

  ctx.beginPath()
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 5
  ctx.stroke()
  ctx.fillStyle = "red"
  ctx.fill()
  // ctx.lineWidth = "5"
  // ctx.lineWidth = "5"


});
