3js got many type of objects

## mesh
the most common type: made by combining geometry with a material

example: a cube = a box geometry + a material => a mesh

## point
collection of small dots in 3d space, can you to create effect of stars, particles,..

## line 
a simple connection between points in 3d space, can use to draw shapes, grids or even wireframes

## group 
a collection of many objects. it is like a div tag in html that act as a container

## sprite
a 3d object that are always visible in the camera no matter where you look, can use for icon, bar, particles,...

## camera and light are also 3d objects => they are more like a seperate entities that influence how 3d objects are seen

## everything in js in an object because they inherits some basics properties, and 3js take it the same

all elements that mentioned start from the base js class called Object3D: provide common properties and method for transformation: change posiotion, rotation, scale,..

## Deep dive into

### geometry
define the shape of a 3d object

can be explain further by its three properties: vertices, edges, faces

vertices are the points in 3d that edges meet. simple: vertices are points that you put in to mark the corner of the shape

edges are straght line that conenct 2 vertices, help building the shape

faces: surfaces that connect vertices to form the geometry of the shape, made of by multi vertices and define the visible surface of an object, just like a cube got 6 faces

another concept: triangle: everything in the 3d world made up by triangle

### material
show how the surface of the geometry looks, define the color, texture, shininess,... base on the visual effect you want to achive

the simplest material: 
- mesh basic: add flat color to object and not interact with light
- mesh fong: add shininess and reflection
- mesh standard: physically based rendering marterial
- mesh physical material: extenstion of mesh standard, more feature like clear coats for shiny stuffs
- mesh toon: make mesh look like in cartoon

### texture
in 3js, a texture is an image: png, gif, jpeg, or pattern that apply to the surface of an object such as a mesh, just like a wraping paper

### light
illumintes the 3d scene make it more realistic and clear
- ambient light: provide uniform lightning to all objects in the scene without casting strong shadow, like a cloudy day
- point light: emits light from a single point in all directions, like a light bulb
- direction light: emits parallel light rays comming from a specific direction, like sunlight, object cast shape shadow
- spot light: emits light in a cone shape, just like a flashlight

### camera
2 main types in 3js:
- perspective camera: mimics how human eyes see the world, objects closer to the eyes look bigger and objects further away look smaller. Most common for 3d game, stimulations,..
- orthographic camera: remove perspective effect, objects always appear the same size, user for 2d games, or blueprints,...

main properties:
- field of view (fov): just like in game, determine how wide or narrow the view is, zoom in and out when taking pics is changing fov too
- point of view (pov): angle where the camera look at the scene, where the eyes located and the direction it facing, simple: camera's positon and direction
- aspect ratio: width and height of the camera's view: 1:1, 4:3, 16:9,..
- near and far clipping planes: define how close or far the objects can be seen by the cam and get rendered -> improve the performance and control what part of the scene is shown, simple: the camera viewing range

camera control:
- orbit controls: the most commonly used camera control: allow to rotate around the targer point, zoom in/out around the center point, like the earth moving around the sun?
- trackball controls: flexible and more freely than orbit controls, this time no center point, can rotate around the camera freely too
- fly control: stimulate view like in the exploration view game, cam move forward, backward, side to side just like the viewers flying through the scene
- pointer lock control: lock the cursor on the screen and use that to move the cam. like in fps game, the view move based on the movement of the mouse pair with keyboard to move forward, backward, side to side\\
- first person control: mimics the control of first persion view game, better fly control