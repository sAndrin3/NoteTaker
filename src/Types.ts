import {useOutletContext} from "react-router-dom";
import type {Note} from "./App.tsx";

export function useNote() {
    return useOutletContext<Note>()
}
