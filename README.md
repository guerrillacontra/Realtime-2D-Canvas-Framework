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

const a = {x:10, y:10};
const b = {x:10, y:-10};
const sum = Vector2.add(a,b);
//sum.x === 20, sum.b === 0;

Supports normalization, add/sub/mult/div, magnitude etc

## Math extensions

//Linear interpolation
Math.lerp(start, end, %);

## App scaffolder!

One of the painful things of working on Canvas is the setup.

I wanted a quick way to make a real time, frame limited update/draw loop
and a wrapper around mouse events.

We can launch an app (normally at the bottom of the code) like this:

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


