# Realtime 2D Canvas Framework
A micro lib to help accelerate quick real-time 2D canvas prototypes.

Features so far (but expect updates as it will grow):
x Vector2D class (designed to be immutable however, it can be mutated as real time stuff tends to benifit from this)
x Basic canvas setup with context/draw/size etc
x Frame limited "game loop" with a tick and draw callback to inject updates and draws
x All wrapped up in a nice App() to get the ball rolling fast
