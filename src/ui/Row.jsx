const Row = ({ children, ...props }) => {
    return (
        <div className="flex items-center gap-3" {...props}>
            {children}
        </div>
    );
};

export default Row;