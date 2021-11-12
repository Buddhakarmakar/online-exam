import React from 'react'

export default function NextButon({ pageNumber,totalQues,paginate}) {
    return (
        <div>
            <button className={pageNumber<totalQues-1?"page-link":"disabled"} 
                    onClick={() => {
                        if(pageNumber<totalQues-1){
                            paginate(pageNumber + 1)
                        }
            }}>next</button>
        </div>
    )
}
