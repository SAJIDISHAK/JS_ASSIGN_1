//========================CHAPTER 1========================
//========================QUESTION 1========================
// alert();

//========================QUESTION 2========================
// alert("Error! Please enter a valid password.");

//========================QUESTION 3========================
// alert("Welcome to JS Land...\nHappy Coding!");

//========================QUESTION 4========================
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

//========================QUESTION 5========================
// console.log (alert("Hello... I can run JS through my web browser's console"));

//========================QUESTION 6========================
// done
//========================QUESTION 7========================
// done




//========================CHAPTER 2========================
//========================QUESTION 1========================
// var = username

//========================QUESTION 2========================
// var myName = "Muhammad Sajid";

//========================QUESTION 3========================
// var message = "Hello World";
// alert(message);

//========================QUESTION 4========================
// var studentName = "Muhammad Sajid";
// var studentAge = "23 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

//========================QUESTION 5========================
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

//========================QUESTION 6========================
// var email = "Sajidishak7@gmail.com";
// alert("My email address is "+ email);

//========================QUESTION 7========================
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+ book);

//========================QUESTION 8========================
// document.write("Yah! I can write HTML content through JavaScript");

//========================QUESTION 9========================
// var string = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert(string);




//========================CHAPTER 3========================
//========================QUESTION 1========================
// var age = 23;
// alert("I am " + age + " years old");

//========================QUESTION 2========================
// var text = "You have visited this site ";
// var visit = 14;
// var time = " times";
// alert(text + visit + time);

//========================QUESTION 3========================
// var birthYear = 1997;
// document.write("My birth year is " + birthYear + "<br>" +"Date type of my declared variable is number");

//========================QUESTION 4========================
// document.write("Kaka Stores.com" + "<br>");
// var $name = prompt("Please enter your name:", "Sajid Ishaq");
// var quantity = prompt("Please write your item Quantity :", "1");
// var product = prompt("Please write your item name :", "T-shirt");
// document.write("<strong>" + $name + "</strong>" + " Order " + "<strong>" + quantity + " " + product + "</strong>" + "(s) on Kaka Stores.com" );




//========================CHAPTER 4========================
//========================QUESTION 1========================
// var name let age const mailAccount;

//========================QUESTION 2========================
//=======Legal Variable Name=======         =======Illegal Variable Name=======
// 1.) var hello;                    ||        1.) var fisrt name;
// 2.) var _hello;                   ||        2.) var 1stvariable;
// 3.) var $name;                    ||        3.) var wo+rk;
// 4.) var a1;                       ||        4.) var my-info;
// 5.) var i_info;                   ||        5.) var ('.');

//========================QUESTION 3========================
// document.write("<h1>Rules for naming JS variables</h1>" + "</br>"+ "</br>");
// document.write('Variable names can only contain "<strong>Letters</strong>", "<strong>Dollar sign</strong>", <strong>"Underscore"</strong> and <strong>"Numbers".</strong>'+ "</br>");
// document.write('Variables must begin with a "<strong>age</strong>", "<strong>$name</strong>" or "<strong>_name</strong>".'+ "</br>");
// document.write('Variable names are case "<strong>Sensitive</strong>"'+ "</br>");
// document.write('Variable names should not be JS <strong>"Keywords"</strong>');




//========================CHAPTER 5========================
//========================QUESTION 1========================
// document.write("<h1>Addition</h1>" + "</br>"+ "</br>");
// var num1 = +prompt("Please enter a Addition first value",3);
// document.write("The sum of "+num1);
// var num2 = +prompt("Please enter a Addition second value",5);
// document.write(" and "+num2);
// var value = num1 + num2;
// document.write(" is "+ value);

//========================QUESTION 2========================
// document.write("<h1>Subtraction</h1>" + "</br>"+ "</br>");
// var a = +prompt("Please enter a Subtraction first value",3);
// document.write("The sum of "+a);
// var b = +prompt("Please enter a Subtraction second value",5);
// document.write(" and "+b);
// var c = a - b;
// document.write(" is "+ c);

