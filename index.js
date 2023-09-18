var crsr = document.querySelector("#cursor");
var crsr2 = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
   crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr2.style.left = dets.x -70 + "px";
  crsr2.style.top = dets.y -70 + "px";
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -35%",
      scrub: 1,
    },
  });
  gsap.to("#main", {
    backgroundColor: " rgba(0, 0, 0)",
        scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub:2,
    },
  });
