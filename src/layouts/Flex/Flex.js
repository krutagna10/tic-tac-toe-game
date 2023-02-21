import './Flex.css';

const Flex = ({className, children}) => {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    );
};

export default Flex;