const sname = document.getElementById("sname");
const email = document.getElementById("email");
const regno = document.getElementById("regno");
const course = document.getElementById("course");

const btn = document.getElementById("btn");
const clear = document.getElementById("clear");

const form = document.getElementById("form");

const output = document.getElementById("output");


var selectImage;
var image = function (event) {
  selectImage = URL.createObjectURL(event.target.files[0]);
};



btn.addEventListener("click",function(){

    const std = document.createElement("div");
    const br = document.createElement("br");

    std.classList.add("col-lg-4","p-3");

    std.innerHTML =   "<img src=\""+selectImage+"\" class=\"image\" alt=\" your face \"><img>" +"<br>"+"NAME    : "+sname.value+"<br>"+"EMAIL   : "+email.value+"<br>"+"reg-no : "+regno.value+"<br>"+"course : "+course.value;

    output.appendChild(std);
    output.appendChild(br);
})

clear.addEventListener("click",function(){
    form.reset();
})

  
