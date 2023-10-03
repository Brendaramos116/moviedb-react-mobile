import axios from 'axios';


const apiFilmes = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjJlODFjYjQ5MjU5ODc5MWRjNDA0N2RjNjA0NmI0MiIsInN1YiI6IjY0MzRhMGNlOTJlNTViMDBmNDdlZTgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdnyRz_z4y3T6EgX-sSjcY6Bz5dR0CjfqMXpKduWzFA' 
    }
}) 
  
export default apiFilmes    