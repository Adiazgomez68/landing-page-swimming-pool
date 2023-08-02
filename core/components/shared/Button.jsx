const Button = ({
  type,
  title,
  onClick,
  disabled,
  className = "",
  children,
  classLink = "",
}) => {
  return (
    <div className={classLink}>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center ${className}`}
      >
        {title}
        <span className="relative left-2">{children}</span>
      </button>
    </div>
  );
};

export default Button;
