var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScrollAnimator_slidecontainter;
export class ScrollAnimator {
    constructor(animations) {
        this.animations = [];
        _ScrollAnimator_slidecontainter.set(this, void 0);
        this.add = (anim) => {
            this.animations.push(anim);
        };
        this.remove = (anim) => {
            var index = this.animations.indexOf(anim);
            this.animations.splice(index, 1);
        };
        this.callback = () => {
            this.animations.forEach((anim) => {
                var container = anim.container;
                var offset = -container.getBoundingClientRect().y - container.scrollTop + container.scrollHeight;
                offset = (offset < 0) ? 0 : offset;
                var scrollPercent = offset / (container.scrollHeight) * 100;
                anim.seek((scrollPercent / 100) * anim.duration);
            });
        };
        this.init = () => {
            if (!__classPrivateFieldGet(this, _ScrollAnimator_slidecontainter, "f"))
                return;
            __classPrivateFieldGet(this, _ScrollAnimator_slidecontainter, "f").onscroll = this.callback.bind(this);
            this.callback();
        };
        this.animations = animations;
        __classPrivateFieldSet(this, _ScrollAnimator_slidecontainter, document.querySelector(".slides"), "f");
    }
}
_ScrollAnimator_slidecontainter = new WeakMap();
//# sourceMappingURL=animations.js.map