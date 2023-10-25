const addButton = document.querySelector("#add");

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
};



const addNewNote = (text = "") => {
  // why created div for big we created a big box(not note box) where note-box can be written and inside that box we can write html data box and that html data box has own box known as note-box
  const note = document.createElement("div");
  note.classList.add("note");

  /*class operation div is for operations(deleting)*/
  /*Main div and textArea: if you click editButton then text area will  be visible and if you again click textarea: then textArea no be visible cuase main class will hidden(block) it */
  
  const htmlData = `
  <div class="operation">
      <button class="edit" > <i class="fas fa-edit"></i> </button>
      <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
  </div>

  <div class="main ${text ? "" : "hidden"} "> </div>
  <textarea class="${text ? "hidden" : ""} "></textarea>  `;

note.insertAdjacentHTML("afterbegin", htmlData);
// console.log(note);

// getting the References
const editButton = note.querySelector(".edit");
const delButton = note.querySelector(".delete");
const mainDiv = note.querySelector(".main");
const textArea = note.querySelector("textarea");

// deleting the node
delButton.addEventListener("click", () => {
  note.remove();
  updateLSData();
});

// toggle using edit button
textArea.value = text;
mainDiv.innerHTML = text;

editButton.addEventListener("click", () => {
  mainDiv.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

textArea.addEventListener("change", (event) => {
  const value = event.target.value;
  mainDiv.innerHTML = value;

  updateLSData();
});

document.body.appendChild(note);
// it appeds a node as the last child of  a node
};

// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());




