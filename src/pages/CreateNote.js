import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useCreateDate } from "../components/useCreateDate";

export const CreateNote = ({setNote}) => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate()
    const unique_id = uuid();
    const notesId = unique_id.slice(0, 8)

    function handleFormSubmit(event){
        console.log('Event', event)
        if(title && details){
            let noteObj = { id: notesId, title, details, date }
            setNote(prevNotes => [ noteObj, ...prevNotes])
            navigate('/')
        }
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className="btn"><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleFormSubmit}>Save</button>
            </header>

            <form action="" className="create-note__form" onSubmit={handleFormSubmit}>
                <input type="text" autoFocus placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows='28' placeholder="Note Details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>

        </section>
    )
}