// document.write("<h1>Multiplication</h1>" + "</br>"+ "</br>");
// var a = +prompt("Please enter a Multiplication first value",3);
// document.write("The sum of "+a);
// var b = +prompt("Please enter a Multiplication second value",5);
// document.write(" and "+b);
// var c = a * b;
// document.write(" is "+ c);

// document.write("<h1>Division</h1>" + "</br>"+ "</br>");
// var a = +prompt("Please enter a Division first value",3);
// document.write("The sum of "+a);
// var b = +prompt("Please enter a Division second value",5);
// document.write(" and "+b);
// var c = a / b;
// document.write(" is "+ c);

// document.write("<h1>Modulus</h1>" + "</br>"+ "</br>");
// var a = +prompt("Please enter a Modulus first value",3);
// document.write("The sum of "+a);
// var b = +prompt("Please enter a Modulus second value",5);
// document.write(" and "+b);
// var c = a ** b;
// document.write(" is "+ c);

//========================QUESTION 3========================
// var expression;
// document.write("Value after variable declaration is:" + typeof(expression)+ "</br>"+ "</br>");
// var a = +prompt("Please enter Initial value",5);
// document.write("Initial value: "+a +"</br>");
// var b = ++a;
// document.write("Value after increment is: "+b+"</br>");
// var c = +prompt("Please enter addition value",7)+b;
// document.write("Value after addition is: "+ c+"</br>");
// var d = --c;
// document.write("Value after decrement is: "+d+"</br>");
// var e = +prompt("Please enter remainder value",3);
// var moduler = a%e;
// document.write("The remainder is : "+moduler);

//========================QUESTION 4========================
// var movieCost = 600;
// document.write("One movie ticket is "+ movieCost+" PKR"+ "</br>");
// var buy = +prompt("How many tickets do you want to buy?",5);
// document.write("You bought "+buy +" Tickets" + "</br>");
// var value = movieCost*buy; 
// document.write("Total cost to buy "+ buy +" Tickets to a movie is "+"<strong>"+value+"</strong>");

//========================QUESTION 5========================
// var table = +prompt("Please enter table num",4);
// document.write("<h1>Table of " + table+"</h1>"+ "</br>");

// var table1 = table*1;
// document.write(table+" * 01 = " +table1+ "</br>");

// var table2 = table*2;
// document.write(table+" * 02 = " +table2+ "</br>");

// var table3 = table*3;
// document.write(table+" * 03 = " +table3+ "</br>");

// var table4 = table*4;
// document.write(table+" * 04 = " +table4+ "</br>");

// var table5 = table*5;
// document.write(table+" * 05 = " +table5+ "</br>");

// var table6= table*6;
// document.write(table+" * 06 = " +table6+ "</br>");

// var table7 = table*7;
// document.write(table+" * 07 = " +table7+ "</br>");

// var table8 = table*8;
// document.write(table+" * 08 = " +table8+ "</br>");

// var table9 = table*9;
// document.write(table+" * 09 = " +table9+ "</br>");

// var table10 = table*10;
// document.write(table+" * 10 = " +table10+ "</br>");

//========================QUESTION 6========================
// var ctemperature = +prompt("Please enter a Celsius temperature value",25);
// var fahrenheit_temperature = (ctemperature*9/5) + 32;
// document.write("Temperature in Fahrenheit " +ctemperature+"°C is = "+fahrenheit_temperature+"°F" +"</br>");

// var ftemperature = +prompt("Please enter a Fahrenheit temperature value",70);
// var celsius_temperature = (ftemperature-32) * 5/9;
// document.write("Temperature in Celsius "+ftemperature+"°F is = "+celsius_temperature+"°C");

//========================QUESTION 7========================
// document.write("<h1>Shopping Cart</h1>" + "</br>"+ "</br>");
// var pricei1 = 650;
// document.write("Price of item 1 is "+ pricei1+" PKR"+ "</br>");
// var buy = +prompt("How many pieces of item no 1 do you want to buy?",3);
// document.write("Quantity of item no 1 is "+buy + "</br>");
// var item1 = pricei1*buy;
// var pricei2 = 100;
// document.write("Price of item 2 is "+ pricei2+" PKR"+ "</br>");
// var buy = +prompt("How many pieces of item no 2 do you want to buy?",7);
// document.write("Quantity of item no 2 is "+buy + "</br>");
// var item2 = pricei2*buy;
// var dc = 100;
// document.write("Shipping Cahrges "+dc +"</br>"+"</br>");
// var value = item1+item2+dc; 
// document.write("Total cost of your order is "+"<strong>"+value+"</strong>");

