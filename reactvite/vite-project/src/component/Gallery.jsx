import React from 'react'
import ICard from './ICard'

function Gallery() {
  const students = [
    { name: "Anand", rollNumber: "20", branch: "CSE", college: "ABES Engineering College" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {students.map((student, index) => (
        <ICard key={index} data={student} />
      ))}
    </div>
  );
}

export default Gallery