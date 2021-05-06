// captcha Generator
function captchagenerator(){
    var alpha=new Array('A','B','c','D','1','2','5','6','7','8','9','E','F','G','a','b','c','d','e')

    var M=alpha[Math.floor( Math.random()*alpha.length)]
    var N=alpha[Math.floor(Math.random()*alpha.length)]
    var O=alpha[Math.floor(Math.random()*alpha.length)]
    var P=alpha[Math.floor(Math.random()*alpha.length)]
    var Q=alpha[Math.floor(Math.random()*alpha.length)]
    var T=alpha[Math.floor(Math.random()*alpha.length)]

    var result=M+''+N+''+O+''+P+''+Q+''+T;
    document.getElementById('maincptcha').value=result;
}
//isvalid
var a=removeSpace( document.getElementById('maincptcha').value);
var b=removeSpace(document.getElementById('insert').value);
function isvalid(){
    if(a==b){
    return true
    }else{
        return false
    }
    
}

//check
function removeSpace(string){
// document.getElementById('insert').Value;
 return string.split('').join('')
 //'a b c d' -- array(a,b,c,d) -- 'abcd'
}