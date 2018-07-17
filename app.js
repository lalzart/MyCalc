
// digits variables
var digit = document.querySelectorAll('.item-dig');
var func = document.querySelectorAll('.item-func');
var screen = document.querySelector('#screen');
var clear = document.querySelector('#fclear');
var equals = document.getElementById('fequals');
var sc = []; 

clear.addEventListener("click", function(){
  screen.innerHTML = "";
  sc = [];
});

for (var i = 0; i<digit.length; i++) {
  digit[i].addEventListener("click", function(){
    var btnVal = this.innerHTML;
    screen.innerHTML += btnVal;
  });
}

for (var n = 0; n<func.length;n++)
func[n].addEventListener("click", function(){
  var funcdigi = this.innerHTML;
  var val1 = screen.innerHTML;
  screen.innerHTML = "";
  sc.push(val1);
  sc.push(funcdigi);
  
});
equals.addEventListener("click",function(){
    var vala = screen.innerHTML;
    sc.push(vala);
    var totes = eval(sc[0]+sc[1]+sc[2]);
    screen.innerHTML = totes;
    console.log(sc);
});
sc =[];


















// for (var n = 0; n<func.length;n++)
// func[n].addEventListener("click", function(e){
//   var funcdigi = this.innerHTML;
//   console.log(funcdigi);
//   var funcdigi2 = funcdigi;
//   var val1 = screen.innerHTML;
//   var val2 = parseInt(val1);
//   screen.innerHTML = "";
//   sc.push(val2);
//   fd = funcdigi2;
//   console.log(fd);
//   // console.log(val1);
  
// });
// equals.addEventListener("click",function(){
//     var vala = screen.innerHTML;
//     val3 = parseInt(vala);
//     sc.push(val3);
//     var totes = sc[0]+sc[1];
//     screen.innerHTML = totes;
//     console.log(sc);
// });
// sc =[];









// add numbers to screen



