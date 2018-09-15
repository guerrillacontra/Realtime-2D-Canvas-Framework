//A small scaffold specifically to help me design code pen interactions

class Vector2 {
    static zero() {
        return new Vector2(0, 0);
    }

    static sub(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static mult(a, b) {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    static scale(v, scaleFactor) {
        return new Vector2(v.x * scaleFactor, v.y * scaleFactor);
    }

    static mag(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    static normalized(v) {
        const mag = Vector2.mag(v);

        if (mag === 0) {
            return Vector2.zero();
        }
        return new Vector2(v.x / mag, v.y / mag);
    }

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.clone = this.clone.bind(this);
    }

    clone() {
        return new Vector2(this.x, this.y);
    }
}


class App{

    constructor(window, canvas, context, updateHandler, drawHandler, frameRate = 60){
        this._window = window;
        this._canvas = canvas;
        this._context = context;
        this._updateHandler = updateHandler;
        this._drawHandler = drawHandler;
        this._frameRate = frameRate;
        this._lastTime = 0;
        this._currentTime = 0;
        this._deltaTime = 0;
        this._interval = 0;

        this.withYAxisUp = this.withYAxisUp.bind(this);
        this.start = this.start.bind(this);
        this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this);
    }

    withYAxisUp(){
        this._context.transform(1, 0, 0, -1, 0, this._canvas.height);
        return this;
    }

    start(){

        this._lastTime = new Date().getTime();
        this._currentTime = 0;
        this._deltaTime = 0;
        this._interval = 1000 / this._frameRate;

        this._onRequestAnimationFrame();
    }

    _onRequestAnimationFrame(){
        this._window.requestAnimationFrame(this._onRequestAnimationFrame);

        this._currentTime = new Date().getTime();
        this._deltaTime =  this._currentTime -  this._lastTime;

        if(this._deltaTime > this._interval)
        {
            //delta time in seconds
            const dts = this._deltaTime * 0.001;

            this._updateHandler(dts);

            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._drawHandler(dts);

            this._lastTime = this._currentTime - this._deltaTime % this._interval;
        }
    }
}

export {
    Vector2,
    App
};
