import { useParams, useNavigate } from "react-router-dom";
import "./DetailsPage.css"; 

const DetailsPage = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find item by ID (String to Number conversion ke saath)
  const item = data.find((p) => String(p.id) === String(id));

  if (!item) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Item not found!</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
      
      <div className="details-content">
        <div className="details-image-section">
          <img src={item.image} alt={item.name || item.title} className="large-image" />
        </div>

        <div className="details-info-section">
          <h1>{item.name || item.title}</h1>
          <p className="price">Price: ${item.price}</p>
          
          <div className="description-box">
            <h3>Description</h3>
            <p>{item.fullDescription || item.description || "No description available."}</p>
          </div>

          {item.features && item.features.length > 0 && (
            <div className="features-box">
              <h3>Key Features:</h3>
              <ul className="extra-features">
                {item.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          
          <button className="buy-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;