It can be installed using - "npm i randoms_int"<br /><br />
The package allows you to get random integers, it is a function so can be directly used<br /><br />
It can be used in three ways, suppose you imported it with the name "getRandom" (const getRandom = require("randoms_int")):<br /><br />
    i) getRandom() - <br />
    By default if you call the function like "getRandom()" which is without any arguments it will return a random 10 digit integer<br /><br />
    ii) getRandom(num1, num2) - <br />
    You can also call it with two arguments defining the range of the random integer you want like "getRandom(num1, num2)" which will return a random number between num1 and num2<br /><br />
    iii) getRandom(n) -<br />
    By fetching only one argument, the function will return a random integer of "n" number of digits