import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ErrorBoundaryPropTypes } from "./types";

export function ErrorBoundary({ title, message }: ErrorBoundaryPropTypes) {
    return (
        <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}
