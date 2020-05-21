import React , {useState, useRef, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import  SecondPage from './SecondPage';
const searchBy = [
    {
      value: 'Title',
     
    },
    {
      value: 'Id',
     
    },
   
  ];

  const Type = [
    {
      value: 'movie',
      
    },
    {
     
      value: 'series',
    },
    {
       
        value: 'episode',
      },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

export default function FirstPage() {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const [dataId, setDataId] = useState({});
    const [flag, setFlag] = useState(false);
    const [query, setQuery] = useState('batman');
    const [search, setSearch] = React.useState('Title');
    const [searchMovie, setSearchMovie] = useState('movie');
    const [year, setYear] = useState('');
   
    useEffect(() => {
      const fetchData = async () => {
        let query1 = `&s=${query}`
        if(search=='Title')
             query1 = `&s=${query}`;
        else{
          query1 = `&i=${query}`;
        }     
        let movie = searchMovie !=='' ?`&type=${searchMovie}`: ``;

        const yeart = year !=='' ?`&type=${year}`: ``;
        if(year=='' && query == ''){
          movie = `&s=${searchMovie}`
        }
        console.log("searchMovie: ");
        console.log(  `http://www.omdbapi.com/?apikey=f7fe80cc`+ query1 + movie + yeart);
        console.log(searchMovie);
        const result = await axios(
          `http://www.omdbapi.com/?apikey=f7fe80cc`+ query1 + movie + yeart,
        );
        console.log(result.data);
        if(search=='Title'){
           setData(result.data.Search);
           setDataId({});
        }
        else{
          setDataId(result.data);
          setData([]);
        }   
      };
   
      fetchData();
    }, [query, searchMovie, year, search]);

  
  
    return (
        <div className={classes.root}>

        <TextField
          id="standard-select-currency"
          select
          label="Search By"
          value={search}
          onChange={event => setSearch(event.target.value)}
          helperText="search by Title and Id"
        >
          {searchBy.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="standard-search" label="Search field"  value={query}
        onChange={event => setQuery(event.target.value)} type="search" />
        <TextField id="standard-search" label="year" value={year}
        onChange={event => setYear(event.target.value)}  type="search" />

       {/*<TextField id="standard-search" label="Search field"  value={searchMovie}
        onChange={event => setSearchMovie(event.target.value)} type="search" />*/}
       <TextField
          id="standard-select-currency"
          select
          label="Search By"
          value={searchMovie}
          onChange={event => setSearchMovie(event.target.value)}
          helperText="search by Title and Id"
        >
          {Type.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
        {console.log(searchMovie)}
        {console.log(data)}
         <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={() => {
          
          setFlag(!flag);
        }}> 
        Search
        </Button>
       <SecondPage list = {data} idobj= {dataId}/>
        </div>
      
        </div>
    )
}
