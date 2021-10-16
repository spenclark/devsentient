 import React, {useState} from "react"

export default function Carousel({props}) {
    const dataArr = [
        ...props.data
    ]
    
    const [showcase, setShowcase] = useState(0)
    const length = dataArr.length

    const handleForward = () => {
        setShowcase(showcase = length - 1 ? 0: showcase + 1)
    }

    const handleBack = () => {
        setShowcase(showcase = length - 1 ? 0: showcase - 1)
    }

    if (!Array.isArray(props) || props.length <= 0) {
        return null;
      }

    return (
        <div>  
            {props.icon}
            <div>
                <div>
                       {showcase} / {dataArr.length}
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
            <button onClick={() => handleBack()}>
                Back
            </button>
            <button onClick={() => handleForward()}>
                Forward
            </button>
        </div>
    )
}
