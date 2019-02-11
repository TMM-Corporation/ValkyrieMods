MachineRegistry.registerPrototype(BlockID.lct6, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier6.min,
		esmax: Lightning_config.tier6.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier6.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning6);
		if(structure && this.data.energy >= this.data.esmin){
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", this.data.esmin, this.data.esmin, 0);
		}
		if(structure &&  this.data.timer == 180){
			if(World.getWeather() == "thuder"){
				Entity.spawn(x, this.y+bolt, z, 93);
				if(this.data.energy < this.data.esmax){
					this.data.energy += Math.min(Math.random(this.data.esmin, this.data.esmax));
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
		if(this.data.energy < this.data.esmax && this.data.energy > this.data.esmin && structure){
			src.add(this.data.esmin);
			this.data.energy -= this.data.esmin;
		}
	}
});
