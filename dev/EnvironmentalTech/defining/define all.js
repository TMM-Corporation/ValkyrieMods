//Define ALL
    //PC version 2.0.2c
    //IDRegistry.genItemID
//Crystals
IDRegistry.genItemID("litherite");
IDRegistry.genItemID("erodium");
IDRegistry.genItemID("kyronite");
IDRegistry.genItemID("pladium");
IDRegistry.genItemID("ionite");
IDRegistry.genItemID("aethium");
IDRegistry.genItemID("lonsdaleite");
//Items
IDRegistry.genItemID("assembler");
IDRegistry.genItemID("photovoltaic");
IDRegistry.genItemID("diode");
IDRegistry.genItemID("connector");
IDRegistry.genItemID("lonsdaleite");
IDRegistry.genItemID("nugget");
IDRegistry.genItemID("ender_stabilized");
IDRegistry.genItemID("digital_guide");
IDRegistry.genItemID("dust");
IDRegistry.genItemID("lens_item");


    //IDRegistry.genBlockID
IDRegistry.genBlockID("mica");
        //modifier
IDRegistry.genBlockID("null_modifier");
IDRegistry.genBlockID("speed_modifier");
IDRegistry.genBlockID("piezo_modifier");
IDRegistry.genBlockID("accuracy_modifier");
        //structure frame tiers
IDRegistry.genBlockID("st_f_t1");
IDRegistry.genBlockID("st_f_t2");
IDRegistry.genBlockID("st_f_t3");
IDRegistry.genBlockID("st_f_t4");
IDRegistry.genBlockID("st_f_t5");
IDRegistry.genBlockID("st_f_t6");
//structure frame
IDRegistry.genBlockID("st_p");
IDRegistry.genBlockID("c_st_p");
//solar panels.controllers
IDRegistry.genBlockID("lsp");
IDRegistry.genBlockID("esp");
IDRegistry.genBlockID("ksp");
IDRegistry.genBlockID("psp");
IDRegistry.genBlockID("isp");
IDRegistry.genBlockID("asp");
//light rod
IDRegistry.genBlockID("l_r");
IDRegistry.genBlockID("i_l_r");
//solar panels
IDRegistry.genBlockID("lsp");
IDRegistry.genBlockID("esp");
IDRegistry.genBlockID("ksp");
IDRegistry.genBlockID("psp");
IDRegistry.genBlockID("isp");
IDRegistry.genBlockID("asp");
//laser core
IDRegistry.genBlockID("laser_core");
//interconnect
IDRegistry.genBlockID("interconnect");

//PC version 2.0.9c
    //modifier
IDRegistry.genBlockID("regen_modifier");
IDRegistry.genBlockID("absorption_modifier");
IDRegistry.genBlockID("haste_modifier");
IDRegistry.genBlockID("resistance_modifier");
IDRegistry.genBlockID("water_modifier");
IDRegistry.genBlockID("jump_modifier");
IDRegistry.genBlockID("night_modifier");
IDRegistry.genBlockID("saturation_modifier");
IDRegistry.genBlockID("luck_modifier");
IDRegistry.genBlockID("flight_modifier");
IDRegistry.genBlockID("health_boost_modifier");
IDRegistry.genBlockID("fire_modifier");
IDRegistry.genBlockID("invisibility_modifier");
IDRegistry.genBlockID("strength_modifier");
        //SOLAR
IDRegistry.genBlockID("sact1");
IDRegistry.genBlockID("sact2");
IDRegistry.genBlockID("sact3");
IDRegistry.genBlockID("sact4");
IDRegistry.genBlockID("sact5");
IDRegistry.genBlockID("sact6");
    //MINERS
        //ore miner
IDRegistry.genBlockID("vomct1");
IDRegistry.genBlockID("vomct2");
IDRegistry.genBlockID("vomct3");
IDRegistry.genBlockID("vomct4");
IDRegistry.genBlockID("vomct5");
IDRegistry.genBlockID("vomct6");
        //resource miner
IDRegistry.genBlockID("vrmct1");
IDRegistry.genBlockID("vrmct2");
IDRegistry.genBlockID("vrmct3");
IDRegistry.genBlockID("vrmct4");
IDRegistry.genBlockID("vrmct5");
IDRegistry.genBlockID("vrmct6");
        //botanic miner
IDRegistry.genBlockID("vbmct1");
IDRegistry.genBlockID("vbmct2");
IDRegistry.genBlockID("vbmct3");
IDRegistry.genBlockID("vbmct4");
IDRegistry.genBlockID("vbmct5");
IDRegistry.genBlockID("vbmct6");
    //Lightning
IDRegistry.genBlockID("lct1");
IDRegistry.genBlockID("lct2");
IDRegistry.genBlockID("lct3");
IDRegistry.genBlockID("lct4");
IDRegistry.genBlockID("lct5");
IDRegistry.genBlockID("lct6");
    //Personal Nano Bot Beacon
IDRegistry.genBlockID("pnbbct1");
IDRegistry.genBlockID("pnbbct2");
IDRegistry.genBlockID("pnbbct3");
IDRegistry.genBlockID("pnbbct4");
IDRegistry.genBlockID("pnbbct5");
IDRegistry.genBlockID("pnbbct6");










/*
//Block.registerDropFunction
//Litherite
Block.registerDropFunction(
"lspc", function(coords, blockID, blockData, level){if(level > 3){ return [[blockID, 1, 0]]} return [];}, 0);

Block.registerDropFunction(
"lsp", function(coords, blockID, blockData, level){if(level > 3){ return [[blockID, 1, 0]]}return []; }, 0);


//MachineRegistry.registerPrototype
if (World.getBlockID(x, y, z).id==lspc){
        MachineRegistry.registerPrototype(BlockID.lspc, {isGenerator: function() {return true;},
        energyTick: function(type, src){
            if (nativeGetLightLevel(this.x, this.y + 2, this.z) == 15)
{src.add(1);}}});}
*/
