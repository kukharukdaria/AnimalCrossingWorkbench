import TOOLS_IMAGES from './images';
import { MATERIALS } from './materials';

export const tools = [
    {
        item: "Flimsy axe",
        materials: [MATERIALS.TREE_BRANCH, MATERIALS.STONE],
        image: TOOLS_IMAGES.flimsyaAxe
    },
    {
        item: "Stone axe",
        materials: [MATERIALS.FLIMSY_AXE, MATERIALS.WOOD],
        image: TOOLS_IMAGES.stoneAxe
    },
    {
        item: "Axe",
        materials: [MATERIALS.FLIMSY_AXE, MATERIALS.WOOD, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.axe
    },
    {
        item: "Flimsy shovel",
        materials: [MATERIALS.HARDWOOD],
        image: TOOLS_IMAGES.flimsyShovel
    },
    {
        item: "Shovel",
        materials: [MATERIALS.FLIMSY_SHOVEL],
        image: TOOLS_IMAGES.shovel
    },
    {
        item: "Flimsy fishing rod",
        materials: [MATERIALS.TREE_BRANCH],
        image: TOOLS_IMAGES.flimsyFishingRod
    },
    {
        item: "Fishing rod",
        materials: [MATERIALS.FLIMSY_FISHING_ROD, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.fishingRod
    },
    {
        item: "Flimsy net",
        materials: [MATERIALS.TREE_BRANCH],
        image: TOOLS_IMAGES.flimsyNet
    },
    {
        item: "Net",
        materials: [MATERIALS.FLIMSY_NET, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.net
    },
    {
        item: "Flimsy watering can",
        materials: [MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.flimsyWateringCan
    },
    {
        item: "Watering can",
        materials: [MATERIALS.FLIMSY_WATERING_CAN, MATERIALS.IRON_NUGGET],
        image: TOOLS_IMAGES.wateringCan
    },
    {
        item: "Slingshot",
        materials: [MATERIALS.HARDWOOD],
        image: TOOLS_IMAGES.slingshot
    },
    {
        item: "Golden axe",
        materials: [MATERIALS.AXE],
        image: TOOLS_IMAGES.goldenAxe
    },
    {
        item: "Golden shovel",
        materials: [MATERIALS.SHOVEL, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenShovel
    },
    {
        item: "Golden rod",
        materials: [MATERIALS.FISHING_ROD, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenRod
    },
    {
        item: "Golden net",
        materials: [MATERIALS.NET, MATERIALS.GOLD_NUGGET],
        image: TOOLS_IMAGES.goldenNet
    },
    {
        item: "Golden watering can",
        materials: [MATERIALS.WATERING_CAN],
        image: TOOLS_IMAGES.goldenWateringCan
    },
    {
        item: "Vaulting pole",
        materials: [MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.vaultingPole
    },
    {
        item: "Ladder",
        materials: [MATERIALS.WOOD, MATERIALS.HARDWOOD, MATERIALS.SOFTWOOD],
        image: TOOLS_IMAGES.ladder
    }
]