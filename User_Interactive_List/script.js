var enter=document.getElementById("enter");
var inputdata=document.querySelector("#userinput")
var it=document.querySelectorAll("li")
var delet=document.getElementsByClassName("Delete")


function toggle_done(event){
    event.toElement.classList.toggle("done");
}

function delet_list(event){
    event.toElement.parentElement.remove()
}

function addtolist(){
    var data=inputdata.value;
    if(data!="")
    {
        var ul=document.querySelector("ul");
        var div=document.createElement("div");
        var li=document.createElement("li");
        var bt=document.createElement("button");
        div.classList.add("inline");
        bt.classList.add("Delete");
        li.appendChild(document.createTextNode(data));
        bt.appendChild(document.createTextNode("Delete"));
        div.appendChild(li);
        div.appendChild(bt);
        ul.appendChild(div);
        inputdata.value=""
        run_again(document.querySelectorAll("li"));
    }
}


enter.addEventListener("click",addtolist)
inputdata.addEventListener("keypress",function(event){
    if(event.keyCode===13)
    {
        addtolist();
    }
})

function run_again(items)
{
    for(var i=0;i<items.length;i++)
    {
    items[i].addEventListener("click",toggle_done);
    delet[i].addEventListener("click",delet_list);
    }
}

run_again(it)