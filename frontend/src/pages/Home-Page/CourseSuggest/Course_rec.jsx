/* eslint-disable react/prop-types */
import Course_template from "./Course_template";
import { DUMMY_DATA } from '../../../Dummy_course_data'
import "./Course_template.css";
export default function Course_rec() {
  return (
    <section id="shop">
      <h2>Course Recommended</h2>
      <ul id="products">
        {DUMMY_DATA.map((product) => (
          <li key={product.id}>
            <Course_template {...product} />
          </li>
        ))}
      </ul>
      <button className="ShowMore">Show More</button>
    </section>
  );
}
