import scss from './Button.module.scss';
import Spinner from 'react-bootstrap/Spinner';

const Button = ({ onClick, isLoading }) => {
  return (
    <button type='button' onClick={onClick} className={scss.Button}>
      {isLoading && <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />}
      Load more
    </button>
  );
};

export default Button;
