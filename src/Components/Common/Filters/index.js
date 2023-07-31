import React from 'react';
import "./filters.css";
import FilterItems from "./FilterItems/index";

export default function Filters({filtersList}) {
  return (
    <div className='filters'>
      {filtersList && filtersList.map(filter =>{
        return <FilterItems filter={filter} key={filter.id}/>
      })}
    </div>
  )
}
