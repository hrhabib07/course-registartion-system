import { useState } from "react";
import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";


const Container = () => {
    const [selectedCourse, setSelectedCourse] = useState([]);
    const checkPrevious = () =>{
        return selectedCourse.length;
    }
    const handleSelectedCourses = (course) =>{
        const preview = checkPrevious();
        if(preview){
            const exist = selectedCourse.some(cour => cour.id === course.id);
            if(exist){
                console.log("exist");
            } else{
                const previousSelection = [...selectedCourse];
                previousSelection.push(course);
                setSelectedCourse(previousSelection);
            }
        } else{
            const previousSelection = [course];
            setSelectedCourse(previousSelection); 
        }
        }
        console.log(selectedCourse);
  
    return (
        <div className="lg:flex justify-center gap-5 my-12 mx-auto">
     <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
     <Dashboard selectedCourses={selectedCourse}></Dashboard>
        </div>
    );
};


export default Container;