import Category from "./Category"

const CategoryList = ({ categories , onSelect}) => {

    return (
        <>
            {categories.map((category) => (
                <Category
                    key={category}
                    name={category}
                    onClick={() => onSelect(category)}
                />
            ))}
        </>
    )
}

export default CategoryList