//========================QUESTION 8========================
// document.write("<h1>Marks Sheet</h1>"+ "</br>");
// var totalMarks = 980;
// document.write("Total marks :"+ totalMarks+ "</br>");
// var obtainedMarks = +prompt("Please type a obtained marks ",980);
// document.write("Marks obtained :"+obtainedMarks+ "</br>")
// var result = obtainedMarks*100/980;
// document.write("Percentage :" +"<strong>" +result+ "</strong>"+" %");

//========================QUESTION 9========================
// document.write("<h1>Currency in PKR</h1>" + "</br>"+ "</br>");
// var pkr = 1;
// document.write("Price value is: "+ pkr+" PKR"+ "</br>");
// var value = +prompt("How many Pakistani rupees do you have?",1);
// document.write("Total amount of PKR is: "+value + "</br>");
// var item1 = pkr*value;
// var usdlr = 104.80;
// document.write("Price value is: "+ usdlr+" US Dollar"+ "</br>");
// var value = +prompt("How many US Dollar do you have?",10);
// document.write("Total amount of US Dollar is: "+value + "</br>");
// var item2 = usdlr*value;
// var saudiRiyal = 28;
// document.write("Price value is: "+ saudiRiyal+" PKR"+ "</br>");
// var value = +prompt("How many Saudi Riyal do you have?",25);
// document.write("Total amount of Saudi Riyal is: "+value + "</br>"+ "</br>"+ "</br>");
// var item3 = saudiRiyal*value;
// var value = item1+item2+item3; 
// document.write("Total Currency PKR: "+"<strong>"+value+"</strong>");

//========================QUESTION 10========================
// var add = +prompt("Please write Addition value",5);
// var mul = +prompt("Please write Multiply value",10);
// var dvd = +prompt("Please write Devide value",2);
// document.write("Your Addition value is "+add+"</br> Your Multiply value is "+mul+"</br> Your Devide value is "+dvd+"</br>"+"</br>"+"</br>");
// var result = add*mul/dvd;
// document.write("Your answer is "+"<strong>"+result+"</strong>");

//========================QUESTION 11========================
// document.write("<h1>Age Calculator</h1>" + "</br>"+ "</br>");
// var current_year = +prompt("Please write Current Year ",2021);
// var birth_year = +prompt("Please write your Birth Current Year ",1997);
// document.write("Current Year is : "+current_year+ "</br>");
// document.write("Birth Year is : "+birth_year+ "</br>");
// var result = current_year-birth_year;
// document.write("Your age is : "+result);

//========================QUESTION 12========================
// document.write("<h1>The Geometrizer</h1>" + "</br>"+ "</br>");
// var a= +prompt("Please type Radius cirlce value",20)
// var b=2*3.142*a;
// var c=b*10;
// document.write("Radius of a circle:  "+a+"</br>")
// document.write("Circumfarence of the circle:  "+b)
// document.write("<br>")
// document.write("<br>")
// document.write("Area of the circle:  "+c)

//========================QUESTION 13========================
// document.write("<h1>The Lifetime Supply Calculator</h1>" + "</br>"+ "</br>");
// var Favourite_Snack = prompt("Favourite Snack???","Chocolate Chip");
// var result = Favourite_Snack;
// document.write("Favourite Snack : "+result+"</br>");
// var age = +prompt("Enter your current AGE please",15);
// document.write("Current Age : " + age+"</br>")
// var maxAge = +prompt("Enter your estimated AGE please",65);
// document.write("Estimated Maximum Age : " + maxAge+"</br>");
// var snackAmount = +prompt("Enter your per day snack amount please",3);
// document.write("Amount of snacks per day : " + snackAmount+"</br>");
// var result1 = maxAge-age;
// var result2 = result1*snackAmount;
// document.write("You will need " + result2 +" "+ result +" to last you until the ripe old age of "+maxAge);

