import React from 'react'
// import Paginate from './Paginate'

export default function PreviousButton({pageNumber,setPageNumber,paginate}) {
    return (
        <div>
            <button className={pageNumber>0?"page-link":"disabled"} 
                    onClick={() => {
                        if(pageNumber>0){
                            paginate(pageNumber - 1)
                        }
            }}>Previous</button>
        </div>
    )
}
