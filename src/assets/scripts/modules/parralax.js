
const parralax = document.querySelector('.welcome-container'),
      layers = Array.from(parralax.children);

const moveLayers = e => {
    const initialX = (window.innerWidth/2) - e.pageX;
    const initialY = (window.innerHeight/2) - e.pageY;
    
    layers.forEach((layer,i)=>{
        const divider = (i/40),
            positionX = initialX*divider,
            positionY = initialY*divider;

        layer.style.transform = `translate(${positionX }px, ${positionY}px)`;
    });
};

window.addEventListener('mousemove', moveLayers );

