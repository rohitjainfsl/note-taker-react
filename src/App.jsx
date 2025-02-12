import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    text: "",
    color: "#000000",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const note = { id: Date.now(), text: form.text, color: form.color };
    setNotes([...notes, note]);
    setForm({ text: "", color: "#000000" });
  }

  function handleDelete(idToDelete) {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  return (
    <>
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex">
            <textarea
              name="text"
              placeholder="Write note here..."
              id=""
              value={form.text}
              onChange={handleChange}
            ></textarea>
            <input
              type="color"
              name="color"
              value={form.color}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div className="right">
        <h2>Your Notes</h2>
        <div className="notesWrapper flex">
          {notes.map((note) => {
            return (
              <div
                className="note"
                key={note.id}
                style={{ backgroundColor: note.color }}
              >
                <span onClick={() => handleDelete(note.id)}>&times;</span>
                {note.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
