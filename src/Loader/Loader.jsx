import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => (
  <> {isLoading && <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />}</>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
