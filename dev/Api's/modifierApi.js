var modifierAugmentApi = {
	modifiers: {
		0: 0, //null_m
		1: 0, //speed_m
		2: 0, //piezo_m
		3: 0, //accuracy

		4: 0, //regen_m
		5: 0, //absorption_m
		6: 0, //haste_m
		7: 0, //resistance_m

		8: 0, //water_m
		9: 0, //jump_m
		10: 0, //night_m
		11: 0, //saturation_m

		12: 0, //luck_m
		13: 0, //flight_m
		14: 0, //health_m
		15: 0, //fire_m

		16: 0, //invisibility_m
		17: 0, //strength_m
	},
	getList: function(){
		let blocks = [
			BlockID.null_modifier,
			BlockID.speed_modifier,
			BlockID.piezo_modifier,
			BlockID.accuracy_modifier,

			BlockID.regen_modifier,
			BlockID.absorption_modifier,
			BlockID.haste_modifier,
			BlockID.resistance_modifier,

			BlockID.water_modifier,
			BlockID.jump_modifier,
			BlockID.night_modifier,
			BlockID.saturation_modifier,

			BlockID.luck_modifier,
			BlockID.flight_modifier,
			BlockID.health_boost_modifier,
			BlockID.fire_modifier,

			BlockID.invisibility_modifier, 
			BlockID.strength_modifier
		];
		return blocks;
	},
	getModifier: function(s, x, y, z){
		for(let v=0; v<17; v++){
			this.modifiers[v]=0;
		}
		let list = this.getList();
		//Game.message("list"+list);
		//Game.message("lenght"+s);
		let t = 0;
		for(let i in s){
			var block= World.getBlock(x+s[i].x, y+s[i].y, z+s[i].z);
			for(let u in list){
				if(block.id === list[u]){this.modifiers[t]++; break;}
				t++;
			}
			t = 0;
		}
		return this.modifiers;
	}
}
var modEffectApi = {
	setEffectList: function(){
		var effects = [
		null, 1, null, null, 10, 22, 3, 11, 13, 8, 16, null, "fly", 21, 12, 14, 5,
		];
		return effects;
	},
	setUgradesList: function(){
		var upgrades = [
		"piezo", "accuracy",
		];
		return upgrades;
	}
}
/*

var modifierApi = {
	getModifier: function(structure, coords){
		let c = coords;
		
		let list = {
			"null_m",
			"1": "speed_m",//1
			"2": "piezo_m",
			"3": "accuracy",

			"4": "regen_m",//10
			"5": "absorption_m",//22
			"6": "haste_m",//3
			"7": "resistance_m",//11

			"8": "water_m",//13
			"9": "jump_m",//8
			"10": "night_m",//16
			"11": "saturation_m",

			"12": "luck_m",
			"13": "flight_m",//setFlying
			"14": "health_m",//21
			"15": "fire_m",//12

			"16": "invisibility_m",//14
			"17": "strength_m",//5
		};
		let u = 0;
		for(let i in structure){
			for(let p in blockz){
				if(World.getBlock(c+structure[i].x, c+structure[i].y, c+structure[i].z).id === blockz[p]){alert(blockz[p]);}
				u++;
			}
			u=0;
		}
		for(let i in modifiers)
			alert(modifiers[i]);
	}
}
*/