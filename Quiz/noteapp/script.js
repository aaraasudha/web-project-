const addBtn = document.getElementById("add-btn");
const noteText = document.getElementById("note-text");
const notesContainer = document.getElementById("notes-container");

// Load saved notes on page load
window.onload = showNotes;

// Add new note
addBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text === "") return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteText.value = "";
  showNotes();
});

// Show notes
function showNotes() {
  notesContainer.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(div);
  });
}

// Delete note
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
