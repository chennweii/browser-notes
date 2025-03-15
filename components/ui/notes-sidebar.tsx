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
import { Button } from './button';
import { Trash2 } from 'lucide-react';
import { ScrollArea } from './scroll-area';

interface NotesSidebarProps {
    notes: Note[];
    onSelectNote: (note: Note) => void;
    createNewNote: () => void;
    onDeleteNote: (id: string) => void;
    activeNoteId: string | undefined;
}

export default function NotesSidebar({ notes, onSelectNote, createNewNote, onDeleteNote, activeNoteId }: NotesSidebarProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>My Notes</CardTitle>
            </CardHeader>
            <CardContent>
                {notes.length === 0 ? (
                    <EmptyState message="No notes yet" buttonText="Create your first note" onButtonClick={createNewNote}/>
                ) : (
                    <ScrollArea className="h-[calc(100vh-200px)]">
                        <div>
                            {notes.map((note) => ( // Map over the notes and display them on the sidebar
                                <div 
                                onClick={() => onSelectNote(note)}
                                key={note.id}
                                className={`p-3 border-md rounded-xl cursor-pointer hover:bg-accent transition-colors ${activeNoteId === note.id ? "bg-accent" : ""}`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium">
                                                {note.title.substring(0, 30)}
                                                {note.title.length > 30 ? "..." : ""}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {note.content.substring(0, 50)}
                                                {note.content.length > 40 ? "..." : ""}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(note.createdAt).toLocaleDateString()} 
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteNote(note.id);
                                            }}  
                                        >
                                            <Trash2 className="h-4 w-4"/>
                                        </Button>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                )}
            </CardContent>
        </Card>
      
    )
};

