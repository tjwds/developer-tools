const allEventTypes = [
    "afterscriptexecute",
    "auxclick",
    "beforescriptexecute",
    "blur",
    "click",
    "compositionend",
    "compositionstart",
    "compositionupdate",
    "contextmenu",
    "copy",
    "cut",
    "dblclick",
    "DOMActivate",
    "DOMMouseScroll",
    "error",
    "focusin",
    "focusout",
    "focus",
    "fullscreenchange",
    "fullscreenerror",
    "gesturechange",
    "gestureend",
    "gesturestart",
    "keydown",
    "keypress",
    "keyup",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "mousewheel",
    "msContentZoom",
    "MSGestureChange",
    "MSGestureEnd",
    "MSGestureHold",
    "MSGestureStart",
    "MSGestureTap",
    "MSInertiaStart",
    "MSManipulationStateChanged",
    "overflow",
    "paste",
    "scroll",
    "select",
    "show",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "underflow",
    "webkitmouseforcechanged",
    "webkitmouseforcedown",
    "webkitmouseforceup",
    "webkitmouseforcewillbegin",
    "wheel",
    // ---
    "animationcancel",
    "animationend",
    "animationiteration",
    "animationstart",
    "beforeinput",
    "change",
    "gotpointercapture",
    "input",
    "lostpointercapture",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "transitioncancel",
    "transitionend",
    "transitionrun",
    "transitionstart",
];

const eventTargetEl = document.getElementById('eventTarget');
const logEl = document.getElementById('log');

allEventTypes.forEach(eventType => {
    eventTargetEl.addEventListener(eventType, (event) => {
        const now = (new Date()).toLocaleString();
        // TODO: add more information
        const logLine = `${now}: ${eventType}`;
        const logLineEl = document.createElement('p');
        logLineEl.innerText = logLine;
        logEl.appendChild(logLineEl);
        logEl.scrollTo({
            top: 9999999,
        });
    })
})
