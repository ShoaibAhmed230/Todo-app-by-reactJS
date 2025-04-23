const ErrorMsg = ({items}) => {



  return <>{items.length === 0 && <h5 className="text-white text-center"> List is Empty :/</h5>}</>;
};

export default ErrorMsg;
