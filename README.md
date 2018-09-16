# Realtime 2D Canvas Framework

A micro lib to help accelerate quick real-time 2D canvas prototypes on Code Pen projects.

## How to use on Code Pen?

I have an up-to-date BABEL compiled version of main.js live on CodePen right now:

https://codepen.io/guerrillacontra/pen/zJaREd

To add to your pen, in your code settings/js add an external script to:

https://codepen.io/guerrillacontra/pen/zJaREd.js

This will automatically transpile and import all features instantly into your Pen
with no added configuration.

# Features?

## Vector2

You can use an immutable 2D vector for common vector based operations.

Example:
```javascript
const a = {x:10, y:10};
const b = {x:10, y:-10};
const sum = Vector2.add(a,b);
const sub = Vector2.sub(a,b);
const mult = Vector2.mult(a,b);
const scaled = Vector2.scale(a, 100);//make a 100 times bigger
const magnitude = Vector2.mag(a);
const normalized = Vector2.normalized(a);//a normal vector
```

Supports normalization, add/sub/mult/div, magnitude etc

## Math extensions
```javascript
//Linear interpolation
Math.lerp(start, end, %);
Math.clamp(value, min, max);
```

## App scaffolder!

One of the painful things of working on Canvas is the setup.

I wanted a quick way to make a real time, frame limited update/draw loop
and a wrapper around mouse events.

We can launch an app (normally at the bottom of the code) like this:

```javascript
const onUpdate = deltaTime =>(){
};

const onDraw = deltaTime =>(){
};

const app = new App(
window,
canvas,
context,
onUpdate,
onDraw,
fps);

//we can optionally wire up some mouse events

app.onMouseDown = (x,y)=>{
//x/y is actually the real relative mouse coordinates!
};


//finally we launch it!
app.start();

//magic
```

# Examples

A physics based rope system : https://codepen.io/guerrillacontra/pen/XPZeww
