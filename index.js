let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

value.style.fontSize = '3rem';
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e){
    const btnList = e.currentTarget.classList;
    if(btnList.contains("decrease")){
      count--;
    }
    else if(btnList.contains("increase")){
      count++;
    }
   else{
    count = 0;
   }
    value.textContent = count;
    
    if(count > 0){
      value.style.color = "green";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color = "blue";
    }

  });
})