"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import NotesSidebar from "@/components/ui/notes-sidebar";
import Header from "@/components/ui/header";
import { useState } from "react";
import { Note } from "@/lib/type";
import NoteView from "@/components/ui/note-view";
import NoteEditor from "@/components/ui/note-editor";
import EmptyState from "@/components/ui/empty-state";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]); // "<Note[]>" notes only accept array of Note type, by default it is empty
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const createNewNote = () => {
    // Create a new note Object with id, title, content, and createdAt
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setIsEditing(true);
  };

  const selectNote = (note: Note) => {
    setActiveNote(note);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  }

  const saveNote = (updatedNote: Note) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setActiveNote(updatedNote);
    setIsEditing(false);
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id)); // Filter out the note with the id that matches the id passed in
    if (activeNote && activeNote.id === id) {
      setActiveNote(null);
      setIsEditing(false);
    }
  }

  const renderNoteContent = () => {

    if (!activeNote && notes.length === 0) {
      return (
        <EmptyState 
          message="Create your first note to get started"
          buttonText="New Note"
          onButtonClick={createNewNote}
        />
      )
    }

    if (activeNote && isEditing) { // If activeNote is present and isEditing is true, then render NoteEditor
      return <NoteEditor note={activeNote} onSave={saveNote} onCancel={cancelEdit} />
    }

    if (activeNote) { // If activeNote is present, and is not editing, then render NoteView
      return <NoteView note={activeNote} onEdit={() => setIsEditing(true)} />
    } 
    return null; // If none of the above conditions are met, return null
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="md:col-span-1">
          <NotesSidebar notes={notes} onSelectNote={selectNote} createNewNote={createNewNote} onDeleteNote={deleteNote} activeNoteId={activeNote?.id}/>
        </div>
        <div className="md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
      
  );
}
