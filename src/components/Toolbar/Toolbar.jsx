import React from 'react'
import './Toolbar.css'

export default function Toolbar(props){
    const { filters, selected, onSelectFilter } = props;
    
    return(
        <div className="toolbar">
            <ul>
                {filters.map(item => {
                    return <li  key={item} 
                                onClick={onSelectFilter} 
                                className={item === selected ? 'active-filter filter' : 'filter'}>
                                    <button>{item}</button>
                            </li>
                })}
            </ul>
        </div>
    )
}