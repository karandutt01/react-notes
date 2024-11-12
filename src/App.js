import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateNote } from './pages/CreateNote'
import { EditNote } from './pages/EditNote'
import { Notes } from './pages/Notes'
import { useEffect, useState } from 'react'
import {notes as dummynotes} from './duumynotes'

export const App = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])

    // As adding data in local Storage is also a sideeffect, therefore we are using useEffect hook and we are saving new notes.
    // When we refresh the page we get our added data and data do not get lost so we are storing it in local storage.
    useEffect(() => {
        return localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    return (
        <main id='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Notes note={notes}/>}/>
                    <Route path='/create-notes' element={ <CreateNote setNote={setNotes}/>}/>
                    <Route path='/edit-notes/:id' element={ <EditNote note={notes} setNote={setNotes}/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}