import {
   FaSearch,
   FaHashtag,
   FaRegBell,
   FaUserCircle,
   FaMoon,
   FaSun
 } from 'react-icons/fa';
 import useDarkMode from './useDarkMode';

const TopBar = () => {
  return (
    <div className='top-nav'>
       <HashIcon />
       <Title />
       <ThemeIcon />
       <Search />
       <BellIcon />
       <UserIcon />
    </div>
  )
}

const ThemeIcon = () => {
   const [darkTheme, setDarkTheme] = useDarkMode();
   const handleMode = () => setDarkTheme(!darkTheme);
   return (
     <span onClick={handleMode}>
       {darkTheme ? (
         <FaSun size='24' className='top-icon' />
       ) : (
         <FaMoon size='24' className='top-icon' />
       )}
     </span>
   );
};

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