import { Link } from "@remix-run/react";
import NoteListItem from "./NoteListItem";

function NotesList({ notes }) {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id}>
          {/* <Link to={note.id}> */}
          <div className="ranking">#{index + 1}</div>
          <NoteListItem
            id={note.id}
            title={note.title}
            content={note.content}
            Duedate={note.Duedate}
          />
          {/* </Link> */}
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
