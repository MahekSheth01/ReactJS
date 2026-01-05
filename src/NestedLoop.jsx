import React from 'react'

const NestedLoop = () => {
    const collegeData=[
        {
            collegeName: "ABC College",
            city: "New York",
            courses: ["Math", "Science", "History"]
        },
        {   
            collegeName: "XYZ University",
            city: "Los Angeles",
            courses: ["Engineering", "Arts", "Medicine"]

        },
        {
            collegeName: "LMN Institute",
            city: "Chicago",
            courses: ["Business", "Law", "Design"]
        }

    ]
  return (
    <div>
      <h1>
        College Data:
      </h1>
        {
            collegeData.map((college,index)=>(
                <div key={index} style={{backgroundColor:"lightgreen",borderBottom:"2px solid black",borderRadius:"30px",
                    padding:"10px",margin:"10px"
                }}>
                    <h2>{college.collegeName} - {college.city}</h2>
                    <h3>Courses Offered:</h3>
                    <ul>
                        {college.courses.map((course,courseIndex)=>(
                            <li key={courseIndex}>{course}</li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default NestedLoop
