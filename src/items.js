import TOOLS_IMAGES from './images';
import { MATERIALS } from './items/materials';
import { CATEGORIES } from './categoriesConfig';
import { SUBCATEGORIES } from './categoriesConfig';


export const items = [
    {
        item: "Flimsy axe",
        materials: [MATERIALS.TREE_BRANCH, MATERIALS.STONE],
        image: TOOLS_IMAGES.flimsyAxe,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].FLIMSY
    },
    {
        item: "Stone axe",
        materials: [MATERIALS.FLIMSY_AXE, MATERIALS.WOOD],
        image: TOOLS_IMAGES.stoneAxe,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Axe",
        materials: [MATERIALS.FLIMSY_AXE, MATERIALS.WOOD, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.axe,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Flimsy shovel",
        materials: [MATERIALS.HARDWOOD],
        image: TOOLS_IMAGES.flimsyShovel,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].FLIMSY
    },
    {
        item: "Shovel",
        materials: [MATERIALS.FLIMSY_SHOVEL],
        image: TOOLS_IMAGES.shovel,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Flimsy fishing rod",
        materials: [MATERIALS.TREE_BRANCH],
        image: TOOLS_IMAGES.flimsyFishingRod,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].FLIMSY
    },
    {
        item: "Fishing rod",
        materials: [MATERIALS.FLIMSY_FISHING_ROD, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.fishingRod,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Flimsy net",
        materials: [MATERIALS.TREE_BRANCH],
        image: TOOLS_IMAGES.flimsyNet,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].FLIMSY
    },
    {
        item: "Net",
        materials: [MATERIALS.FLIMSY_NET, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.net,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Flimsy watering can",
        materials: [MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.flimsyWateringCan,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].FLIMSY
    },
    {
        item: "Watering can",
        materials: [MATERIALS.FLIMSY_WATERING_CAN, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.wateringCan,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Golden axe",
        materials: [MATERIALS.AXE],
        image: TOOLS_IMAGES.goldenAxe,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Golden shovel",
        materials: [MATERIALS.SHOVEL, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenShovel,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Golden rod",
        materials: [MATERIALS.FISHING_ROD, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenRod,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Golden net",
        materials: [MATERIALS.NET, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenNet,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Golden watering can",
        materials: [MATERIALS.WATERING_CAN],
        image: TOOLS_IMAGES.goldenWateringCan,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].UPGRADED
    },
    {
        item: "Slingshot",
        materials: [MATERIALS.HARDWOOD],
        image: TOOLS_IMAGES.slingshot,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Vaulting pole",
        materials: [MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.vaultingPole,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    },
    {
        item: "Ladder",
        materials: [MATERIALS.WOOD, MATERIALS.HARDWOOD, MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.ladder,
        category: CATEGORIES.TOOLS,
        subcategory: SUBCATEGORIES[CATEGORIES.TOOLS].REGULAR
    }
]
export default items;
//flimsy 
//regular
//upgraded