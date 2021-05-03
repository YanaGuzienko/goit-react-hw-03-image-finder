import scss from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <div className={scss.btnContainer}>
      <button type='button' onClick={onClick} className={scss.Button}>
        {children}
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default Button;
