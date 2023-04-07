import TopBar from './TopBar';
import { BsPlusCircleFill } from 'react-icons/bs';

const ChatSection = () => {
   return (
      <div className='chat-container'>
        <TopBar />
        <div className='chat-list'>
          <Post
            name='Ada'
            timestamp='one week ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
          />
          <Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
          <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
          <Post
            name='Ellie'
            timestamp='4 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
          />
          <Post
            name='Chris'
            timestamp='4 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
          />
          <Post
            name='Claire'
            timestamp='2 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
          />
          <Post
            name='Albert'
            timestamp='22 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
          />
          <Post
            name='Rebecca'
            timestamp='3 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.`}
          />
          <Post
            name='H.U.N.K'
            timestamp='Just now'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
          />
        </div>
        <BottomMessage />
      </div>
   );
}

const Post = ({ name, timestamp, text }) => {

   const seed = Math.round(Math.random() * 100);
   const imageUrl = `https://avatars.dicebear.com/api/open-peeps/${seed}.svg`

   return (
     <div className='post'>
         <div className='post-avatar-wrapper'>
            <img src={imageUrl} className='post-avatar' alt='avatar'/>
         </div>
 
         <div className='post-content'>
            <p className='post-owner'>
            {name}
            <small className='post-timestamp'>{timestamp}</small>
            </p>
            <p className='post-text'>{text}</p>
         </div>       
     </div>
   );
};
 
const BottomMessage = () => (
  <div className='message'>
     <PlusIcon />
     <input type='text' className='message-input' placeholder='Enter message...' />
  </div>

)

const PlusIcon = () => (
   <BsPlusCircleFill size='22' className='text-green-500 dark:shadow-lg mx-2 dark:text-primary' />
)

export default ChatSection