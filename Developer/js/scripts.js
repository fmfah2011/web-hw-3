const languages = ["html","css","javascript", "php","swift","java"]
// const needed_languages = languages[2];
const needed_languages = 3;

console.log("مرحبا بك في برنامج توظيف المبرمجين");

let name = prompt("ما اسمك؟")
let age = parseInt(prompt("كم عمرك؟"));
let experince = parseInt(prompt("كم عدد سنوات الخبره لديك؟"));

console.log(":لغات البرمجه")
console.log("1." + languages[0]);
console.log("2." + languages[1]);
console.log("3." + languages[2]);
console.log("4." + languages[3]);
console.log("5." + languages[4]);
console.log("6." + languages[5]);
for(let i = 0; i < languages.length; i++){
    console.log(i + ". " + languages[i - 1]);
}

let skill1 = prompt("اختر اللغه");

let skill2 = prompt("اختر لغه اخرى");

if(age > 25 &&
age < 40 &&
experince > 3 &&
(skill1 == needed_languages || skill2 == needed_languages)
 ) {
console.log("مقبول");
} else {
     console.log("مرفوض");
 }



//  let points = prompt("quizes")
//  let points2 = prompt("midterm")
//  let points3 = prompt("finale")
//  let points4 = prompt("oral")
let points = prompt("What is your percentage point total?");

 if(points > 90){
     alert("your letter grade is an A!");
 }
 if(points<=89&&points>=80){
     alert("your letter grade is an B!");
 }
 if(points<=79&&points>=70) {
    alert("Your letter grade is a C !");
    }
    if(points<=69&&points>=60) {
    alert("Your letter grade is a D !");
    }
    if(points<60) {
    alert("Your letter grade is an F !");
    }

