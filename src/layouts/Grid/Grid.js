import './Grid.css'

const Grid = ({className, children}) => {
    return (
        <div className={`grid ${className}`}>
            {children}
        </div>
    );
};

export default Grid;