import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelSection = () => {
  return (
    <div className='channel-section'>
      <div className='flex items-center justify-center h-16'>
         <h5 className='text-lg tracking-wider font-bold text-gray-600 dark:text-gray-400 ml-4  align-middle;'>
            Channels
         </h5>
      </div>
      <div className='channel-content'>
         <Dropdown header="Topics" selections={topics}/>
         <Dropdown header="Questions" selections={questions}/>
         <Dropdown header="Random" selections={random}/>
      </div>

    </div>
  );
};

const Dropdown = ({ header, selections }) => {
   const [expanded, setExpanded] = useState(true);

   return (
      <div className='dropdown'>
         <div onClick={() => setExpanded(!expanded)}>
           <ChevronIcon expanded={expanded} />
           <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>{header}</h5>
           <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
         </div>
         {expanded && selections 
                   && selections.map((selection) =>(<TopicSelection selection={selection} />))}
      </div>
   )
}

const ChevronIcon = ({ expanded }) => {
   const ChevClass = 'text-accent text-opacity-80 my-auto mr-1';
   return expanded 
   ? 
   (<FaChevronDown size='14' className={ChevClass} />) 
   :
   (<FaChevronRight size='14' className={ChevClass} />)
}

const TopicSelection = ({ selection }) => {
   return (
      <div className='dropdown-selection'>
         <BsHash size='24' className='text-gray-400' />
         <h5 className='dropdown-selection-text'>{selection}</h5>
      </div>
   )
}


export default ChannelSection