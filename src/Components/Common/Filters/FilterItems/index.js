import React from 'react';
import "./filterItem.css";

export default function FilterItems({filter}) {
  return (
    <div className='filter-item absolute-center cur-po'>
        {filter.icon && filter.icon}
        <div className="filter-name">{filter.title}</div>
    </div>
  )
}
