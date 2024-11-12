import { Link, useNavigate, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useCreateDate } from "../components/useCreateDate";


export const EditNote = ({note, setNote}) => {

    const {id} = useParams()
    const specificNote = note.find(ele => ele.id == id)
    console.log('specificNote', specificNote)

    const [title, setTitle]  = useState(specificNote.title)
    const [details, setDetails]  = useState(specificNote.details)
    const date = useCreateDate()
    const navigate = useNavigate()

    function handleFormSubmit(event){

        if(title && details){
            let newNotesData = {...specificNote, title, details, date}
            const newNotes = note.map(item => {
                if(item.id == id) item = newNotesData;
                return item;
            })

            setNote(newNotes)
            navigate('/')
        }
    }

    function handleDelete(){
        const modifiedNote = note.filter(ele => ele.id != id)
        setNote(modifiedNote)
        navigate('/')
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className="btn"><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleFormSubmit}>Save</button>
                <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line/></button>
            </header>

            <form action="" className="create-note__form" onSubmit={handleFormSubmit}>
                <input type="text" autoFocus placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows='28' placeholder="Note Details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>

        </section>
    )
}