//========================CHAPTER 6 TO 9========================
//========================QUESTION 1========================
// document.write("Result:"+"</br>");
// var a = 10;
// var result = +prompt("Enter the value of your choice",a);
// document.write("The value of a is : "+result+"</br>");
// document.write(".........................................."+"</br>"+"</br>");
// var result1 = ++result;
// document.write("The value of ++a is : "+result1+"</br>");
// document.write("Now the value of a is : "+result1+"</br>"+"</br>"+"</br>");
// var result2 = result1++;
// document.write("The value of a++ is : "+result2+"</br>");
// document.write("Now the value of a is : "+result1+"</br>"+"</br>"+"</br>");
// var result3 = --result1;
// document.write("The value of --a is : "+result3+"</br>");
// document.write("Now the value of a is : "+result3+"</br>"+"</br>"+"</br>");
// var result4 = result3--;
// document.write("The value of a-- is : "+result4+"</br>");
// document.write("Now the value of a is : "+result3+"</br>"+"</br>"+"</br>");

//========================QUESTION 2========================
// var a = 2;
// var b = 1;
// document.write("a value is : 2"+"</br>");
// document.write("b value is : 1"+"</br>"+"</br>"+"</br>");
// document.write("--a;"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"||"+"&nbsp&nbsp&nbsp&nbsp&nbsp"+"Value is 1"+"</br>");
// document.write("--a - --b;"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"||"+"&nbsp&nbsp&nbsp&nbsp&nbspValue is 1"+"</br>");
// document.write("--a - --b + ++b;"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"||"+"&nbsp&nbsp&nbsp&nbsp&nbspValue is 2"+"</br>");
// document.write("--a - --b + ++b + b--;&nbsp||"+"&nbsp&nbsp&nbsp&nbsp&nbspValue is 3"+"</br>"+"</br>"+"</br>");
// var result = --a - --b + ++b + b--;
// document.write("Result is : "+result);

//========================QUESTION 3========================
// var a = prompt("Hi User,\nPlease input your name","Sajid Ishaq")
// document.write(a+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp‏السلام عليكم ورحمة الله وبركاته");

//========================QUESTION 4 to 5========================
// var table = +prompt("Please enter table num",5);
// document.write("<h1>Table of " + table+"</h1>"+ "</br>");
// var table1 = table*1;
// document.write(table+" * 01 = " +table1+ "</br>");
// var table2 = table*2;
// document.write(table+" * 02 = " +table2+ "</br>");
// var table3 = table*3;
// document.write(table+" * 03 = " +table3+ "</br>");
// var table4 = table*4;
// document.write(table+" * 04 = " +table4+ "</br>");
// var table5 = table*5;
// document.write(table+" * 05 = " +table5+ "</br>");
// var table6= table*6;
// document.write(table+" * 06 = " +table6+ "</br>");
// var table7 = table*7;
// document.write(table+" * 07 = " +table7+ "</br>");
// var table8 = table*8;
// document.write(table+" * 08 = " +table8+ "</br>");
// var table9 = table*9;
// document.write(table+" * 09 = " +table9+ "</br>");
// var table10 = table*10;
// document.write(table+" * 10 = " +table10+ "</br>");

//========================QUESTION 6========================
// document.write("<table width='600' cellspacing='2'>");
// document.write("<tr>");
// document.write("<td><b>Subject</b></td>");
// document.write("<td><b>Total Marks</b></td>");
// document.write("<td><b>Obtained Marks</b></td>");
// document.write("<td><b>Percentage</b></td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>English </td>");
// document.write("<td>100</td>");
// var a = +prompt("Please input English Obtained Marks",54);
// document.write("<td>"+a+"</td>");
// var eResult = a*100/100;
// document.write("<td>"+eResult+"%"+"</td>");
// document.write("<tr>");
// document.write("<td>Math </td>");
// document.write("<td>100</td>");
// var b = +prompt("Please input Math Obtained Marks",54);
// document.write("<td>"+b+"</td>");
// var mResult = b*100/100;
// document.write("<td>"+mResult+"%"+"</td>");
// document.write("<tr>");
// document.write("<td>Urdru </td>");
// document.write("<td>100</td>");
// var c = +prompt("Please input Urdu Obtained Marks",48);
// document.write("<td>"+c+"</td>");
// var uResult = c*100/100;
// document.write("<td>"+uResult+"%"+"</td>");
// document.write("</tr>");
// var d = a+b+c;
// var e = eResult+mResult+uResult;
// var f = e*100/300;
// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td><b>300</b></td>");
// document.write("<td><b>"+d+"</b></td>");
// document.write("<td><b>"+f+"%"+"</b></td>");
// document.write("</tr>");
// document.write("</table>");

