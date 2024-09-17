// Initialize Lenis

const lenis = new Lenis({
  duration: 1.2, // Adjust the duration for smoother scroll (higher value makes it slower)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  smooth: true, // Enable smooth scrolling
  smoothTouch: false,
  lerp: 0.07,
  // Optional: Set to true if you want smooth scrolling on mobile devices as well
});

// Scroll animation frame
function raf(time) {
  lenis.raf(time); // Update Lenis scroll position
  requestAnimationFrame(raf); // Loop animation
}

requestAnimationFrame(raf);

// Existing GSAP animations (leave these as is)
var blurElement = { a: 8 };

TweenMax.to(blurElement, 2.8, { a: 0, onUpdate: applyBlur });

function applyBlur() {
  TweenMax.set([".hero h1"], {
    webkitFilter: "blur(" + blurElement.a + "px)",
    filter: "blur(" + blurElement.a + "px)",
  });
}

gsap.from(".hero h1", {
  y: 80,
});

gsap.from(".hero h4", {
  y: 65,
  delay: 1,
  opacity: 0,
  stagger: 0.325,
});

gsap.from(".arrow", {
  y: 65,
  delay: 1,
  opacity: 0,
  stagger: 0.325,
});

gsap.from(".nav reveal", {
  y: 65,
  delay: 1.2,
  opacity: 0,
  stagger: 1,
});

gsap.registerPlugin(ScrollTrigger);

const tl2 = gsap.timeline({
  ease: "none",
  scrollTrigger: {
    trigger: ".video",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

tl2.to(".video video", {
  scale: 7,
  y: 650,
  duration: 1,
  borderRadius: "10px",
  transformOrigin: "bottom center",
});

ScrollTrigger.create({
  trigger: ".video video",
  start: "top top",
  end: "+=100vh",
  pin: true,
  animation: tl2,
  scrub: true,
  pinSpacing: false,
});

gsap.from(".page3 .background-text .left", {
  x: -200,
  duration: 1,
  scrollTrigger: {
    trigger: ".page3",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});
gsap.from(".page3 .background-text .right", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page3",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

gsap.to(".page4 .left h1", {
  y: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page5 .right h1", {
  y: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page4 .left p", {
  y: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page5 .right p", {
  y: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page4 .left .btn3", {
  y: 200,
  // opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page5 .right .btn4", {
  y: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page4 .right", {
  x: 250,
  rotate: "10%, 30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page5 .left", {
  x: -150,
  rotate: "-10%, 30%",
  duration: 3,
  scrollTrigger: {
    trigger: ".page5",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page6 .background-text .left", {
  x: -100,
  duration: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page6",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.from(".page6 .background-text .right", {
  x: 60,
  duration: 2,
  scrollTrigger: {
    trigger: ".page6",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

gsap.from(".page7 .ya p", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page7",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

gsap.from(".btn6", {
  y: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".page7",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

gsap.from("#card1", {
  x: -450,
  rotate: "-30%, 30%",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#card1",
    start: "top 90%", // Start animation when the trigger is near the viewport
    end: "top 80%", // End shortly after
    scrub: true, // Remove scrub to make it instant
  },
});

gsap.from("#card3", {
  x: -450,
  rotate: "-20%, 30%",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#card3",
    start: "top 90%",
    end: "top 80%",
    scrub: true,
  },
});

gsap.from("#card2", {
  x: 450,
  rotate: "30%, 30%",
  duration: 0.2,
  scrollTrigger: {
    trigger: "#card2",
    start: "top 90%",
    end: "top 80%",
    scrub: true,
  },
});

gsap.from("#card4", {
  x: 450,
  rotate: "20%, 30%",
  duration: 0.21,
  scrollTrigger: {
    trigger: "#card4",
    start: "top 90%",
    end: "top 80%",
    scrub: true,
  },
});

gsap.from(".page9 .background-text .left", {
  x: 130,
  duration: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page9",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

gsap.from(".page9 .background-text .right", {
  x: 150,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".page9",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let imageDiv = document.querySelector("#big");
let imageDiv2 = document.querySelector(".menu");
let imageDiv3 = document.querySelector(".marque h1");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.4,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 50px 30px #c5fcfc",
    },
  });
});

imageDiv2.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 50px 30px #c5fcfc",
    },
  });
});

imageDiv3.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 300px 220px #c5fcfc",
      color: "black",
    },
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 0px 0px #c5fcfc",
    },
  });
});

