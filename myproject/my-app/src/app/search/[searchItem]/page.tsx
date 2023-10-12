import Results from '@/app/components/Results';
import React from 'react'

const page =  async ( {params}:any) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchItem}&language=en-US&include_adult=false`)
      if(!res.ok){
        throw new Error("Data Fetching Failed")
      
      }
  const data = await res.json();
  const results = data.results
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No Results Found</h1>
      )}
      {results && <Results results={results}/ >}
    </div>
  )
}

export default page
