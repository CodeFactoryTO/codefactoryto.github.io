/**
 * @file script.js
 * @author CodeFactory
 * @date 2024-09-17
 *
 * 
 */

/* constants */
const body = document.querySelector('body');

/* check scroll position */
document.addEventListener('scroll', function() {
    if (window.scrollY > 50)
        body.classList.add('scrolled');
    else
        body.classList.remove('scrolled');
});
