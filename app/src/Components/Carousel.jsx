 import React, {useState} from "react"
 

export default function Carousel({props}) {
    const dataArr = [
        ...props.data
    ]
    
    const [showcase, setShowcase] = useState(0)
    const length = dataArr.length

    const handleForward = () => {
        setShowcase(showcase === length - 1 ? 0: showcase + 1)
    }

    const handleBack = () => {
        setShowcase(showcase === length - 1 ? 0: showcase - 1)
    }

    return (
        <div>  
            {props.icon}
            <div>
                <div>
                       {showcase + 1} / {dataArr.length}

                        {dataArr.map((data, i) => {
                            return (
                                <div
                                className={i === showcase ? "selected" : "unselected"}
                                key={i} >
                                        {i === showcase && (
                                            <>
                                                <div>
                                                    {data.endorsement}
                                                </div>
                                                <div>
                                                    {data.name}
                                                    {data.title}
                                                    {data.company}
                                                </div>
                                            </>
                                        )}
                                </div>
                            )
                        })}

                </div>
            </div>
            <button onClick={() => handleBack()}>
                Back
            </button>
            <button onClick={() => handleForward()}>
                Forward
            </button>
        </div>
    )
}
