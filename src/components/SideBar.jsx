import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {FaFire, FaPoo} from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 w-16 h-screen m-0 flex flex-col 
      bg-white dark:bg-gray-900 shadow-lg'>
      <SideIcon icon={<FaFire size='24' />}/>
      <Divider />
      <SideIcon icon={<BsPlus size='32' />} />
      <SideIcon icon={<BsFillLightningFill size='20' />} />
      <SideIcon icon={<FaPoo size='20' />} />
      <Divider />
      <SideIcon icon={<BsGearFill size='22' />} />
    </div>
  )
}

const SideIcon = ({ icon, text='tooltip 💡' }) => (
   <div className='side-icon group'>
      {icon}
      <span className='tooltip group-hover:scale-100'>
         {text}
      </span>
   </div>
)


const Divider = () => (<hr className='divider'/>)

export default SideBar