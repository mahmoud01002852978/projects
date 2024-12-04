var siteName = document.getElementById("sitename");
var siteurl = document.getElementById("siteurl"); 
var sup = document.getElementById("sup");
var Vist = document.getElementById("Vist");
var alert =document.getElementById("alert")
var close =document.getElementById("close")
var layer =document.querySelector(".layer")
/*
Rejex ==> 
/web/ // ==> include web 
/[abc]/ // ==> chose
*/


var weblist ;
if(localStorage.getItem("data")==null){
    weblist =[]
}
else{
    weblist = JSON.parse(localStorage.getItem("data"));
    display()
}


function add(){
var web ={
    name :siteName.value,
    url : siteurl.value,
};
    weblist.push(web);
    localStorage.setItem("data",JSON.stringify(weblist));
    al();
    clear();

}

function clear(){
    siteName.value=null;
    siteurl.value=null;
}

function display(){
    var cartona="";
for(i=0 ;i<weblist.length;i++){
    cartona += `<div class="item container rounded-2 mb-2 bg-light">
            <div class="row text-center">
                <div class="col-3">
                    <p>${i+1}</p>
                </div>
                <div class="col-3">
                    <p>${weblist[i].name}</p>
                </div>
                <div class="col-3">
                  <a href="${weblist[i].url}"><button type="button"  id="Vist" class="btn btn-outline-info"><i class="fa-solid fa-line"></i> Vist</button></a>
                </div>
                <div class="col-3">
                   <button type="button" onclick="dele(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i>delete</button>
                </div>
            </div>
        </div>`
    }
        document.getElementById("ww").innerHTML = cartona;
}
function dele(deleteindx){
weblist.splice(deleteindx,1);
localStorage.setItem("data",JSON.stringify(weblist));
display();

}
/*
var nameRejex = /^[a-z]i{3,10}$/
var urlRejex =/[.com.net.yahoo]/
var result =nameRejex.siteName.value;
if(result == true){
    console.log("match");
}
else{
   console.log("n match");
        
} */
function validation(ele){
var Rejex ={
    sitename :  /^[a-z]{3,}$/i,
    siteurl :  /^(http|https)\:\/\/(www\.[a-z]{3,40}[0-9]{0,5}|[a-z]{3,40}[0-9]{0,5})\.[a-z]{2,4}\/?[a-z]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[0-9]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[a-z]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[0-9]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[a-z]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[0-9]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[a-z]*[\/\?\&\*\^\%\$\#\@\!\~\=\.]*[0-9]*$/,
}
if (Rejex[ele.id].test(ele.value) == true ) {
    ele.classList.add("is-valid");
    ele.classList.remove("is-invalid");
  } else {
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");
  }
}
function al(){
    if(siteName.classList.contains("is-invalid")||siteurl.classList.contains("is-invalid")){
        alert.classList.remove("d-none")
    }
    else if(siteName.classList.contains("is-valid")||siteurl.classList.contains("is-valid")){
        display();
    }
}


close.addEventListener("click",function(){
    alert.classList.add("d-none")
    })

    layer.addEventListener("click",function(){
        alert.classList.add("d-none")
    })


