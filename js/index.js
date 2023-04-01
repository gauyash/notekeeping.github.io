
let notesArr=JSON.parse(localStorage.getItem("notesArr"))||[];

let notesAreaRow=document.querySelector(".notes-area-row");
let addNoteBarRow=document.querySelector(".add-note-bar-row");

let addNoteRow=document.querySelector(".add-note-row");
let titleEl=document.querySelector("#title");
let contentEl=document.querySelector("#content");


let popUp=document.querySelector(".pop-up");
let editTitle=document.querySelector(".edit-title");
let editContent=document.querySelector(".edit-content");
let btnClose=document.querySelector(".btn-close");


let num;

function expandRow(){
    addNoteBarRow.classList.add("expand");  
}


contentEl.addEventListener("click",expandRow);





addNoteRow.addEventListener("click",()=>{  
    addNoteBarRow.classList.remove("expand");
    notesArr.push(
        {
            title:titleEl.value,
            content:contentEl.value
        }
        )
    localStorage.setItem("notesArr",JSON.stringify(notesArr));
    displayNotes();
    titleEl.value="";
    contentEl.value="";

})



const displayNotes=()=>{

    let textShow="";
    notesArr.forEach((notesItems,index)=>{


        textShow+=`
        <article class="note">
            <div class="options">
                <div class="tick-btn" onclick="editNote(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>

                <div class="close-btn" onclick="deleteNote(${index})">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            
            <textarea class="note-title" readonly>${notesItems.title}</textarea>
            <textarea class="note-content" readonly>${notesItems.content}</textarea>
        </article>

        `
    })
    notesAreaRow.innerHTML=textShow;
}

displayNotes();







function deleteNote(index){
    notesArr.splice(index,1);
    localStorage.setItem("notesArr",JSON.stringify(notesArr));
    displayNotes();
}




function editNote(index){
    console.log(index);
    num=index;
    popUp.classList.add("active");
    document.querySelector("body").classList.add("add-blur");
}




btnClose.addEventListener("click",()=>{

    notesArr[num].title=editTitle.value;
    notesArr[num].content=editContent.value;
    localStorage.setItem("notesArr",JSON.stringify(notesArr));
    displayNotes();
    popUp.classList.remove("active");
    document.querySelector("body").classList.remove("add-blur");
})








