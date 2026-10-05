import { Link, NavLink, redirect, useLoaderData, useNavigate, useSearchParams } from 'react-router'
import menuburger from '../assets/menu-burger.svg'
import {  useState, useContext } from 'react'
import { getAnime } from '../api/getAnime.js'
import search from '../assets/search.svg'
import { useClickOutside } from '../hooks/useClickOutside.jsx'
import star from '../assets/yellow-star.svg'
import { useRevalidator, useSubmit } from 'react-router'
import { logout } from '../api/auth/logout.js'
import out from '../assets/ou.svg'
import list from '../assets/list.svg'
import account from '../assets/account.svg'
export default function Header({user}){
    const [showMenu, setShowMenu] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState([])
     const [searchParam, setSearchParam] = useSearchParams()
    const [listMenu, setListMenu] = useState(false)
     const revalidator = useRevalidator()
   
     const submit = useSubmit()
     const profilepic = user?.user?.profile_images
     
     const navigate = useNavigate()
    
    function toggle(){
        setShowMenu(prev => !prev)
    }

    function handleInput(e){
        const { value } = e.target;

       
        console.log(value)

    }

   async function handleSearch(e){
            const { value } = e.target
            setSearchParam(() => ({search: value}))
            const anime = await getAnime(`search=${value}`)
            setResults(anime?.data)
   }

    function handleOverlay(){
        
        setShowResults(true)
        
    }

    function handleDisable(){
        setShowResults(false)
    }

    function handleEnable(){
        setShowResults(true)
       
    }


    const overlayMenuRef = useClickOutside(() => {
        setShowResults(false)
    })

    const mobileMenuRef = useClickOutside(() => {
        setShowMenu(false)
    })

    const accountMenuRef = useClickOutside(() => {
        setListMenu(false)
    })

    function convertScore(score){
        console.log(score)
          const calc = (score / 100 * 10).toFixed(1)
          if(score === null){
            
            return 0
          }

          return calc
    }

    async function handleLogout(){
        try{
            
             const attempt = await logout()
            if(attempt?.message){
                revalidator?.revalidate()
            /*    submit(null, {
                    method: 'post',
                    action: ''
                }) */
               setListMenu(false)
               navigate('/login')
            }
            
          

        }catch(error){
            console.log(error)
            return error
        }
     


    }

    function handleToggle(){
        setListMenu(prev=> !prev)
    }
   
    
    return(
        <>
        <header className="container">
        <div className='main-nav'>
        <div className="logo">
         <span id="first-word">Ani</span>
         <span id="second-word">Kinu</span>
        </div>
        <div className='nav'>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/"  className={({isActive}) => isActive ? "selected-link" : null}>Home</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/discover?page=1"  className={({isActive}) => isActive ? "selected-link" : null}>Discover</NavLink>
                </li>
                <li>
                    <div ref={overlayMenuRef} className='nav-search-container'>
                    <label htmlFor='search'>
                    <img onClick={handleOverlay} className='search-icon' src={search} />
                    </label>
                    <input   onFocus={handleEnable} onInput={handleSearch} placeholder='Search Anime...' id="search" className='nav-search'/>
                   {showResults &&
                    <div   className='search-overlay'>
                    <ul>
                        {results.slice(0, 3).map(anime =>
                        <Link key={anime?.id} onClick={handleDisable} to={`/${anime?.id}/synopsis`}> 
                        <li>
                            <div className='result-anime-card'>
                                <img 
                                className='search-anime-cover'
                                 src={anime?.cover_image} 
                                 />
                                 <div>
                                    <p className='result-anime-title'>{anime?.title_english ?? anime.title_romaji}</p>
                                    <div className='result-anime-stats'>
                                        <div className='result-score-container'>
                                            <img className='star-icon' src={star} />
                                            <p>{convertScore(anime?.average_score)}</p>

                                        </div>
                                        
                                        <p>{anime?.format}</p>
                                        <p>{anime?.episodes}</p>
                                        <p>{anime?.season}</p>
                                        <p>{anime?.season_year}</p>
                                    </div> 
                                 </div>
                                
                            </div>
                            
                        </li>
                        
                        </Link>
                        
                        )}
                       
                    </ul>
                      

                    </div>}
                    </div>
                </li>
                <li>
                    <NavLink to="/mylist"  className={({isActive}) => isActive ? "selected-link" : null}>My list</NavLink>
                </li>
                <li>
                    <NavLink to="/changelog"  className={({isActive}) => isActive ? "selected-link" : null}>{`Changelog(beta)`}</NavLink>
                </li>
               
              
               {!user?.user &&
                <li>
                    <NavLink to="/login"  className={({isActive}) => isActive ? "selected-link" : null}>Login</NavLink>
                </li>}

                <li>
                    <NavLink to="/about"  className={({isActive}) => isActive ? "selected-link" : null}>About</NavLink>
                </li>
                
            </ul>
            
         </div>

         
       
         <button 
          onClick={toggle}
          className='menu-button
        '>
            <img src={menuburger} />
         </button>

          
          {user?.user && 
          <div ref={accountMenuRef} className='account-container'>
            <button onClick={handleToggle} className='account-button'>
             { profilepic &&  <img className='user-avatar' src={profilepic} />}
                
            </button>
           {listMenu && <div className='account-list'>
            <ul>
                <li>
                    <div className='mylist-container'>
                    <img src={list} />
                     <Link to="/mylist">My List</Link>
                    </div>
                    
                </li>
                <li>
                    <div className='profile-opt-container'>
                        <img src={account} />
                     <Link to="/profile">Profile</Link>
                    </div>
                    
                </li>
                <li>
                    <div className='logout-container'>
                    <img src={out} />
                    <button onClick={handleLogout}>Logout</button>
                    </div>
                    
                </li>
            </ul>
          </div>}
          </div>}

          
         </div>
         {showMenu &&
         <div ref={mobileMenuRef} className='menu-links'>
            <Link to="/">Home</Link>
            <Link to="/discover?page=1">Discover</Link>
            <Link to="/mylist">My List</Link>
            {!user?.user &&  <Link to="/signup">Signup</Link>}
            {!user?.user &&  <Link to="/login">Login</Link>}
            <Link to="/changelog">{`Changelog(beta)`}</Link>
            <Link to="/about">About</Link>

         </div>}
            
        
        </header>
       
        </>
    )
}