imageDiv2.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 0px 0px #c5fcfc",
    },
  });
});

imageDiv3.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#c5fcfc",
    css: {
      boxShadow: "0 0 0px 0px #c5fcfc",
    },
  });
});

// Select the button
const yoyoBtn = document.querySelector("#yoyo-btn");

// Ensure the button exists before adding event listeners
if (yoyoBtn) {
  yoyoBtn.addEventListener("mousemove", (e) => {
    const rect = yoyoBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // Increase the magnetic effect distance by scaling the delta values
    gsap.to(yoyoBtn, {
      x: deltaX * 1, // Increased multiplier for more distance
      y: deltaY * 1, // Increased multiplier for more distance
      duration: 0.3,
      ease: "power3.out",
    });
  });

  yoyoBtn.addEventListener("mouseleave", () => {
    // Reset the button position
    gsap.to(yoyoBtn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  });
}

document
  .querySelectorAll(".btn, .btn2, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn10")
  .forEach((btn) => {
    btn.addEventListener("mousemove", function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        duration: 0.3,
        x: x * 5, // Magnetic intensity
        y: y * 5,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", function () {
      gsap.to(btn, {
        duration: 0.3,
        x: 0,
        y: 0,
        ease: "power2.out",
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const counters = document.querySelectorAll(".number");

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");

    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          textContent: target,
          duration: 1,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            counter.textContent = Math.ceil(counter.textContent);
          },
        });
      },
      once: true,
    });
  });
});

window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-100%)",
      ease: "none",
      duration: 7,
      repeat: -1,
    });

    gsap.to("#move-left", {
      transform: "translateX(100%)",
      ease: "none",
      duration: 4,
      repeat: -1,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(100%)",
      ease: "none",
      duration: 7,
      repeat: -1,
    });

    gsap.to("#move-left", {
      transform: "translateX(-100%)",
      ease: "none",
      duration: 4,
      repeat: -1,
    });
  }
});

gsap.to(".page11 .left-img #yoyo1", {
  x: -450,
  rotate: "-30%, 30%",
  duration: 2,
  scrollTrigger: {
    trigger: "#yoyo1",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page11 .left-img #yoyo3", {
  x: -500,
  y: -120,
  rotate: "-10%, 30%",
  duration: 2,
  delay: 0,
  scrollTrigger: {
    trigger: ".one-packer",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page11 .left-img #yoyo5", {
  x: -300,
  y: -150,
  rotate: "-20%, 30%",
  duration: 2,
  delay: 0,
  scrollTrigger: {
    trigger: ".one-packer",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page11 .right-img #yoyo2", {
  x: 450,
  rotate: "30%, 30%",
  duration: 2,
  scrollTrigger: {
    trigger: "#yoyo2",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page11 .right-img .yoyo4", {
  x: 500,
  y: -120,
  rotate: "10%, 30%",
  duration: 2,
  delay: 0,
  scrollTrigger: {
    trigger: ".one-packer",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".page11 .right-img .yoyo6", {
  x: 300,
  y: -150,
  rotate: "20%, 30%",
  duration: 2,
  delay: 0,
  scrollTrigger: {
    trigger: ".one-packer",
    duration: 2,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page11 .main", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page11 .main ",
    duration: 1,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".page11-bottom .heading #pehelwaan", {
  x: -250,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".page11",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});
gsap.from(".page11 .heading #pehelwaan2", {
  x: 400,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page11",
    scrub: true,
    start: "top 30%",
    end: "bottom 20%",
  },
});

gsap.from(".page11 .heading #pehelwaan3", {
  x: 190,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page11",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});


gsap.from(".page11 footer #yayaya", {
  x: -150,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".page11 footer",
    scrub: true,
    start: "top 80%",
    end: "bottom center",
  },
});
gsap.from(".page11 footer #yayaya1", {
  x: 200,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".page11 footer",
    scrub: true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

// gsap.to(".btn10", {
//   y: -80,
//   opacity: 0,
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: ".page11 footer",
//     scrub: true,
//     start: "top 90%",
//     end: "bottom 20%",
//   },
// });

