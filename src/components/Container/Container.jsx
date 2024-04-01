import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";
import handleSelectedCourses from "../utils/handleSelectedCourses";


const Container = () => {
  
    return (
        <div className="lg:flex justify-center gap-5 my-12 mx-auto">
     <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
     <Dashboard></Dashboard>
        </div>
    );
};


export default Container;