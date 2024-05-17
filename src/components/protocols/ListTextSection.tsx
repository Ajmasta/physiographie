import React from 'react'

type Props = {
  title:string;
  text: (string | string[])[]; 
}

const ListTextSection = ({ content }:{content:Props[]}) => {
  return (
    <>
      {content.map((item:Props) => (
        
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <input type="checkbox" defaultChecked={true} /> 
        <div className="collapse-title text-xl font-medium">
            {item.title}
          </div>
          <div className="collapse-content"> 
          <ul className="list-disc ml-6">
            {item.text.map((element, index) => {
              return Array.isArray(element) ? (
                element.map((item, idx) => (
                  <li key={idx} className="list-item ml-6">{item}</li>
                ))
              ) : (
                <li key={index} className="list-item">{element}</li>
              );
            })}
          </ul>
          </div>
        </div>

      ))}
      </>
  );
};

export default ListTextSection