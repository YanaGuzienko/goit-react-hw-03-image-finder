import scss from './Button.module.scss';

const Button = () => {
  return (
    <button type='button' className={scss.Button}>
      Load more
    </button>
  );
};

export default Button;
