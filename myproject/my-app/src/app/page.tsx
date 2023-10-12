import Results from "./components/Results";

const API_KEY = process.env.API_KEY


export default async  function Home({ searchParams }:any) {
  const genre = searchParams.genre || "fetchTrending";
 
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTrending" ? "trending/all/week" : "movie/top_rated"}?api_key=${API_KEY}&language=en-US&page=1` , {next: {revalidate:10}})
  const data = await res.json()
  const results = data.results
  if (!res.ok){
    throw new Error("Data fetching failed")
  }
  
  return (
   <div><Results results={results}/></div>
  )
}
