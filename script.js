//all lets in html
//mobile
let body =document.querySelector('body');
let circle=document.querySelector('.circle');
let menu=document.querySelector('.menu-icon');
let sideNav=document.querySelector('.menu-Mob');
let cross=document.querySelector('.cross');
let navleftMob=document.querySelector('.nav-left-mob');
let mode2 =document.querySelector('.mode');

//laptop
let all1=document.querySelector('.all1');
let circleLap=document.querySelector('.circle-lap');


//Theme Change 

let count =0;
function mode(){
  if(count==0){
    body.style.background='black';
    all1.style.background='black';
    circle.style.transform='translateX(20px)';
    circleLap.style.transform='translateX(20px)';
    
    mode2.style.background='white';
   
    
    circle.style.backgroundColor='black';
    circleLap.style.backgroundColor='black';

    count=1

  }else{
    body.style.background='rgb(0, 34, 78)';
    all1.style.background='rgb(0, 34, 78)';
    circleLap.style.transform='translateX(0px)';


    circle.style.transform='translateX(0px)'
    mode2.style.backgroundColor='black';
    circle.style.backgroundColor='white';
    
    circleLap.style.backgroundColor='white';
    
    count=0
  }

}
//side bar Menu

cross.addEventListener('click',function(){
  sideNav.style.display='none';

})
flag=0;
function slideNav(){
  if(flag==0){
    sideNav.style.display='inline-flex';
    sideNav.style.transition='5s ease-in';
   
   
   
    flag=1

  }else{
    sideNav.style.display='none';
    sideNav.style.transition='5s ease-in-out';
    flag=0

  }

}