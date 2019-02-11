MachineRegistry.registerPrototype(BlockID.lct1, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier1.min,
		esmax: Lightning_config.tier1.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},
	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier1.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning1);
		if(structure && this.data.energy >= this.defaultValues.esmin){
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", this.defaultValues.esmin, this.defaultValues.esmin, 0);
		}
		let weather = World.getWeather();
		if(structure &&  this.data.timer == 40){
			if(weather == "thuder"){
				Entity.spawn(x, this.y+bolt, z, 93);
				if(this.data.energy < this.defaultValues.esmax){
					this.data.energy += Math.min(Math.random(this.defaultValues.esmin, this.defaultValues.esmax));
				}
			}
			this.data.timer = 0;
		}
		this.data.timer++;
	},
	getEnergyStorage: function(){
		return this.data.energy;
	},
	energyTick: function(type, src){
		if(this.data.energy < this.defaultValues.esmax && this.data.energy > this.defaultValues.esmin && structure){
			src.add(this.defaultValues.esmin);
			this.data.energy -= this.defaultValues.esmin;
		}
	}
});
