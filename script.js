function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function navbarAnimation(){
    gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  })
    gsap.to(".nav-part2 .links", {
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  })


}
navbarAnimation();


function videoconAnimation(){
    let videocon = document.querySelector(".video-container");

    let play = document.querySelector(".play");

    videocon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity: 1,
        scale: 1,
    })
  })
    videocon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity: 0,
        scale: 0,
    })
  })
    videocon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left: dets.x-70,
        top: dets.y-80,
    })
  })
}
videoconAnimation();

function loadingAnimation(){
    gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3,
  })
    gsap.from(".page1 .video-container",{
    scale:0.9,
    opacity:0,
    delay:1.1,
    duration:0.5,
    
  })
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
      left: dets.x,
      top: dets.y
    })
  })



 document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       gsap.to(".cursor", {
       transform: 'translate(-50%,-50%) scale(1)'
      }) 
    })
    elem.addEventListener("mouseleave",function(){
       gsap.to(".cursor", {
       transform: 'translate(-50%,-50%) scale(0)'
      }) 
    })

  })


}
cursorAnimation();


function detsAnimation(){
   var dets = document.querySelectorAll(".dets").forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
     gsap.to(".dets", {
      height : '35%'
    })
    })
  elem.addEventListener("mouseleave", function(){
    gsap.to(".dets", {
     height : '60px'
    })
  })
  elem.addEventListener("mouseenter",function(){
    gsap.to(".elem .dets .pictures .pic1 img",{
      opacity: 1,
      scale: 1,
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(".elem .dets .pictures .pic1 img",{
      opacity: 0,
      scale: 0,
    })
  })
  elem.addEventListener("mouseenter",function(){
    gsap.to(".elem .dets .pictures .pic1 h3",{
      opacity: 1,
      scale: 1,
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(".elem .dets .pictures .pic1 h3",{
      opacity: 0,
      scale: 0,
    })
  })




});

}

detsAnimation();

gsap.from(".div1 h2 p",{
 
  x:-100,
  opacity:0,
  delay:0.5,
  duration:0.9,
  stagger:0.3,
  scrollTrigger: {
    trigger: ".go1951807105",
    scroller: "#main",
   
    start: "top 90%",
    end: "top 70%",
    scrub: 3
    
  }

})
gsap.from(" .div2 p",{
 
  x: 100,
  opacity:0,
  scale: 1,
  delay:0.5,
  duration:0.3,
  stagger:0.1,
  scrollTrigger: {
    trigger: ".go2402956548",
    scroller: "#main",
   
    start: "top 90%",
    end: "top 70%",
    scrub: 3
    
  }

})

gsap.from("#child1,#child2,#child3,#child4",{
  scale:0,
  duration:2,
  stagger:0.3,
  scrollTrigger: {
    trigger:".page3",
    scroller:"#main",
    scrub: 5,
    
    start: "top 50%",
    end: "top 25%"
  }
})

gsap.from(".page4 #img2",{
  y:120,
  opacity:0,
  duration: 0.5,
  
  scrollTrigger: {
    trigger: ".page4",
    scroller: "#main",
    scrub: 3,
    
    start: "top 50%",
    end: 'top 35%'
  }
})
gsap.from(".page4 #img3",{
  y:-120,
  opacity:0,
  duration: 0.5,
  
  scrollTrigger: {
    trigger: ".page4",
    scroller: "#main",
    scrub: 3,
   
    start: "top 50%",
    end: 'top 35%'
  }
})
gsap.from(".info .h1, .info .p1, .info .p2, .info .p3",{
  x:-120,
  opacity:0,
  duration: 0.5,
  stagger:0.4,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "#main",
    scrub: 3,
    
    start: "top 50%",
    end: 'top 35%'
  }
})
gsap.from(".page5 h2",{
  scale:0,
  
  duration: 0.5,
  stagger:0.4,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    scrub: 1,
   
    start: "top 100%",
    end: 'top 99%'
  }
})



