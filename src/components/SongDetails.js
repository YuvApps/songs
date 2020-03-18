import React from "react";
import { connect } from 'react-redux'

const SongDetails = ({ mySong }) => {
    if (!mySong) {
        return <div>Select A Song</div>
    }
    console.log(mySong)
    return (
        <div>
            <div>
                {mySong.title}
            </div>
            <div>
                {mySong.duration}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { mySong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)