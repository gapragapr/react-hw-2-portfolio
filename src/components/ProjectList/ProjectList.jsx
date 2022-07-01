import React from 'react'
import './ProjectList.css'

export default function ProjectList(props){
    const { selected, projects } = props;

    return (
        <div className="card-list">
            {projects.map((item, index) => {
                return selected === 'All' ? 
                    <div key={index} className="card">
                        <img src={item.img} alt={item.category} />
                    </div>
                : item.category === selected &&
                    <div key={index} className="card">
                        <img src={item.img} alt={item.category} />
                    </div>
            })}
        </div>
    )
}