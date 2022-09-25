$(document).ready(function () {
  //Tween
  $(function () {
    let controller = new ScrollMagic.Controller();

    //header tween
    let headerTween1 = TweenMax.to("#headerImg", 0.5, {
      opacity: 0,
      display: "none",
    });

    //header tween
    let headerTween2 = TweenMax.to("#headerText", 0.5, {
      opacity: 0,
      display: "none",
      background: "#eaeaea",
    });

    //header tween
    let headerTween3 = TweenMax.to("#headerSpan", 0.5, {
      display: "none",
    });

    //section1 title1 tween
    let sec1tween1 = TweenMax.to("#title1", 0.5, {
      x: 550,
    });

    //sec1-2 Intro highlight1
    let sec1tween2 = TweenMax.to("#highlight1", 0.5, {
      width: 380,
    });

    //.sec1-2Cont2 tween
    TweenMax.to(".sec1-2Cont2", 1, {
      y: -50,
      repeat: -1,
      yoyo: true,
    });

    //sec1-2 Intro highlight2
    let sec1tween3 = TweenMax.to("#highlight2", 1, {
      width: 280,
    });

    //section2 title3 tween
    let sec2tween1 = TweenMax.to("#title3", 0.5, {
      x: 300,
    });

    //section2 panel tween
    let wipeMotion = new TimelineMax();
    //second panel
    wipeMotion
      .to("#sec2con", 1, { z: -0 }) //z:-180
      .to("#sec2con", 1, { x: "-33.3333%" })
      .to("#sec2con", 1, { z: 0 })
      //third panel
      .to("#sec2con", 1, { z: -0 }) // z:-180
      .to("#sec2con", 1, { x: "-66.6666%" })
      .to("#sec2con", 1, { z: 0 });

    //section3 title5 tween
    let sec3tween1 = TweenMax.to("#title5", 0.5, {
      x: 350,
    });

    //header
    let scene1 = new ScrollMagic.Scene({
      triggerElement: "#section1",
      duration: 10,
      offset: -200,
    })
      .setTween(headerTween1)
      .addTo(controller);
    // .addIndicators();

    //header
    let scene2 = new ScrollMagic.Scene({
      triggerElement: "#section1",
      duration: 10,
      offset: -200,
    })
      .setTween(headerTween2)
      .addTo(controller);
    // .addIndicators();

    //header
    let scene3 = new ScrollMagic.Scene({
      triggerElement: "#section1",
      duration: 10,
      offset: -200,
    })
      .setTween(headerTween3)
      .addTo(controller);
    // .addIndicators();

    //section1 title1 tween
    let scene4 = new ScrollMagic.Scene({
      triggerElement: "#section1",
      duration: 80,
      offset: 150,
    })
      .setTween(sec1tween1)
      .addTo(controller);
    // .addIndicators();

    //section1 introBox tween
    let scene5 = new ScrollMagic.Scene({
      triggerElement: "#title1",
      offset: 280,
    })
      .setClassToggle("#introBox", "visible")
      .addTo(controller);
    // .addIndicators();

    //sec1-2 setpin tween
    let scene6 = new ScrollMagic.Scene({
      triggerElement: "#introBox",
      duration: 1000,
      offset: 350,
    })
      .setPin("#sec1-1")
      .addTo(controller);
    // .addIndicators({ name: "setSpin" });

    //sec1-2 Intro highlight1
    let scene7 = new ScrollMagic.Scene({
      triggerElement: "#introBox",
      offset: 200,
    })
      .setTween(sec1tween2)
      .addTo(controller);
    // .addIndicators();

    //sec1-2 Intro2
    let scene8 = new ScrollMagic.Scene({
      triggerElement: "#introBox",
      offset: 700,
    })
      .setClassToggle(".sec1-2Intro2", "visible")
      .addTo(controller);
    // .addIndicators();

    //sec1-2Cont
    let scene9 = new ScrollMagic.Scene({
      triggerElement: "#introBox",
      offset: 950,
    })
      .setClassToggle(".sec1-2Cont", "visible")
      .addTo(controller);
    // .addIndicators();

    //sec1-2 Cont highlight2
    let scene10 = new ScrollMagic.Scene({
      triggerElement: "#introBox",
      offset: 1000,
    })
      .setTween(sec1tween3)
      .addTo(controller);
    // .addIndicators();

    //section2 title3 tween
    let scene11 = new ScrollMagic.Scene({
      triggerElement: "#section2",
      duration: 80,
      offset: 250,
    })
      .setTween(sec2tween1)
      .addTo(controller);
    // .addIndicators();

    //section2 panel tween
    let scene12 = new ScrollMagic.Scene({
      triggerElement: "#sec2wrap",
      triggerHook: "onLeave",
      duration: "250%",
    })
      .setTween(wipeMotion)
      .setPin("#sec2wrap")
      .addTo(controller);
    // .addIndicators();

    //section3 title5 tween
    let scene13 = new ScrollMagic.Scene({
      triggerElement: "#section3",
      duration: 80,
      offset: 200,
    })
      .setTween(sec3tween1)
      .addTo(controller);
    // .addIndicators();
  });

  //mail
  (function () {
    emailjs.init("HaxbzsO3ag1POs2Py");
  })();

  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_81ara81", "template_jc9ka9l", this).then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      });
  };
});
