import Highway from '@dogstudio/highway';
import Tween from "gsap";

class CustomTransition extends Highway.Transition {
    // Built-in methods
    in({ from, to, trigger, done }) {
        window.scrollTo(0, 0);

        from.remove();
        Tween.fromTo(to, 1.5, {opacity: 0}, {opacity: 1, delay: 0.4, onComplete: done});

    }
  
    out({ from, trigger, done }) {
        Tween.fromTo(from, 0.3, {opacity: 1}, {opacity: 0, delay: 0.1, onComplete: done});
    }
  }
  export default CustomTransition;