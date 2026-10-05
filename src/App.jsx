import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from "react-router"

import Home from "./Pages/Home.jsx"
import Layout from "./Components/Layout.jsx"
import { homeLoader } from "./loaders/homeLoader.js"
import Discover from "./Pages/Discover.jsx"
import { discoverLoader } from "./loaders/discoverLoader.js"
import AnimeDetails from "./Pages/AnimeDetails.jsx"
import { animeDetailsLoader } from "./loaders/animeDetailsLoader.js"
import Synopsis from "./Pages/Synptosis.jsx"
import AnimeLayout from "./Components/AnimeLayout.jsx"
import Details from "./Pages/Details.jsx"
import RecentlyFinished from "./Pages/RecentlyFinished.jsx"
import { recentlyFinishedLoader } from "./loaders/recentlyFinishedLoader.js"
import TopRated from "./Pages/TopRated.jsx"
import { topRatedLoader } from "./loaders/topRatedLoader.js"
import About from "./Pages/About.jsx"
import Trending from "./Pages/Trending.jsx"
import { trendingLoader } from "./loaders/trendingLoader.js"
import Login from "./Pages/Auth/Login.jsx"
import { loginAction } from "./actions/loginAction.js"
import Admin from "./Pages/Admin/Admin.jsx"
import { adminAction } from "./actions/adminAction.js"
import { requireAuth } from "./api/auth/requireAuth.js"
import ChangeLog from "./Pages/ChangeLog.jsx"
import { changeLogLoader } from "./loaders/changeLogLoader.js"
import ChangeLogDetails from "./Pages/ChangeLogDetails.jsx"
import { changeLogDetailsLoader } from "./loaders/changeLogDetailsLoader.js";
import AdminLayout from "./Components/AdminLayout.jsx"
import Entries from "./Pages/Entries.jsx"
import { entriesLoader } from "./loaders/entriesLoader.js"
import { entriesAction } from "./actions/entriesAction.js"
import MyList from "./Pages/User/MyList.jsx"
import AuthProvider from "./Pages/Auth/AuthProvider.jsx"
import { authLoader } from "./loaders/authLoader.js"
import { logoutAction } from "./actions/logoutAction.js"
import { myListLoader } from "./loaders/myListLoader.js"
import SignUp from "./Pages/Auth/Signup.jsx"
import { signupAction } from "./actions/signupAction.js"
import NewLogin from "./Pages/Auth/NewLogin.jsx"
import UserProfile from "./Pages/Auth/UserProfile.jsx"
import { myListAction } from "./actions/myListAction.js"
import { requireAuthAdmin } from "./api/auth/requireAuth.js"
import { userProfileLoader } from "./loaders/userProfileLoader.js"
const router = createBrowserRouter(createRoutesFromElements(
 
  <Route path="" element={<Layout />} loader={authLoader} action={logoutAction}>
  <Route path="" element={<Home />} loader={homeLoader}/>
  <Route path="/discover" element={<Discover />} loader={discoverLoader}/>
  <Route path="/:animeid" element={<AnimeDetails />} loader={animeDetailsLoader}>
  <Route path="/:animeid" element={<AnimeLayout />}>
       <Route path="synopsis" element={<Synopsis />} />
       <Route path="details" element={<Details />} />
  </Route>
  </Route>
  <Route path="/recently-finished" element={<RecentlyFinished />} loader={recentlyFinishedLoader}/>
  <Route path="/top-rated" element={<TopRated />} loader={topRatedLoader}/>
  <Route path="/about" element={<About />} />
  <Route path="/trending" element={<Trending />} loader={trendingLoader}/>
 
   <Route path="/login" element={<NewLogin />}  action={loginAction}/>
   <Route path="/signup" element={<SignUp />} action={signupAction}/>
  <Route path="/admin" element={<AdminLayout />} middleware={[requireAuthAdmin]}>
       <Route path={"add"} element={<Admin />} action={adminAction} />
        <Route path={"entries"} element={<Entries />} loader={entriesLoader} action={entriesAction}/>
  </Route>
  <Route path="/changelog" element={<ChangeLog />} loader={changeLogLoader}/>
  <Route path="/changelog/:id" element={<ChangeLogDetails />} loader={changeLogDetailsLoader}/>
  <Route path="" element={<AuthProvider />} middleware={[requireAuth]} >
  <Route path="/mylist"  element={<MyList />} loader={myListLoader} action={myListAction}/>
  <Route path="/profile"  element={<UserProfile />} loader={userProfileLoader}/>
  </Route>
  
  </Route>
  

))

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App
