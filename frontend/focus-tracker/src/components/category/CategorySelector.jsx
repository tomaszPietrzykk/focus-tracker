import { useState } from "react"
import CategoryList from "./CategoryList"

const CategorySelector = ({ categories, setIsOpen, isOpen, isTimerRunning }) => {

    const [activeCategory, setActiveCategory] = useState(categories[0])

    const handleSelect = (category) => {
        setActiveCategory(category)
        setIsOpen(false)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {isOpen &&
                    <CategoryList
                        categories={categories}
                        onSelect={handleSelect}
                    />
                }

                {!isOpen && activeCategory}
            </div>
            {!isTimerRunning &&
            <div style={{ alignSelf: "center" }}>
                <button onClick={() => setIsOpen(prev => !prev)}>^</button>
            </div>}
        </div>
    )
}

export default CategorySelector