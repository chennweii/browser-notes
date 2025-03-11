import { Plus } from 'lucide-react';
import { Button } from './button';

interface HeaderProps {
    onNewNote: () => void;
}

export default function Header({ onNewNote }: HeaderProps) { // Header component accepts a function onNewNote as a prop
    return (
    <header className="border-b p-4 bg-card">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Browser Notes</h1>
            <Button onClick={onNewNote} className="cursor-pointer">
                <Plus className="h-4 w-4 mr-0" />New Note
            </Button>
        </div>
    </header>
    );
}