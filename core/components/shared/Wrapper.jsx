const Wrapper = ({
  children,
  className = "",
  maxScreen = "max-w-screen-xl",
}) => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className={`flex w-full ${className} ${maxScreen}`}>{children} </div>
    </div>
  );
};

export default Wrapper;