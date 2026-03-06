import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

window.addEventListener('load', function () {
    // Option 1 : version la plus fiable
    document.body.classList.add('loaded');

    // Option 2 : si tu préfères cibler seulement le hero
    // document.querySelector('.hero-content')?.classList.add('loaded');

    // Bonus : enlève .sr si tu veux nettoyer l’ancien système
    document.documentElement.classList.remove('sr');
});
