import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { user_id, score, comment } = review;

  return (
    <div className="bg-white shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Review</h2>
      <div>
        <img src={user_id.profile_image} alt="User Profile" className="w-10 h-10 rounded-full" />
        <span className="ml-2">{`${user_id.first_name} ${user_id.last_name}`}</span>
      </div>
      <p>Score: {score}</p>
      <p>Comment: {comment}</p>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user_id: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      profile_image: PropTypes.string.isRequired,
    }).isRequired,
    score: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
