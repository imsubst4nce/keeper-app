import React from 'react';
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Note from './components/Note.tsx'
import notes from './utils/notes.tsx';

export default function App()   {
    return (
        <div>
            <Header />
                {notes.map(note => (
                    <Note 
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                ))}
            <Footer />
        </div>
    );
}