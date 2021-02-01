




// 1
for(let i=0; i < 5; i++){
    setTimeout(function() {console.log(i), i * 1000});
}
// 2

const  arr = Array.from({length:1000}, () => Math.round(Math.random() * 900 + 1))
const uniqueArr = [... new Set(arr)] ;
uniqueArr.length;
// 3

const arr3 = [1,0,10,'0','1','', NaN, false, null, undefined, 'false', 'true'];
arr3.filter(el => el == true)
