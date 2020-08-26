//1

var n = Number(prompt('Moi ban nhap n'))

var firstNum = Number(prompt('Nhap firstNum'))

var oppositeNumber;

function findOppositeNumber(n, firstNum) {
    if (firstNum < n/2)
            {
                oppositeNumber = firstNum + n/2
            }    
            else {
                oppositeNumber = firstNum - n/2
            }
}
    
if (4 <= n && n <= 20 && n%2 == 0) {
   if (firstNum <= n - 1) {
       findOppositeNumber(n, firstNum)
       console.log(oppositeNumber)
   }
   else {
       console.log('Moi ban nhap lai firstNum')
   }
}   
else {
    console.log('Moi ban nhap lai n')
}   

//2
var s1 = prompt('Nhap chuoi 1')
var s2 = prompt('Nhap chuoi 2')
var newString = ""

function merge2String(sS,sL) {

    for (let i=0;i < sL.length ;i++){
        if (i < sS.length){
            newString = newString + sS[i] + sL[i] 
        }
        else {
            newString = newString + sL[i]
        }
        
        
    }
    
}
if (s1.length < s2.length) {
    merge2String(s1,s2)
}
else {
    merge2String(s2,s1)
}

console.log(newString)