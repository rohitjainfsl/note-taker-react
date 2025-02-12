import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    text: "",
    color: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const note = { id: Date.now(), text: form.text, color: form.color };
    setNotes([...notes, note]);
  }

  return (
    <>
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
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
          <br />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div className="right">
        <h2>Your Notes</h2>
        <div className="notesWrapper">
          {notes.map((note) => {
            return (
              <div
                className="note"
                key={note.id}
                style={{ backgroundColor: note.color }}
              >
                <span>&times;</span>
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
