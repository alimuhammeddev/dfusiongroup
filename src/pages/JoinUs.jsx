import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported
import "../Styles/global.css"; // Your custom styles

const reviews = [
  {
    id: 1,
    name: "Lewis Johnson",
    rating: 5,
    review:
      "DFG Security provides top-notch service! Their team is highly professional and responsive. Highly recommend!",
  },
  {
    id: 2,
    name: "Mike Newton",
    rating: 5,
    review:
      "Fantastic experience! The security measures they provide are reliable and affordable. Couldn't ask for better support!",
  },
  {
    id: 3,
    name: "Micheal Woods",
    rating: 5,
    review:
      "I have been using their services for a while now, and I must say they are excellent. Their response time is amazing!",
  },
  {
    id: 4,
    name: "Emily Lewis",
    rating: 4,
    review:
      "Good security solutions at a fair price. Their support team is helpful, but there's slight room for improvement.",
  },
];

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      reviews.unshift({
        ...newReview,
        id: reviews.length + 1,
      });
      setNewReview({ name: "", rating: 5, review: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="review-section">
      <h2>What our customers say</h2>

      {/* Rating Summary */}
      <div className="rating-summary">
        <div className="overall-rating">
          <span className="rating-score">4.6</span>
          <span className="stars">★★★★★</span>
        </div>
        <button className="btn btn-danger mt-2" onClick={() => setShowForm(true)}>
          Write a Review
        </button>
      </div>

      {/* Reviews */}
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <i className="bi bi-person-circle profile-icon" style={{ fontSize: "1.7rem" }}></i>
              <div>
                <p className="review-author">{review.name}</p>
                <span className="stars">{"★".repeat(review.rating)}</span>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="popup-overlay d-flex justify-content-center align-items-center">
          <div className="popup p-4">
            <h3 className="text-center mb-3">Add Your Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                className="mb-3"
                required
              />
              <textarea
                placeholder="Your Review"
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
                className="mb-3"
                required
              ></textarea>

              <div className="text-center">
                <button type="submit" className="btn btn-danger me-2">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;