//========================CHAPTER 9 to 11========================
//========================QUESTION 1========================
// var city = prompt("Enter your city","Karachi");
// if (city == "Karachi" || city == "karachi" || city == "KARACHI" || city == "KaRaChI" || city == "K@R@CHI" || city == "k@r@chi")
// {
//     document.write("Welcome to city of lights");
// }
// else
// {
//     document.write("welcome");
// };

//========================QUESTION 2========================
// var gender = prompt("EPlease enter your gender","Male");
// if (gender == "male" || gender == "MALE" || gender == "Male" || gender == "m@le" || gender == "M@le" || gender == "MaLe" || gender == "mAlE")
// {
    //     document.write("Good Morning Sir");
    // }
    // else {
        //     document.write("Good Morning Ma'am");
// };

//========================QUESTION 3========================
// var color = prompt("Enter the color of the traffic light : ");
// if (color == "red" || color == "Red" || color == "RED") {
//   document.write("Must Stop");
// } else if (color == "yellow" || color == "Yellow" || color == "YELLOW") {
//   document.write("Ready to move");
// } else if (color == "green" || color == "Green" || color == "GREEN") {
//   document.write("Move now");
// };

//========================QUESTION 4========================       
// var fuel = prompt("Please Enter the fuel in your car",25);
// if (fuel < 0.26) {
//     document.write("Please refill the fuel in your car.");
// }
// else if (fuel > 0.25) {
//     var kilometer = fuel*2;
//     document.write("Your car can travel another " + kilometer+ " Km")
// };

