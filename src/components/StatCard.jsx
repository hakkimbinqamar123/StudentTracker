import React from 'react'

const StatCard = ({ title, value, icon}) => {
  return (
    <div className='stat-card'>
        <div>
            <p>{title}</p>
            <h2>{value}</h2>
        </div>
        <span>{icon}</span>
    </div>
  )
}

export default StatCard