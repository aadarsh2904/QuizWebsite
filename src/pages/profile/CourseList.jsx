import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from the assets folder
import photo1 from '../../assets/dummy_pic3.jpg';
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-black rounded-full p-2 shadow-md hover:bg-black hover:text-black focus:bg-black focus:text-black`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black text-black rounded-full p-2 shadow-md hover:bg-black hover:text-black focus:bg-black focus:text-black`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M9.707 4.293a1 1 0 010 1.414L6.414 9H16a1 1 0 110 2H6.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CourseSlider() {
  const data = [
    {
      photo: photo1,
      name: "Course 1",
      instructor: "Instructor 1"
    },
    {
      photo: photo1,
      name: "Course 2",
      instructor: "Instructor 2"
    },
    {
      photo: photo1,
      name: "Course 3",
      instructor: "Instructor 3"
    },
    {
      photo: photo1,
      name: "Course 4",
      instructor: "Instructor 4"
    },
    {
      photo: photo1,
      name: "Course 5",
      instructor: "Instructor 5"
    },
    {
      photo: photo1,
      name: "Course 6",
      instructor: "Instructor 6"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="container mx-auto p-4 w-5/6 -mt-36">
      <h2 className="text-2xl font-bold text-center mb-4">Your Courses</h2>
      <Slider {...settings}>
        {data.map((course, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.photo} alt={course.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-gray-600">{course.instructor}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CourseSlider;
