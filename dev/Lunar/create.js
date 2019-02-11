Block.createBlock("lunar_sp", [{name: "Lunar panel", texture: [["st_p", 0], ["lunar_p", 0], ["st_p", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.lunar_sp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
Block.createBlock("lact1", [{name: "Lunar Array Controller Tier 1", texture: [["lact1_bottom", 0], ["st_p", 0], ["lact1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact2", [{name: "Lunar Array Controller Tier 2", texture: [["lact2_bottom", 0], ["st_p", 0], ["lact2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact3", [{name: "Lunar Array Controller Tier 3", texture: [["lact3_bottom", 0], ["st_p", 0], ["lact3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact4", [{name: "Lunar Array Controller Tier 4", texture: [["lact4_bottom", 0], ["st_p", 0], ["lact4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact5", [{name: "Lunar Array Controller Tier 5", texture: [["lact5_bottom", 0], ["st_p", 0], ["lact5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact6", [{name: "Lunar Array Controller Tier 6", texture: [["lact6_bottom", 0], ["st_p", 0], ["lact6_sides", 0]], inCreative: true}], light_block_envtech);

Item.createItem("lunarvoltaic", "Lunarvoltaic Cell", {name: "lunarvoltaic_cell", meta: 0}, {stack: 64});
ValkyrieLib.solarModel("lact1");
ValkyrieLib.solarModel("lact2");
ValkyrieLib.solarModel("lact3");
ValkyrieLib.solarModel("lact4");
ValkyrieLib.solarModel("lact5");
ValkyrieLib.solarModel("lact6");
