import React from 'react';
import { useTimer } from 'react-timer-hook';
import { isSubmitted } from './data';
// import { useEffect} from 'react';
// import CheckAnswer from './CheckAnswer';
export default function MyTimer({ expiryTimestamp }) {
    
  const {
    seconds,
    minutes,
    hours,
    // isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({ expiryTimestamp, onExpire: () => 

                       {
                         alert('Time is up!');
                         isSubmitted.isSubmitted=true
                       }

});


    
  
    
    


       
        
  return (
    <div style={{textAlign: 'center'}}>
     
      <div style={{fontSize: '30px' ,backgroundColor:"rgba(213,213,90)"}}>
       <span>{hours<10?"0" +hours:hours}</span>:
       <span>{minutes<10?"0" +minutes:minutes}</span>:
       <span>{seconds<10?"0" +seconds:seconds}</span>
      </div>
      
      
    </div>
  );
}