import { useGlobalContext } from './Context'

const Search = () => {
  const {query , setQuery , isError} = useGlobalContext()
  function handleChange(event) {
    setQuery(event.target.value)
  }


  return (
    <div>
      <h1>Hello from search {query}</h1>
      <section className='search-section'>
      <input type='search' value={query} onChange={handleChange}/>
      </section>
      <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Search
