
MachineRegistry.registerPrototype(BlockID.pnbbct2, {
	defaultValues: {
		energy: 0,
		cons: 0,
		s_cons: 576,
		n_cons: 64,
		timer: 0,
		esm: 512000
	},
	setDefaultValues: function(){
		this.data.cons = this.defaultValues.cons
	},
	addEffect: function(x, y, z) {
		let m = modifierAugmentApi.getModifier(t2_nb_m, x, y, z);
		this.data.cons = 0;
		var cons = 0;
		for(let i in m){
			let c = m[i];
			let eff = modEffectApi.setEffectList();
			if(eff[i] !== "fly" && eff[i] != null){
				if(c>=1){
					Entity.clearEffect(Player.get(), eff[i]);
					Entity.addEffect(Player.get(), eff[i], m[i]-1, 900, true, true);
					cons+=c;
				}
			}
		}
		return this.defaultValues.s_cons + this.defaultValues.n_cons*cons;
	},
	tick: function(){
		this.setDefaultValues();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		this.data.timer++;
		var structure = ValkyrieLib.getStructure(x, y, z, t2_nb);
		if(structure && this.data.energy > this.data.cons){
			if(this.data.timer >= 140){
				this.data.timer = 0;
				this.data.cons = this.addEffect(x, y, z);
				this.data.energy-=this.data.cons;
			}
		}
	},
	energyTick: function (type, src) {
        this.data.energy += src.get(this.data.esm - this.data.energy);
    },
	getEnergyStorage: function(){
		return this.data.energy;
	}
});

