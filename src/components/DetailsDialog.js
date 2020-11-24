import React from "react";
import {Grid } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

// Repository Detail Dialog Component
export default function DetailDialog(props) {
    const {detailData} = props;
  return (
    <Dialog onClose={props.onClose}
          TransitionComponent={Transition} maxWidth="lg"
          aria-labelledby="repositories" open={props.isOpen}>
          <DialogTitle id="repositories">Repository Details</DialogTitle>
          <DialogContent>

            <Grid container spacing={1} justify="center" direction="column" >
              <Grid item xs>
              <ul className="evs-ul-userdetails">
                        <li title="Name">
                          <div> Name: </div>
                          <div>{detailData.name}</div>
                        </li>
                        <li title="Description">
                          <div> Description: </div> <div>{detailData.description} </div>
                        </li>
                      </ul>
              </Grid>
              <Grid item xs>
              <ul className="evs-ul-userdetails">
                        <li title="Stars">
                          <div> Stars: </div>
                          <div>{detailData.stargazers_count}</div>
                        </li>
                        <li title="Language">
                          <div> Language: </div> <div>{detailData.language} </div>
                        </li>
                      </ul>
              </Grid>
              <Grid item xs>
              <ul className="evs-ul-userdetails">
                        <li title="Git Url">
                          <div> Git Url: </div>
                          <div>{detailData.git_url}</div>
                        </li>
                        <li title="Watchers Count">
                          <div> Watchers Count: </div> <div>{detailData.watchers_count} </div>
                        </li>
                      </ul>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
    );
}
