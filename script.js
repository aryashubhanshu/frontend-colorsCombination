function tl1() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom -250%",
        }
    })
    
    tl
    .to("#centerimg #cimage", {
        left: "0%",
        duration: 3,
    })
    .to("#circle #btm img", {
        scale: 1,
        rotate: "-180deg",
        duration: 1,
        stagger: 0.1,
        ease: Power1
    }, "home")
    .to("#circle #top img", {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: Power1
    }, "home")
    .to("#cimage img", {
        scale: 0,
        duration: 1,
        ease: Power1
    }, "home")
    .to("#centerimg h5", {
        opacity: 0,
        stagger: 0.1,
        ease: Power1
    }, "home")
    .to("#circle", {
        scale: 0.6,
        ease: Power1
    }, "home")
    .to("#overlay>h1#gallery", {
        bottom: "-50%",
        ease: Power1
    }, "home")
    .to("#gola", {
        top: "50%",
        scale: 2,
        ease: Power1
    }, "home")
    .to("#gola", {
        opacity: 0,
        duration: 2.2,
        ease: Power1
    }, "home2")
    .to("#smcircle", {
        scale: 0,
        duration: 2,
        ease: Power1
    }, "home2")
    .to("#circle", {
        scale: 0,
        duration: 2,
        ease: Power1
    }, "home2")
    .to("#overlay>h1#pf", {
        rotate: 0,
        opacity: 1,
        bottom: "10%",
        ease: Power1
    }, "home2")
    .to("#pinkpart", {
        top: 0,
        duration: 5,
        ease: Power1
    }, "home2")
    .to("#pinkpart", {
        top: "-30%",
        duration: 3,
        ease: Power1
    })    
}

tl1();

function tl2() {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            end: "bottom -150%",
            pin: true
        }
    });

    tl2
    .to(".circle", {
        top: "50%",
        stagger: 0.1,
        ease: Power1 
    })
    .to(".circle", {
        left: "50%",
        stagger: 0.1,
        ease: Power1 
    })
    .to(".pink", {
        scale: 10,
        ease: Power1
    })
    .to(".pink", {
        background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
        ease: Power1
    })
    .to("#stop h1", {
        left: "-200%",
        duration: 8,
        ease: Power1
    }, "second")
    .to("#sbtm #sbtm-two", {
        opacity: 0,
        duration: 3,
        ease: Power1
    }, "second")
    .to("#sbtm #sbtm-one", {
        opacity: 1,
        delay: 1,
        duration: 3,
        ease: Power1
    }, "second")
}

tl2();