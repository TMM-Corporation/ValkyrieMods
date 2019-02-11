var base_block_envtech = Block.createSpecialType({
 base: 20,
 lightopacity: 15,
 destroytime: 3
});
var light_block_envtech = Block.createSpecialType({
 base: 20,
 lightlevel: 6,
 destroytime: 3
});
var opacity_block_envtech = Block.createSpecialType({
 renderlayer: 1,
 destroytime: 3
});
var GUI_SCALE = 3.2;
IMPORT("flags");
IMPORT("ToolType");
IMPORT("energylib");
IMPORT("ChargeItem");
IMPORT("MachineRender");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

Block.createBlock("mica", [{name: "Mica", texture: [["mica", 0]], inCreative: true}], opacity_block_envtech);
Block.createBlock("interconnect", [{name: "Interconnect", texture: [["interconnect", 0]], inCreative: true}], base_block_envtech);
//Modifiers
Block.createBlock("null_modifier", [{name: "Null modifier", texture: [["modifier_null", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("speed_modifier", [{name: "Speed modifier", texture: [["modifier_speed", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("piezo_modifier", [{name: "Piezo modifier", texture: [["modifier_piezo", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("accuracy_modifier", [{name: "Accuracy modifier", texture: [["modifier_accuracy", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("regen_modifier", [{name: "Regen modifier", texture: [["modifier_regen", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("absorption_modifier", [{name: "Absorption modifier", texture: [["modifier_absorption", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("haste_modifier", [{name: "Haste modifier", texture: [["modifier_haste", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("resistance_modifier", [{name: "Resistance modifier", texture: [["modifier_resistance", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("water_modifier", [{name: "Water modifier", texture: [["modifier_water", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("jump_modifier", [{name: "Jump modifier", texture: [["modifier_jump", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("night_modifier", [{name: "Night modifier", texture: [["modifier_night", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("saturation_modifier", [{name: "Saturation modifier", texture: [["modifier_saturation", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("luck_modifier", [{name: "Luck modifier", texture: [["modifier_luck", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("flight_modifier", [{name: "Flight modifier", texture: [["modifier_flight", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("health_boost_modifier", [{name: "Health Boost modifier", texture: [["modifier_health", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("fire_modifier", [{name: "Fire immunity modifier", texture: [["modifier_fire", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("invisibility_modifier", [{name: "Invisibility modifier", texture: [["modifier_invisibility", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("strength_modifier", [{name: "Strength modifier", texture: [["modifier_strength", 0]], inCreative: true}], base_block_envtech);
//structure frames
Block.createBlock("st_f_t1", [{name: "Structure frame tier 1", texture: [["structure_frame_1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t2", [{name: "Structure frame tier 2", texture: [["structure_frame_2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t3", [{name: "Structure frame tier 3", texture: [["structure_frame_3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t4", [{name: "Structure frame tier 4", texture: [["structure_frame_4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t5", [{name: "Structure frame tier 5", texture: [["structure_frame_5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t6", [{name: "Structure frame tier 6", texture: [["structure_frame_6", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_p", [{name: "Structure panel", texture: [["st_p", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("c_st_p", [{name: "Clear Structure panel", texture: [["st_p_c", 0]], inCreative: true}], opacity_block_envtech);
//solar panels
Block.createBlock("lsp", [{name: "Litherite solar panel", texture: [["st_p", 0], ["lsp", 0], ["st_p", 0]], inCreative: true}]);
Block.createBlock("esp", [{name: "Erodium solar panel", texture: [["st_p", 0], ["esp", 0], ["st_p", 0]], inCreative: true}]);
Block.createBlock("ksp", [{name: "Kyronite solar panel", texture: [["st_p", 0], ["ksp", 0], ["st_p", 0]], inCreative: true}]);
Block.createBlock("psp", [{name: "Pladium solar panel", texture: [["st_p", 0], ["psp", 0], ["st_p", 0]], inCreative: true}]);
Block.createBlock("isp", [{name: "Ionite solar panel", texture: [["st_p", 0], ["isp", 0], ["st_p", 0]], inCreative: true}]);
Block.createBlock("asp", [{name: "Aethium solar panel", texture: [["st_p", 0], ["asp", 0], ["st_p", 0]], inCreative: true}]);
//light rod
Block.createBlock("l_r", [{name: "Light Rod", texture: [["l_r", 0]], inCreative: true}]);
Block.createBlock("i_l_r", [{name: "Insulated Light Rod", texture: [["i_l_r", 0]], inCreative: true}]);
//laser core
Block.createBlock("laser_core", [{name: "Laser core", texture: [["laser_core", 0]], inCreative: true}], base_block_envtech);
//Solar
Block.createBlock("sact1", [{name: "Solar Array Controller Tier 1", texture: [["sact1_bottom", 0], ["st_p", 0], ["sact1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("sact2", [{name: "Solar Array Controller Tier 2", texture: [["sact2_bottom", 0], ["st_p", 0], ["sact2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("sact3", [{name: "Solar Array Controller Tier 3", texture: [["sact3_bottom", 0], ["st_p", 0], ["sact3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("sact4", [{name: "Solar Array Controller Tier 4", texture: [["sact4_bottom", 0], ["st_p", 0], ["sact4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("sact5", [{name: "Solar Array Controller Tier 5", texture: [["sact5_bottom", 0], ["st_p", 0], ["sact5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("sact6", [{name: "Solar Array Controller Tier 6", texture: [["sact6_bottom", 0], ["st_p", 0], ["sact6_sides", 0]], inCreative: true}], light_block_envtech);
//MINERS
//ore miner
Block.createBlock("vomct1", [{name: "Void Ore Miner Controller Tier 1", texture: [["vmct_bottom", 0], ["vomct1_top", 0], ["vomct1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vomct2", [{name: "Void Ore Miner Controller Tier 2", texture: [["vmct_bottom", 0], ["vomct2_top", 0], ["vomct2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vomct3", [{name: "Void Ore Miner Controller Tier 3", texture: [["vmct_bottom", 0], ["vomct3_top", 0], ["vomct3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vomct4", [{name: "Void Ore Miner Controller Tier 4", texture: [["vmct_bottom", 0], ["vomct4_top", 0], ["vomct4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vomct5", [{name: "Void Ore Miner Controller Tier 5", texture: [["vmct_bottom", 0], ["vomct5_top", 0], ["vomct5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vomct6", [{name: "Void Ore Miner Controller Tier 6", texture: [["vmct_bottom", 0], ["vomct6_top", 0], ["vomct6_sides", 0]], inCreative: true}], light_block_envtech);
//resource miner
Block.createBlock("vrmct1", [{name: "Void Resource Miner Controller Tier 1", texture: [["vmct_bottom", 0], ["vrmct1_top", 0], ["vrmct1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vrmct2", [{name: "Void Resource Miner Controller Tier 2", texture: [["vmct_bottom", 0], ["vrmct2_top", 0], ["vrmct2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vrmct3", [{name: "Void Resource Miner Controller Tier 3", texture: [["vmct_bottom", 0], ["vrmct3_top", 0], ["vrmct3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vrmct4", [{name: "Void Resource Miner Controller Tier 4", texture: [["vmct_bottom", 0], ["vrmct4_top", 0], ["vrmct4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vrmct5", [{name: "Void Resource Miner Controller Tier 5", texture: [["vmct_bottom", 0], ["vrmct5_top", 0], ["vrmct5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vrmct6", [{name: "Void Resource Miner Controller Tier 6", texture: [["vmct_bottom", 0], ["vrmct6_top", 0], ["vrmct6_sides", 0]], inCreative: true}], light_block_envtech);
//botanic miner
Block.createBlock("vbmct1", [{name: "Void Botanic Miner Controller Tier 1", texture: [["vmct_bottom", 0], ["vbmct1_top", 0], ["vbmct1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vbmct2", [{name: "Void Botanic Miner Controller Tier 2", texture: [["vmct_bottom", 0], ["vbmct2_top", 0], ["vbmct2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vbmct3", [{name: "Void Botanic Miner Controller Tier 3", texture: [["vmct_bottom", 0], ["vbmct3_top", 0], ["vbmct3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vbmct4", [{name: "Void Botanic Miner Controller Tier 4", texture: [["vmct_bottom", 0], ["vbmct4_top", 0], ["vbmct4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vbmct5", [{name: "Void Botanic Miner Controller Tier 5", texture: [["vmct_bottom", 0], ["vbmct5_top", 0], ["vbmct5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("vbmct6", [{name: "Void Botanic Miner Controller Tier 6", texture: [["vmct_bottom", 0], ["vbmct6_top", 0], ["vbmct6_sides", 0]], inCreative: true}], light_block_envtech);
//Lightning
Block.createBlock("lct1", [{name: "Lightning Controller Tier 1", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lct2", [{name: "Lightning Controller Tier 2", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lct3", [{name: "Lightning Controller Tier 3", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lct4", [{name: "Lightning Controller Tier 4", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lct5", [{name: "Lightning Controller Tier 5", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lct6", [{name: "Lightning Controller Tier 6", texture: [["lct1_bottom", 0], ["st_p", 0], ["lct6_sides", 0]], inCreative: true}], light_block_envtech);
//Personal Nano Bot Beacon
Block.createBlock("pnbbct1", [{name: "Personal Nano Bot Beacon Controller Tier 1", texture: [["vmct_bottom", 0], ["pnbbct1_top", 0], ["pnbbct1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("pnbbct2", [{name: "Personal Nano Bot Beacon Controller Tier 2", texture: [["vmct_bottom", 0], ["pnbbct2_top", 0], ["pnbbct2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("pnbbct3", [{name: "Personal Nano Bot Beacon Controller Tier 3", texture: [["vmct_bottom", 0], ["pnbbct3_top", 0], ["pnbbct3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("pnbbct4", [{name: "Personal Nano Bot Beacon Controller Tier 4", texture: [["vmct_bottom", 0], ["pnbbct4_top", 0], ["pnbbct4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("pnbbct5", [{name: "Personal Nano Bot Beacon Controller Tier 5", texture: [["vmct_bottom", 0], ["pnbbct5_top", 0], ["pnbbct5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("pnbbct6", [{name: "Personal Nano Bot Beacon Controller Tier 6", texture: [["vmct_bottom", 0], ["pnbbct6_top", 0], ["pnbbct6_sides", 0]], inCreative: true}], light_block_envtech);
