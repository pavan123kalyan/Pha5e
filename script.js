document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations for hero content
    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    gsap.from(".floating-image", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Parallax effect on mouse move
    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        gsap.to(".hero-content", {
            x: (x - window.innerWidth / 2) * 0.05,
            y: (y - window.innerHeight / 2) * 0.05,
            duration: 0.5,
            ease: "power3.out"
        });
    });
});
