var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    if(title.value=="" || content.value==""){
        alert("時間與待辦事項為必填");
    }
    else{
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2> 
        <p>${content.value}</p>
    </div>
    `;
    title.value = "";
    content.value = "";
    }
})
 
