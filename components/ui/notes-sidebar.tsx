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

export default function NotesSidebar() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Notes</CardTitle>
            </CardHeader>
            <CardContent>
                {NotesSidebar.length === 0 ? (
                    <EmptyState message="No notes yet" buttonText="Create your first note"/>
                ) : (
                    <h1>List of the notes</h1>
                )}
            </CardContent>
        </Card>
      
    )
};

