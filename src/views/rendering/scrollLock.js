const pd = e => e.preventDefault();
function preventDefaultForScrollKeys(e) {
    const keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[ e.keyCode ]) {
        pd(e);
        return false;
    }
}

let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }
const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function scrollLock() {
    window.addEventListener('DOMMouseScroll', pd, false);
    window.addEventListener(wheelEvent, pd, wheelOpt);
    window.addEventListener('touchmove', pd, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function scrollUnLock() {
    window.removeEventListener('DOMMouseScroll', pd, false);
    window.removeEventListener(wheelEvent, pd, wheelOpt);
    window.removeEventListener('touchmove', pd, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

export { scrollLock, scrollUnLock };
