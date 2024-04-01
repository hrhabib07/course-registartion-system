import { useEffect, useState } from "react";

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch("courses.json")
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className=" text-left">
           <div className="bg-white rounded-lg p-8">
           <h2 className="text-blue-800 text-2xl font-bold ">Credit hours remaining 7 hr</h2>
           <br />
           <hr />
           <h2 className="text-3xl font-bold mt-2">Course name</h2>
           <ol className="pl-4">
            {
                courses.map(course=><li style={{listStyle:"decimal"}} className="text-gray-600" key={course.id}>{course.title}</li> )
            }
           </ol>
            <hr />
            <h2 className="my-2 font-bold">Total Credit Hours : 13</h2>
            <hr />
            <h2 className="mt-2 font-bold">Total Price : 400 USD</h2>
           </div>
        </div>
    );
};



export default Dashboard;