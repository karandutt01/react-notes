import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { NoteItem } from "../components/NoteItem";
import { BsPlusLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";



export const Notes = ({note}) => {

    const [showSearch, setShowSearch] = useState(false)
    const [text, setSearch] = useState('')
    const [filteredList, setFilterdNotes] = useState(note)

    function handleSearchBar(){
        setFilterdNotes(note.filter(ele => {
            if(ele.title.toLowerCase().match(text.toLocaleLowerCase())){
                return ele;
            }
        }))
    }

    useEffect(handleSearchBar, [text])

    return (
       <section>
            <header className="notes__header">
                {!showSearch && <h2>My Notes</h2>}
                { showSearch && <input type="text" value={text} autoFocus placeholder="Search" 
                onChange={(e) => {
                    setSearch(e.target.value)
                    handleSearchBar()
                }}  />}
                <button className="btn" onClick={() => setShowSearch(!showSearch)}>{showSearch ? <IoMdClose /> : <CiSearch />}</button>
            </header>
            <div className="notes__container">
                { filteredList.length == 0 && <p className="empty__notes">No notes found</p>}
                {
                    filteredList.map(({id, title, date}) => <NoteItem key={id} note={{id, title, date}}/>)
                }
            </div>
            <Link to='/create-notes' className="btn add__btn"><BsPlusLg /></Link>
       </section>
    )
}