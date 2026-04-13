document.addEventListener("DOMContentLoaded", () => {
  
  const totalBoxes = 40; // Cantidad de círculos en la estela
  const boxes = [];

  // 1. Inyectamos los  círculos en el body
  for (let i = 0; i < totalBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box-trail");
    document.body.appendChild(box);
    boxes.push(box);
  }

  // 2. Animamos la posición cuando el ratón se mueve
  window.addEventListener("mousemove", (e) => {
    
    // Hacemos visible la estela
    gsap.set(boxes, { opacity: 0.4 }); 

    boxes.forEach((box, index) => {
      gsap.to(box, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05, 
        delay: index * 0.002, // Efecto de cascada
        ease: "power2.out"
      });
    });
  });

  // 3. Desvanecer si el ratón sale de la ventana
  document.addEventListener("mouseout", () => {
    gsap.to(boxes, { opacity: 0, duration: 0.08 });
  });

});