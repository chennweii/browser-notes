"use client";

import { Note } from "@/lib/type";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { Save, X } from "lucide-react";

interface NoteEditorProps {
    note: Note;
    onCancel: () => void;
    onSave: (note: Note) => void;
}

export default function NoteEditor({ note, onCancel, onSave }: NoteEditorProps) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleSave = () => {
        onSave({
            ...note,
            title: title.trim() || "Untitled Note",
            content,
        });
    }
    
    return (
        <Card>
            <CardHeader>
                <Input
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-xl font-bold border-none px-0 focus-visible:ring-0 w-full"
                    placeholder="Title"
                />
            </CardHeader>
            <CardContent>
                <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="h-[calc(100vh-350px)] resize-none border-none focus-visible:ring-0 p-0"
                    placeholder="Write your note here..."
                />
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" onClick={onCancel}>
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                </Button>
                <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-1" />
                    Save
                </Button>
            </CardFooter>
        </Card>
    )
}