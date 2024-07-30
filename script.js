var but=document.getElementById("inputContainer");
var inner=document.getElementById("inner");
var search=document.getElementById("inputSearch");
// //  but.onclick=function(){
//     let col=(Math.random()*0xffff *10000).toString(16);
//     let colr="#"+col.slice(0,6);
//     var newel=document.createElement("div");
//     var newbut=document.createElement("button");
//     newel.textContent=search.value;
//     newbut.classList.add("but");
//     newel.classList.add("tag");
//     newel.style.backgroundColor=colr;
//     inner.appendChild(newel);
//     newel.appendChild(newbut);
//     newbut.textContent="delete";
//     newbut.onclick=function(){
//     inner.removeChild(newel);
//     }
// }

// onlick using add eventlistener 

search.addEventListener("keypress",function(e){
    if(e.keyCode==13)
        {
            addNotes();
        }
});
but.addEventListener("click",addNotes);
// usin function
var h3=document.createElement("h3");
    if(search.value=="")
        {
        document.body.appendChild(h3);
        h3.textContent="Please enter any task";
        h3.style.color="white";
        }
      if(search.value!=""){
           
            addNotes();
        }
    function addNotes(){
    let col=(Math.random()*0xffff *10000).toString(16);
    let colr="#"+col.slice(0,6);
    var newel=document.createElement("div");
    var newbut=document.createElement("button");
    var notes=document.createElement("h2");
    newbut.classList.add("but");
    newel.classList.add("tag");
    newel.classList.add(".h");
    notes.textContent=search.value;
    newel.style.backgroundColor=colr;
    inner.appendChild(newel);
    newel.appendChild(newbut);
    newel.appendChild(notes);
    newbut.textContent="delete";
    newbut.onclick=function(){
    inner.removeChild(newel);
    }
    search.value="";
}

// but.addEventListener("click",function(){
//     let col=(Math.random()*0xffff *10000).toString(16);
//     let colr="#"+col.slice(0,6);
//     var newel=document.createElement("div");
//     var newbut=document.createElement("button");
//     newel.textContent=search.value;
//     newbut.classList.add("but");
//     newel.classList.add("tag");
//     newel.style.backgroundColor=colr;
//     inner.appendChild(newel);
//     newel.appendChild(newbut);
//     newbut.textContent="delete";
//     newbut.onclick=function(){
//     inner.removeChild(newel);
//     }
//         addNotes();
//         console.log("1");
//  });