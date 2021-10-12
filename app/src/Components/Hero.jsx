import React from "react"
import DemoForm from "./utils/DemoForm"

export default function Hero({props}) {

    const [title, titleBr] = props.title.split('~');
    const [subTitle, subTitleBr] = props.subTitle.split("~")
    const [hook, questions, contact] = props.heroContent.pricingBenifit.split("~")

    return (
        <div>
            <div>
                <div>
                    <h1>
                        {title}
                        <br />
                        {titleBr}
                    </h1>
                    <p>
                        {subTitle}
                        <br />
                        {subTitleBr}
                    </p>    
                </div>
                    {/* I made form conditional, the single line email input and the /request-demo form are the same component, defined by this boolean prop */}
                    <DemoForm type={true} />
            </div>
            <div>
                <div>
                    <div>
                    <h3>{props.heroContent.label}</h3>
                    <p>
                        <span>{hook}</span>
                        <br />
                        {questions} <a href="/request-demo">{contact}</a>

                    </p>
                    </div>
                    <div>
                    <iframe width="560" height="315" src={props.heroContent.embedLink} title="Grabbed from yt" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}





