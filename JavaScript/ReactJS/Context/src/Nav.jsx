import { useContext }  from 'react'
 
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
      <>
    <div>Hasan</div>
      <p>List of Movies:{movies.length}</p>
      </>
  )
}

export default Nav