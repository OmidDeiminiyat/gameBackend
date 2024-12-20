let isNormal;
let isFirst;
let isHealth;
let isEat;
let myBool;
let beSad;
let isDie;

let riveInstance = new rive.Rive({
src: "../assets/anim.riv", 
canvas: document.getElementById('riveCanvas'),
autoplay: true,
stateMachines: ['controler', 'healthControl'], 
onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
    let controler_input = riveInstance.stateMachineInputs('controler')
    console.log('controler', controler_input);

    let healthControl = riveInstance.stateMachineInputs('healthControl')
    console.log('health', healthControl);

     isNormal = controler_input.find((item) => item.name === 'normal');
     isFirst = controler_input.find((item) => item.name === 'timeline1');
    isEat = controler_input.find((item) => item.name === 'eat');
    myBool = controler_input.find((item) => item.name === 'Bool');
    beSad = controler_input.find((item) => item.name === 'Sad');
    isDie = controler_input.find((item) => item.name === 'died');

     isHealth = healthControl.find((item) => item.name === 'numHealth');
   

},
});

export {isNormal, isFirst, isHealth, isEat, myBool, beSad, isDie};