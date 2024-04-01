import PropTypes from 'prop-types';
const Course = ({course}) => {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold'> {course.title}</h2>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
  };

export default Course;