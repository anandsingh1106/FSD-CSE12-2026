import React from 'react'
import pic from '../assets/images/download.jpeg'

function ICard(data) {
  return (
    <div style={{border: "15px solid cyan", height: "300px", width: "300px", padding: "10px"}}>
    <h2>Student Information</h2>
    <div className="student-card">
    <img src={pic} alt="Student" style={{width: "100px", height: "100px", borderRadius: "50%"}} />
    <h2>Name: <strong>{data.name}</strong></h2>
    <p><strong>Roll Number:</strong> {data.rollNumber}</p>
    <p><strong>Branch:</strong> {data.branch}</p>
    <p><strong>College:</strong> {data.college}</p>
    </div></div>
  )
}

export default ICard