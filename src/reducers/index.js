import { combineReducers } from "redux";

const SongReducer = () => {
    return [
        { title: "Hello", duration: "3:01"},
        { title: "Bye Bye", duration: "4:01"},
        { title: "Hey Jude", duration: "2:01"},
        { title: "Mama Mia", duration: "5:01"},
        { title: "Yeah!", duration: "6:01"},
        { title: "fuck!", duration: "2:01"},
        { title: "Amir song!", duration: "3:01"}
    ]
}

const SelectedSongReducer = (song = null, action) => {
    if (action.type === 'SONG_SELECT') {
        return action.payload
    }

    return song
}

export default combineReducers({songs: SongReducer, selectedSong: SelectedSongReducer})
