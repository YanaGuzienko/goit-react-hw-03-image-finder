import Spinner from 'react-bootstrap/Spinner';

const Loader = ({ isLoading }) => (
  <> {isLoading && <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />}</>
);

export default Loader;
