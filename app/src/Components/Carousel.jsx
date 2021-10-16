import React, {useState} from "react"

export default function Carousel({props}) {
    const dataArr = [
        ...props.data
    ]
    const [showcase, setShowcase] = useState({

    })

    const handleForward = (i, arr) => {
        arr.next()
        console.log()
    }

    const handleBack = (i, arr) => {
        arr.prev()
    }

    return (
        <div>  
            {props.icon}
            <div>
                <div>
                       1 / {dataArr.length}
                    <div>
                        {showcase.endorsement}
                    </div>
                    <div>
                        {showcase.name}
                        {showcase.title}
                        {showcase.company}
                    </div>
                </div>
            </div>
            <button>
                Back
            </button>
            <button>
                Forward
            </button>
        </div>
    )
}
