import React from 'react'
import {useState,useEffect} from 'react'
// import Question from './Question';
import SendData from "./SendData"
import { isSubmitted } from './data';

export default function SubmitButton(data,submitButtonFunction) {
    const [submitButtonText,setsubmitButtonText]=useState("Submit")
    const [submitButtonClicked,setSubmitButtonClicked]=useState(isSubmitted.isSubmitted);
    useEffect(()=>{
        if (isSubmitted.isSubmitted){
            setsubmitButtonText("Submitted")
            setSubmitButtonClicked(true)
        }
        },[submitButtonClicked])
        
    
    return (
        <div>
            
            <button className={submitButtonClicked?"disabled":"page-link" }
                    onClick={()=>(
                        
                        setSubmitButtonClicked(true),
                        isSubmitted.isSubmitted=true,
                        setsubmitButtonText("Submitted"),
                        submitButtonFunction
                        
                                
                                )}
            >{submitButtonText}</button>

            {submitButtonClicked?
                
                <SendData data={data}/>:null}
                

            
        </div>
    )
}
