let burger = document.getElementsByClassName('burger')[0];
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    let menu = document.getElementsByTagName('header')[0].getElementsByTagName('ul')[0];
    menu.classList.toggle('active');
});


window.addEventListener('scroll', function(){
   let small = document.getElementsByClassName('logo')[0];
   let top = window.scrollY;
   if (top>150){
     small.classList .add('change');
   }
   else{
    small.classList.remove('change'); 
   }
   
  });



// Animate items
let orderitem = document.getElementsByClassName('item');
// let number = document.getElementById('order_book').getElementsByTagName('span');
for (i=0;i<orderitem.length;i++){
 let itemanimate = orderitem[i];
itemanimate .addEventListener('mouseover', function () {
itemanimate .classList.add('animate');});
  
itemanimate .addEventListener('mouseout', function () {
itemanimate .classList.remove('animate');
 });

}










