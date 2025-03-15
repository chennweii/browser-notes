import { Note } from "@/lib/type"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

interface NoteViewProps {
    note: Note;
    onEdit: () => void;
}

export default function NoteView({ note, onEdit }: NoteViewProps) {
    return (
        <Card>
            <CardHeader>
               <CardTitle>{note.title}</CardTitle> 
               <p className="text-sm text-muted-foreground">
                    {new Date(note.createdAt).toLocaleDateString()} 
                </p>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[calc(100vh-350px)]">
                    <div>{note.content}</div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={onEdit}>Edit Note</Button>
            </CardFooter>
        </Card>
    )
}
