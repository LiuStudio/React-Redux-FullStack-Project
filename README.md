# React-Redux-FullStack-Project
_This Tutorial Project helped me understand React and Redux in a simple fullstack application. Credit goes to_
<http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-architecture> 

* First of all, We use "immutable " library( not neccesarily to use in redux, but highly recommanded, to guarantee all functions are immutable)
Second, write testspec.js using Chai to describe expected behavior and define for each scenario, what data input, what operation is done, and what output is expected. 
next , work on the source function file, that actually realize the functionality 

* Talking about Redux, it add another layer on top of this pure function methodology, by calling the function "name" or "feature " as property "type", and passed in argument to the function as "entries"/"entry", for example, if a function eatMyApple(apple), in Redux, would be represented as object {"type": "EATMYAPPLE", entry: 'apple'}, AND Redux prefer make all "type" value Uppercase. The object like this is called "Action" in Redux. 

* Now I am about to start Redux, Well, to me, writing in Redux is more like writing a state machine, it is a structure, with components as functions, with input and output. we can test by sending a serious datainput which represent different scenarios and look at the output , hey, it is more like the scanning chain in hardware (so called DFT), that we send in a queue of date stream and look at the output to see whether the functions/blocks of the building is all funtional as we expected. This is so nice and clean, it seperate conerns that we design block function that isolated exist, and always has the same functionality which means if you give the same input anytime, it will always produce the same output, not related to any state. All the "test data stream" is packed in the form of "Action", which is nothing but an object with keys "type" and value is the name of the function, and "entry/entries" is the argument we need to pass to the function blocks. we have a reducer.js file do the mapping translation from the "Action" language to "pure function block" language, or it can be think of like a "mux" or "table" in hardware design.. Sorry, I came from ASIC design background, and it is hard to wipe all those experience out... :p 

* Not much understanding about Redux other than redux using store as a container for all the immutable functions which take Action in, broadcast it to all the function blocks, and when function process is done, kick the subscribber listening funtions of client to notify the front end... well, this could be misleading, i need more study on it. 

* Client Side, similar to my React Tutorial Project -- in progress 
** Usage
** I usually have three GitBash opened. one for any npm install during my development as needed, second one to run webpack server `webpack-dev-server`, the third one to run functional test on my components `npm run test`


