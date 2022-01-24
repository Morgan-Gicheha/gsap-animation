// gsap.from('.header',{duration:.7,y:'-100%' })
// gsap.from('.link', {opacity:0, delay:.8, stagger:.15})
// gsap.from('.right', {x:'-100vw', ease: "power4.out", duration:1.5, delay:1.5})
// gsap.from('.left', {x:'-100vw', ease: "power4.out", duration:1.5, delay:1.5})
// gsap.from('.footer',{duration:.7,y:'100%' })
// gsap.fromTo('button',{ scale:0 }, {scale:1.5,rotation:360,delay:1.7, duration:1})

myTimeline = gsap.timeline({duration:1})
myTimeline
    .from('.header',{y:'-100%' })
    .from('.link', {opacity:0,  stagger:.35})
    .from('.right', {x:'-100vw', ease: "power4.out"},'<.1')
    .from('.left', {x:'-100vw', ease: "power4.out"}, '<.2')
    .fromTo('button',{ scale:0 }, {scale:1.5,rotation:360} ,'<')
    .from('.footer',{y:'100%' } ,1)

const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    myTimeline.timeScale(1.3)
    myTimeline.reverse()
})