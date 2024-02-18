import React from 'react';
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Note from './components/Note.tsx'


export default function App()   {
    return (
        <div>
            <Header />
            <Note title="this is a title" content="this is the note's content"/>
            <Footer />
        </div>
    );
}