//========================QUESTION 5========================
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// alert("Yes sir chal gaya ab kia karean");
// };
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14){ alert("condition 3 is true");
// }
// if(c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// };
// if (true){
//     alert("True");
// };
// if (false){
//     alert("False");
// };
// if("car" > "cat") {
//     alert("car is smaller than cat");
// };

//========================QUESTION 6========================
// document.write("<h1>Marks Sheet</h1>"+"<br>"+"<br>");
// var totalMarks = 980;
// var obtainedMarks = prompt("Please enter obtained marks",804);
// document.write("Total marks : " + totalMarks + "<br>Marks Obtained: " + obtainedMarks + "<br>Percentage : " + (obtainedMarks/totalMarks)*100+"<br>");
// if ((obtainedMarks/totalMarks) * 100 >= 80) {
//     document.write("Grade : <strong>A-one</strong>"+"<br>");
//     document.write("Remarks : <strong>Excellent</strong>");
// }
// else if ((obtainedMarks/totalMarks) * 100 >= 70) {
//     document.write("Grade : <strong>A</strong>"+"<br>");
//     document.write("Remarks : <strong>Good</strong>");
// }
// else if ((obtainedMarks/totalMarks) * 100 >= 60) {
//     document.write("Grade : <strong>B</strong>"+"<br>");
//     document.write("Remarks : <strong>You need to improve</strong>");
// }
// else if ((obtainedMarks/totalMarks) * 100 < 60) {
//     document.write("Grade : <strong>Fail</strong>"+"<br>");
//     document.write("Remarks : <strong>Sorry</strong>")
// };

//========================QUESTION 7========================
// var y =  7;
// var x = prompt("Guess the secret number");
// if (x == y)
// {
//     document.write("Bingo! Correct Answer");
// }
// else if (x == y+1 || x == y-1) {
//     document.write("Very Very Close enough to correct answer");
// }
// else if (x == y+2 || x == y-2) {
//     document.write("Very Close enough to correct answer");
// }
// else if (x == y+3 || x == y-3) {
//     document.write("Close enough to correct answer");
// };

//========================QUESTION 8========================
// var number = 10;
// if (number % 3)
// {
//     alert("Number is divisible by 3");
// }
// else {
//     alert("Number is not divisible");
// }
//========================QUESTION 9========================
// var number = prompt("Enter a number to check you input number or even number");
// if (number % 2 == 0){
//     document.write('"WOW" you input Even number')
// }
// else {
//     document.write('"WOW" you input Odd number')
// };

//========================QUESTION 10========================
// document.write("<h1>Temperature Criteria</h1>"+"<br>"+"<br>");
// var totaltemperature = 50;
// var currentTemperature = prompt("Please enter value of Temperature",40);
// if ((currentTemperature) >= 40) {
//     document.write("<strong>It is too hot outside</strong>")
// }
// else if ((currentTemperature) >= 30) {
//     document.write("<strong>The Weather today is Normal</strong>");
// }
// else if ((currentTemperature) >= 20) {
//     document.write("<strong>Today’s Weather is cool</strong>");
// }
// else if ((currentTemperature) >= 10) {
//     document.write("<strong>OMG! Today’s weather is so Cool</strong>");
// }
// else if ((currentTemperature) <= 10) {
//     document.write("<strong>Razai lo or so jao</strong>");
// };

//========================QUESTION 11========================
// document.write("<h1>Temperature Criteria</h1>"+"<br>"+"<br>");
// var a = +prompt("Please input First value",10);
// document.write("You type 1st value is : "+a+"<br>");
// var b = prompt("Please type your Arthmetic Operation ","+");
// document.write("You choose Arthmetic Operation is : "+b+"<br>");
// var c = +prompt("Please input Second value",5);
// document.write("You type 2nd value is : "+c+"<br>");
// var d = a+b+c;
// document.write("Your Result is : "+d);

//========================CHAPTER 12 TO 13========================
//========================QUESTION 1========================
// var number = prompt("Enter a character");
// if (number.length === 1)
// {
//     if(number.charCodeAt() >=65 && number.charCodeAt() <=90)
//     {
//         document.write("You Write Uppercase letter");
//     }
//     else if (number.charCodeAt() >=97 && number.charCodeAt() <=122)
//     {
//         document.write("You Write Lowercase letter");
//     }
//     else {
//         document.write("I think You Write Number or special Character");
//     }
// }
// else {
//     document.write("I Request <br> Enter a single character only <br> Please");
// }

//========================QUESTION 2========================
// var integer = +prompt("Enter an integer",5);
// var integer2 = +prompt("enter another integer",6);
// if(integer > integer2)
// {
//     document.write(integer + " is the largest Value");
// }
// else if(integer < integer2)
// {
//     document.write(integer2 + " is the largest Value "+"<br>");
// }
// else
// {
//     document.write("They both Value are equal");
// };

//========================QUESTION 3========================
// var integer = +prompt("Enter an integer value\nI check you put positive value or negative value",6);
// if(integer > 0)
// {
//     document.write(integer + " is positive ");
// } else if(integer < 0)
// {
//     document.write(integer2 + " is negative");
// }
// else
// {
//     document.write("Number is zero");
// }

//========================QUESTION 4========================
// vowels = ["a", "e", "i", "o", "u"];
// var char = prompt("Enter a character");
// if (vowels.includes(char))
// {
//     alert(true);
// } else {
//     alert(false);
// }

//========================QUESTION 5========================
// var password = prompt("Enter your password");
// var userp = prompt("Retype your password");
// if (userp.length == 0){
//     alert("Enter your password");
// }
// else {
//     if (userp === password){
//         alert("Your password is correct");
//     }
//     else {
//         alert("Incorrect password");
//     }
// };

//========================QUESTION 6========================
// var greeting;
// var hour = prompt(13);
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)
// }
// else{
// greeting = "Good evening";
// document.write(greeting);
// };

//========================QUESTION 7========================
// var time = +prompt("Enter time in 24 hours format");
// if (time >= 0000 && time < 1200) {
//   alert("Good morning");
// } else if (time >= 1200 && time < 1700)
// {
//     alert("Good afternoon");
// } else if (time >=1700 && time < 2100) {
//     alert("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night");
// }


//========================CHAPTER 14========================
//========================QUESTION 1========================
// var emptyArr = [];

//========================QUESTION 2========================
// var emptyArr = [];
// var emptyArr = newEmptyArr();

