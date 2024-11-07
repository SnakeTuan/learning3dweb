# threejs + 3d rendering

At least know some of the basics: maths and physics

## dimensions: 4 diffrent dimensions

### 1. zero dimension (0D)
just like a point with no size, a single dot

### 2. first dimension (1D)
it is a line with no height and weight

### 3. second dimension (2D)
is a shape with lenght and width, no depth, Like a paper, flat, or 2D games,..

### 4. third dimension (3D)
have a space, and shapes and objects have length. 3D have a lot of elements than 2D, and look more realistic

### 5. fourth dimension (time)
time is the dimension that used along with length, width and height. Like in 3d games that have objects, shapes change overtime, or animation



## threejs

WebGL is the evalution that start the rendering 3d things to web. But it's complicated, need a lot knowledge about 3d and many lines of code just for rendering a cube =)

3js is js and api that built on top of webgl. in simple words, 3js is an extra layer dealing with the complexities of the webgl. Just like tailwindcss deal with css


## how it work

we create an environment and scene through coding, transform and shaping it with our rule => we making the the virtual world that everything you want, you can virtualize

but we cannot mix up the environment and the scene

### scene
refer to the overall container or the space where all of the actions gonna happen

### environment
it the surounding of the scene, can change around the scene

example: the earth is the scene and the atmosphere is the environment of the scene

and we can build scenes that separate 3d world

example: for a website, we can build 1 scene for the footer, and 1 scene for pricing section, each scence is like its own dimension that render separately

=> Can change the environment many time in a single scene



## object
building blocks of 3d scene, put in cubes, balls with diffrent shape and colors. Use comunity model is good too

## animations
transform object's position or shape, size, angle, change colo,..

## camera
we need to see the scene, camera is like the eyes in 3d world.
in 3js, camera can be placed based on the angle and perspective, you can choose which portions of the 3d scene are visible to the viewers

## renderer
in 3js, renderer takes the scene, environment, object, animation, lighting,... 
and base from the camera perspective, renderer caculate how it should look like

# scene: define the space that everything gonna happens => use camera: choose the viewpoint of the scene => use objects to populate the scene => use lightning, illuminate the scene things look more real => update object over time for movement or dynamic behavior => render the scene: caculate from the cam's perspective that can be turned into images that can be displayed on the monitor