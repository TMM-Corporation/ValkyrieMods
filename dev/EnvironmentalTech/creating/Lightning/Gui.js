var lightning_gui = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Lightning controller"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(179, 179, 179)},
		{type: "bitmap", x: 660, y: 130, bitmap: "border", scale: 4},
	],
	elements: {
		"energyScale": {type: "scale", x: 660, y: 130, direction: 0, bitmap: "energy", scale: 4},
		"slotEnergy": {type: "slot", x: 600, y: 130, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 0);}}
	}
});
