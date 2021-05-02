import scss from './Button.module.scss';

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

export default Button;
