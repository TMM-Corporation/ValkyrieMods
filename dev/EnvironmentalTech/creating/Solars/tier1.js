Block.setBlockShape(BlockID.lsp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var litherite_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Litherite Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},

	params: {
		slot: "default_slot",
		invSlot: "default_slot"
	},

	drawing: [
		{type: "background", color: android.graphics.Color.rgb(179, 179, 179)},
	],

	elements: {
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 660, y: 204, width: 300, height: 39, text: "Generating: "},
		"slotEnergy": {type: "slot", x: 600, y: 130, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 0);}},
		"sun": {type: "image", x: 608, y: 194, bitmap: "sun_off", scale: GUI_SCALE}
	}
});

MachineRegistry.registerPrototype(BlockID.sact1, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return litherite_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t1_solar);
		if(structure && World.getLightLevel(this.x, this.y+2, this.z) == 15){
			this.data.energy = 549;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 549, 549, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 549 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 549;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(549);
			this.data.energy = 0;
		}
	}
});
