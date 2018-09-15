!function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 0)
}([function (t, e, i) {
    "use strict";
    i.r(e), i.d(e, "Vector2", function () {
        return n
    }), i.d(e, "App", function () {
        return r
    });

    class n {
        static zero() {
            return new n(0, 0)
        }

        static sub(t, e) {
            return new n(t.x - e.x, t.y - e.y)
        }

        static add(t, e) {
            return new n(t.x + e.x, t.y + e.y)
        }

        static mult(t, e) {
            return new n(t.x * e.x, t.y * e.y)
        }

        static scale(t, e) {
            return new n(t.x * e, t.y * e)
        }

        static mag(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }

        static normalized(t) {
            const e = n.mag(t);
            return 0 === e ? n.zero() : new n(t.x / e, t.y / e)
        }

        constructor(t = 0, e = 0) {
            this.x = t, this.y = e, this.clone = this.clone.bind(this)
        }

        clone() {
            return new n(this.x, this.y)
        }
    }

    class r {
        constructor(t, e, i, n, r, s = 60) {
            this._window = t, this._canvas = e, this._context = i, this._updateHandler = n, this._drawHandler = r, this._frameRate = s, this._lastTime = 0, this._currentTime = 0, this._deltaTime = 0, this._interval = 0, this.withYAxisUp = this.withYAxisUp.bind(this), this.start = this.start.bind(this), this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this)
        }

        withYAxisUp() {
            return this._context.transform(1, 0, 0, -1, 0, this._canvas.height), this
        }

        start() {
            this._lastTime = (new Date).getTime(), this._currentTime = 0, this._deltaTime = 0, this._interval = 1e3 / this._frameRate, this._onRequestAnimationFrame()
        }

        _onRequestAnimationFrame() {
            if (this._window.requestAnimationFrame(this._onRequestAnimationFrame), this._currentTime = (new Date).getTime(), this._deltaTime = this._currentTime - this._lastTime, this._deltaTime > this._interval) {
                const t = .001 * this._deltaTime;
                this._updateHandler(t), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height), this._drawHandler(t), this._lastTime = this._currentTime - this._deltaTime % this._interval
            }
        }
    }
}]);
