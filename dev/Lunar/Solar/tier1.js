var litherite_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Litherite Lunar Panel"}},
		inventory: {
			width: 260, // ширина окна инвентаря
      padding: 10, // паддинг окна инвентаря
		},
		background: {
			color: android.graphics.Color.rgb(179, 179, 179)
		}
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

MachineRegistry.registerPrototype(BlockID.lact1, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return litherite_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier1.gen_night;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t1_lunar);
		if(structure && time > 13500 && time < 22500){
			ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", gen, gen, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_off";
				this.container.setText("textGen", "Generating: " + gen + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_on";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		let gen = Lunar_config.tier1.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier1.gen_night;
		if(time > 13500 && time < 22500)
			src.add(gen);
	}
});
