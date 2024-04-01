import PropTypes from 'prop-types';
const Course = ({course, handleSelectedCourses}) => {
    const {title, cover, description, price, credit } = course;
    return (
        <div className='text-left lg:w-72 border rounded-lg border-blue-50 p-2 bg-white hover:bg-blue-50'>
            <img src={cover} alt="" />
            <h2 className='text-xl font-bold my-2'> {title}</h2>
            <p className='text-gray-600'>{description}</p>
            <div className='flex justify-between my-2'>
                <p><i className="fa-solid fa-dollar-sign"></i> Price : {price}</p>
                <p> <i className="fa-solid fa-book-open"></i> Credit : {credit} hrs</p>
            </div>
            <button onClick={()=>handleSelectedCourses(course)}  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Select
</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectedCourses: PropTypes.func.isRequired
  };

export default Course;