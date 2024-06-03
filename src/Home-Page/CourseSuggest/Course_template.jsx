/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Course_template.css";

export default function Course_template({
  id,
  image,
  title,
  price,
  description,
}) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p className="product-description">{description}</p>
        </div>
        <p className="product-actions">
          <button>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
