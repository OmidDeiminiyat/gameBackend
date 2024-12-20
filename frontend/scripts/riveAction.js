import { isNormal } from "./riveControler.js";
import { isFirst } from "./riveControler.js";
import { isHealth } from "./riveControler.js";
import { isEat } from "./riveControler.js";
import { myBool } from "./riveControler.js";
import { socket } from "./socket/socketController.js";
import { beSad } from "./riveControler.js";
import { isDie } from "./riveControler.js";





const test = isHealth;
console.log(test);

let feedButton = document.getElementById('feedButton');

window.addEventListener("keydown", (ev) => {

    console.log(ev.key);
    
    if (ev.key === 'f') {
        const Sad = () => {
            beSad.fire();
        };
        Sad();
    }

    if (ev.key === 'ArrowUp') {
        console.log('its up');
        
        const feed = () => {
            isNormal.fire();
        };

        feed();
    }


    if (ev.key === 'ArrowDown') {
        
        const second = () => {
            isFirst.fire();
        }
        second();
    }

    if (ev.key === 'a') {
        const eating = () => {
            isEat.fire();

            socket.emit('feed', {isEat: 'client feeds'});
        };
        eating();

    function updateHealthValue(amount) {
        
        if (isHealth.value) {
            console.log(isHealth.value);
             isHealth.value += amount; 
        } else {
          console.error('value is not available.');
        }
      }
      updateHealthValue(10);
    }

 
      
    
})



const feed = () => {
    isNormal.fire();
};

feedButton.addEventListener("click", () => {
    feed();
});