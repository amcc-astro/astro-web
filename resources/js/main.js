import anime from './anime.es.js';
import { ScrollAnimator } from './animations.js';
import { Cursor } from './cursor.js';
var grids = document.querySelectorAll(".grid");
var animator = new ScrollAnimator([]);
for (var i = 0; i < grids.length; i++) {
    var grid = grids[i];
    if (grid.classList.contains("noanimation"))
        continue;
    var anim = anime({
        targets: '#' + grid.id + ' .card',
        margin: ['5%', 0],
        easing: 'easeInOutSine',
        duration: 400,
        delay: anime.stagger(300, { grid: [2, 3] }),
        loop: false,
        autoplay: false
    });
    anim.container = grid.closest(".slide");
    animator.animations.push(anim);
    animator.init();
}
;
var backgroundAnim = anime({
    targets: ['#stars', "#stars2", "#stars3"],
    translateX: [-500, -1000],
    easing: 'easeInOutSine',
    delay: anime.stagger(300),
    duration: 5000,
    autoplay: false,
    loop: false
});
backgroundAnim.container = document.querySelector(".slides");
animator.animations.push(backgroundAnim);
var mobileMenuButton = document.querySelector("mobilenav");
var desktopMenuButton = document.querySelector("#menu");
var menu = document.querySelector("nav");
if (mobileMenuButton && desktopMenuButton) {
    desktopMenuButton.onclick = mobileMenuButton.onclick = () => {
        if (!menu)
            return;
        menu.classList.toggle("active");
    };
}
var cursorCanvas = document.querySelector(".pixels");
var cursorHandler = new Cursor(cursorCanvas);
//# sourceMappingURL=main.js.map