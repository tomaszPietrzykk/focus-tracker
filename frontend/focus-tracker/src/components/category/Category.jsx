const Category = ({ name, onClick }) => {

    return (
        <>
            <button
                onClick={onClick}
            >
                {name}
            </button>
        </>
    )
}

export default Category;