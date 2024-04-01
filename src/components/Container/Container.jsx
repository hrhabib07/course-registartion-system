import { useState } from "react";
import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";


const Container = () => {
    const [selectedCourse, setSelectedCourse] = useState([]);
    let timeLimitAlert;
    const checkPrevious = () =>{
        return selectedCourse.length;
    }
    const handleSelectedCourses = (course) =>{
        const preview = checkPrevious();

    let totalCourseTime =0;
    selectedCourse.map(course=>{
        totalCourseTime = course.credit + totalCourseTime;
    });
    if((totalCourseTime>=15 && course.credit >=6) || (totalCourseTime>=16 && course.credit >= 5) || (totalCourseTime>=17 && course.credit >=4 )||  (totalCourseTime>=18 && course.credit >=3) ||   (totalCourseTime>=19 && course.credit >=2 )|| (totalCourseTime>=20 && course.credit >= 1)){
       alert("You can't add more than 20 credits");
    } else{
        
        if(preview){
            const exist = selectedCourse.some(cour => cour.id === course.id);
            if(exist){
                alert("This course has already added");
            }  else{
                const previousSelection = [...selectedCourse];
                previousSelection.push(course);
                setSelectedCourse(previousSelection);
            }
        } else{
            const previousSelection = [course];
            setSelectedCourse(previousSelection); 
        }
    }    
}
  
    return (
        <div className="lg:flex justify-center gap-5 my-12 mx-auto">
            
     <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
     <Dashboard selectedCourses={selectedCourse}></Dashboard>
        
        </div>
    );
};


export default Container;