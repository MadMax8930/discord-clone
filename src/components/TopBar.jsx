import {
   FaSearch,
   FaHashtag,
   FaRegBell,
   FaUserCircle,
   FaMoon,
   FaSun
 } from 'react-icons/fa';
 import darkMode from '../darkMode';

const TopBar = () => {
  return (
    <div className='top-nav'>
       <HashIcon />
       <Title />
       {/* <ThemeIcon /> */}
       <Search />
       <BellIcon />
       <UserIcon />
    </div>
  )
}

const Search = () => (
   <div className='top-search'>
     <input className='top-search-input' type='text' placeholder='Search...' />
     <FaSearch size='18' className='text-secondary my-auto' />
   </div>
);

const BellIcon = () => (<FaRegBell size='24' className='top-icon' />)
const UserIcon = () => (<FaUserCircle size='24' className='top-icon' />)
const HashIcon = () => (<FaHashtag size='20' className='top-hash'/>)
const Title = () => (<h5 className='top-title'>tailwind-css</h5>)

export default TopBar