//========================QUESTION 3========================
// var stringArr = ["sajid", "ali", "mughal", "rizwan"];
// document.write(stringArr);

//========================QUESTION 4========================
// var numArr = [01,02,03,04,05,06];
// document.write(numArr);

//========================QUESTION 5========================
// var bolArr = [true, false, true, true];
// document. write(bolArr);

//========================QUESTION 6========================
// var mixArr = ["sajid",01,02, true];
// document.write(mixArr);

//========================QUESTION 7========================
// var qualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS","M. Phil.", "PhD"]
// document.write("Qualifications: <br>")            
// for(var i = 0 ; i<qualifications.length ; i++){
//     document.write(` <br>
//                     ${i+1}) ${qualifications[i]}`)
// }

//========================QUESTION 8========================
// var stdNames = ["Jaffar" , "Sir Ali" , "Basit"];
// var stdMarks = [320 , 230, 480];
// var per = [stdMarks[0]/500 * 100 , stdMarks[1]/500 * 100 , stdMarks[2]/500 * 100 ]
// for(var i = 0 ; i<stdMarks.length ; i++){
//     document.write("Score Of " + " " + stdNames [i] + " " + "is " + stdMarks [0]  + " " + "Percentage : " + per[i] + "%" + "<br>" )
// }


//========================QUESTION 9========================
// var colorName = [ "red" , "Blue" , "Purple" , "Black"];
// document.write (" COLOR Name =>" + " " + colorName + "<br>")
// Part(A)
// var addColor = prompt("Add color to the beginning of the array.");
// colorName.unshift(addColor)
// document.write(  "ADD COLOR =>" + " "  +colorName)
 
// PART(B)
// var addColor2 = prompt("Add color to the End of the array.");
// colorName.push(addColor2)
// document.write( "<br>" + "ADD COLOR last =>" + " "  +colorName)
// PART(C)
// var color1 = prompt("ADD COLOR 1 to the beginning of the Array")
// var color2 = prompt("ADD COLOR 2 to the beginning of the Array")
// colorName.unshift(color1 , color2 )
// document.write(colorName)
// PART(D)
// colorName.shift();
// document.write("Delete First array => " + colorName)
// PART(E)
// colorName.pop();
// document.write("Delete Last array => " + colorName)
// PART(F)
// var indNum = parseInt(prompt("Enter a index number "))
// var colorAdd = (prompt("Enter a colors name "))
// colorName.splice(indNum, 0 , colorAdd);
// document.write(colorName)
// PART (G)
// var qts = prompt("You want to delete a colors (yes/no)")
// if(qts === "yes"){
//     var qts2 = parseInt(prompt("how many color s you want to delete")) 
// }
// else{
//     alert("as your wish")
// }
// colorName.splice(qts2 , qts2)
// document.write(colorName)

//========================QUESTION 10========================
// var stdScore = [320,230,480,120];
// document.write( "BEFORE SORTING :  " + " " + stdScore + "<br>")
//  stdScore.sort()
// document.write( "AFTER SORTING :  " + " " + stdScore)

//========================QUESTION 11========================
// var cities = ["karachi" , "Lahore" , "Islamabad" , "Queeta" , "Peshawar"];
// var selectedCities = cities.slice(2,4)
// document.write(`Cities list : <br> ${cities} <br> <br> <br>Selected Cities Name <br> ${selectedCities}`)            

//========================QUESTION 12========================
// var stringg = ["This" , "is" , "my" , "cat"];
// var arr= stringg.join(" ")            
// document.write(arr)

//========================QUESTION 13========================
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// for(var i = 0 ; i<devices.length;i++){
//     document.write(`Out: <br> ${devices[i]} <br>`)
// }            

//========================QUESTION 14========================
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write(`out : <br>
//                 ${devices[3]} <br>
//                 out : <br>
//                 ${devices[2]} <br>
//                 out : <br>
//                 ${devices[1]} <br>
//                 out : <br>
//                 ${devices[0]} <br>`)

//========================QUESTION 15========================
var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select>")
for(var i=0;i<mobiles.length;i++){
    document.write("<option>" + mobiles[i]  +"</option>")
}            
document.write("</select>")            

// =================================complete====================================