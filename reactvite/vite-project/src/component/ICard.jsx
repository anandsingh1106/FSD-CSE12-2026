import React from 'react'
import pic from '../assets/images/download.jpeg'

function ICard() {
  return (
    <div style={{border: "15px solid cyan", height: "300px", width: "300px", padding: "10px"}}>
    <h2>Student Information</h2>
    <div className="student-card">
    <img src={pic} alt="Student" style={{width: "100px", height: "100px", borderRadius: "50%"}} />
      <p><strong>Name:</strong> Anand</p>
      <p><strong>Roll Number:</strong> 20</p>
      <p><strong>Branch:</strong> CSE</p>
      <p><strong>College:</strong> ABES Engineering College</p>
    </div></div>
  )
}

export default ICard