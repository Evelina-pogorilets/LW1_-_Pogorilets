//task1
a = 2;
b = 2;
sum = a+b;
dob = a*b;
ris = a-b;
dil = a/b;
console.log('sum =',sum,'\ndob =', dob,'\nris =', ris,'\ndil =',dil)
// task 2
age = 18
console.log('мені',age,'років');
// task 3
//time = 50;
//transmission = 25;
//task 4
//1 завдання зробила не свій варіант але воно не спрацьовує як треба
//word = 'електронів';
//sentence = 'Наука про взаємодію електронів з електромагнітними полями';
//space = sentence.split(' ');
//console.log(space);
//for (i=0; i < space.length; i++ )
//{
  //if(space == word)
  //{
    //console.log ('Слово входить в речення');
  //}
  //else
  //{
    //console.log ('Слово не входить в речення');
  //}
//}
sui = 5;
kurama = 20;
dazai = 20;
if(sui == kurama && kurama == dazai)
{
  console.log('всі числа рівні');
}       
else if(sui == kurama || sui == dazai || kurama == dazai)
{
  console.log('2 числа рівні');
}
else 
{
  console.log('всі числа різні');  
}      
//для браузера з вводом  
sui = prompt();
kurama = prompt();
dazai = prompt ();
if(sui == kurama && kurama == dazai)
{
  alert('всі числа рівні');
}       
else if(sui == kurama || sui == dazai || kurama == dazai)
{
  alert('2 числа рівні');
}
else 
{
  alert('всі числа різні');  
}
//task 5
medal = prompt();
if (medal == 1) {
  alert('золото');
} else if (medal == 2) {
  alert('срібло');
} else if( medal ==3) {
  alert('бронза');
}
else {
alert('немає медалі');
}
