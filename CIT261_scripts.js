 /*eslint-env browser*/
 //topic 1-variables and topic 2 objects
 //script tags insert JS into HTML code

 //variables are created with keyword **var**
 //variables can be typeof number, string, object, Boolean, and array
 //variables can be defined (var x = 1;), undefined (var x;), empty (var x = "";), and nullknown to exist now but it has no type or value)
 //variable names can include letters, digits, underscores, and dollar signs
 var firstName = "John"; //this is a string
 var lastName = "Doe";
 var age = 35; //this is a number, no "" needed

 //to make it easier to read, it could also be typed this way:
 var
     firstNameB = "Mary",
     lastNameB = "BoPeep",
     ageB = 16;


 //let's add in some object and array type variables:

 //This is an object named "address". Objects have name:value pairs called PROPERTIES, and are separated by commas:
 //Objects can include a method (which is a function stored as a property). See the "fullAddress" property.
 var address = {
     houseNumber: "1415",
     streetName: "Shepherds Lane",
     city: "Sheepville",
     state: "CA",
     fullAddress: function () {
         return this.houseNumber + " " + this.streetName + ", " + this.city + ", " + this.state;
     }
 };

 //this is an Array. It can also be coded like the address object above with one item per line and a comma between items.
 var favFoods = ["cheese", "milk", "curds", "whey", "fruit"];

 //I want to change the first element from "cheese" to "cottage cheese"
 favFoods[0] = "cottage cheese";

 //I want to add an additional food to the array with the push()method.
 favFoods.push("chocolate bunny"); //adds "chocolate bunny" as the last item in the array. Array now has 6 items.

 //favFoods.pop();--would remove the last item in the array, which is "chocolate bunny" (but we won't do that right now).


 //now to get something up on the screen to see the JS in action---**changed to be called in function getBoPeep():
 /*document.getElementById("topic1").innerHTML = firstNameB + " " + lastNameB + " " + "is " + ageB +
     " and lives at " + address.houseNumber + " " + address.streetName + "." +
     " Her favorite foods today are " + favFoods[0] + " and " + favFoods[favFoods.length - 1] + ".";*/
 //Notes:
 //Getting info out of an object is done with the object_name.property_name (such as address.houseNumber)
 //Array elements are accessed with array_name[index_number], starting with 0.  I used favFoods[0].
 //If the entire array is desired, just name the array with no index [] .So "favFoods" would have printed the entire array.
 //The length of an array is always one more than the highest array index. To access the last array item, use array_name.length - 1

 //Following document.getElementById is to show that the Object method works. Uncomment to make it work.
 //document.getElementById("demo").innerHTML = address.fullAddress();

 //topic 1.2--Functions
 //Functions are blocks of code that are reusable. They are not used until invoked or called.
 //Syntax: function function_name(parameter1, parameter2,...parameterX) {code to be executed;}
 //Function names can include letters, digits, underscores, and dollar signs
 function getBoPeep() {
     document.getElementById("topic1").innerHTML = firstNameB + " " + lastNameB + " " + "is " + ageB +
         " and lives at " + address.houseNumber + " " + address.streetName + "." +
         " Her favorite foods today are " + favFoods[0] + " and " + favFoods[favFoods.length - 1] + ".";
 }

 //Functions usually include a return statement...unless you need it to appear in a certain place in HTML doc (?)
 function toCelsius(fahrenheit) {
     var fahrenheit = document.getElementById("fahrenheitNumber").value;
     //return (5 / 9) * (fahrenheit - 32);
     document.getElementById("result").innerHTML = (5 / 9) * (fahrenheit - 32);
 }



 //topic1.2.2
 //Functions can be variables
 // var x = toCelsius(fahrenheit); //refers to the function above. This will invoke, or call, the toCelsius function defined above and return the value
 //var text = "The temperature in BoPeep's neighborhood is " + x + " degrees CELSIUS."

 //or I can combine it into one statement and invoke the function inside the variable:
 //var textB = "The temperature in BoPeep's neighborhood is " + toCelsius(fahrenheit) + " degrees Celcius."
 //document.getElementById("topic1.2.2").innerHTML = textB;

 //topic 1 conditional statements

 //conditional statements based on if conditions are true/false.
 //The first statement that is true is executed and the statement is finished.

 //If statements run the code *if* the condition is true.
 if (new Date().getHours() < 18) {
     document.getElementById("topic1_conditionals").innerHTML = "Good day!";
 }

 //Else statement gives us the code to run if the condition is false. If condition1 is true, *else* execute this code block.
 if (new Date().getHours() < 18) {
     document.getElementById("topic1_conditionals").innerHTML = "Good day!";
 } else {
     document.getElementById("topic1_conditionals").innerHTML = "Good evening";
 }

 //Else if statement gives us another layer of conditions to check. If condition1 is true, else if condition2 is true,  else execute this code.
 if (new Date().getHours() < 10) {
     document.getElementById("topic1_conditionals").innerHTML = "Good morning!";
 } else if (new Date().getHours() < 18) {
     document.getElementById("topic1_conditionals").innerHTML = "Good day!";
 } else {
     document.getElementById("topic1_conditionals").innerHTML = "Good evening";
 }
 //switch

 //Switch statements are useful when you have many alternative blocks of code (lots of different results).
 //Syntax is:
 /*switch(expression) {
     case x:
         code to be executed;
         break;
     case y:
         code to be executed;
         break;
     default:-----------------this is executed if no matches are found. It is optional, but good practice.
         code to be executed;
         no break neccessary
 }*/

 /*switch (new Date().getDay()) {
     case 0:
         text = "Enjoy your weekend!";
         break;
     case 1:
         text = "Is it the weekend yet?";
         break;
     case 2:
         text = "Is it the weekend yet?";
         break;
     case 3:
         text = "Is it the weekend yet?";
         break;
     case 4:
         text = "It's almost the weekend...";
         break;
     case 5:
         text = "It's almost the weekend...";
         break;
     case 6:
         text = "Enjoy your weekend!";
 }*/
 switch (new Date().getDay()) {
     case 0:
     case 6:
         text = "Enjoy your weekend!";
         break;
     case 4:
     case 5:
         text = "It's almost the weekend...";
         break;
     default:
         text = "Is it the weekend yet?";
 }


 document.getElementById("topic1_switch").innerHTML = text;

 //For Loop

 //A For Loop loops through a block of code until the second statement is no longer true, then exits loop.
 //syntax: for (statement 1; statement 2; statement 3;){code to be executed;}
 //statement 1 (is optional) initializes the loop variable (i = 10) and is executed one time before the execution of the loop code block
 //statement 2 (is optional)defines the condition for executing the code block. If true, loop executes. 
 //If this statement is omitted there must be a break in the loop or it will crash!
 //Statement 3 (is optional if value increments inside of the loop) is executed everytime AFTER the code block has been executed.
 //This can be (i++, i--, i=i+2, i=i-3.....)
 var textC = " ";
 var i;

 for (i = 10; i > -1; i--) {
     textC += "The time remaining is " + i + " seconds..." + "<br>";
 }

 document.getElementById("demo_forLoop").innerHTML = textC;

 //For-In Loop
 //A For/In Loop loops through the properties of an OBJECT.
 //syntax: for (x in object){code to be executed;}
 //I will first create an object "book", then loop through the properties of the object.
 var book = {
     title: "Rich Dad Poor Dad",
     author: "Robert Kiyosaki",
     published: "1997"
 };
 var textD = " ";

 for (properties in book) {
     textD += book[properties];
 }

 document.getElementById("demo_forInLoop").innerHTML = textD;

 //For-Of Loop

 //A For/Of Loop loops through the values of an iterable objects (like Arrays, strings, maps, and NodeLists).
 //syntax: for (variable of object){code to be executed;}
 //I will first create an array "myCars", then loop through the values of the object.
 var myCars = ["Sienna", "Camry", "Jetta"];
 var models;

 for (models of myCars) {
     document.write(models + "<br>");
 }

 //While Loop

 //loops through a block of code as long as the specified condition is true.
 //works similar to a For Loop with statement 1 and 3 omitted.
 //syntax: while (condition) {code block (must include an increment/decrement);}
 var textE = " ";
 var i = 10;

 while (i > -1) {
     textE += "<br> Time remaining is " + i + " seconds.";
     i--;
 }

 document.getElementById("demo_whileLoop").innerHTML = textE;

 //Do-While Loop
 //Do/While Loop is a variant of the While Loop.
 //Executes once before checking if condition is true. Will repeat if true. Good if the loop HAS to run at least once.
 //syntax: do {code block; increment;}while (condition);-- code block must include an increment/decrement.
 var textF = " ";
 var i = -1; //because this will run once before checking the condition, it will print "-1", even though it does not meet the condition.

 do {
     textF += "<br> Time passed is " + i + " seconds.";
     i++;
 }
 while (i > -1 && i < 10);
 //In this statement -1 is not true, 
 //but it runs, then increments to 0, AND THEN checks the condition, and 0 is true, so it continues. 
 //Think of it as "Do this, then keep doing it while the condition is true."

 document.getElementById("demo_doWhileLoop").innerHTML = textF;


 //Topic 2 Objects in JS
 //Objects are variables, with values written as name:value pairs
 //syntax: var object_name = {name:"value", name2: "value2", name3: "value3"};
 //Access properties with objectName.propertyName or objectName["propertyName"]

 var personDixie = {
     name: ['Dixie', 'Cravens'],
     age: 47,
     gender: 'female',
     interests: ['crafts', 'hiking'],
     bio: function () {
         window.alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. She likes ' + this.interests[0] + ' and ' + this.interests[1] + " and is " + this.height + ' tall.');
     },
     greeting: function () {
         window.alert('Hi! I\'m ' + this.name[0] + '.');
     }
 };
 //add a new property to object "person" with objectName.newPropertyName = "newValue"; OR objectName["newPropertyName"] = "newValue";
 personDixie.height = "65 inches";

 //Object Instantiation
 //object constructors are the JS version of a class. 'When an object instance is created from a class, the class's constructor function is run to create it. The 
 //process of creating an object instance from a class is called instanstiation--the object instance is instantiated from the class.'---MDN
 //The constructor function starts with a capital letter to differentiate it.
 function Car(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
 }

 //instantiate a new object with specific properties:
 var mycar = new Car('Toyota', 'Sienna', 2009);
 var dallinscar = new Car('Toyota', 'Yaris', 2007);
 var scottscar = new Car('Toyota', 'Camry', 2010);

 document.getElementById("topic2_Obj").innerHTML = "<strong> We end up with a " + mycar.model + " " + dallinscar.year + "<strong>";


 //new constructor function for people. We will combine the Car and Person to get 'owner' info for Car object
 function Person(name, age, gender) {
     this.name = name;
     this.age = age;
     this.gender = gender;
 }
 var dixie = new Person('Dixie C', 47, 'F');
 var dallin = new Person("Dallin Cravens", 20, 'M');
 var scott = new Person('SEC', 53, 'M');

 //rewrite Car() to include an owner property and link it to one of the instantiated Person() objects
 function Car(make, model, year, owner) {
     this.make = make;
     this.model = model;
     this.year = year;
     this.owner = owner;
 }
 var mycar = new Car('Toyota', 'Sienna', 2009, dixie);
 var dallinscar = new Car('Toyota', 'Yaris', 2007, dallin);

 document.getElementById("topic1_Objects2").innerHTML = "<strong>" + mycar.owner.name + " had a " + mycar.year + " " + mycar.make + " " + mycar.model + " and " + dallinscar.owner.name + " now has a " + dallinscar.model + " harpsichord." + "<strong>";

 //topic 3, 4 JSON

 //JSON General Info
 //Things to remember about JSON (JavaScript Object Notation):
 //Is text only (String format)
 //Data is in "name":"value" pairs and must be inside DOUBLE QUOTES
 //JSON values can be a string, number, object, array, Boolean, or null (NO functions, date, or undefined...JS can be all these.)
 //Otherwise it works like JavaScript

 //Topic 3 JSON.stringify() and JSON.parse()
 //JSON.stringify()
 //Data sent to a server has to be in string format. Convert JS to string with JSON.stringify()
 //JSON.stringify() will retun an object {} for an object, an array[] for an array
 //Here is a JS object with values as arrays:
 var person = {
     name: ['Dixie', 'Cravens'],
     age: 47,
     gender: 'female',
     interests: ['crafts', 'hiking'],
 };
 var myJSON = JSON.stringify(person);
 document.getElementById("stringify").innerHTML = myJSON + "<br>";
 //the result is: {"name":["Dixie","Cravens"],"age":47,"gender":"female","interests":["crafts","hiking"]}
 //this is a string ready to be passed to a web server

 //JSON.parse()
 //Takes JSON formatted data from a server and changes into a JS object (or array)
 //received from web server:
 var textG = '{"name":["Dixie","Cravens"],"age":47,"gender":"female","interests":["crafts","hiking"]}';
 var person2 = JSON.parse(textG);

 //add function to the JS object (because functions won't translate to JSON)   
 person2.bio = function () {
     return person2.name[0] + " " + person2.name[1] + " is " + person2.age + "<br>";
 };

 //call function
 document.getElementById("parse").innerHTML = "Im a function, and therefore not JSON any longer! " + person2.bio();

 //for-in loop to pull out object properties then values
 for (properties in person2) {
     document.getElementById("parse").innerHTML += "Object Properties: " + properties + "<br>";
 }

 for (values in person2) {
     document.getElementById("parse").innerHTML += "Object Values: " + person2[values] + "<br>";
 }
 //Topic 4: XMLHttpRequest() AJAX
 //Create a function to create a XMLHttpRequest object and return the text from a txt file (JSON_Text.txt)
 function createXML() {
     //create a XMLHttpRequest object
     const myXML = new XMLHttpRequest();
     //check readystatechange for correct readyState and status   
     myXML.onreadystatechange = function () {
         if (myXML.readyState == 4) {
             if (myXML.status == 200) {
                 document.getElementById("getMethod").textContent = myXML.responseText;
             }
             if (myXML.status == 404) {
                 document.getElementById("getMethod").textContent = "That file could not be found.";
             }
         }
     };
     //open the request and send it
     myXML.open('get', '/JSON_Text.txt', true);
     myXML.send();
 }

 //Topic 5 Local Storage API, storing and retrieving simple data, arrays, assoc. arrays, objects 

 function loadInfo() {
     var fName = document.getElementById("firstname").value;
     var lName = document.getElementById("lastname").value;
     var ePerson = fName + " " + lName;
     localStorage.setItem("user", JSON.stringify(ePerson));

 }

 document.getElementById("saveBtn").addEventListener("click", message);

 function message() {
     var userPerson = JSON.parse(localStorage.getItem('user'));
     document.getElementById("helloMsg").innerHTML = "Hello " + userPerson + ". Welcome to the website!";
 }



 //Topic 6 Dom Manipulation
 //on click this removes "numPara" to hide the numbers as well as "instructPara" that gives instructions for the test. 
 //It also appends instructions for the test.
 document.getElementById("testBtn").addEventListener("click", function removeIt() {
     //identify the element to be removed, then removeChild()
     var parent = document.getElementById("DOM_Manipulation");
     var child = document.getElementById("numPara");
     parent.removeChild(child);
     var child2 = document.getElementById("instructPara");
     parent.removeChild(child2);

     //create a new <p> element with instructions, then appendChild()
     var newP = document.createElement("p");
     var newText = document.createTextNode("Repeat back the numbers");
     newP.appendChild(newText);

     //insertBefore()"testBtn2"
     var divElement = document.getElementById("DOM_Manipulation");
     var btnChild = document.getElementById("testBtn2");
     divElement.insertBefore(newP, btnChild);
 });
 //Creates an event listener to create the <p> that shows the correct number sequence text. 
 //Appends to bottom of div1 after clicking myBtn2
 document.getElementById("testBtn2").addEventListener("click", function addIt() {
     var newPara = document.createElement("p");
     var newText = document.createTextNode("Correct answer: 1, 3, 5, 19, 67, 89.");
     newPara.appendChild(newText);
     var parentElement = document.getElementById("DOM_Manipulation");
     parentElement.appendChild(newPara);
     document.getElementById("testTitle").innerHTML = "You have the memory of an elephant!"
 });

 //Topic 7 Manipulating CSS Class Properties using JavaScript

 //className (element.className;) assigns a className to an element
 //classList.add() (element.classList.add('active'))
 //classList.toggle() (element.classList.toggle('active');)
 //classList.contains() (classList.contains('active');)
 //classList.replace() (classList.rplace('old', 'new');)
 //classList.remove() (classList.remove('active');)

 function changeMe() {
     var header3 = document.getElementsByTagName('h3');
     //this returns an array like list that has to looped through to apply the className to each item individually
     for (i = 0; i < header3.length; i++) {
         header3[i].className = "colorMe";
     };
 }
 document.getElementById("changeH3").addEventListener("dblclick", function unchangeMe() {
     var header3color = document.getElementsByTagName('h3');
     for (i = 0; i < header3color.length; i++) {
         header3color[i].classList.remove("colorMe");
     };
 });





 //Topic 9 JS Events

 function displayDate() {
     document.getElementById("diplayDate").innerHTML = Date();
 }
 //Mobile Events (TouchEvent) code example
 //<body ontouchstart="isKeyPressed(event)">Some stuff here.</body>
 //<script>
 //function isKeyPressed(event){
 //if (event.ctrlKey) {
 //    alert("some message");
 //}else {
 //    alert("a different message");
 //}
 //}
 //</script>

 //onLoad
 document.getElementById("myFrame").onload = function () {
     frameFunction()
 };

 function frameFunction() {
     document.getElementById("demoFrame").innerHTML = "<strong>" + "Iframe is loaded." + "<strong>";
 }

 //animation event(from w3schools)
 var x = document.getElementById("myDIV");

 // Start the animation with JavaScript
 function myFunction() {
     x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
     x.style.animation = "mymove 4s 2"; // Standard syntax
 }

 // Code for Chrome, Safari and Opera
 x.addEventListener("webkitAnimationStart", myStartFunction);
 x.addEventListener("webkitAnimationIteration", myRepeatFunction);
 x.addEventListener("webkitAnimationEnd", myEndFunction);

 // Standard syntax
 x.addEventListener("animationstart", myStartFunction);
 x.addEventListener("animationiteration", myRepeatFunction);
 x.addEventListener("animationend", myEndFunction);

 function myStartFunction() {
     this.innerHTML = "animationstart event occured - The animation has started";
     this.style.backgroundColor = "pink";
 }

 function myRepeatFunction() {
     this.innerHTML = "animationiteration event occured - The animation was played again";
     this.style.backgroundColor = "lightblue";
 }

 function myEndFunction() {
     this.innerHTML = "animationend event occured - The animation has completed";
     this.style.backgroundColor = "lightgray";
 }

 //transition event
 // Standard syntax
 document.getElementById("transition").addEventListener("transitionend", transFunction);

 function transFunction() {
     this.innerHTML = "transitionend event occured";
     this.style.backgroundColor = "gray";
 }

 //Topic 10 HTML5 Tags: Video, Audio, and Canvas


 //initialize 3 variables for the 3 circles
 var redCircle, blueCircle, yellowCircle;

 //function to draw each circle object and update/redraw it as called
 function component(x, y, r, color, startAngle, endAngle) {
     this.x = x;
     this.y = y;
     this.r = r;
     this.update = function () {
         ctx = myArea.context;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.r, startAngle, endAngle);
         ctx.fillStyle = color;
         ctx.fill();
         //                ctx.stroke();

     }
 }

 //function to create 3 unique circles, calls component() and passes in (x, y, r, color, startangle, endangle)
 function startMove() {
     redCircle = new component(95, 50, 40, "red", 0, 2 * Math.PI);
     yellowCircle = new component(10, 90, 30, "yellow", 0, 2 * Math.PI);
     blueCircle = new component(60, 145, 35, "blue", 0, 2 * Math.PI);
     myArea.start();
 }

 //myArea object creates the canvas element, places it in DOM and has 2 methods(start and clear) as well as an animation control(setInterval())
 var myArea = {
     canvas: document.createElement("canvas"),
     start: function () {
         this.canvas.width = 480;
         this.canvas.height = 270;
         this.context = this.canvas.getContext("2d");
         document.getElementById("topic10head").insertBefore(this.canvas, document.getElementById("topic10head").childNodes[1]);
         this.interval = setInterval(updateArea, 20); //setInterval(function, delay)--Starts repeatedly executing the function specified by function updateArea() every delay milliseconds.
     },
     clear: function () {
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

     }
 }

 //clears the canvas then moves each circle 1 pixel (in one or two directions) then call update() from component function

 function updateArea() {
     myArea.clear();
     redCircle.x += 1; //move 1 px on x-axis
     yellowCircle.x += 1;
     yellowCircle.y += 1;
     blueCircle.x += 1;
     blueCircle.y += -1;
     redCircle.update(); //from component()--redraws the circle
     yellowCircle.update();
     blueCircle.update();
 }


 //Topics 11, 12, 13 Designing, Defining, and Triggering CSS Transitions, Transforms, and Animations without JS (custom libraries)
 //Use pseudo-class selectors
 //common examples are :hover, :active, :focus, ::before, ::after
