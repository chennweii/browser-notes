import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EmptyState from './empty-state';
import { Note } from '@/lib/type';

interface NotesSidebarProps {
    notes: Note[];
}

export default function NotesSidebar({ notes }: NotesSidebarProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Notes</CardTitle>
            </CardHeader>
            <CardContent>
                {NotesSidebar.length === 0 ? (
                    <EmptyState message="No notes yet" buttonText="Create your first note"/>
                ) : (
                    <div>
                        {notes.map((note) => ( // Map over the notes and display them on the sidebar
                            <div 
                            key={note.id}
                            className="p-3 border-md rounded-xl cursor-pointer hover:bg-accent transition-colors"
                            >
                                <h3>{note.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
      
    )
};

