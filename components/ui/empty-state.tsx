import React from 'react';
import { Button } from './button';
import { Plus } from 'lucide-react';


interface EmptyStateProps {
    message: string;
    buttonText: string;
    onButtonClick?: () => void; // "?" means it is optional, it is a function that returns void
}

export default function EmptyState( { message, buttonText, onButtonClick }: EmptyStateProps ) {
    return (
        <div className="flex item-center justify-center h-full">
            <div className="text-center p-8">
                <p className="text-muted-foreground mb-4">{message}</p>
                <Button onClick={onButtonClick}>
                    <Plus className="w-4 h-4 mr-0" />
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}