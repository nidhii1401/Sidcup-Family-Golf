// Heloo
let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 30 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

let h4 = document.querySelectorAll("#nav h4");
h4.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  ele.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

// Page-1
gsap.to("#nav", {
  backgroundColor: "black",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:"true",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Page-2
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:"true",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

//Page 3
gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:"true",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".cards", {
  scale: 0.8,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers:"true",
    start: "top 70%",
    end: "top 65%",
    scrub:2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
      },

})
