# javascript-calculator

Created 12-26-2021 Tim Santos

Summary
- A calculator web app made in javascript


| Change # | Date | Name | Progress/Comments/Notes |
| -------- | ---- | ---- | ----------------------- |
| 1 | 12-26-2021 | Tim Santos | create index.html, style.css, app.js files |
| 2 | 12-27-2021 | Tim Santos | created consts for each button, created function to update screen with each button press and also store that value in a variable.  Working on creating logic for plus button click first.  My logic is that as we enter values into the calculator, the expression will end up like this: 1234 "some type of operator" 789 so for example, "123 + 456".  There are three parts to this expression.  "123" is "number1", " + " is the "operator", "456" is "number2" If the expression gets to two numbers, then on click of either the equals "ni" button or on click of any of the operators would trigger an eval type function, and print out "579" 579 would become number1 with number2 going back to nothing and what ever else gets typed afterwards.  Also, this is for later on, but let's say I clicked plus sign.  then clicked subtract sign, well then the "operator" needs to change along with the display.. anyways.. kinda got the addition thing to work.  Also, for some reason CSS hover is not working. |
| 3 | 12-28-2021 | Tim Santos | I am able to get the calculator to work for the first expression only.  After more buttons are pressed, the logic starts failing. ugh.  Number 2 will calculate as the entire expression rather than only the number so when it executes, lets say 789 + 456, it says number 1 is 789 and number 2 is 789 + 456 instead of just 456.  WTF...  |
| 4 | 12-29-2021 | Tim Santos | Deleted existing functions and input/out variables.  Rewriting functions |



