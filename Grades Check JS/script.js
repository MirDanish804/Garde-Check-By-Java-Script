

//CHECK GRADES BY MARKES

let percentages = ['1%','30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];


let userpercentage = prompt('Enter percentage');

if (userpercentage >= 90) {
    document.write(' You got A+1 Grade🤗..Congratulations🤩🎈..');


} else if (userpercentage >= 80) {
    document.write(' You got A+ Grade😊🎉..Superb!');


} else if (userpercentage >= 70) {
    document.write(' You got A Grade 😊..Amazing!');


} else if (userpercentage >= 60) {
    document.write(' You got B Grade 🙂..Nice!');


} else if (userpercentage >= 50) {
    document.write('You got C Grade 🙂.. Good!');


} else if (userpercentage >= 40) {
    document.write('You got D Grade 😶.. Keep working hard!');


} else if (userpercentage <= 39) {
    document.write('Ohh! You are Fail😮');
}


