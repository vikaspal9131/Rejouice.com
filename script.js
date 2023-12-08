function cursorEffect(){
  let page1Content = document.querySelector(".page1-content");
let cursor = document.querySelector(".cursor");


page1Content.addEventListener("mousemove" ,function(motion){
  gsap.to(cursor,{
    x:motion.x,
    y:motion.y
  })
});

page1Content.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })
})
page1Content.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})
}

cursorEffect();
