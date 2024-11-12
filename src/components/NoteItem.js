import { Link } from "react-router-dom"

export const NoteItem = ({note}) => {
    return (
       <Link to={`/edit-notes/${note.id}`} className="note">
            <h4>{note.title}</h4>
            <p>{note.date}</p>
       </Link>
    )
}