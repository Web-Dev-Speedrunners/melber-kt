import PropTypes from 'prop-types';

const capitalizeWords = (sentence) => {
  const words = sentence.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
};

capitalizeWords.PropTypes = {
  sentence: PropTypes.string.isRequired,
};

export default capitalizeWords;
