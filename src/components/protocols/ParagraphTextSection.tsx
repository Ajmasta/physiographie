import React from 'react'

type Props = {
    content:string[]
}

const ParagraphTextSection = ({content}: Props) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
    <input type="checkbox" /> 
    <div className="collapse-title text-xl font-medium">  
            Anatomie descriptive
        </div>
        <div className="collapse-content"> 
         {content.map(paragraph=><><p>{paragraph}</p><br /></>)}
        </div>
    </div>
  )
}

export default ParagraphTextSection