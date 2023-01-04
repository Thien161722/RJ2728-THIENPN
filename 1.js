let star = "";
// for ( let i = 1; i <= 5; i++){
//     star += "*";
//     console.log(star);
// }

let space = " ";
for ( let i = 1; i <= 5; i++){
    console.log(space.repeat(5-i) + star.repeat(2*i-1));
}