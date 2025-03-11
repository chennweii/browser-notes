"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import NotesSidebar from "@/components/ui/notes-sidebar";
import Header from "@/components/ui/header";
import { useState } from "react";
import { Note } from "@/lib/type";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]); // "<Note[]>" notes only accept array of Note type, by default it is empty 

  const createNewNote = () => {
    // Create a new note Object with id, title, content, and createdAt
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      createdAt: Date.now(),
    };
    console.log(newNote);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <NotesSidebar />
        </div>
        <div className="md:col-span-2">Right</div>
      </main>
    </div>
      
  );
}
 