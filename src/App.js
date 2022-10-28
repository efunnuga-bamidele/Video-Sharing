import './App.css';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core'

//components
import SearchBar from './components/SearchBar';

function App() {

  return (
    <Grid style={{ justifyContent: "center"}} container spacing={10}>
      <Grid item xs = {11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit = {handleSubmit} /> 
          </Grid>
          <Grid item xs={8}>
            { /* {VideoDetail} */ }
          </Grid>
          <Grid item xs={4}>
            { /*{VideoList}*/ }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem){
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyD9R6SyA5ksl-lOscoxTQ3iAD27K4QE0tI",
        q: searchItem,
      }
    })
    console.log(res.data.items)
  }
}

export default App;
