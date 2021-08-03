import axios from 'axios';

const cocktails=axios.create({
  baseURL: 'https://api.themoviedb.org/3'
 })


 export const fetchGenre=()=>{

  return async dispatch=>{
    const response=await cocktails.get('/genre/movie/list?api_key=36945a4fb039de4d46e4043f0eddfed9')
    console.log('fetch_genre',response.data.genres)


    dispatch({
      type: 'FETCH_GENRE',
      payload: response.data.genres
    })
  }
  
}

