

export const CATEGORIES = {
    TOOLS: 'Tools',
    FURNITURE: 'Furniture',
    DECOR: 'Decor',
    FOOD: 'Food',
    CLOTHING: 'Clothing'
};
// export default CATEGORIES;
//tools
//furniture
//decor
//food
//clothing
export const SUBCATEGORIES = {
    [CATEGORIES.TOOLS]: {
        FLIMSY: 'Flimsy',
        REGULAR: 'Regular',
        UPGRADED: 'Upgraded'
    },
    [CATEGORIES.FOOD]: {
        SWEET: 'Sweet',
        SAVORY: 'Savory'
    }
};