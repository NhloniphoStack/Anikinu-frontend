import { useEffect, useState, Suspense } from "react"
import {  useLoaderData, useSearchParams, Await, useLocation, useNavigate, Link, NavLink } from "react-router"
import DetailedAnimeCard from "../Components/DetailedAnimeCard.jsx"
import Select from "react-select"
import { useClickOutside } from "../hooks/useClickOutside.jsx"
import { genres } from "../util/supplyGenres.js"
import ReactPaginateModule from 'react-paginate'
const ReactPaginate = ReactPaginateModule.default
import eaten from '../assets/eaten.svg'
import SkeletonsCard from "../Components/loadingSkeletons/SkeletonsCard.jsx";
import DiscoverFallback from "../Components/DiscoverFallback.jsx"
export default function Discover(){
    
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [selectedSeason, setSelectedSeason] = useState(null)
    const [selectedFormat, setSelectedFormat] = useState(null)
    const [selectedSort, setSelectedSort] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const pageValue = searchParams.get("page")
    const getPage = () => pageValue ? pageValue : 1
   const [totalpages, setTotalPages] = useState(null)
    
    const countryOpts = [
        {
        value: 'CN',
        label: 'China'
    },
    {
        value: 'JP',
        label: 'Japan'
    },
    {
        value: 'KR',
        label: 'Korea'
    }
]

 const sortOpts = [
        {
        value: 'Popularity',
        label: 'Popularity'
    },
    {
        value: 'score',
        label: 'Score'
    },
    {
        value: 'newest',
        label: 'Newest'
    }
]

 const seasonOpts = [
        {
        value: 'FALL',
        label: 'Fall'
    },
    {
        value: 'WINTER',
        label: 'Winter'
    },
    {
        value: 'SUMMER',
        label: 'Summer'
    },
    {
        value: 'SPRING',
        label: 'Spring'
    }
]

 const yearOpts = [
        {
        value: '2026',
        label: '2026'
    },
    {
        value: '2025',
        label: '2025'
    },
    {
        value: '2024',
        label: '2024'
    },
    {
        value: '2024',
        label: '2023'
    }
]




 const statusOpts = [
        {
        value: 'FINISHED',
        label: 'Complete'
    },
    {
        value: 'NOT_YET_RELEASED',
        label: 'Not yet aired'
    },
    {
        value: 'RELEASING',
        label: 'Airing'
    }
]

 const formatOpts = [
        {
        value: 'TV',
        label: 'Tv'
    },
    {
        value: 'MOVIE',
        label: 'Movie'
    },
    {
        value: 'OVA',
        label: 'Ova'
    },
    {
        value: 'ONA',
        label: 'Ona'
    }
]

    function handleYear(option){
         let value = option?.value
        
        setSelectedYear(option)
        
        setSearchParams(() => ({year: value}))
        const params = new URLSearchParams(location.search)

        params.set("year", value)
        navigate(`/discover?${params.toString()}`)


    }

    function handlePages(e){
        setSearchParams(() => ({page: e.selected + 1}))
        const params = new URLSearchParams(location.search)

        params.set("page", e.selected + 1)
        navigate(`/discover?${params.toString()}`)
    }

    
     
    const anime = useLoaderData()?.animePromise
    
    function handleStatus(option){
         let value = option?.value
        
        setSelectedStatus(option)
        if(!value){
             value =  'FINISHED'
        }
        setSearchParams(() => ({status: value}))
        const params = new URLSearchParams(location.search)

        params.set("status", value)
        navigate(`/discover?${params.toString()}`)

    }


    function handleSeason(option){

          let value = option?.value
         
        setSelectedSeason(option)
        if(!value){
             
             setSearchParams((param) => {
                const newParam = new URLSearchParams(param)
                newParam.delete("season")
                
             })
        }else{
            setSearchParams(() => ({season: value}))
           const params = new URLSearchParams(location.search)
           
           params.set("season", value)
           navigate(`/discover?${params.toString()}`)

        }
        

    }

    function handleFormat(option){

         let value = option?.value
        
        setSelectedFormat(option)
        if(!value){
             value =  'TV'
        }
        setSearchParams(() => ({format: value}))
        const params = new URLSearchParams(location.search)

        params.set("format", value)
        navigate(`/discover?${params.toString()}`)

    }


   function handleSort(option){

          let value = option?.value
        
        setSelectedSort(option)
        if(!value){
             value =  'Popularity'
        }
        setSearchParams(() => ({sortBy: value}))
        const params = new URLSearchParams(location.search)

        params.set("sortBy", value)
        navigate(`/discover?${params.toString()}`)

    }

    

    function handleChange(option){
        
        let value = option?.value
        
        setSelectedCountry(option)
        if(!value){
             value =  'JP'
        }
    
        setSearchParams(() => ({country: value}))
        const params = new URLSearchParams(location.search)

        params.set("country", value)
        navigate(`/discover?${params?.toString()}`)
    }


   const [showFilters, setShowfilters] = useState(false)
    
   function toggleFilters(){
    setShowfilters(prev => !prev)
   }

   function handleStatusChange(e){
    const { value } = e.target
        setSearchParams(() => ({status: value}))
        const params = new URLSearchParams(location.search)

        params.set("status", value)
        navigate(`/discover?${params.toString()}`)

   }

   function handleGenreImpro(genre){
       setSearchParams((params) => {
        const newParams = new URLSearchParams(params)
        const selectedGenres = newParams.getAll("genres")

        if(selectedGenres.includes(genre)){
            newParams.delete("genres")
        }else{
            newParams.append("genres", genre)
        }

        return newParams
       })
   }

   const page = searchParams.get("page")
  
   useEffect(() => {
      if(page){
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
      
   }, [page, selectedCountry, selectedFormat, selectedSeason, selectedSort, selectedStatus, selectedYear])

   function handleSearch(e){
       let { value } = e.target
        if(!value){
            setSearchParams((params) => {
                const newParams = new URLSearchParams(params)
                newParams.delete("search")
            })
        }else{

            setSearchParams(() => ({search: value}))
        const params = new URLSearchParams(location.search)

        params.set("search", value)
        navigate(`/discover?${params.toString()}`)

        }
        
        
   }

    const filtermenuRef = useClickOutside(() => {
        setShowfilters(false)
    })

    useEffect(() => {
        window.scrollTo({top:0, behavior: "smooth"})
     })

    
    
    return (
        <section className="discover-section container"> 
        <h1>Browse Anime </h1>
        <input
        onInput={handleSearch}
        className="browse-input"
         placeholder="Search anime"
         />
         <div>
            <button 
            onClick={toggleFilters}
             className="filter-button">
                Filters
            </button>
            
         </div>

        {showFilters &&
            <div ref={filtermenuRef} className="filters-drawer">
        <div className="filter-header">
           <p >Filters</p>
           <div>
             <NavLink className="clear-button" to="/discover?page=1">Clear All</NavLink>
             <button onClick={toggleFilters}>{`x`}</button>
           </div>
           
        </div>
         
         <div className="filters">
         <div className="genre-layout">
            <p className="genre-text">Genre</p>
         <div className="genre-container">
         
         {genres.map((genre, i) => 

         <button
          className={`genre-button ${genre}`} 
         key={i} onClick={() => handleGenreImpro(genre)}>
            {genre}
         </button>

         )}
         </div>
         </div>
        
        <div className="select-container">

       <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleYear}
         value={selectedYear}
         options={yearOpts}
         placeholder="Year"
         isSearchable={true}
         isClearable={true}
         />
        </div>

        <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleChange}
         value={selectedCountry}
         options={countryOpts}
         placeholder="Country"
         isSearchable={true}
         isClearable={true}
         />
        </div>

        <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: (base) => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleStatus}
         value={selectedStatus}
         options={statusOpts}
         placeholder="Status"
         isSearchable={true}
         isClearable={true}
         />
        </div>

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: (base) => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleSeason}
         value={selectedSeason}
         options={seasonOpts}
         placeholder="Season"
         isSearchable={true}
         isClearable={true}
         />
        </div>

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: (base) => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleFormat}
         value={selectedFormat}
         options={formatOpts}
         placeholder="Format"
         isSearchable={true}
         isClearable={true}
         />
        </div>

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleSort}
         value={selectedSort}
         placeholder="Sort"
         options={sortOpts}
         isSearchable={true}
         isClearable={true}
         />
        </div>
         </div>
         </div>
        
         </div>}
        <div className="grid-layout">
        <div className="side-panel">
            <div className="panel-header">
                <h4>Filters</h4>
                <Link to="/discover?page=1">Clear All</Link>
            </div>
            
            <div className="genre-layout">
            <p className="genre-text">Genre</p>
         <div className="genre-container">
         
         {genres.map((genre, i) => 

         <button
          className={`genre-button ${genre}`} 
         key={i} onClick={() => handleGenreImpro(genre)}>
            {genre}
         </button>

         )}
         </div>
         </div>

      

         <div className="custom-radio-input">
            <p className="status-text">Status</p>
            <label className="radio-container">
                Airing
                <input onChange={handleStatusChange} value="RELEASING" type="radio" name="status"/>
                <span className="checkmark"> </span>
            </label>

            <label className="radio-container">
                Finished
                <input onChange={handleStatusChange} value='FINISHED' type="radio" name="status"/>
                <span className="checkmark"> </span>
            </label>

             <label className="radio-container">
                Upcoming
                <input onChange={handleStatusChange} value="NOT_YET_RELEASED"  type="radio" name="status"/>
                <span className="checkmark"> </span>
            </label>

         </div>

        <div className="select-container">

       <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "40px",
                borderRadius: "5px"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "40px", 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa'
            }),
         }}
         onChange={handleYear}
         value={selectedYear}
         options={yearOpts}
         placeholder="Year"
         isSearchable={true}
         isClearable={true}
         />
        </div>

        <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "30px",
                borderRadius: "5px",
                fontSize: "0.9rem"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "30px",
                fontSize: "0.9rem" 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa',
                fontSize: "0.9rem"
            }),
         }}
         onChange={handleChange}
         value={selectedCountry}
         options={countryOpts}
         placeholder="Country"
         isSearchable={true}
         isClearable={true}
         />
        </div>

        

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "30px",
                borderRadius: "5px",
                fontSize: "0.9rem"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "30px",
                fontSize: "0.9rem" 
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa',
                fontSize: "0.9rem"
            }),
         }}
         onChange={handleSeason}
         value={selectedSeason}
         options={seasonOpts}
         placeholder="Season"
         isSearchable={true}
         isClearable={true}
         />
        </div>

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "30px",
                borderRadius: "5px",
                fontSize: "0.9rem"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "30px", 
                fontSize: "0.9rem"
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
                fontSize: "0.9rem"
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff'
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa',
                fontSize: "0.9rem"
            }),
         }}
         onChange={handleFormat}
         value={selectedFormat}
         options={formatOpts}
         placeholder="Format"
         isSearchable={true}
         isClearable={true}
         />
        </div>

         <div className="select-wrapper">
         <Select 
         defaultValue={selectedCountry}
         styles={{
            control: () => ({
                backgroundColor: `#1f1f1f`,
                borderColor:'#444',
                maxHeight: "30px",
                borderRadius: "5px",
                fontSize: "0.9rem"
            }),
            indicatorSeparator: () => ({
                display: 'none',
            }),

            menu: (base) => ({
                ...base,
                backgroundColor: `#1f1f1f`,
                maxHeight: "30px", 
                fontSize: "0.9rem"
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#333' : '#1f1f1f',
                color: '#fff',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff'
            }),
            input: (base) => ({
                ...base,
                color: '#fff',
                fontSize: "0.9rem"
            }),
            placeholder: (base) => ({
                ...base,
                color: '#aaa',
                fontSize: "0.9rem"
            }),
         }}
         onChange={handleSort}
         value={selectedSort}
         placeholder="Sort"
         options={sortOpts}
         isSearchable={true}
         isClearable={true}
         />
        </div>
         </div>

         
        </div>
         <div className="results">
        <Suspense fallback={<DiscoverFallback />}>
         <Await resolve={anime}>
            {(anime) => {
                
                   setTotalPages(anime?.pagination)
                return (
                    <>
                    {anime?.data?.length === 0 &&
                     <div className="results-404">
                        <img src={eaten} />
                        <p>Nothing came up!</p>
                        <span className="advice-text">Try changing the filters</span>
                     </div>}
                    
                    <div className="cards-grid">
                    {anime?.data?.map(ani =>
                         <Link key={ani?.id} to={`/${ani?.id}/synopsis`}> 
                         <DetailedAnimeCard key={ani?.id} anime={ani} />
                         </Link>
                         )}
                    </div>
                    </>
                )
            }}
         </Await>
        </Suspense>

         </div>
         </div>
         <div className="pagination-container">
            <ReactPaginate
            disableInitialCallback="true"
           pageRangeDisplayed="2"
           forcePage={getPage() - 1}
           marginPagesDisplayed="0"
           onPageChange={handlePages}
            pageCount={Math.ceil(totalpages?.totalPages)} />
         </div>
         
        </section>
    )
}