Item.createItem("litherite", "Litherite Crystal", {name: "litherite_crystal", meta: 0}, {stack: 64});
Item.createItem("erodium", "Erodium Crystal", {name: "erodium_crystal", meta: 0}, {stack: 64});
Item.createItem("kyronite", "Kyronite Crystal", {name: "kyronite_crystal", meta: 0}, {stack: 64});
Item.createItem("pladium", "Pladium Crystal", {name: "pladium_crystal", meta: 0}, {stack: 64});
Item.createItem("ionite", "Ionite Crystal", {name: "ionite_crystal", meta: 0}, {stack: 64});
Item.createItem("aethium", "Aethium Crystal", {name: "aethium_crystal", meta: 0}, {stack: 64});
Item.createItem("lonsdaleite", "Lonsdaleite Crystal", {name: "lonsdaleite_crystal", meta: 0}, {stack: 64});
Item.createItem("photovoltaic", "Photovoltaic Cell", {name: "photovoltaic_cell", meta: 0}, {stack: 64});
Item.createItem("diode", "Diode", {name: "diode", meta: 0}, {stack: 64});
Item.createItem("connector", "Connector", {name: "connector", meta: 0}, {stack: 64});
Item.createItem("assembler", "Assembler", {name: "m_assembler", meta: 0}, {stack: 1});

Item.registerUseFunction(ItemID.assembler, function(coords, item, block){
	if(block.id == BlockID.vomct1){ValkyrieLib.structureAssembler(vm1_structure, coords);}
	if(block.id == BlockID.vomct2){ValkyrieLib.structureAssembler(vm2_structure, coords);}
	if(block.id == BlockID.vomct3){ValkyrieLib.structureAssembler(vm3_structure, coords);}
	if(block.id == BlockID.vomct4){ValkyrieLib.structureAssembler(vm4_structure, coords);}
	if(block.id == BlockID.vomct5){ValkyrieLib.structureAssembler(vm5_structure, coords);}
	if(block.id == BlockID.vomct6){ValkyrieLib.structureAssembler(vm6_structure, coords);}

	if(block.id == BlockID.vbmct1){ValkyrieLib.structureAssembler(vm1_structure, coords);}
	if(block.id == BlockID.vbmct2){ValkyrieLib.structureAssembler(vm2_structure, coords);}
	if(block.id == BlockID.vbmct3){ValkyrieLib.structureAssembler(vm3_structure, coords);}
	if(block.id == BlockID.vbmct4){ValkyrieLib.structureAssembler(vm4_structure, coords);}
	if(block.id == BlockID.vbmct5){ValkyrieLib.structureAssembler(vm5_structure, coords);}
	if(block.id == BlockID.vbmct6){ValkyrieLib.structureAssembler(vm6_structure, coords);}

	if(block.id == BlockID.vrmct1){ValkyrieLib.structureAssembler(vm1_structure, coords);}
	if(block.id == BlockID.vrmct2){ValkyrieLib.structureAssembler(vm2_structure, coords);}
	if(block.id == BlockID.vrmct3){ValkyrieLib.structureAssembler(vm3_structure, coords);}
	if(block.id == BlockID.vrmct4){ValkyrieLib.structureAssembler(vm4_structure, coords);}
	if(block.id == BlockID.vrmct5){ValkyrieLib.structureAssembler(vm5_structure, coords);}
	if(block.id == BlockID.vrmct6){ValkyrieLib.structureAssembler(vm6_structure, coords);}

	if(block.id == BlockID.sact1){ValkyrieLib.structureAssembler(t1_solar, coords);}
	if(block.id == BlockID.sact2){ValkyrieLib.structureAssembler(t2_solar, coords);}
	if(block.id == BlockID.sact3){ValkyrieLib.structureAssembler(t3_solar, coords);}
	if(block.id == BlockID.sact4){ValkyrieLib.structureAssembler(t4_solar, coords);}
	if(block.id == BlockID.sact5){ValkyrieLib.structureAssembler(t5_solar, coords);}
	if(block.id == BlockID.sact6){ValkyrieLib.structureAssembler(t6_solar, coords);}

	if(block.id == BlockID.lact1){ValkyrieLib.structureAssembler(t1_lunar, coords);}
	if(block.id == BlockID.lact2){ValkyrieLib.structureAssembler(t2_lunar, coords);}
	if(block.id == BlockID.lact3){ValkyrieLib.structureAssembler(t3_lunar, coords);}
	if(block.id == BlockID.lact4){ValkyrieLib.structureAssembler(t4_lunar, coords);}
	if(block.id == BlockID.lact5){ValkyrieLib.structureAssembler(t5_lunar, coords);}
	if(block.id == BlockID.lact6){ValkyrieLib.structureAssembler(t6_lunar, coords);}

	if(block.id == BlockID.pnbbct1){ValkyrieLib.structureAssembler(t1_nb, coords);}
	if(block.id == BlockID.pnbbct2){ValkyrieLib.structureAssembler(t2_nb, coords);}
	if(block.id == BlockID.pnbbct3){ValkyrieLib.structureAssembler(t3_nb, coords);}
	if(block.id == BlockID.pnbbct4){ValkyrieLib.structureAssembler(t4_nb, coords);}
	if(block.id == BlockID.pnbbct5){ValkyrieLib.structureAssembler(t5_nb, coords);}
	if(block.id == BlockID.pnbbct6){ValkyrieLib.structureAssembler(t6_nb, coords);}

	if(block.id == BlockID.lct1){ValkyrieLib.structureAssembler(lightning1, coords);}
	if(block.id == BlockID.lct2){ValkyrieLib.structureAssembler(lightning2, coords);}
	if(block.id == BlockID.lct3){ValkyrieLib.structureAssembler(lightning3, coords);}
	if(block.id == BlockID.lct4){ValkyrieLib.structureAssembler(lightning4, coords);}
	if(block.id == BlockID.lct5){ValkyrieLib.structureAssembler(lightning5, coords);}
	if(block.id == BlockID.lct6){ValkyrieLib.structureAssembler(lightning6, coords);}
});
