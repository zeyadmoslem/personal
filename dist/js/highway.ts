import Highway from '@dogstudio/highway';
import CustomTransition from './tans';

const H = new Highway.Core({
  transitions: {
    default: CustomTransition
  }
});

// Get all menu links
const links = document.querySelectorAll('nav li a');

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on('NAVIGATE_IN', ({ to, location }) => {
  // Check Active Link
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    // Clean class
    link.classList.remove('is-active');

    // Active link
    if (link.href === location.href) {
      link.classList.add('is-active');
    }
  }


});


