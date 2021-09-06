import React from 'react'
import './Footer.css';
import {Grid, Slider} from '@material-ui/core';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
       
        <img
          className="footer__albumLogo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png/1024px-Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png'
          alt=''
        />
       <div className="footer__songInfo">
            <h4>Attention</h4>
            <p>Charlie Puth</p>
          </div>
        
      </div>
         <div className="footer__center">
       <ShuffleIcon className="footer__green"/>
       <SkipPreviousIcon className="footer__icon"/>
       <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
       <SkipNextIcon className="footer__icon"/>
       <RepeatIcon className="footer__green"/>
             </div>
             <div className="footer__right">
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon />
            </Grid>
            <Grid item xs>
                <Slider />
            </Grid>
        </Grid>
             </div>
        </div>
    )
}

export default Footer
