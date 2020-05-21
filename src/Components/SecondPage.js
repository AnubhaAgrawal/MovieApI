import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

//import Image from 'material-ui-image';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  


 
  
function SecondPage(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [value1, setValue1] = React.useState(2);
  const [info, setInfo] = React.useState('https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
   
  const clickHandler = function(e){
    console.log(e.target.alt); //will log the index of the clicked item
    console.log(e.target.src);
    //setInfo(e.target.src);
   // setValue1()
};


    const classes = useStyles();
    const data = props.list ? props.list : [];
    const data1 = props.idobj ? props.idobj : {};
    return (
        <div className = {classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {data.map((item) => (
            <GridListTile key={item.imdbID} datakey = {item} onClick = {clickHandler}>
             <img src={item.Poster} alt={item.Title} />
           
            <GridListTileBar
              title={item.Title}
           
              actionIcon={
                <IconButton aria-label={`info about ${item.Title}` } onClick={handleClickOpen} className={classes.icon}>
                
                  <InfoIcon/>
                </IconButton>
                
              }
            />

<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {item.Title}
        </DialogTitle>
        <DialogContent dividers>
        <img src={item.Poster} alt={item.Title} />
           
          <Typography gutterBottom>
           Year: {item.Year}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Average Rating.
        </Typography>
        <Rating name="read-only" value={value1} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      <Typography gutterBottom>
          Discription: {item.Plot}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
          </GridListTile>
        ))}
      </GridList>
      <img src={data1.Poster} alt={data1.Title} />
            <GridListTileBar
              title={data1.Title}
              actionIcon={
                <IconButton aria-label={`info about ${data1.Title}` } onClick={handleClickOpen} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
                
              }
            />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {data1.Title}
        </DialogTitle>
        <DialogContent dividers>
        <img src={data1.Poster} alt={data1.Title} />
           
          <Typography gutterBottom>
           Year: {data1.Year}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Average Rating.
        </Typography>
        <Rating name="read-only" value={value1} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      <Typography gutterBottom>
          Discription: {data1.Plot}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    
        </div>
    )
}

export default SecondPage;
