gsap.registerPlugin(ScrollTrigger);

let ill = document.querySelector('.car__animation-block');
let tl1 = gsap.timeline({ paused: true });

tl1.to(ill, { duration: 2, x: 1000, scrollTrigger: { trigger: ".car__animation-block", start: 'top 50%', end: 'top 5%', scrub: 3 } });
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            tl1.play()
        }
    });
}
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.car__ill');
for (let elm of elements) {
    observer.observe(elm);
}