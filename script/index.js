$(document).ready(function(){

  //section1 marquee
  const pTag1 = document.querySelector('.first-parallel')
  
  const textArr1 = 'adaptability sincere cooperation Achieved Improved interpersonal relations improved accomplish attention to details Career aspirations created designed'.split(' ')

  let count1= 0

  initTexts(pTag1, textArr1)

  
  function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
  }

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translate3d(0, 0, 0)`
      count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`
  
    return count
  }

  function animate() {
    count1++

    count1 = marqueeText(count1, pTag1, -1)

    window.requestAnimationFrame(animate)
  }

  function scrollHandler() {
    count1 += 15
  }

  window.addEventListener('scroll', scrollHandler)
  animate()

  
  $(window).on('scroll', function(){
    let num = $(this).scrollTop();
    console.log(num);
    if(num >= 1200){
      $('.sec1Box1Img').addClass('on');
      $('.sec1Text2').addClass('on');
    }//sec1 animation

    if(num >= 1830){
      $('.sec2 .sec2Box1-1').addClass('on');
    }
    if(num >= 2900){
      $('.sec2 .sec2Box2-1 span').addClass('on');
    }
    if(num >= 3500){
      $('.sec2 .sec2Box3-1').addClass('on');
    }
  });

  new CircleType(document.getElementById('sec3Text1'))
  .radius(1000);

  //mail
  (function() {
    emailjs.init('HaxbzsO3ag1POs2Py');
  })();
  
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_81ara81', 'template_jc9ka9l', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
  }


});