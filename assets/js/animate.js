gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  // !====header animation
  gsap.from(section.querySelector('.title-header'), {
    opacity: 0,
    y: 30,
    duration: 3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.white-btn'), {
    opacity: 0,
    y: 30,
    duration: 3,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  // !====about animation

  gsap.from(section.querySelector('.left-side'), {
    opacity: 0,
    x: -50,
    duration: 2,

    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.lapel-sections'), {
    opacity: 0,
    y: 30,
    duration: 3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.about-title'), {
    opacity: 0,
    y: 30,
    duration: 3,
    delay: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.about-des'), {
    opacity: 0,
    y: 30,
    duration: 3,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 50%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelectorAll('.blue-btn'), {
    opacity: 0,
    y: 30,
    duration: 3,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 8git checkout --orphan new-main
0%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  // !====courser animation

  gsap.from(section.querySelector('.title-coursers'), {
    opacity: 0,
    y: 30,
    duration: 2,
    delay: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.card-swiper '), {
    opacity: 0,
    x: -50,
    duration: 2,

    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  // !====gallery animation
  gsap.from(section.querySelector('.title-gallery'), {
    opacity: 0,
    y: 30,
    duration: 2,
    delay: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.g-card3'), {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.g-card2'), {
    opacity: 0,
    x: -50,
    duration: 2,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.g-card1'), {
    opacity: 0,
    x: -50,
    duration: 2,
    delay: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  // !====blog animation

  gsap.from(section.querySelector('.blog-des'), {
    opacity: 0,
    y: 30,
    duration: 2,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.b-card1'), {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.b-card2'), {
    opacity: 0,
    x: -50,
    duration: 2,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  gsap.from(section.querySelector('.b-card3'), {
    opacity: 0,
    x: -50,
    duration: 2,
    delay: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
});
