import {NoteForm} from "./NoteForm.tsx";
import type {NoteData, Tag} from "./App.tsx";
import {useNote} from "./Types.ts";

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}

export function EditNote({onSubmit, onAddTag, availableTags}: EditNoteProps) {
    const note = useNote();
    return (
        <>
            <h1 className="mb-4">Edit Note</h1>
            <NoteForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags}/>
        </>
    )
}
