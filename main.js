/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 101
*/



// file: Api's/FileApi.js

var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var FileAPI={
	select:function(dir,Name){
		return (new File(dir,Name));
	},
	createNewDir:function(dir, newDirName){
		return (new File(dir, newDirName).mkdir());
	},
	exists:function(file){
		return file.exist();
	},
	create:function(path, name){
		new File(path, name).createNewFile();
		return File;
	},
	deleteF:function(path){
		try{var filed = new java.io.File(path);
			if(filed.isDirectory()){
			var directoryFiles = filed.listFiles();
			for(var i in directoryFiles){
				FileAPI.deleteF(directoryFiles[i].getAbsolutePath());
			}
			filed.deleteF();
		}
			if(filed.isFile()){
			filed.deleteF();}
		}catch(e){
			print(e);
		}
	},
	read:function(selectedFile){
		var readed=(new BufferedReader(new FileReader(selectedFile)));
		var data=new StringBuilder();
		var string;
		while((string=readed.readLine())!=null){
			data.append(string);
			data.append('\n');
		}
		return data.toString();
	},
	readLine:function(selectedFile, line){
		var readT=new FileAPI.read(selectedFile);
		var lineArray=readT.split('\n');
		return lineArray[line-1];
	},
	write:function(selectedFile , text){
		FileAPI.rewrite(selectedFile,(new FileAPI.read(selectedFile)) + text);
	},
	rewrite:function(selectedFile, text){
		var writeFOS = new FOS(selectedFile);
		writeFOS.write(new String(text).getBytes());
	}
};
var context = UI.getContext();
var CurrentWindow;
var CurrentLayout;
function runAsGUI(f){
	context.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				f();
			}catch(e){
				alert(e);
			}
		}
	}));
}

/*
function closeAdv()
{
runAsGUI(function(){
if(CurrentWindow)
{
CurrentWindow.dismiss();
CurrentWindow = null;
}
});
}
function viewAdv()
{
runAsGUI(function()
{
CurrentLayout = new android.widget.LinearLayout(context);
CurrentLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var image = new android.widget.ImageView(context);
var sprite = android.graphics.BitmapFactory.decodeFile(__dir__+"adv.png");
image.setImageBitmap(sprite);
CurrentLayout.addView(image);
CurrentWindow = new android.widget.PopupWindow(CurrentLayout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
CurrentWindow.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,0,0); 
});
}*/




// file: Api's/modifierApi.js

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




// file: Api's/ValkyrieLib.js

/*
 * __     __    _ _               _      _     _ _
 * \ \   / /_ _| | | ___   _ _ __(_) ___| |   (_) |__
 *  \ \ / / _` | | |/ / | | | '__| |/ _ \ |   | | '_ \
 *   \ V / (_| | |   <| |_| | |  | |  __/ |___| | |_) |
 *    \_/ \__,_|_|_|\_\\__, |_|  |_|\___|_____|_|_.__/
 *                     |___/
 */
//modLogger.Logger.Log("test");
const ValkyrieLib = {
	/*itemRegistry: function(itemid, itemname, itemtexture, stacks){
		IDRegistry.genItemID(itemid);
		Item.createItem(itemid, itemname, {name: itemtexture, meta: 0}, {stack: stacks});
	},
	blockRegistry: function(blockid, blockname, bottom, top, sides, visible, type){
		let t1 = bottom;
		let t2 = top;
		let t3 = sides;
		IDRegistry.genBlockID(blockid);
		if(type != ""){
			Block.createBlock(blockid, [
				{name: blockname texture: [[t1, 0], [t2, 0], [t3, 0]], inCreative: visible}
			], type);
		}else{
			Block.createBlock(blockid, [
				{name: blockname texture: [[t1, 0], [t2, 0], [t3, 0]], inCreative: visible}
			]);
		}
	},*/
	addRuTranslation: function(name, newname){
		Translation.addTranslation(name, {ru: " "+newname+" "});
	},
	addDrop: function(block, isItem, drop, count){
		Block.registerDropFunction(block, function(coords, blockID, blockData, level){
			return [[drop, count, 0]];
		});
	},
	lens_creator: function(type, dyedata){
		var itemid = "lens_"+type;
		var itemname = "Lens "+type;
		var itemtexture = itemid;
		var blockid = "laser_"+itemid;
		var blockname = "Laser "+itemname;
		var texture1 = "lens_"+type+"_top_bottom";
		var texture2 = "lens_"+type+"_side";
		IDRegistry.genItemID(itemid);
		Item.createItem(itemid, itemname, {name: itemtexture, meta: 0}, {stack: 64});

		IDRegistry.genBlockID(blockid);
		Block.createBlock(blockid, [{name: blockname, texture: [[texture1, 0], [texture1, 0], [texture2, 0]], inCreative: false}], opacity_block_envtech);
		Block.registerDropFunction(blockid, function(coords, blockID, blockData){
				return [[ItemID[itemid], 1, 0]]
		});

		Item.registerUseFunction(itemid, function(coords, item, block){
		var place = coords.relative;
			if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
				World.setBlock(place.x, place.y, place.z, BlockID[blockid]);
				Player.setCarriedItem(item.id, item.count - 1, item.data);
			}
		});
		Callback.addCallback("PostLoaded", function(){
			if(dyedata == 16){
				Recipes.addShaped({id: ItemID[itemid], count: 1, data: 0}, [
					"b b",
					"bbb",
					"b b"], [
						'b', 20, 0]);
			}else if(dyedata == 17){
				Recipes.addShaped({id: ItemID[itemid], count: 1, data: 0}, [
					"b b",
					"bab",
					"b b"], [
						'a', BlockID.normal_block_erodium, -1,
						'b', 20, 0]);
			}else{
				Recipes.addShaped({id: ItemID[itemid], count: 1, data: 0}, [
					"ab",
					"",
					""], [
						'a', ItemID.lens_clear, 0,
						'b', 351, dyedata]);
			}
		});


		var render = new ICRender.Model();
		var model = BlockRenderer.createModel();
		var t2 = texture1;
		var t1 = texture2;

		model.addBox(3/16, 6/16, 3/16, 13/16, 7/16, 13/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(3/16, 9/16, 3/16, 13/16, 10/16, 13/16, [[t2, 0], [t2, 0], [t1, 0]]);

		model.addBox(4/16, 7/16, 2/16, 12/16, 9/16, 3/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(4/16, 7/16, 13/16, 12/16, 9/16, 14/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(2/16, 7/16, 4/16, 3/16, 9/16, 12/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(13/16, 7/16, 4/16, 14/16, 9/16, 12/16, [[t2, 0], [t2, 0], [t1, 0]]);

		model.addBox(2/16, 0/16, 3/16, 3/16, 16/16, 4/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(3/16, 0/16, 2/16, 4/16, 16/16, 3/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(12/16, 0/16, 2/16, 13/16, 16/16, 3/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(13/16, 0/16, 3/16, 14/16, 16/16, 4/16, [[t2, 0], [t2, 0], [t1, 0]]);

		model.addBox(2/16, 0/16, 12/16, 3/16, 16/16, 13/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(3/16, 0/16, 13/16, 4/16, 16/16, 14/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(13/16, 0/16, 12/16, 14/16, 16/16, 13/16, [[t2, 0], [t2, 0], [t1, 0]]);
		model.addBox(12/16, 0/16, 13/16, 13/16, 16/16, 14/16, [[t2, 0], [t2, 0], [t1, 0]]);

		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID[blockid], 0, render);
		Block.setBlockShape(BlockID[blockid], {x: 3/16, y: 0, z: 3/16}, {x: 14/16, y: 1, z: 14/16});
	},
	beaconModel: function(tier){
		var render = new ICRender.Model();
		var model = BlockRenderer.createModel();
		var t1 = "pnbbct"+tier+"_sides";
		var t2 = "pnbbct"+tier+"_top";
		var block = "pnbbct"+tier;
		var base = "st_p";
		var core = "laser_core";
		var anim = "cont_tier";
		/*
		 *t1 все
		 *t2 верх
		 */
		if(tier == "1"){
			for(let i in t1_nb){
				let a = t1_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "2"){
			for(let i in t2_nb){
				let a = t2_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "3"){
			for(let i in t3_nb){
				let a = t3_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "4"){
			for(let i in t4_nb){
				let a = t4_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "5"){
			for(let i in t5_nb){
				let a = t5_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "6"){
			for(let i in t6_nb){
				let a = t6_nb[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}
		model.addBox(0/16, 4/16, 0/16, 1/16, 16/16, 1/16, [[t1, 0]]);//стойка 1
		model.addBox(0/16, 4/16, 15/16, 1/16, 16/16, 16/16, [[t2, 0]]);//стойка 2
		model.addBox(15/16, 4/16, 15/16, 16/16, 16/16, 16/16, [[t2, 0]]);//стойка 3
		model.addBox(15/16, 4/16, 0/16, 16/16, 16/16, 1/16, [[t1, 0]]);//стойка 4

		model.addBox(1/16, 15/16, 0/16, 15/16, 16/16, 1/16, [[t2, 0]]);//полоска 1
		model.addBox(1/16, 15/16, 15/16, 15/16, 16/16, 16/16, [[t2, 0]]);//полоска 2
		model.addBox(0/16, 15/16, 1/16, 1/16, 16/16, 15/16, [[t2, 0]]);//полоска 3
		model.addBox(15/16, 15/16, 1/16, 16/16, 16/16, 15/16, [[t2, 0]]);//полоска 4

		model.addBox(0/16, 0/16, 0/16, 16/16, 4/16, 16/16, [[base, 0]]);//низ

		model.addBox(2/16, 4/16, 2/16, 14/16, 7/16, 14/16, [[core, 0]]);//ядро низ
		model.addBox(3/16, 7/16, 3/16, 13/16, 11/16, 13/16, [[anim, 0]]);//анимация
		model.addBox(2/16, 11/16, 2/16, 14/16, 14/16, 14/16, [[core, 0]]);//ядро верх

		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID[block], 0, render);
		//Block.setBlockShape(BlockID[block], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
	},
	minerModel: function(tier, type){
		var render = new ICRender.Model();
		var model = BlockRenderer.createModel();
		var block = "v"+type+"mct"+tier;
		var t1 = "vmct_bottom";
		var t2 = block+"_top";
		var t3 = "v"+type+"m_panel";
		/*
		 *t1 низ
		 *t2 верх
		 *t3 панельки
		 */


		if(tier == "1"){
			for(let i in vm1_structure){
				let a = vm1_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "2"){
			for(let i in vm2_structure){
				let a = vm2_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "3"){
			for(let i in vm3_structure){
				let a = vm3_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "4"){
			for(let i in vm4_structure){
				let a = vm4_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "5"){
			for(let i in vm5_structure){
				let a = vm5_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "6"){
			for(let i in vm6_structure){
				let a = vm6_structure[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}

		model.addBox(0/16, 4/16, 0/16, 1/16, 16/16, 1/16, [[t2, 0]]);//стойка 1
		model.addBox(0/16, 4/16, 15/16, 1/16, 16/16, 16/16, [[t2, 0]]);//стойка 2
		model.addBox(15/16, 4/16, 15/16, 16/16, 16/16, 16/16, [[t2, 0]]);//стойка 3
		model.addBox(15/16, 4/16, 0/16, 16/16, 16/16, 1/16, [[t2, 0]]);//стойка 4

		model.addBox(1/16, 15/16, 0/16, 15/16, 16/16, 1/16, [[t2, 0]]);//полоска 1
		model.addBox(1/16, 15/16, 15/16, 15/16, 16/16, 16/16, [[t2, 0]]);//полоска 2
		model.addBox(0/16, 15/16, 1/16, 1/16, 16/16, 15/16, [[t2, 0]]);//полоска 3
		model.addBox(15/16, 15/16, 1/16, 16/16, 16/16, 15/16, [[t2, 0]]);//полоска 4

		model.addBox(6/16, 4/16, 0/16, 10/16, 15/16, 4/16, [[t3, 0]]);//панель 1
		model.addBox(6/16, 4/16, 12/16, 10/16, 15/16, 16/16, [[t3, 0]]);//панель 2
		model.addBox(12/16, 4/16, 6/16, 16/16, 15/16, 10/16, [[t3, 0]]);//панель 3
		model.addBox(0/16, 4/16, 6/16, 4/16, 15/16, 10/16, [[t3, 0]]);//панель 4

		model.addBox(0/16, 0/16, 0/16, 16/16, 4/16, 16/16, [[t1, 0]]);//низ

		model.addBox(1/16, 15/16, 6/16, 15/16, 16/16, 10/16, [[t3, 0]]);//верхняя панель 1
		model.addBox(6/16, 15/16, 1/16, 10/16, 16/16, 6/16, [[t3, 0]]);//верхняя панель 2
		model.addBox(6/16, 15/16, 10/16, 10/16, 16/16, 15/16, [[t3, 0]]);//верхняя панель 3

		model.addBox(4/16, 4/16, 4/16, 12/16, 9/16, 12/16, [[t1, 0]]);//лазерное ядро


		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID[block], 0, render);
		Block.setBlockShape(BlockID[block], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
	},
	solarModel: function(tier){
		var render = new ICRender.Model();
		var model = BlockRenderer.Model();
		var block = "sact" + tier;
		var t1 = block+"_bottom";
		var t2 = "st_p";
		var t3 = block+"_sides";
		/*
		 *t1 низ
		 *t2 верх
		 *t3 стороны
		 */

		if(tier == "1"){
			for(let i in t1_solar){
				let a = t1_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "2"){
			for(let i in t2_solar){
				let a = t2_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "3"){
			for(let i in t3_solar){
				let a = t3_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "4"){
			for(let i in t4_solar){
				let a = t4_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "5"){
			for(let i in t5_solar){
				let a = t5_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}else
		if(tier == "6"){
			for(let i in t6_solar){
				let a = t6_solar[i];
				model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
			}
		}

		model.addBox(0/16, 12/16, 0/16, 16/16, 16/16, 16/16, [[t2, 0], [t2, 0], [t2, 0]]);//верх

		model.addBox(0/16, 0/16, 0/16, 1/16, 12/16, 1/16, [[t1, 0]]);//стойка 1
		model.addBox(0/16, 0/16, 15/16, 1/16, 12/16, 16/16, [[t1, 0]]);//стойка 2
		model.addBox(15/16, 0/16, 0/16, 16/16, 12/16, 1/16, [[t1, 0]]);//стойка 3
		model.addBox(15/16, 0/16, 15/16, 16/16, 12/16, 16/16, [[t1, 0]]);//стойка 4

		model.addBox(1/16, 0/16, 0/16, 15/16, 1/16, 1/16, [[t1, 0]]);//полоса 1
		model.addBox(1/16, 0/16, 15/16, 15/16, 1/16, 16/16, [[t1, 0]]);//полоса 2
		model.addBox(0/16, 0/16, 1/16, 1/16, 1/16, 15/16, [[t1, 0]]);//полоса 3
		model.addBox(15/16, 0/16, 1/16, 16/16, 1/16, 15/16, [[t1, 0]]);//полоса 4

		model.addBox(2/16, 2/16, 2/16, 14/16, 12/16, 14/16, [[t1, 0], [t1, 0], [t3, 0]]);//мозг

		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID[block], 0, render);
		Block.setBlockShape(BlockID[block], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
	},
	lightningModel: function(tier){
		var render = new ICRender.Model();
		var model = BlockRenderer.createModel();
		var block = "lct" + tier;
		var t1 = block+"_bottom";
		var t2 = "st_p";
		var t3 = block+"_sides";
		/*
		 *t1 низ
		 *t2 верх
		 *t3 стороны
		 */

		if(tier == "1"){
			for(let i in lightning1){
				let a = lightning1[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}else
		if(tier == "2"){
			for(let i in lightning2){
				let a = lightning2[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}else
		if(tier == "3"){
			for(let i in lightning3){
				let a = lightning3[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}else
		if(tier == "4"){
			for(let i in lightning4){
				let a = lightning4[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}else
		if(tier == "5"){
			for(let i in lightning5){
				let a = lightning5[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}else
		if(tier == "6"){
			for(let i in lightning6){
				let a = lightning6[i];
				if(a.id === BlockID.i_l_r){
					model.addBox(a.x+0/16, a.y+0.1/16, a.z+0/16, a.x+16/16, a.y+15.9/16, a.z+16/16, 20, 0);
					model.addBox(a.x+3/16, a.y+0/16, a.z+3/16, a.x+13/16, a.y+16/16, a.z+13/16, 42, 0);
				}else
				if(a.id === BlockID.l_r){
					model.addBox(a.x+5/16, a.y+0/16, a.z+5/16, a.x+11/16, a.y+16/16, a.z+11/16, 42, 0);
				}else{
					model.addBox(a.x+2/16, a.y+2/16, a.z+2/16, a.x+14/16, a.y+14/16, a.z+14/16, a.id, 0);
				}
			}
		}

		model.addBox(0/16, 12/16, 0/16, 16/16, 16/16, 16/16, [[t2, 0], [t2, 0], [t2, 0]]);//верх

		model.addBox(0/16, 0/16, 0/16, 1/16, 12/16, 1/16, [[t1, 0]]);//стойка 1
		model.addBox(0/16, 0/16, 15/16, 1/16, 12/16, 16/16, [[t1, 0]]);//стойка 2
		model.addBox(15/16, 0/16, 0/16, 16/16, 12/16, 1/16, [[t1, 0]]);//стойка 3
		model.addBox(15/16, 0/16, 15/16, 16/16, 12/16, 16/16, [[t1, 0]]);//стойка 4

		model.addBox(1/16, 0/16, 0/16, 15/16, 1/16, 1/16, [[t1, 0]]);//полоса 1
		model.addBox(1/16, 0/16, 15/16, 15/16, 1/16, 16/16, [[t1, 0]]);//полоса 2
		model.addBox(0/16, 0/16, 1/16, 1/16, 1/16, 15/16, [[t1, 0]]);//полоса 3
		model.addBox(15/16, 0/16, 1/16, 16/16, 1/16, 15/16, [[t1, 0]]);//полоса 4

		model.addBox(2/16, 6/16, 2/16, 14/16, 12/16, 14/16, [[t1, 0], [t1, 0], [t3, 0]]);//верхняя часть

		model.addBox(5/16, 1/16, 4/16, 11/16, 6/16, 5/16, [[t1, 0], [t1, 0], [t3, 0]]);//боковины
		model.addBox(5/16, 1/16, 11/16, 11/16, 6/16, 12/16, [[t1, 0], [t1, 0], [t3, 0]]);//боковины
		model.addBox(11/16, 1/16, 5/16, 12/16, 6/16, 11/16, [[t1, 0], [t1, 0], [t3, 0]]);//боковины
		model.addBox(4/16, 1/16, 5/16, 5/16, 6/16, 1/16, [[t1, 0], [t1, 0], [t3, 0]]);//боковины

		model.addBox(5/16, 0/16, 5/16, 11/16, 1/16, 11/16, [[t1, 0], [t1, 0], [t1, 0]]);//низ
		model.addBox(5.5/16, 0.5/16, 5.5/16, 11.5/16, 1.5/16, 11.5/16, [[t1, 0], [t1, 0], [t1, 0]]);//низ

		render.addEntry(model);
		BlockRenderer.setStaticICRender(BlockID[block], 0, render);
		Block.setBlockShape(BlockID[block], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
	},
	getStructure: function(cx, cy, cz, structure){
		let t=0;
		for(let i in structure){
			t++;
			var block = World.getBlock(cx + structure[i].x, cy + structure[i].y, cz + structure[i].z).id === structure[i].id;
			if(!block){t=0; return false;}
			if(structure.length == t){return true;}
			//Game.message(block);
		}
	},
	getModdedStructure: function(cx, cy, cz, structure){
		let t=0;
		var isValid = false;
		bl: for(let i in structure){
			var list = modifierAugmentApi.getList();
			var block = World.getBlock(cx + structure[i].x, cy + structure[i].y, cz + structure[i].z).id === structure[i].id;
			if(structure[i].id === BlockID.null_modifier){
				for(let u in list){
					block = World.getBlock(cx + structure[i].x, cy + structure[i].y, cz + structure[i].z).id === list[u];
					if(!block && u == list.length){t=0; break bl;}
				}
			}else{
			if(!block){t=0; break bl;}}
			if(structure.length == t){isValid = true; break bl;}
			//Game.message(block);
			t++;
		}
		return isValid;
	},
	setStructure: function(coords, structure){
		let c = coords;
		let p = 0;
		str: for(let i in structure){
			if(World.getBlock(c.x + structure[i].x, c.y + structure[i].y, c.z + structure[i].z).id !== structure[i].id){
			/*for(let u = 9; u<45; u++){
				let item = Player.getInventorySlot(u);
				if(item.id === structure[i].id){
					Player.setInventorySlot(u, structure[i].id, item.count-1, 0);*/
					World.setBlock(c.x + structure[i].x, c.y + structure[i].y, c.z + structure[i].z, structure[i].id, 0);/*
					//break str;
				}else if(u==45){p=1; Game.message("Not Enough (> "+structure[i].id+" <) for assemble structure"); break str;}
			}*/
			}
			if(i==structure.length){if(p == 0){Game.message("Structure Assembler finished work");}else if(p == 1){Game.message("Structure Assembler finished work with error");}}
		}
	},
	breakStructure: function(coords, structure){
		let c = coords;
		//modifierApi.getModifier(structure, c);
		for(let i in structure){
			for(let u = 9; u<45; u++){
				let item = Player.getInventorySlot(u);
				if(item.id === structure[i].id){
					if(item.count<64){
						Player.setInventorySlot(u, structure[i].id, item.count+1, 0); World.setBlock(structure[i].x+c.x, structure[i].y+c.y, structure[i].z+c.z, 0); break;}
					}else if(item.id == 0){Player.setInventorySlot(u, structure[i].id, item.count+1, 0); World.setBlock(structure[i].x+c.x, structure[i].y+c.y, structure[i].z+c.z, 0); break;
				}else if(u==45){World.drop(c.x, c.y+1, c.z, structure[i].id, 1, 0); World.setBlock(structure[i].x+c.x, structure[i].y+c.y, structure[i].z+c.z, 0);}
			}
		}
	},
	structureAssembler: function(structure, coords){
		let c = coords;
		let destroy = false;
		destroy = ValkyrieLib.getStructure(c.x, c.y, c.z, structure);
		//Game.message(destroy);
		if(destroy){
			Game.message("Structure Destroyed");
			ValkyrieLib.breakStructure(c, structure);
		}else{
			ValkyrieLib.setStructure(coords, structure);
		}
	},
}
let slots = 0;




// file: EnvironmentalTech/creating/Decorative_blocks/reg_api.js

/*BlockType*/

var BlockType = {

registerDoors: function (UP, valueUP, DOWN, valueDOWN, doorID, doors){
    
IDRegistry.genBlockID(UP + "closeUP");
   Block.createBlockWithRotation(UP + "closeUP", [
{name: "NoNe", texture: [[valueUP.texture_bottom, 0], [valueUP.texture_top, 0], [valueUP.texture_back/*Зад*/, 0], [valueUP.texture_front/*Перід*/, 0], [valueUP.texture_left, 0], [valueUP.texture_right, 0]], inCreative: false}
]);
    
Block.setBlockShape(BlockID[UP + "closeUP"], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: + 0.19});

IDRegistry.genBlockID(UP + "OpenUP");
   Block.createBlockWithRotation(UP + "OpenUP", [
{name: "NoNe", texture: [[valueUP.texture_bottom, 0], [valueUP.texture_top, 0], [valueUP.texture_right/*Зад*/, 0], [valueUP.texture_left/*Перід*/, 0], [valueUP.texture_back, 0], [valueUP.texture_front, 0]], inCreative: false}
]);
    
Block.setBlockShape(BlockID[UP + "OpenUP"], {x: 0, y: 0, z: 0}, {x: 0.19, y: 1, z: +1});


IDRegistry.genBlockID(DOWN + "closeDOWN");
   Block.createBlockWithRotation(DOWN + "closeDOWN", [
{name: "NoNe", texture: [[valueDOWN.texture_bottom, 0], [valueDOWN.texture_top, 0], [valueDOWN.texture_back/*Зад*/, 0], [valueDOWN.texture_front/*Перід*/, 0], [valueDOWN.texture_left, 0], [valueDOWN.texture_right, 0]], inCreative: false}
]);
    
Block.setBlockShape(BlockID[DOWN + "closeDOWN"], {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: + 0.19});

IDRegistry.genBlockID(DOWN + "OpenDOWN");
   Block.createBlockWithRotation(DOWN + "OpenDOWN", [
{name: "NoNe", texture: [[valueDOWN.texture_bottom, 0], [valueDOWN.texture_top, 0], [valueDOWN.texture_right/*Зад*/, 0], [valueDOWN.texture_left/*Перід*/, 0], [valueDOWN.texture_back, 0], [valueDOWN.texture_front, 0]], inCreative: false}
]);
    
Block.setBlockShape(BlockID[DOWN + "OpenDOWN"], {x: 0, y: 0, z: 0}, {x: 0.19, y: 1, z: +1});

TileEntity.registerPrototype(BlockID[UP + "closeUP"], {
    tick: function () {
 if ((World.getBlock(this.x, this.y-1, this.z).id == BlockID[DOWN + "OpenDOWN"]) || (World.getBlock(this.x, this.y-1, this.z).id == BlockID[DOWN + "closeDOWN"])){
} else {
    alert(1);
 World.destroyBlock(this.x, this.y, this.z, false);
}
    },

click: function(){
             World.setBlock(this.x, this.y, this.z, BlockID[UP + "OpenUP"], 0);
               World.setBlock(this.x, this.y-1, this.z, BlockID[DOWN + "OpenDOWN"], 0);
     }
});
     
TileEntity.registerPrototype(BlockID[UP + "OpenUP"], {
    tick: function () {
 if ((World.getBlock(this.x, this.y-1, this.z).id == BlockID[DOWN + "OpenDOWN"]) || (World.getBlock(this.x, this.y-1, this.z).id == BlockID[DOWN + "closeDOWN"])){
} else {
    alert(1);
 World.destroyBlock(this.x, this.y, this.z, false);
}

},

 click: function(){
         World.setBlock(this.x, this.y, this.z, BlockID[UP + "closeUP"], 0);
           World.setBlock(this.x, this.y-1, this.z, BlockID[DOWN + "closeDOWN"], 0);
     }
});
     
     
TileEntity.registerPrototype(BlockID[DOWN + "OpenDOWN"], {
    click: function(){
           World.setBlock(this.x, this.y, this.z, BlockID[DOWN + "closeDOWN"], 0);
             World.setBlock(this.x, this.y+1, this.z, BlockID[UP + "closeUP"], 0);
     }
});
     
TileEntity.registerPrototype(BlockID[DOWN + "closeDOWN"], {

    click: function(){
           World.setBlock(this.x, this.y, this.z, BlockID[DOWN + "OpenDOWN"], 0);
             World.setBlock(this.x, this.y+1, this.z, BlockID[UP + "OpenUP"], 0);
     }
        
}); 
 
 IDRegistry.genItemID(doorID);
Item.createItem(doorID, doors.name, {name: doors.texture, meta: 0}, {stack: doors.maxStack});
     
Callback.addCallback("ItemUse", function (coords, block) {
 var item = Player.getCarriedItem();
    if (item.id == ItemID[doorID]){
     Player.setCarriedItem(item.id, item.count-=1, 0);
    World.setBlock(coords.x, coords.y+1, coords.z, BlockID[DOWN + "closeDOWN"], 0);
             World.setBlock(coords.x, coords.y+2, coords.z, BlockID[UP + "closeUP"], 0);
    }
});
 
 Block.registerDropFunction(BlockID[UP + "OpenUP"], function(coords, blockID, blockData, level, enchant){
  var source = [[0, 0, 0]];
return source;
});

Block.registerDropFunction(BlockID[UP + "closeUP"], function(coords, blockID, blockData, level, enchant){
  var source = [[0, 0, 0]];
return source;
});
     
Block.registerDropFunction(BlockID[DOWN + "OpenDOWN"], function(coords, blockID, blockData, level, enchant){
  var source = [[ItemID[doorID], 1, 0]];
return source;
});

Block.registerDropFunction(BlockID[DOWN + "closeDOWN"], function(coords, blockID, blockData, level, enchant){
  var source = [[ItemID[doorID], 1, 0]];
return source;
});
     
},
 
registerHatch: function (id, value){

 IDRegistry.genBlockID(id);
   Block.createBlockWithRotation(id, [
{name: value.name, texture: [[value.texture_bottom, 0], [value.texture_top, 0], [value.texture_back/*Зад*/, 0], [value.texture_front/*Перід*/, 0], [value.texture_left, 0], [value.texture_right, 0]], inCreative: true}
]);

Block.setBlockShape(BlockID[id], {x: 0, y: 0.82, z: 0}, {x: 1, y: 1, z: 1});

IDRegistry.genBlockID(id + "open");
   Block.createBlockWithRotation(id + "open", [
{name: value.name, texture: [[value.texture_back, 0], [value.texture_front, 0], [value.texture_bottom/*Зад*/, 0], [value.texture_top/*Перід*/, 0], [value.texture_left, 0], [value.texture_right, 0]], inCreative: false}
]);

Block.setBlockShape(BlockID[id + "open"], {x: 0, y: 0, z: 0}, {x: 0.18, y: 1, z: 1});


TileEntity.registerPrototype(BlockID[id], {
    click: function(){
           World.setBlock(this.x, this.y, this.z, BlockID[id + "open"], 0);
     }    
}); 
   
TileEntity.registerPrototype(BlockID[id + "open"], {
    click: function(){
           World.setBlock(this.x, this.y, this.z, BlockID[id], 0);
     }    
}); 
   
Block.registerDropFunction(BlockID[id], function(coords, blockID, blockData, level, enchant){
  var source = [[BlockID[id], 1, 0]];
return source;
});

Block.registerDropFunction(BlockID[id + "open"], function(coords, blockID, blockData, level, enchant){
  var source = [[BlockID[id], 1, 0]];
return source;
});

}, 

registerHalfBlock: function (id, fullBlock, enable){
    if (enable == true){
    Block.setBlockShape(id, {x: 0, y: 0, z: 0}, {x: 1, y: 0.5, z: 1});
    
     Callback.addCallback("ItemUse", function (coords) {
     let item = Player.getCarriedItem();
     let block = World.getBlock(coords.x, coords.y, coords.z);
    if (item.id == id && block.id == id){
    Player.setCarriedItem(item.id, item.count-=1, 0);
    World.setBlock(coords.x, coords.y, coords.z, fullBlock, 0);
     if ((World.getBlock(this.x-1, this.y, this.z).id == id)){
     World.destroyBlock(this.x, this.y+1, this.z, false);
     Player.setCarriedItem(id, item.count+=1, 0);
     }
    }
});
     
    }
},

registerStepsUp: function (id, enable){
     if (enable == true){
         /*var look = Entity.getLookVector(Player.get());
	     if(look.x>.75){*/
		 var model = BlockRenderer.createModel();
         var hideRender = new ICRender.Model();
         model.addBox (0/16, 0/16, 0/16, 16/16, 8/16, 8/16, id, 0);
         model.addBox (0/16, 0/16, 8/16, 16/16, 16/16, 16/16, id, 0);
         hideRender.addEntry(model);
         BlockRenderer.enableCoordMapping(id, -1, hideRender)

         var model = new ICRender.CollisionShape();
         var entry = model.addEntry();
         entry.addBox (0/16, 0/16, 0/16, 16/16, 8/16, 8/16);
         entry.addBox (0/16, 0/16, 8/16, 16/16, 16/16, 16/16);
         BlockRenderer.setCustomCollisionShape(id, -1, model)

         var mod = BlockRenderer.createModel();
         var hide = new ICRender.Model();
         mod.addBox (0/16, 0/16, 0/16, 16/16, 8/16, 16/16, id, 0);
         mod.addBox (0/16, 8/16, 8/16, 8/16, 16/16, 16/16, id, 0);
         hide.addEntry(mod);
	     /*}
	     if(look.x<-.75){
		 var model = BlockRenderer.createModel();
         var hideRender = new ICRender.Model();
         model.addBox (0/16, 0/16, 0/16, 8/16, 8/16, 16/16, id, 0);
         model.addBox (8/16, 0/16, 0/16, 16/16, 16/16, 16/16, id, 0);
         hideRender.addEntry(model);
         BlockRenderer.enableCoordMapping(id, -1, hideRender)

         var model = new ICRender.CollisionShape();
         var entry = model.addEntry();
         entry.addBox (0/16, 0/16, 0/16, 8/16, 8/16, 16/16);
         entry.addBox (8/16, 0/16, 0/16, 16/16, 16/16, 16/16);
         BlockRenderer.setCustomCollisionShape(id, -1, model)

         var mod = BlockRenderer.createModel();
         var hide = new ICRender.Model();
         mod.addBox (0/16, 0/16, 0/16, 16/16, 8/16, 16/16, id, 0);
         mod.addBox (8/16, 8/16, 0/16, 16/16, 16/16, 8/16, id, 0);
         hide.addEntry(mod);
	     }
	     if(look.z>.75){
		 
	     }
	     if(look.z<-.75){
		 
	     }
*/
 

TileEntity.registerPrototype(id, {
    tick: function(){
         if ((World.getBlock(this.x-1, this.y, this.z).id == id) && (World.getBlock(this.x, this.y, this.z+1).id == id)){
          BlockRenderer.mapAtCoords(this.x, this.y, this.z, hide);
          } else {
          BlockRenderer.mapAtCoords(this.x, this.y, this.z, hideRender);
          }
     }    
}); 


    }                
 }          

};







// file: EnvironmentalTech/creating/Decorative_blocks/aethium.js

IDRegistry.genBlockID("normal_block_aethium");
Block.createBlock("normal_block_aethium", [
  {name: "Aethium Block",
  texture: [["aethium_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_aethium", [{
  name: "Aethium Paver",
  texture: [["aethium_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_aethium", [{
  name: "Aethium Bricks",
  texture: [["aethium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_aethium", [{
  name: "Aethium Tiles",
  texture: [["aethium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_aethium");
Block.createBlock("stairs_block_aethium", [{
  name: "Aethium Stairs",
  texture: [["aethium_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_aethium", [{
  name: "Aethium Brick Stairs",
  texture: [["aethium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_aethium", [{
  name: "Aethium Tile Stairs",
  texture: [["aethium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_aethium");
Block.createBlock("slab_block_aethium", [
  {name: "Aethium Slab",
  texture: [["aethium_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_aethium", [
  {name: "Aethium Paver Slab",
   texture: [["aethium_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_aethium", [
  {name: "Aethium Brick Slab",
  texture: [["aethium_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_aethium", [
  {name: "Aethium Tile Slab",
  texture: [["aethium_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_aethium, true);




// file: EnvironmentalTech/creating/Decorative_blocks/erodium.js

IDRegistry.genBlockID("normal_block_erodium");
Block.createBlock("normal_block_erodium", [
  {name: "Erodium Block",
  texture: [["erodium_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_erodium", [{
  name: "Erodium Paver",
  texture: [["erodium_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_erodium", [{
  name: "Erodium Bricks",
  texture: [["erodium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_erodium", [{
  name: "Erodium Tiles",
  texture: [["erodium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_erodium");
Block.createBlock("stairs_block_erodium", [{
  name: "Erodium Stairs",
  texture: [["erodium_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_erodium", [{
  name: "Erodium Brick Stairs",
  texture: [["erodium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_erodium", [{
  name: "Erodium Tile Stairs",
  texture: [["erodium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_erodium");
Block.createBlock("slab_block_erodium", [
  {name: "Erodium Slab",
  texture: [["erodium_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_erodium", [
  {name: "Erodium Paver Slab",
   texture: [["erodium_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_erodium", [
  {name: "Erodium Brick Slab",
  texture: [["erodium_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_erodium", [
  {name: "Erodium Tile Slab",
  texture: [["erodium_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_erodium, true);




// file: EnvironmentalTech/creating/Decorative_blocks/ionite.js

IDRegistry.genBlockID("normal_block_ionite");
Block.createBlock("normal_block_ionite", [
  {name: "Ionite Block",
  texture: [["ionite_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_ionite", [{
  name: "Ionite Paver",
  texture: [["ionite_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_ionite", [{
  name: "Ionite Bricks",
  texture: [["ionite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_ionite", [{
  name: "Ionite Tiles",
  texture: [["ionite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_ionite");
Block.createBlock("stairs_block_ionite", [{
  name: "Ionite Stairs",
  texture: [["ionite_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_ionite", [{
  name: "Ionite Brick Stairs",
  texture: [["ionite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_ionite", [{
  name: "Ionite Tile Stairs",
  texture: [["ionite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_ionite");
Block.createBlock("slab_block_ionite", [
  {name: "Ionite Slab",
  texture: [["ionite_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_ionite", [
  {name: "Ionite Paver Slab",
   texture: [["ionite_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_ionite", [
  {name: "Ionite Brick Slab",
  texture: [["ionite_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_ionite", [
  {name: "Ionite Tile Slab",
  texture: [["ionite_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_ionite, true);




// file: EnvironmentalTech/creating/Decorative_blocks/kyronite.js

IDRegistry.genBlockID("normal_block_kyronite");
Block.createBlock("normal_block_kyronite", [
  {name: "Kyronite Block",
  texture: [["kyronite_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_kyronite", [{
  name: "Kyronite Paver",
  texture: [["kyronite_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_kyronite", [{
  name: "Kyronite Bricks",
  texture: [["kyronite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_kyronite", [{
  name: "Kyronite Tiles",
  texture: [["kyronite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_kyronite");
Block.createBlock("stairs_block_kyronite", [{
  name: "Kyronite Stairs",
  texture: [["kyronite_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_kyronite", [{
  name: "Kyronite Brick Stairs",
  texture: [["kyronite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_kyronite", [{
  name: "Kyronite Tile Stairs",
  texture: [["kyronite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_kyronite");
Block.createBlock("slab_block_kyronite", [
  {name: "Kyronite Slab",
  texture: [["kyronite_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_kyronite", [
  {name: "Kyronite Paver Slab",
   texture: [["kyronite_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_kyronite", [
  {name: "Kyronite Brick Slab",
  texture: [["kyronite_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_kyronite", [
  {name: "Kyronite Tile Slab",
  texture: [["kyronite_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_kyronite, true);




// file: EnvironmentalTech/creating/Decorative_blocks/litherite.js

IDRegistry.genBlockID("normal_block_litherite");
Block.createBlock("normal_block_litherite", [
  {name: "Litherite Block",
  texture: [["litherite_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_litherite", [{
  name: "Litherite Paver",
  texture: [["litherite_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_litherite", [{
  name: "Litherite Bricks",
  texture: [["litherite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_litherite", [{
  name: "Litherite Tiles",
  texture: [["litherite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_litherite");
Block.createBlock("stairs_block_litherite", [{
  name: "Litherite Stairs",
  texture: [["litherite_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_litherite", [{
  name: "Litherite Brick Stairs",
  texture: [["litherite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_litherite", [{
  name: "Litherite Tile Stairs",
  texture: [["litherite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_litherite");
Block.createBlock("slab_block_litherite", [
  {name: "Litherite Slab",
  texture: [["litherite_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_litherite", [
  {name: "Litherite Paver Slab",
   texture: [["litherite_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_litherite", [
  {name: "Litherite Brick Slab",
  texture: [["litherite_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_litherite", [
  {name: "Litherite Tile Slab",
  texture: [["litherite_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_litherite, true);




// file: EnvironmentalTech/creating/Decorative_blocks/lonsdaleite.js

IDRegistry.genBlockID("normal_block_lonsdaleite");
Block.createBlock("normal_block_lonsdaleite", [
  {name: "Lonsdaleite Block",
  texture: [["lonsdaleite_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_lonsdaleite", [{
  name: "Lonsdaleite Paver",
  texture: [["lonsdaleite_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_lonsdaleite", [{
  name: "Lonsdaleite Bricks",
  texture: [["lonsdaleite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_lonsdaleite", [{
  name: "Lonsdaleite Tiles",
  texture: [["lonsdaleite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_lonsdaleite");
Block.createBlock("stairs_block_lonsdaleite", [{
  name: "Lonsdaleite Stairs",
  texture: [["lonsdaleite_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_lonsdaleite", [{
  name: "Lonsdaleite Brick Stairs",
  texture: [["lonsdaleite_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_lonsdaleite", [{
  name: "Lonsdaleite Tile Stairs",
  texture: [["lonsdaleite_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_lonsdaleite");
Block.createBlock("slab_block_lonsdaleite", [
  {name: "Lonsdaleite Slab",
  texture: [["lonsdaleite_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_lonsdaleite", [
  {name: "Lonsdaleite Paver Slab",
   texture: [["lonsdaleite_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_lonsdaleite", [
  {name: "Lonsdaleite Brick Slab",
  texture: [["lonsdaleite_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_lonsdaleite", [
  {name: "Lonsdaleite Tile Slab",
  texture: [["lonsdaleite_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_lonsdaleite, true);




// file: EnvironmentalTech/creating/Decorative_blocks/pladium.js

IDRegistry.genBlockID("normal_block_pladium");
Block.createBlock("normal_block_pladium", [
  {name: "Pladium Block",
  texture: [["pladium_normal", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_pladium", [{
  name: "Pladium Paver",
  texture: [["pladium_paver", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_pladium", [{
  name: "Pladium Bricks",
  texture: [["pladium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("normal_block_pladium", [{
  name: "Pladium Tiles",
  texture: [["pladium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("stairs_block_pladium");
Block.createBlock("stairs_block_pladium", [{
  name: "Pladium Stairs",
  texture: [["pladium_normal", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_pladium", [{
  name: "Pladium Brick Stairs",
  texture: [["pladium_bricks", 0]],
  inCreative: true}]);
Block.createBlock("stairs_block_pladium", [{
  name: "Pladium Tile Stairs",
  texture: [["pladium_tiles", 0]],
  inCreative: true}]);


IDRegistry.genBlockID("slab_block_pladium");
Block.createBlock("slab_block_pladium", [
  {name: "Pladium Slab",
  texture: [["pladium_normal", 0]],
  inCreative: true}]);
Block.createBlock("slab_block_pladium", [
  {name: "Pladium Paver Slab",
   texture: [["pladium_paver", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_pladium", [
  {name: "Pladium Brick Slab",
  texture: [["pladium_bricks", 0]],
   inCreative: true}]);
Block.createBlock("slab_block_pladium", [
  {name: "Pladium Tile Slab",
  texture: [["pladium_tiles", 0]],
  inCreative: true}]);
BlockType.registerHalfBlock(BlockID.slab_block_pladium, true);




// file: EnvironmentalTech/defining/define all.js

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




// file: EnvironmentalTech/creating/create.js

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




// file: EnvironmentalTech/defining/m_reg.js


var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype, notUseEU){
		// register ID
		this.machineIDs[id] = true;
		/*
		Prototype.click = function(id, count, data, coords){
			if(id==ItemID.wrench || id==ItemID.electricWrench){
				return true;
			}
		}
		*/
		if(!notUseEU){
			// wire connection
			ICRender.getGroup("ic-wire").add(id, -1);
			// setup energy value
			if (Prototype.defaultValues){
				Prototype.defaultValues.energy = 0;
			}
			else{
				Prototype.defaultValues = {
					energy: 0
				};
			}
			// copy functions
			if(!Prototype.getEnergyStorage){
				Prototype.getEnergyStorage = function(){
					return 0;
				};
			}
		}
		ToolAPI.registerBlockMaterial(id, "stone", 1);
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		
		if(!notUseEU){
			// register for energy net
			EnergyTileRegistry.addEnergyTypeForId(id, EU);
		}
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level >= ToolAPI.getBlockDestroyLevel(blockID)){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	/*
	create6sidesRender: function(id, texture){
		this.data[id] = {};
		if(texture.length == 2){
			var textures = [
				[texture[1], texture[0], texture[0], texture[0], texture[0], texture[0]],
				[texture[0], texture[1], texture[0], texture[0], texture[0], texture[0]],
				[texture[0], texture[0], texture[1], texture[0], texture[0], texture[0]],
				[texture[0], texture[0], texture[0], texture[1], texture[0], texture[0]],
				[texture[0], texture[0], texture[0], texture[0], texture[1], texture[0]],
				[texture[0], texture[0], texture[0], texture[0], texture[0], texture[1]]
			]
		}
		for(var i = 0; i < 5; i++){
			this.registerRenderModel(id, i, textures[i])
		}
	},
	*/
	initModel: function(){
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	},
	
	isValidEUItem: function(id, count, data, container){
		var level = container.tileEntity.data.power_tier || 0;
		return ChargeItemRegistry.isValidItem(id, "Eu",  level);
	},
	
	isValidEUStorage: function(id, count, data, container){
		var level = container.tileEntity.data.power_tier || 0;
		return ChargeItemRegistry.isValidStorage(id, "Eu",  level);
	},
}

var transferByTier = {
	0: 32,
	1:  256,
	2: 2048,
	3: 8192
}




// file: EnvironmentalTech/creating/items.js

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




// file: EnvironmentalTech/creating/crafts.js

//crafts
Callback.addCallback("PostLoaded", function(){
//items all's ok
Recipes.addShaped({id: ItemID.litherite, count: 4, data: 0}, [
	"abc",
	"bdb",
	"cba"], [
    'a', 351, 10,
	'b', 318, 0,
	'c', 351, 2,
	'd', 264, 0]);
Recipes.addShaped({id: ItemID.connector, count: 4, data: 0}, [
	"aba",
	"bab ",
	"aba"], [
    'a', 331, 0,
	'b', 265, 0]);
Recipes.addShaped({id: ItemID.photovoltaic, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "], [
    'a', 351, 10,
	'b', 406, 0]);
Recipes.addShaped({id: ItemID.assembler, count: 1, data: 0}, [
	"  a",
	" b ",
	"b  "], [
    'a', ItemID.litherite, 0,
	'b', 49, 0]);
Recipes.addShaped({id: ItemID.diode, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aca"], [
    'a', 20,  0,
	'b', 331, 0,
	'c', 265, 0]);
//modifiers all's ok
Recipes.addShaped({id: BlockID.null_modifier, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"], [
    'a', 265,  0,
	'b', 20, 0,'c', BlockID.interconnect, 0]);
Recipes.addShaped({id: BlockID.speed_modifier, count: 1, data: 0}, [
	"aba",
	"dcd",
	"aba"], [
    'a', 41,  0,'b', 152, 0,'c', BlockID.null_modifier, 0,'d', BlockID.mica, 0]);
Recipes.addShaped({id: BlockID.piezo_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 155, 0,
    'b', ItemID.erodium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.kyronite_crystal, 0]);
Recipes.addShaped({id: BlockID.accuracy_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 57, 0,
    'b', ItemID.pladium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.flight_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "fef"], [
    'a', 288, 0,
    'b', ItemID.ionite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0,
    'f', 334, 0]);
Recipes.addShaped({id: BlockID.haste_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 285, 0,
    'b', ItemID.erodium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.strength_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 276, 0,
    'b', ItemID.kyronite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0
]);
Recipes.addShaped({id: BlockID.jump_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 313, 0,
    'b', ItemID.litherite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.regen_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 322, 0,
    'b', ItemID.pladium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.resistance_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 311, 0,
    'b', ItemID.pladium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.fire_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "fef"], [
    'a', 49, 0,
    'b', ItemID.kyronite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0,
    'f', 311,0]);
Recipes.addShaped({id: BlockID.water_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 374, 0,
    'b', ItemID.erodium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.invisibility_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 399, 0,
    'b', ItemID.ionite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.night_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 388, 0,
    'b', ItemID.ionite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0]);
Recipes.addShaped({id: BlockID.health_boost_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 322, 0,
    'b', ItemID.kyronite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0
]);
Recipes.addShaped({id: BlockID.saturation_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 396, 0,
    'b', ItemID.ionite, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0
]);
Recipes.addShaped({id: BlockID.luck_modifier, count: 1, data: 0},[
  "aba",
  "cdc",
  "aea"], [
    'a', 116, 0,
    'b', ItemID.pladium, 0,
    'c', BlockID.mica, 0,
    'd', BlockID.null_modifier, 0,
    'e', ItemID.lonsdaleite, 0
]);
//structure frame tiers all's ok
Recipes.addShaped({id: BlockID.st_f_t1, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "], [
    'a', 265,  0,'d', 351, 0,'c', BlockID.interconnect, 0,'b', ItemID.litherite, 0]);
Recipes.addShaped({id: BlockID.st_f_t2, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "], [
    'a', 266,  0,'d', 351, 0,'c', BlockID.st_f_t1, 0,'b', ItemID.erodium, 0]);
Recipes.addShaped({id: BlockID.st_f_t3, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "], [
    'a', 264,  0,'d', 406, 0,'c', BlockID.st_f_t2, 0,'b', ItemID.kyronite, 0]);
Recipes.addShaped({id: BlockID.st_f_t4, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], [
    'a', 388,  0,'d', 406, 0,'c', BlockID.st_f_t3, 0,'b', ItemID.pladium, 0]);
Recipes.addShaped({id: BlockID.st_f_t5, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "], [
    'a', 399,  0,'d', 409, 0,'c', BlockID.st_f_t4, 0,'b', ItemID.ionite, 0]);
Recipes.addShaped({id: BlockID.st_f_t6, count: 1, data: 0}, [
	" a ",
	"bcb",
	" a "], [
    'a', 399,  0,'c', BlockID.st_f_t5, 0,'b', ItemID.aethium, 0]);
//solar panel
Recipes.addShaped({id: BlockID.lsp, count: 1, data: 0}, [
	"aaa",
	"bbb",
	"cdc"], [
    'a', ItemID.litherite, 0,'b', ItemID.photovoltaic, 0,'c', 331, 0,'d', BlockID.interconnect, 0]);
Recipes.addShaped({id: BlockID.esp, count: 1, data: 0}, [
	"bbb",
	"cdc",
	""], [
    'b', ItemID.erodium, 0,'c', ItemID.photovoltaic, 0,'d', BlockID.lsp, 0]);
Recipes.addShaped({id: BlockID.ksp, count: 1, data: 0}, [
	"bbb",
	"cdc",
	""], [
    'b', ItemID.kyronite, 0,'c', ItemID.photovoltaic, 0,'d', BlockID.esp, 0]);
Recipes.addShaped({id: BlockID.psp, count: 1, data: 0}, [
	"bbb",
	"cdc",
	""], [
    'b', ItemID.pladium, 0,'c', ItemID.photovoltaic, 0,'d', BlockID.ksp, 0]);
Recipes.addShaped({id: BlockID.isp, count: 1, data: 0}, [
	"bbb",
	"cdc",
	""], [
    'b', ItemID.ionite, 0,'c', ItemID.photovoltaic, 0,'d', BlockID.psp, 0]);
Recipes.addShaped({id: BlockID.asp, count: 1, data: 0}, [
	"bbb",
	"cdc",
	""], [
    'b', ItemID.aethium, 0,'c', ItemID.photovoltaic, 0,'d', BlockID.isp, 0]);
});




// file: EnvironmentalTech/creating/Solars/Structures/tier1.js

var t1_solar = [
{x: -1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: +1, z: +1, id: BlockID.lsp},
{x: +1, y: +1, z: 0, id: BlockID.lsp},
{x: +1, y: +1, z: -1, id: BlockID.lsp},
{x: 0, y: +1, z: -1, id: BlockID.lsp},
{x: -1, y: +1, z: -1, id: BlockID.lsp},
{x: -1, y: +1, z: 0, id: BlockID.lsp},
{x: -1, y: +1, z: +1, id: BlockID.lsp},
{x: 0, y: +1, z: +1, id: BlockID.lsp},
{x: 0, y: +1, z: 0, id: BlockID.lsp},
{x: +2, y: +1, z: 0, id: BlockID.st_f_t1},
{x: +2, y: +1, z: -1, id: BlockID.st_f_t1},
{x: +2, y: +1, z: -2, id: BlockID.st_f_t1},
{x: +1, y: +1, z: -2, id: BlockID.st_f_t1},
{x: 0, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -1, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: +1, z: -1, id: BlockID.st_f_t1},
{x: -2, y: +1, z: 0, id: BlockID.st_f_t1},
{x: -2, y: +1, z: +1, id: BlockID.st_f_t1},
{x: -2, y: +1, z: +2, id: BlockID.st_f_t1},
{x: -1, y: +1, z: +2, id: BlockID.st_f_t1},
{x: 0, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +1, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +2, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +2, y: +1, z: +1, id: BlockID.st_f_t1},
];




// file: EnvironmentalTech/creating/Solars/Structures/tier2.js

var t2_solar = [
{x: -1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +2, y: +1, z: +2, id: BlockID.esp},
{x: +2, y: +1, z: +1, id: BlockID.esp},
{x: +2, y: +1, z: 0, id: BlockID.esp},
{x: +2, y: +1, z: -1, id: BlockID.esp},
{x: +2, y: +1, z: -2, id: BlockID.esp},
{x: +1, y: +1, z: -2, id: BlockID.esp},
{x: 0, y: +1, z: -2, id: BlockID.esp},
{x: -1, y: +1, z: -2, id: BlockID.esp},
{x: -2, y: +1, z: -2, id: BlockID.esp},
{x: -2, y: +1, z: -1, id: BlockID.esp},
{x: -2, y: +1, z: 0, id: BlockID.esp},
{x: -2, y: +1, z: +1, id: BlockID.esp},
{x: -2, y: +1, z: +2, id: BlockID.esp},
{x: -1, y: +1, z: +2, id: BlockID.esp},
{x: 0, y: +1, z: +2, id: BlockID.esp},
{x: +1, y: +1, z: +2, id: BlockID.esp},
{x: +1, y: +1, z: +1, id: BlockID.esp},
{x: +1, y: +1, z: 0, id: BlockID.esp},
{x: +1, y: +1, z: -1, id: BlockID.esp},
{x: 0, y: +1, z: -1, id: BlockID.esp},
{x: -1, y: +1, z: -1, id: BlockID.esp},
{x: -1, y: +1, z: 0, id: BlockID.esp},
{x: -1, y: +1, z: +1, id: BlockID.esp},
{x: 0, y: +1, z: +1, id: BlockID.esp},
{x: 0, y: +1, z: 0, id: BlockID.esp},
{x: +3, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +3, y: +1, z: +2, id: BlockID.st_f_t2},
{x: +3, y: +1, z: +1, id: BlockID.st_f_t2},
{x: +3, y: +1, z: 0, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -1, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -2, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -3, id: BlockID.st_f_t2},
{x: +2, y: +1, z: -3, id: BlockID.st_f_t2},
{x: +1, y: +1, z: -3, id: BlockID.st_f_t2},
{x: 0, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -1, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -2, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -2, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -1, id: BlockID.st_f_t2},
{x: -3, y: +1, z: 0, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +1, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +2, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +3, id: BlockID.st_f_t2},
{x: -2, y: +1, z: +3, id: BlockID.st_f_t2},
{x: -1, y: +1, z: +3, id: BlockID.st_f_t2},
{x: 0, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +1, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +2, y: +1, z: +3, id: BlockID.st_f_t2},
];




// file: EnvironmentalTech/creating/Solars/Structures/tier3.js

var t3_solar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: +3, y: +1, z: +3, id: BlockID.ksp},
{x: +3, y: +1, z: +2, id: BlockID.ksp},
{x: +3, y: +1, z: +1, id: BlockID.ksp},
{x: +3, y: +1, z: 0, id: BlockID.ksp},
{x: +3, y: +1, z: -1, id: BlockID.ksp},
{x: +3, y: +1, z: -2, id: BlockID.ksp},
{x: +3, y: +1, z: -3, id: BlockID.ksp},
{x: +2, y: +1, z: -3, id: BlockID.ksp},
{x: +1, y: +1, z: -3, id: BlockID.ksp},
{x: 0, y: +1, z: -3, id: BlockID.ksp},
{x: -1, y: +1, z: -3, id: BlockID.ksp},
{x: -2, y: +1, z: -3, id: BlockID.ksp},
{x: -3, y: +1, z: -3, id: BlockID.ksp},
{x: -3, y: +1, z: -2, id: BlockID.ksp},
{x: -3, y: +1, z: -1, id: BlockID.ksp},
{x: -3, y: +1, z: 0, id: BlockID.ksp},
{x: -3, y: +1, z: +1, id: BlockID.ksp},
{x: -3, y: +1, z: +2, id: BlockID.ksp},
{x: -3, y: +1, z: +3, id: BlockID.ksp},
{x: -2, y: +1, z: +3, id: BlockID.ksp},
{x: -1, y: +1, z: +3, id: BlockID.ksp},
{x: 0, y: +1, z: +3, id: BlockID.ksp},
{x: +1, y: +1, z: +3, id: BlockID.ksp},
{x: +2, y: +1, z: +3, id: BlockID.ksp},
{x: +2, y: +1, z: +2, id: BlockID.ksp},
{x: +2, y: +1, z: +1, id: BlockID.ksp},
{x: +2, y: +1, z: 0, id: BlockID.ksp},
{x: +2, y: +1, z: -2, id: BlockID.ksp},
{x: +2, y: +1, z: -1, id: BlockID.ksp},
{x: +1, y: +1, z: -2, id: BlockID.ksp},
{x: 0, y: +1, z: -2, id: BlockID.ksp},
{x: -1, y: +1, z: -2, id: BlockID.ksp},
{x: -2, y: +1, z: -2, id: BlockID.ksp},
{x: -2, y: +1, z: -1, id: BlockID.ksp},
{x: -2, y: +1, z: 0, id: BlockID.ksp},
{x: -2, y: +1, z: +1, id: BlockID.ksp},
{x: -2, y: +1, z: +2, id: BlockID.ksp},
{x: -1, y: +1, z: +2, id: BlockID.ksp},
{x: 0, y: +1, z: +2, id: BlockID.ksp},
{x: +1, y: +1, z: +2, id: BlockID.ksp},
{x: +1, y: +1, z: +1, id: BlockID.ksp},
{x: +1, y: +1, z: 0, id: BlockID.ksp},
{x: +1, y: +1, z: -1, id: BlockID.ksp},
{x: 0, y: +1, z: -1, id: BlockID.ksp},
{x: -1, y: +1, z: -1, id: BlockID.ksp},
{x: -1, y: +1, z: +1, id: BlockID.ksp},
{x: -1, y: +1, z: 0, id: BlockID.ksp},
{x: 0, y: +1, z: +1, id: BlockID.ksp},
{x: 0, y: +1, z: 0, id: BlockID.ksp},
{x: +4, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +3, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +2, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +1, id: BlockID.st_f_t3},
{x: +4, y: +1, z: 0, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -1, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -2, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -3, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +3, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +2, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +1, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -1, y: +1, z: -4, id: BlockID.st_f_t3},
{x: 0, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -2, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -3, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -3, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -2, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -1, id: BlockID.st_f_t3},
{x: -4, y: +1, z: 0, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +1, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +2, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +3, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -3, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -2, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -1, y: +1, z: +4, id: BlockID.st_f_t3},
{x: 0, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +1, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +2, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +3, y: +1, z: +4, id: BlockID.st_f_t3},
];




// file: EnvironmentalTech/creating/Solars/Structures/tier4.js

var t4_solar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.psp},
{x: +4, y: +1, z: +3, id: BlockID.psp},
{x: +4, y: +1, z: +2, id: BlockID.psp},
{x: +4, y: +1, z: +1, id: BlockID.psp},
{x: +4, y: +1, z: 0, id: BlockID.psp},
{x: +4, y: +1, z: -1, id: BlockID.psp},
{x: +4, y: +1, z: -2, id: BlockID.psp},
{x: +4, y: +1, z: -3, id: BlockID.psp},
{x: +4, y: +1, z: -4, id: BlockID.psp},
{x: +3, y: +1, z: -4, id: BlockID.psp},
{x: +2, y: +1, z: -4, id: BlockID.psp},
{x: +1, y: +1, z: -4, id: BlockID.psp},
{x: 0, y: +1, z: -4, id: BlockID.psp},
{x: -1, y: +1, z: -4, id: BlockID.psp},
{x: -2, y: +1, z: -4, id: BlockID.psp},
{x: -3, y: +1, z: -4, id: BlockID.psp},
{x: -4, y: +1, z: -4, id: BlockID.psp},
{x: -4, y: +1, z: -3, id: BlockID.psp},
{x: -4, y: +1, z: -2, id: BlockID.psp},
{x: -4, y: +1, z: -1, id: BlockID.psp},
{x: -4, y: +1, z: 0, id: BlockID.psp},
{x: -4, y: +1, z: +1, id: BlockID.psp},
{x: -4, y: +1, z: +2, id: BlockID.psp},
{x: -4, y: +1, z: +3, id: BlockID.psp},
{x: -4, y: +1, z: +4, id: BlockID.psp},
{x: -3, y: +1, z: +4, id: BlockID.psp},
{x: -2, y: +1, z: +4, id: BlockID.psp},
{x: -1, y: +1, z: +4, id: BlockID.psp},
{x: 0, y: +1, z: +4, id: BlockID.psp},
{x: +1, y: +1, z: +4, id: BlockID.psp},
{x: +2, y: +1, z: +4, id: BlockID.psp},
{x: +3, y: +1, z: +4, id: BlockID.psp},
{x: +3, y: +1, z: +3, id: BlockID.psp},
{x: +3, y: +1, z: +2, id: BlockID.psp},
{x: +3, y: +1, z: +1, id: BlockID.psp},
{x: +3, y: +1, z: 0, id: BlockID.psp},
{x: +3, y: +1, z: -1, id: BlockID.psp},
{x: +3, y: +1, z: -2, id: BlockID.psp},
{x: +3, y: +1, z: -3, id: BlockID.psp},
{x: +2, y: +1, z: -3, id: BlockID.psp},
{x: +1, y: +1, z: -3, id: BlockID.psp},
{x: 0, y: +1, z: -3, id: BlockID.psp},
{x: -1, y: +1, z: -3, id: BlockID.psp},
{x: -2, y: +1, z: -3, id: BlockID.psp},
{x: -3, y: +1, z: -3, id: BlockID.psp},
{x: -3, y: +1, z: -2, id: BlockID.psp},
{x: -3, y: +1, z: -1, id: BlockID.psp},
{x: -3, y: +1, z: 0, id: BlockID.psp},
{x: -3, y: +1, z: +1, id: BlockID.psp},
{x: -3, y: +1, z: +2, id: BlockID.psp},
{x: -3, y: +1, z: +3, id: BlockID.psp},
{x: -2, y: +1, z: +3, id: BlockID.psp},
{x: -1, y: +1, z: +3, id: BlockID.psp},
{x: 0, y: +1, z: +3, id: BlockID.psp},
{x: +1, y: +1, z: +3, id: BlockID.psp},
{x: +2, y: +1, z: +3, id: BlockID.psp},
{x: +2, y: +1, z: +2, id: BlockID.psp},
{x: +2, y: +1, z: +1, id: BlockID.psp},
{x: +2, y: +1, z: 0, id: BlockID.psp},
{x: +2, y: +1, z: -1, id: BlockID.psp},
{x: +2, y: +1, z: -2, id: BlockID.psp},
{x: +1, y: +1, z: -2, id: BlockID.psp},
{x: 0, y: +1, z: -2, id: BlockID.psp},
{x: -1, y: +1, z: -2, id: BlockID.psp},
{x: -2, y: +1, z: -2, id: BlockID.psp},
{x: -2, y: +1, z: -1, id: BlockID.psp},
{x: -2, y: +1, z: 0, id: BlockID.psp},
{x: -2, y: +1, z: +1, id: BlockID.psp},
{x: -2, y: +1, z: +2, id: BlockID.psp},
{x: -1, y: +1, z: +2, id: BlockID.psp},
{x: 0, y: +1, z: +2, id: BlockID.psp},
{x: +1, y: +1, z: +2, id: BlockID.psp},
{x: +1, y: +1, z: +1, id: BlockID.psp},
{x: +1, y: +1, z: 0, id: BlockID.psp},
{x: +1, y: +1, z: -1, id: BlockID.psp},
{x: 0, y: +1, z: -1, id: BlockID.psp},
{x: -1, y: +1, z: -1, id: BlockID.psp},
{x: -1, y: +1, z: 0, id: BlockID.psp},
{x: -1, y: +1, z: +1, id: BlockID.psp},
{x: 0, y: +1, z: +1, id: BlockID.psp},
{x: 0, y: +1, z: 0, id: BlockID.psp},
{x: +5, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +4, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +3, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +2, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +1, id: BlockID.st_f_t4},
{x: +5, y: +1, z: 0, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -1, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -2, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -3, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -4, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +4, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +3, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +2, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +1, y: +1, z: -5, id: BlockID.st_f_t4},
{x: 0, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -1, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -2, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -3, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -4, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -4, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -3, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -2, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -1, id: BlockID.st_f_t4},
{x: -5, y: +1, z: 0, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +1, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +2, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +3, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +4, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -4, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -3, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -2, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -1, y: +1, z: +5, id: BlockID.st_f_t4},
{x: 0, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +1, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +2, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +3, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +4, y: +1, z: +5, id: BlockID.st_f_t4},
];




// file: EnvironmentalTech/creating/Solars/Structures/tier5.js

var t5_solar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +2, id: BlockID.null_modifier},
{x: -2, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.isp},
{x: +4, y: +1, z: +3, id: BlockID.isp},
{x: +4, y: +1, z: +2, id: BlockID.isp},
{x: +4, y: +1, z: +1, id: BlockID.isp},
{x: +4, y: +1, z: 0, id: BlockID.isp},
{x: +4, y: +1, z: -1, id: BlockID.isp},
{x: +4, y: +1, z: -2, id: BlockID.isp},
{x: +4, y: +1, z: -3, id: BlockID.isp},
{x: +4, y: +1, z: -4, id: BlockID.isp},
{x: +3, y: +1, z: -4, id: BlockID.isp},
{x: +2, y: +1, z: -4, id: BlockID.isp},
{x: +1, y: +1, z: -4, id: BlockID.isp},
{x: 0, y: +1, z: -4, id: BlockID.isp},
{x: -1, y: +1, z: -4, id: BlockID.isp},
{x: -2, y: +1, z: -4, id: BlockID.isp},
{x: -3, y: +1, z: -4, id: BlockID.isp},
{x: -4, y: +1, z: -4, id: BlockID.isp},
{x: -4, y: +1, z: -3, id: BlockID.isp},
{x: -4, y: +1, z: -2, id: BlockID.isp},
{x: -4, y: +1, z: -1, id: BlockID.isp},
{x: -4, y: +1, z: 0, id: BlockID.isp},
{x: -4, y: +1, z: +1, id: BlockID.isp},
{x: -4, y: +1, z: +2, id: BlockID.isp},
{x: -4, y: +1, z: +3, id: BlockID.isp},
{x: -4, y: +1, z: +4, id: BlockID.isp},
{x: -3, y: +1, z: +4, id: BlockID.isp},
{x: -2, y: +1, z: +4, id: BlockID.isp},
{x: -1, y: +1, z: +4, id: BlockID.isp},
{x: 0, y: +1, z: +4, id: BlockID.isp},
{x: +1, y: +1, z: +4, id: BlockID.isp},
{x: +2, y: +1, z: +4, id: BlockID.isp},
{x: +3, y: +1, z: +4, id: BlockID.isp},
{x: +3, y: +1, z: +3, id: BlockID.isp},
{x: +3, y: +1, z: +2, id: BlockID.isp},
{x: +3, y: +1, z: +1, id: BlockID.isp},
{x: +3, y: +1, z: 0, id: BlockID.isp},
{x: +3, y: +1, z: -1, id: BlockID.isp},
{x: +3, y: +1, z: -2, id: BlockID.isp},
{x: +3, y: +1, z: -3, id: BlockID.isp},
{x: +2, y: +1, z: -3, id: BlockID.isp},
{x: +1, y: +1, z: -3, id: BlockID.isp},
{x: 0, y: +1, z: -3, id: BlockID.isp},
{x: -1, y: +1, z: -3, id: BlockID.isp},
{x: -2, y: +1, z: -3, id: BlockID.isp},
{x: -3, y: +1, z: -3, id: BlockID.isp},
{x: -3, y: +1, z: -2, id: BlockID.isp},
{x: -3, y: +1, z: -1, id: BlockID.isp},
{x: -3, y: +1, z: 0, id: BlockID.isp},
{x: -3, y: +1, z: +1, id: BlockID.isp},
{x: -3, y: +1, z: +2, id: BlockID.isp},
{x: -3, y: +1, z: +3, id: BlockID.isp},
{x: -2, y: +1, z: +3, id: BlockID.isp},
{x: -1, y: +1, z: +3, id: BlockID.isp},
{x: 0, y: +1, z: +3, id: BlockID.isp},
{x: +1, y: +1, z: +3, id: BlockID.isp},
{x: +2, y: +1, z: +3, id: BlockID.isp},
{x: +2, y: +1, z: +2, id: BlockID.isp},
{x: +2, y: +1, z: +1, id: BlockID.isp},
{x: +2, y: +1, z: 0, id: BlockID.isp},
{x: +2, y: +1, z: -1, id: BlockID.isp},
{x: +2, y: +1, z: -2, id: BlockID.isp},
{x: +1, y: +1, z: -2, id: BlockID.isp},
{x: 0, y: +1, z: -2, id: BlockID.isp},
{x: -1, y: +1, z: -2, id: BlockID.isp},
{x: -2, y: +1, z: -2, id: BlockID.isp},
{x: -2, y: +1, z: -1, id: BlockID.isp},
{x: -2, y: +1, z: 0, id: BlockID.isp},
{x: -2, y: +1, z: +1, id: BlockID.isp},
{x: -2, y: +1, z: +2, id: BlockID.isp},
{x: -1, y: +1, z: +2, id: BlockID.isp},
{x: 0, y: +1, z: +2, id: BlockID.isp},
{x: +1, y: +1, z: +2, id: BlockID.isp},
{x: +1, y: +1, z: +1, id: BlockID.isp},
{x: +1, y: +1, z: 0, id: BlockID.isp},
{x: +1, y: +1, z: -1, id: BlockID.isp},
{x: 0, y: +1, z: -1, id: BlockID.isp},
{x: -1, y: +1, z: -1, id: BlockID.isp},
{x: -1, y: +1, z: 0, id: BlockID.isp},
{x: -1, y: +1, z: +1, id: BlockID.isp},
{x: 0, y: +1, z: +1, id: BlockID.isp},
{x: 0, y: +1, z: 0, id: BlockID.isp},
{x: +5, y: +1, z: +5, id: BlockID.isp},
{x: +5, y: +1, z: +4, id: BlockID.isp},
{x: +5, y: +1, z: +3, id: BlockID.isp},
{x: +5, y: +1, z: +2, id: BlockID.isp},
{x: +5, y: +1, z: +1, id: BlockID.isp},
{x: +5, y: +1, z: 0, id: BlockID.isp},
{x: +5, y: +1, z: -1, id: BlockID.isp},
{x: +5, y: +1, z: -2, id: BlockID.isp},
{x: +5, y: +1, z: -3, id: BlockID.isp},
{x: +5, y: +1, z: -4, id: BlockID.isp},
{x: +5, y: +1, z: -5, id: BlockID.isp},
{x: +4, y: +1, z: -5, id: BlockID.isp},
{x: +3, y: +1, z: -5, id: BlockID.isp},
{x: +2, y: +1, z: -5, id: BlockID.isp},
{x: +1, y: +1, z: -5, id: BlockID.isp},
{x: 0, y: +1, z: -5, id: BlockID.isp},
{x: -1, y: +1, z: -5, id: BlockID.isp},
{x: -2, y: +1, z: -5, id: BlockID.isp},
{x: -3, y: +1, z: -5, id: BlockID.isp},
{x: -4, y: +1, z: -5, id: BlockID.isp},
{x: -5, y: +1, z: -5, id: BlockID.isp},
{x: -5, y: +1, z: -4, id: BlockID.isp},
{x: -5, y: +1, z: -3, id: BlockID.isp},
{x: -5, y: +1, z: -2, id: BlockID.isp},
{x: -5, y: +1, z: -1, id: BlockID.isp},
{x: -5, y: +1, z: 0, id: BlockID.isp},
{x: -5, y: +1, z: +1, id: BlockID.isp},
{x: -5, y: +1, z: +2, id: BlockID.isp},
{x: -5, y: +1, z: +3, id: BlockID.isp},
{x: -5, y: +1, z: +4, id: BlockID.isp},
{x: -5, y: +1, z: +5, id: BlockID.isp},
{x: -4, y: +1, z: +5, id: BlockID.isp},
{x: -3, y: +1, z: +5, id: BlockID.isp},
{x: -2, y: +1, z: +5, id: BlockID.isp},
{x: -1, y: +1, z: +5, id: BlockID.isp},
{x: 0, y: +1, z: +5, id: BlockID.isp},
{x: +1, y: +1, z: +5, id: BlockID.isp},
{x: +2, y: +1, z: +5, id: BlockID.isp},
{x: +4, y: +1, z: +5, id: BlockID.isp},
{x: +3, y: +1, z: +5, id: BlockID.isp},
{x: +6, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +4, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +3, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +2, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +1, id: BlockID.st_f_t5},
{x: +6, y: +1, z: 0, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -1, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -2, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -3, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -4, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +5, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +4, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +3, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +2, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +1, y: +1, z: -6, id: BlockID.st_f_t5},
{x: 0, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -1, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -2, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -3, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -4, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -5, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -4, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -3, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -2, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -1, id: BlockID.st_f_t5},
{x: -6, y: +1, z: 0, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +1, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +2, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +3, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +4, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +5, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -5, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -4, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -3, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -2, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -1, y: +1, z: +6, id: BlockID.st_f_t5},
{x: 0, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +1, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +2, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +3, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +4, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +5, y: +1, z: +6, id: BlockID.st_f_t5},
];




// file: EnvironmentalTech/creating/Solars/Structures/tier6.js

var t6_solar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +2, id: BlockID.null_modifier},
{x: -2, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.asp},
{x: +4, y: +1, z: +3, id: BlockID.asp},
{x: +4, y: +1, z: +2, id: BlockID.asp},
{x: +4, y: +1, z: +1, id: BlockID.asp},
{x: +4, y: +1, z: 0, id: BlockID.asp},
{x: +4, y: +1, z: -1, id: BlockID.asp},
{x: +4, y: +1, z: -2, id: BlockID.asp},
{x: +4, y: +1, z: -3, id: BlockID.asp},
{x: +4, y: +1, z: -4, id: BlockID.asp},
{x: +3, y: +1, z: -4, id: BlockID.asp},
{x: +2, y: +1, z: -4, id: BlockID.asp},
{x: +1, y: +1, z: -4, id: BlockID.asp},
{x: 0, y: +1, z: -4, id: BlockID.asp},
{x: -1, y: +1, z: -4, id: BlockID.asp},
{x: -2, y: +1, z: -4, id: BlockID.asp},
{x: -3, y: +1, z: -4, id: BlockID.asp},
{x: -4, y: +1, z: -4, id: BlockID.asp},
{x: -4, y: +1, z: -3, id: BlockID.asp},
{x: -4, y: +1, z: -2, id: BlockID.asp},
{x: -4, y: +1, z: -1, id: BlockID.asp},
{x: -4, y: +1, z: 0, id: BlockID.asp},
{x: -4, y: +1, z: +1, id: BlockID.asp},
{x: -4, y: +1, z: +2, id: BlockID.asp},
{x: -4, y: +1, z: +3, id: BlockID.asp},
{x: -4, y: +1, z: +4, id: BlockID.asp},
{x: -3, y: +1, z: +4, id: BlockID.asp},
{x: -2, y: +1, z: +4, id: BlockID.asp},
{x: -1, y: +1, z: +4, id: BlockID.asp},
{x: 0, y: +1, z: +4, id: BlockID.asp},
{x: +1, y: +1, z: +4, id: BlockID.asp},
{x: +2, y: +1, z: +4, id: BlockID.asp},
{x: +3, y: +1, z: +4, id: BlockID.asp},
{x: +3, y: +1, z: +3, id: BlockID.asp},
{x: +3, y: +1, z: +2, id: BlockID.asp},
{x: +3, y: +1, z: +1, id: BlockID.asp},
{x: +3, y: +1, z: 0, id: BlockID.asp},
{x: +3, y: +1, z: -1, id: BlockID.asp},
{x: +3, y: +1, z: -2, id: BlockID.asp},
{x: +3, y: +1, z: -3, id: BlockID.asp},
{x: +2, y: +1, z: -3, id: BlockID.asp},
{x: +1, y: +1, z: -3, id: BlockID.asp},
{x: 0, y: +1, z: -3, id: BlockID.asp},
{x: -1, y: +1, z: -3, id: BlockID.asp},
{x: -2, y: +1, z: -3, id: BlockID.asp},
{x: -3, y: +1, z: -3, id: BlockID.asp},
{x: -3, y: +1, z: -2, id: BlockID.asp},
{x: -3, y: +1, z: -1, id: BlockID.asp},
{x: -3, y: +1, z: 0, id: BlockID.asp},
{x: -3, y: +1, z: +1, id: BlockID.asp},
{x: -3, y: +1, z: +2, id: BlockID.asp},
{x: -3, y: +1, z: +3, id: BlockID.asp},
{x: -2, y: +1, z: +3, id: BlockID.asp},
{x: -1, y: +1, z: +3, id: BlockID.asp},
{x: 0, y: +1, z: +3, id: BlockID.asp},
{x: +1, y: +1, z: +3, id: BlockID.asp},
{x: +2, y: +1, z: +3, id: BlockID.asp},
{x: +2, y: +1, z: +2, id: BlockID.asp},
{x: +2, y: +1, z: +1, id: BlockID.asp},
{x: +2, y: +1, z: 0, id: BlockID.asp},
{x: +2, y: +1, z: -1, id: BlockID.asp},
{x: +2, y: +1, z: -2, id: BlockID.asp},
{x: +1, y: +1, z: -2, id: BlockID.asp},
{x: 0, y: +1, z: -2, id: BlockID.asp},
{x: -1, y: +1, z: -2, id: BlockID.asp},
{x: -2, y: +1, z: -2, id: BlockID.asp},
{x: -2, y: +1, z: -1, id: BlockID.asp},
{x: -2, y: +1, z: 0, id: BlockID.asp},
{x: -2, y: +1, z: +1, id: BlockID.asp},
{x: -2, y: +1, z: +2, id: BlockID.asp},
{x: -1, y: +1, z: +2, id: BlockID.asp},
{x: 0, y: +1, z: +2, id: BlockID.asp},
{x: +1, y: +1, z: +2, id: BlockID.asp},
{x: +1, y: +1, z: +1, id: BlockID.asp},
{x: +1, y: +1, z: 0, id: BlockID.asp},
{x: +1, y: +1, z: -1, id: BlockID.asp},
{x: 0, y: +1, z: -1, id: BlockID.asp},
{x: -1, y: +1, z: -1, id: BlockID.asp},
{x: -1, y: +1, z: 0, id: BlockID.asp},
{x: -1, y: +1, z: +1, id: BlockID.asp},
{x: 0, y: +1, z: +1, id: BlockID.asp},
{x: 0, y: +1, z: 0, id: BlockID.asp},
{x: +5, y: +1, z: +5, id: BlockID.asp},
{x: +5, y: +1, z: +4, id: BlockID.asp},
{x: +5, y: +1, z: +3, id: BlockID.asp},
{x: +5, y: +1, z: +2, id: BlockID.asp},
{x: +5, y: +1, z: +1, id: BlockID.asp},
{x: +5, y: +1, z: 0, id: BlockID.asp},
{x: +5, y: +1, z: -1, id: BlockID.asp},
{x: +5, y: +1, z: -2, id: BlockID.asp},
{x: +5, y: +1, z: -3, id: BlockID.asp},
{x: +5, y: +1, z: -4, id: BlockID.asp},
{x: +5, y: +1, z: -5, id: BlockID.asp},
{x: +4, y: +1, z: -5, id: BlockID.asp},
{x: +3, y: +1, z: -5, id: BlockID.asp},
{x: +2, y: +1, z: -5, id: BlockID.asp},
{x: +1, y: +1, z: -5, id: BlockID.asp},
{x: 0, y: +1, z: -5, id: BlockID.asp},
{x: -1, y: +1, z: -5, id: BlockID.asp},
{x: -2, y: +1, z: -5, id: BlockID.asp},
{x: -3, y: +1, z: -5, id: BlockID.asp},
{x: -4, y: +1, z: -5, id: BlockID.asp},
{x: -5, y: +1, z: -5, id: BlockID.asp},
{x: -5, y: +1, z: -4, id: BlockID.asp},
{x: -5, y: +1, z: -3, id: BlockID.asp},
{x: -5, y: +1, z: -2, id: BlockID.asp},
{x: -5, y: +1, z: -1, id: BlockID.asp},
{x: -5, y: +1, z: 0, id: BlockID.asp},
{x: -5, y: +1, z: +1, id: BlockID.asp},
{x: -5, y: +1, z: +2, id: BlockID.asp},
{x: -5, y: +1, z: +3, id: BlockID.asp},
{x: -5, y: +1, z: +4, id: BlockID.asp},
{x: -5, y: +1, z: +5, id: BlockID.asp},
{x: -4, y: +1, z: +5, id: BlockID.asp},
{x: -3, y: +1, z: +5, id: BlockID.asp},
{x: -2, y: +1, z: +5, id: BlockID.asp},
{x: -1, y: +1, z: +5, id: BlockID.asp},
{x: 0, y: +1, z: +5, id: BlockID.asp},
{x: +1, y: +1, z: +5, id: BlockID.asp},
{x: +2, y: +1, z: +5, id: BlockID.asp},
{x: +4, y: +1, z: +5, id: BlockID.asp},
{x: +3, y: +1, z: +5, id: BlockID.asp},
{x: +6, y: +1, z: +6, id: BlockID.asp},
{x: +6, y: +1, z: +5, id: BlockID.asp},
{x: +6, y: +1, z: +4, id: BlockID.asp},
{x: +6, y: +1, z: +3, id: BlockID.asp},
{x: +6, y: +1, z: +2, id: BlockID.asp},
{x: +6, y: +1, z: +1, id: BlockID.asp},
{x: +6, y: +1, z: 0, id: BlockID.asp},
{x: +6, y: +1, z: -1, id: BlockID.asp},
{x: +6, y: +1, z: -2, id: BlockID.asp},
{x: +6, y: +1, z: -3, id: BlockID.asp},
{x: +6, y: +1, z: -4, id: BlockID.asp},
{x: +6, y: +1, z: -5, id: BlockID.asp},
{x: +6, y: +1, z: -6, id: BlockID.asp},
{x: +5, y: +1, z: -6, id: BlockID.asp},
{x: +4, y: +1, z: -6, id: BlockID.asp},
{x: +3, y: +1, z: -6, id: BlockID.asp},
{x: +2, y: +1, z: -6, id: BlockID.asp},
{x: +1, y: +1, z: -6, id: BlockID.asp},
{x: 0, y: +1, z: -6, id: BlockID.asp},
{x: -1, y: +1, z: -6, id: BlockID.asp},
{x: -2, y: +1, z: -6, id: BlockID.asp},
{x: -3, y: +1, z: -6, id: BlockID.asp},
{x: -4, y: +1, z: -6, id: BlockID.asp},
{x: -5, y: +1, z: -6, id: BlockID.asp},
{x: -6, y: +1, z: -6, id: BlockID.asp},
{x: -6, y: +1, z: -5, id: BlockID.asp},
{x: -6, y: +1, z: -4, id: BlockID.asp},
{x: -6, y: +1, z: -3, id: BlockID.asp},
{x: -6, y: +1, z: -2, id: BlockID.asp},
{x: -6, y: +1, z: -1, id: BlockID.asp},
{x: -6, y: +1, z: 0, id: BlockID.asp},
{x: -6, y: +1, z: +1, id: BlockID.asp},
{x: -6, y: +1, z: +2, id: BlockID.asp},
{x: -6, y: +1, z: +3, id: BlockID.asp},
{x: -6, y: +1, z: +4, id: BlockID.asp},
{x: -6, y: +1, z: +5, id: BlockID.asp},
{x: -6, y: +1, z: +6, id: BlockID.asp},
{x: -5, y: +1, z: +6, id: BlockID.asp},
{x: -4, y: +1, z: +6, id: BlockID.asp},
{x: -3, y: +1, z: +6, id: BlockID.asp},
{x: -2, y: +1, z: +6, id: BlockID.asp},
{x: -1, y: +1, z: +6, id: BlockID.asp},
{x: +1, y: +1, z: +6, id: BlockID.asp},
{x: 0, y: +1, z: +6, id: BlockID.asp},
{x: +2, y: +1, z: +6, id: BlockID.asp},
{x: +3, y: +1, z: +6, id: BlockID.asp},
{x: +4, y: +1, z: +6, id: BlockID.asp},
{x: +5, y: +1, z: +6, id: BlockID.asp},
{x: +7, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +6, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +5, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +4, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +3, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +2, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +1, id: BlockID.st_f_t6},
{x: +7, y: +1, z: 0, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -1, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -2, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -3, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -4, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -5, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -6, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +6, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +5, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +4, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +3, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +2, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +1, y: +1, z: -7, id: BlockID.st_f_t6},
{x: 0, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -1, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -2, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -3, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -4, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -5, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -6, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -6, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -5, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -4, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -3, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -2, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -1, id: BlockID.st_f_t6},
{x: -7, y: +1, z: 0, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +1, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +2, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +3, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +4, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +5, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +6, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -6, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -5, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -4, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -2, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -3, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -1, y: +1, z: +7, id: BlockID.st_f_t6},
{x: 0, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +1, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +2, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +3, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +4, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +5, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +6, y: +1, z: +7, id: BlockID.st_f_t6},
];




// file: EnvironmentalTech/creating/Solars/tier1.js

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




// file: EnvironmentalTech/creating/Solars/tier2.js

Block.setBlockShape(BlockID.esp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var erodium_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Erodium Solar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.sact2, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return erodium_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t2_solar);
		if(structure && World.getLightLevel(this.x, this.y+2, this.z) == 15){
			this.data.energy = 3050;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 3050, 3050, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 3050 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 3050;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(3050);
			this.data.energy = 0;
		}
	}
});




// file: EnvironmentalTech/creating/Solars/tier3.js

Block.setBlockShape(BlockID.ksp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var kyronite_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Kyronite Solar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.sact3, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return kyronite_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t3_solar);
		if(structure && World.getLightLevel(this.x, this.y+15, this.z) == 15){
			this.data.energy = 12005;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 12005, 12005, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 12005 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 12005;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(12005);
			this.data.energy = 0;
		}
	}
});




// file: EnvironmentalTech/creating/Solars/tier4.js

Block.setBlockShape(BlockID.psp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var pladium_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Pladium Solar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.sact4, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return pladium_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t4_solar);
		if(structure &&	World.getLightLevel(this.x, this.y+15, this.z) == 15){
			this.data.energy = 39771;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 39771, 39771, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 39771 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 39771;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(39771);
			this.data.energy = 0;
		}
	}
});




// file: EnvironmentalTech/creating/Solars/tier5.js

Block.setBlockShape(BlockID.isp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var ionite_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ionite Solar Panel"}},
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
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 660, y: 204, width: 300, height: 39, text: "Generating:"},
		"slotEnergy": {type: "slot", x: 600, y: 130, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 0);}},
		"sun": {type: "image", x: 608, y: 194, bitmap: "sun_off", scale: GUI_SCALE}
	}
});

MachineRegistry.registerPrototype(BlockID.sact5, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return ionite_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t5_solar);
		if(structure && World.getLightLevel(this.x, this.y+2, this.z) == 15){
			this.data.energy = 118943;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 118943, 118943, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 118943 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 118943;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(118943);
			this.data.energy = 0;
		}
	}
});




// file: EnvironmentalTech/creating/Solars/tier6.js

Block.setBlockShape(BlockID.asp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
var aethium_solar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Aethium Solar Panel"}},
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
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 660, y: 204, width: 300, height: 39, text: "Generating:"},
		"slotEnergy": {type: "slot", x: 600, y: 130, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 0);}},
		"sun": {type: "image", x: 608, y: 194, bitmap: "sun_off", scale: GUI_SCALE}
	}
});

MachineRegistry.registerPrototype(BlockID.sact6, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return aethium_solar;
	},

	tick: function(){
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let structure = ValkyrieLib.getStructure(x, y, z, t6_solar);
		if(structure && World.getLightLevel(this.x, this.y+2, this.z) == 15){
			this.data.energy = 332254;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 332254, 332254, 0);
			if(content){
				content.elements["sun"].bitmap = "sun_on";
				this.container.setText("textGen", "Generating: " + 332254 + " EU/t");
			}
		}
		else if(content){
			content.elements["sun"].bitmap = "sun_off";
			this.container.setText("textGen", "Generating: " + 0 + " EU/t");
		}
	},
	getEnergyStorage: function(){
		return 332254;
	},
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(332254);
			this.data.energy = 0;
		}
	}
});




// file: EnvironmentalTech/creating/Lightning/Models/lightning_rods.js

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(0/16, 0.1/16, 0/16, 16/16, 15.9/16, 16/16, 20, 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 16/16, 13/16, 42, 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.i_l_r, 0, render);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(5/16, 0/16, 5/16, 11/16, 16/16, 11/16, 42, 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.l_r, 0, render);
Block.setBlockShape(BlockID.l_r, {x: 5/16, y: 0/16, z: 5/16}, {x: 11/16, y: 16/16, z: 11/16});




// file: EnvironmentalTech/creating/Lightning/Gui.js

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




// file: EnvironmentalTech/creating/Lightning/lightning_config.js

var Lightning_config = {
	tier1: {
		min: __config__.access("lightning_t1.min"),
		max: __config__.access("lightning_t1.max"),
		y: 7
	},
	tier2: {
		min: __config__.access("lightning_t2.min"),
		max: __config__.access("lightning_t2.max"),
		y: 8
	},
	tier3: {
		min: __config__.access("lightning_t3.min"),
		max: __config__.access("lightning_t3.max"),
		y: 11
	},
	tier4: {
		min: __config__.access("lightning_t4.min"),
		max: __config__.access("lightning_t4.max"),
		y: 13
	},
	tier5: {
		min: __config__.access("lightning_t5.min"),
		max: __config__.access("lightning_t5.max"),
		y: 18
	},
	tier6: {
		min: __config__.access("lightning_t6.min"),
		max: __config__.access("lightning_t6.max"),
		y: 23
	}
}




// file: EnvironmentalTech/creating/Lightning/Structures.js

var lightning1 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t1},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t1},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t1},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t1},
/* insulated rod */
{x: 0, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: 0, id: BlockID.i_l_r},
/* rod */
{x: 0, y: +4, z: 0, id: BlockID.l_r},
{x: 0, y: +5, z: 0, id: BlockID.l_r},
{x: 0, y: +6, z: 0, id: BlockID.l_r},
];

var lightning2 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t2},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t2},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t2},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t2},
/* insulated rod */
{x: 0, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: 0, id: BlockID.i_l_r},
{x: 0, y: +4, z: 0, id: BlockID.i_l_r},
/* rod */
{x: 0, y: +5, z: 0, id: BlockID.l_r},
{x: 0, y: +6, z: 0, id: BlockID.l_r},
{x: 0, y: +7, z: 0, id: BlockID.l_r},
{x: 0, y: +8, z: 0, id: BlockID.l_r},
];

var lightning3 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t3},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t3},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t3},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t3},
/* insulated rod */
{x: 0, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: 0, id: BlockID.i_l_r},
{x: 0, y: +4, z: 0, id: BlockID.i_l_r},
{x: 0, y: +5, z: 0, id: BlockID.i_l_r},
/* rod */
{x: 0, y: +6, z: 0, id: BlockID.l_r},
{x: 0, y: +7, z: 0, id: BlockID.l_r},
{x: 0, y: +8, z: 0, id: BlockID.l_r},
{x: 0, y: +9, z: 0, id: BlockID.l_r},
{x: 0, y: +10, z: 0, id: BlockID.l_r},
];

var lightning4 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t4},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t4},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t4},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t4},

{x: +1, y: 0, z: +1, id: BlockID.st_f_t4},
{x: -1, y: 0, z: -1, id: BlockID.st_f_t4},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t4},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t4},
/* insulated rod */
//4 sides
{x: +1, y: +1, z: 0, id: BlockID.i_l_r},
{x: -1, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +1, z: -1, id: BlockID.i_l_r},
{x: 0, y: +1, z: +1, id: BlockID.i_l_r},

{x: +1, y: +2, z: 0, id: BlockID.i_l_r},
{x: -1, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: -1, id: BlockID.i_l_r},
{x: 0, y: +2, z: +1, id: BlockID.i_l_r},

{x: +1, y: +3, z: 0, id: BlockID.i_l_r},
{x: -1, y: +3, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: -1, id: BlockID.i_l_r},
{x: 0, y: +3, z: +1, id: BlockID.i_l_r},

/* medium */
{x: +1, y: +4, z: 0, id: BlockID.st_f_t4},
{x: -1, y: +4, z: 0, id: BlockID.st_f_t4},
{x: 0, y: +4, z: -1, id: BlockID.st_f_t4},
{x: 0, y: +4, z: +1, id: BlockID.st_f_t4},

/* insulated rod */
//normal
{x: 0, y: +5, z: 0, id: BlockID.i_l_r},
{x: 0, y: +6, z: 0, id: BlockID.i_l_r},
{x: 0, y: +7, z: 0, id: BlockID.i_l_r},
{x: 0, y: +8, z: 0, id: BlockID.i_l_r},

/* rod */
{x: 0, y: +9, z: 0, id: BlockID.l_r},
{x: 0, y: +10, z: 0, id: BlockID.l_r},
{x: 0, y: +11, z: 0, id: BlockID.l_r},
{x: 0, y: +12, z: 0, id: BlockID.l_r},
];

var lightning5 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t5},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t5},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t5},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t5},

{x: +1, y: 0, z: +1, id: BlockID.st_f_t5},
{x: -1, y: 0, z: -1, id: BlockID.st_f_t5},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t5},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t5},
/* insulated rod */
//4 sides
{x: +1, y: +1, z: 0, id: BlockID.i_l_r},
{x: -1, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +1, z: -1, id: BlockID.i_l_r},
{x: 0, y: +1, z: +1, id: BlockID.i_l_r},

{x: +1, y: +2, z: 0, id: BlockID.i_l_r},
{x: -1, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: -1, id: BlockID.i_l_r},
{x: 0, y: +2, z: +1, id: BlockID.i_l_r},

{x: +1, y: +3, z: 0, id: BlockID.i_l_r},
{x: -1, y: +3, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: -1, id: BlockID.i_l_r},
{x: 0, y: +3, z: +1, id: BlockID.i_l_r},

{x: +1, y: +4, z: 0, id: BlockID.i_l_r},
{x: -1, y: +4, z: 0, id: BlockID.i_l_r},
{x: 0, y: +4, z: -1, id: BlockID.i_l_r},
{x: 0, y: +4, z: +1, id: BlockID.i_l_r},
/* medium */
{x: +1, y: +5, z: 0, id: BlockID.st_f_t5},
{x: -1, y: +5, z: 0, id: BlockID.st_f_t5},
{x: 0, y: +5, z: -1, id: BlockID.st_f_t5},
{x: 0, y: +5, z: +1, id: BlockID.st_f_t5},

/* insulated rod */
//normal
{x: 0, y: +6, z: 0, id: BlockID.i_l_r},
{x: 0, y: +7, z: 0, id: BlockID.i_l_r},
{x: 0, y: +8, z: 0, id: BlockID.i_l_r},
{x: 0, y: +9, z: 0, id: BlockID.i_l_r},
{x: 0, y: +10, z: 0, id: BlockID.i_l_r},
{x: 0, y: +11, z: 0, id: BlockID.i_l_r},
/* rod */
{x: 0, y: +12, z: 0, id: BlockID.l_r},
{x: 0, y: +13, z: 0, id: BlockID.l_r},
{x: 0, y: +14, z: 0, id: BlockID.l_r},
{x: 0, y: +15, z: 0, id: BlockID.l_r},
{x: 0, y: +16, z: 0, id: BlockID.l_r},
{x: 0, y: +17, z: 0, id: BlockID.l_r},
];

var lightning6 = [
/* bottom */
{x: +1, y: 0, z: 0, id: BlockID.st_f_t6},
{x: -1, y: 0, z: 0, id: BlockID.st_f_t6},
{x: 0, y: 0, z: -1, id: BlockID.st_f_t6},
{x: 0, y: 0, z: +1, id: BlockID.st_f_t6},

{x: +1, y: 0, z: +1, id: BlockID.st_f_t6},
{x: -1, y: 0, z: -1, id: BlockID.st_f_t6},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t6},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t6},
/* insulated rod */
//4 sides
{x: +1, y: +1, z: 0, id: BlockID.i_l_r},
{x: -1, y: +1, z: 0, id: BlockID.i_l_r},
{x: 0, y: +1, z: -1, id: BlockID.i_l_r},
{x: 0, y: +1, z: +1, id: BlockID.i_l_r},

{x: +1, y: +2, z: 0, id: BlockID.i_l_r},
{x: -1, y: +2, z: 0, id: BlockID.i_l_r},
{x: 0, y: +2, z: -1, id: BlockID.i_l_r},
{x: 0, y: +2, z: +1, id: BlockID.i_l_r},

{x: +1, y: +3, z: 0, id: BlockID.i_l_r},
{x: -1, y: +3, z: 0, id: BlockID.i_l_r},
{x: 0, y: +3, z: -1, id: BlockID.i_l_r},
{x: 0, y: +3, z: +1, id: BlockID.i_l_r},

{x: +1, y: +4, z: 0, id: BlockID.i_l_r},
{x: -1, y: +4, z: 0, id: BlockID.i_l_r},
{x: 0, y: +4, z: -1, id: BlockID.i_l_r},
{x: 0, y: +4, z: +1, id: BlockID.i_l_r},

{x: +1, y: +5, z: 0, id: BlockID.i_l_r},
{x: -1, y: +5, z: 0, id: BlockID.i_l_r},
{x: 0, y: +5, z: -1, id: BlockID.i_l_r},
{x: 0, y: +5, z: +1, id: BlockID.i_l_r},
/* medium */
{x: +1, y: +6, z: 0, id: BlockID.st_f_t6},
{x: -1, y: +6, z: 0, id: BlockID.st_f_t6},
{x: 0, y: +6, z: -1, id: BlockID.st_f_t6},
{x: 0, y: +6, z: +1, id: BlockID.st_f_t6},

/* insulated rod */
//normal
{x: 0, y: +7, z: 0, id: BlockID.i_l_r},
{x: 0, y: +8, z: 0, id: BlockID.i_l_r},
{x: 0, y: +9, z: 0, id: BlockID.i_l_r},
{x: 0, y: +10, z: 0, id: BlockID.i_l_r},
{x: 0, y: +11, z: 0, id: BlockID.i_l_r},
{x: 0, y: +12, z: 0, id: BlockID.i_l_r},
{x: 0, y: +13, z: 0, id: BlockID.i_l_r},
{x: 0, y: +14, z: 0, id: BlockID.l_r},
/* rod */
{x: 0, y: +15, z: 0, id: BlockID.l_r},
{x: 0, y: +16, z: 0, id: BlockID.l_r},
{x: 0, y: +17, z: 0, id: BlockID.l_r},
{x: 0, y: +18, z: 0, id: BlockID.l_r},
{x: 0, y: +19, z: 0, id: BlockID.l_r},
{x: 0, y: +20, z: 0, id: BlockID.l_r},
{x: 0, y: +21, z: 0, id: BlockID.l_r},
{x: 0, y: +22, z: 0, id: BlockID.l_r},
];




// file: EnvironmentalTech/creating/Lightning/tier1.js

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




// file: EnvironmentalTech/creating/Lightning/tier2.js

MachineRegistry.registerPrototype(BlockID.lct2, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier2.min,
		esmax: Lightning_config.tier2.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier2.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning2);
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




// file: EnvironmentalTech/creating/Lightning/tier3.js

MachineRegistry.registerPrototype(BlockID.lct3, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier3.min,
		esmax: Lightning_config.tier3.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier3.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning3);
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




// file: EnvironmentalTech/creating/Lightning/tier4.js

MachineRegistry.registerPrototype(BlockID.lct4, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier4.min,
		esmax: Lightning_config.tier4.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier4.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning4);
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




// file: EnvironmentalTech/creating/Lightning/tier5.js

MachineRegistry.registerPrototype(BlockID.lct5, {
	defaultValues: {
		energy: 0,
		esmin: Lightning_config.tier5.min,
		esmax: Lightning_config.tier5.max,
		timer: 0
	},
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return lightning_gui;
	},
	tick: function(){
		let bolt = Lightning_config.tier5.y;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		var structure = ValkyrieLib.getStructure(x, y, z, lightning5);
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




// file: EnvironmentalTech/creating/Lightning/tier6.js

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




// file: EnvironmentalTech/creating/Void_Miners/Randoms/get_random.js

function get_random(type){
	//сумма всех шансов
    var total = 0;
    //цикл для того чтобы прибавить шанс к остальным
	for (var i in type){
		//прибавление к сумме текущий шанс
		total += type[i].chance;
	}
	//задание числа рандом
	var random = Math.random() * total * 1.35;
	//шанс который сейчас
	var current = 0;
	//цикл для шансов
	for (var i in type){
		//переменная дроп для проверки текущего шанса с шансом который выпадет
		var drop = type[i];
		//0 меньше рандом и если 0+шанс дропа больше рандома
		if (current < random && current + drop.chance > random){
			//вернуть дроп
			return drop;
		}
		//шанс прибавить к шансу который сейчас
		current += drop.chance;
    //завершить цикл
	}
	//если выпадет null
	return {id: ItemID.litherite};
}




// file: EnvironmentalTech/creating/Void_Miners/Randoms/botanic/random.js

//список рандома
var vbm_random_clear = [
  {chance: 3.53, id: 17, meta: 0},
  {chance: 3.53, id: 17, meta: 1},
  {chance: 3.53, id: 17, meta: 2},
  {chance: 3.53, id: 17, meta: 3},
  {chance: 3.53, id: 162, meta: 0},
  {chance: 3.53, id: 162, meta: 1},
  {chance: 0.59, id: 6, meta: 0},
  {chance: 0.59, id: 6, meta: 1},
  {chance: 0.59, id: 6, meta: 2},
  {chance: 0.59, id: 6, meta: 3},
  {chance: 0.59, id: 6, meta: 4},
  {chance: 0.59, id: 6, meta: 5},
  {chance: 7.06, id: 18, meta: 0},
  {chance: 7.06, id: 18, meta: 1},
  {chance: 7.06, id: 18, meta: 2},
  {chance: 7.06, id: 18, meta: 3},
  {chance: 7.06, id: 161, meta: 0},
  {chance: 7.06, id: 161, meta: 1},
  {chance: 1.18, id: 37, meta: 0},
  {chance: 1.18, id: 38, meta: 0},
  {chance: 1.18, id: 38, meta: 1},
  {chance: 1.18, id: 38, meta: 2},
  {chance: 1.18, id: 38, meta: 3},
  {chance: 1.18, id: 38, meta: 4},
  {chance: 1.18, id: 38, meta: 5},
  {chance: 1.18, id: 38, meta: 6},
  {chance: 1.18, id: 38, meta: 7},
  {chance: 1.18, id: 38, meta: 8},
  {chance: 1.18, id: 175, meta: 0},
  {chance: 1.18, id: 175, meta: 1},
  {chance: 1.18, id: 175, meta: 4},
  {chance: 1.18, id: 175, meta: 5},
  {chance: 0.88, id: 391, meta: 0},
  {chance: 0.88, id: 392, meta: 0},
  {chance: 0.29, id: 394, meta: 0},
  {chance: 0.88, id: 434, meta: 0},
  {chance: 0.44, id: 86, meta: 0},
  {chance: 0.15, id: 91, meta: 0},
  {chance: 0.29, id: 103, meta: 0},
  {chance: 0.59, id: 360, meta: 0},
  {chance: 0.88, id: 260, meta: 0},
  {chance: 1.03, id: 296, meta: 0},
  {chance: 0.88, id: 338, meta: 0},
  {chance: 0.59, id: 40, meta: 0},
  {chance: 0.59, id: 41, meta: 0},
  {chance: 0.15, id: 200, meta: 0},
  {chance: 0.44, id: 295, meta: 0},
  {chance: 0.29, id: 361, meta: 0},
  {chance: 0.44, id: 362, meta: 0},
  {chance: 0.88, id: 81, meta: 0},
  {chance: 0.44, id: 435, meta: 0},
  {chance: 0.44, id: 372, meta: 0},

  {chance: 0.44, id: 31, meta: 1},
  {chance: 0.44, id: 31, meta: 2},

  {chance: 0.44, id: 32, meta: 0},

  {chance: 0.44, id: 106, meta: 0},
  {chance: 0.44, id: 111, meta: 0},
  {chance: 1.18, id: 175, meta: 2},
  {chance: 1.18, id: 175, meta: 3},
];
var vbm_random_green= [
  {chance: 3.53, id: 17, meta: 0},
  {chance: 3.53, id: 17, meta: 1},
  {chance: 3.53, id: 17, meta: 2},
  {chance: 3.53, id: 17, meta: 3},
  {chance: 3.53, id: 162, meta: 0},
  {chance: 3.53, id: 162, meta: 1},
  {chance: 0.59, id: 6, meta: 0},
  {chance: 0.59, id: 6, meta: 1},
  {chance: 0.59, id: 6, meta: 2},
  {chance: 0.59, id: 6, meta: 3},
  {chance: 0.59, id: 6, meta: 4},
  {chance: 0.59, id: 6, meta: 5},
  {chance: 7.06, id: 18, meta: 0},
  {chance: 7.06, id: 18, meta: 1},
  {chance: 7.06, id: 18, meta: 2},
  {chance: 7.06, id: 18, meta: 3},
  {chance: 7.06, id: 161, meta: 0},
  {chance: 7.06, id: 161, meta: 1},
  {chance: 1.18, id: 37, meta: 0},
  {chance: 1.18, id: 38, meta: 0},
  {chance: 1.18, id: 38, meta: 1},
  {chance: 1.18, id: 38, meta: 2},
  {chance: 1.18, id: 38, meta: 3},
  {chance: 1.18, id: 38, meta: 4},
  {chance: 1.18, id: 38, meta: 5},
  {chance: 1.18, id: 38, meta: 6},
  {chance: 1.18, id: 38, meta: 7},
  {chance: 1.18, id: 38, meta: 8},
  {chance: 1.18, id: 175, meta: 0},
  {chance: 1.18, id: 175, meta: 1},
  {chance: 1.18, id: 175, meta: 4},
  {chance: 1.18, id: 175, meta: 5},
  {chance: 0.88, id: 391, meta: 0},
  {chance: 0.88, id: 392, meta: 0},
  {chance: 0.29, id: 394, meta: 0},
  {chance: 0.88, id: 434, meta: 0},
  {chance: 0.44, id: 86, meta: 0},
  {chance: 0.15, id: 91, meta: 0},
  {chance: 0.29, id: 103, meta: 0},
  {chance: 0.59, id: 360, meta: 0},
  {chance: 0.88, id: 260, meta: 0},
  {chance: 1.03, id: 296, meta: 0},
  {chance: 0.88, id: 338, meta: 0},
  {chance: 0.59, id: 40, meta: 0},
  {chance: 0.59, id: 41, meta: 0},
  {chance: 0.15, id: 200, meta: 0},
  {chance: 0.44, id: 295, meta: 0},
  {chance: 0.29, id: 361, meta: 0},
  {chance: 0.44, id: 362, meta: 0},
  {chance: 0.88, id: 81, meta: 0},
  {chance: 0.44, id: 435, meta: 0},
  {chance: 0.44, id: 372, meta: 0},

  {chance: 4.98, id: 31, meta: 1},
  {chance: 4.98, id: 31, meta: 2},

  {chance: 0.44, id: 32, meta: 0},

  {chance: 4.98, id: 106, meta: 0},
  {chance: 4.98, id: 111, meta: 0},
  {chance: 5.51, id: 175, meta: 2},
  {chance: 5.51, id: 175, meta: 3},
];
var vbm_random_brown= [
  {chance: 3.53, id: 17, meta: 0},
  {chance: 3.53, id: 17, meta: 1},
  {chance: 3.53, id: 17, meta: 2},
  {chance: 3.53, id: 17, meta: 3},
  {chance: 3.53, id: 162, meta: 0},
  {chance: 3.53, id: 162, meta: 1},
  {chance: 0.59, id: 6, meta: 0},
  {chance: 0.59, id: 6, meta: 1},
  {chance: 0.59, id: 6, meta: 2},
  {chance: 0.59, id: 6, meta: 3},
  {chance: 0.59, id: 6, meta: 4},
  {chance: 0.59, id: 6, meta: 5},
  {chance: 7.06, id: 18, meta: 0},
  {chance: 7.06, id: 18, meta: 1},
  {chance: 7.06, id: 18, meta: 2},
  {chance: 7.06, id: 18, meta: 3},
  {chance: 7.06, id: 161, meta: 0},
  {chance: 7.06, id: 161, meta: 1},
  {chance: 1.18, id: 37, meta: 0},
  {chance: 1.18, id: 38, meta: 0},
  {chance: 1.18, id: 38, meta: 1},
  {chance: 1.18, id: 38, meta: 2},
  {chance: 1.18, id: 38, meta: 3},
  {chance: 1.18, id: 38, meta: 4},
  {chance: 1.18, id: 38, meta: 5},
  {chance: 1.18, id: 38, meta: 6},
  {chance: 1.18, id: 38, meta: 7},
  {chance: 1.18, id: 38, meta: 8},
  {chance: 1.18, id: 175, meta: 0},
  {chance: 1.18, id: 175, meta: 1},
  {chance: 1.18, id: 175, meta: 4},
  {chance: 1.18, id: 175, meta: 5},
  {chance: 0.88, id: 391, meta: 0},
  {chance: 0.88, id: 392, meta: 0},
  {chance: 0.29, id: 394, meta: 0},
  {chance: 0.88, id: 434, meta: 0},
  {chance: 0.44, id: 86, meta: 0},
  {chance: 0.15, id: 91, meta: 0},
  {chance: 0.29, id: 103, meta: 0},
  {chance: 0.59, id: 360, meta: 0},
  {chance: 0.88, id: 260, meta: 0},
  {chance: 1.03, id: 296, meta: 0},
  {chance: 0.88, id: 338, meta: 0},
  {chance: 0.59, id: 40, meta: 0},
  {chance: 0.59, id: 41, meta: 0},
  {chance: 0.15, id: 200, meta: 0},
  {chance: 0.44, id: 295, meta: 0},
  {chance: 0.29, id: 361, meta: 0},
  {chance: 0.44, id: 362, meta: 0},
  {chance: 0.88, id: 81, meta: 0},
  {chance: 0.44, id: 435, meta: 0},
  {chance: 0.44, id: 372, meta: 0},

  {chance: 0.44, id: 31, meta: 1},
  {chance: 0.44, id: 31, meta: 2},

  {chance: 6.49, id: 32, meta: 0},

  {chance: 0.44, id: 106, meta: 0},
  {chance: 0.44, id: 111, meta: 0},
  {chance: 1.18, id: 175, meta: 2},
  {chance: 1.18, id: 175, meta: 3},
];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier1.js

//список рандома
var t1_vom_random_clear = [
  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
  {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_black = [
  {chance: 33.51, id: 16},/* угольная руда */
  {chance: 20.05, id: ItemID.lonsdaleite},

  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
];
var t1_vom_random_white= [
  {chance: 30.13, id: 15},/* железная руда */
  {chance: 27.56, id: 153},/* кварцевая руда */

  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
  {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_red= [
  {chance: 33.69, id: 73},/* редстоуновая руда */

  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
  {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_blue= [
  {chance: 30.79, id: 21},/* лазуритовая руда */

  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
  {chance: 0.09, id: ItemID.lonsdaleite},
  {chance: 0.09, id: ItemID.lonsdaleite},

];
var t1_vom_random_yellow= [
  {chance: 24.2, id: 14},/* золотая руда */
  {chance: 23.16, id: 89},/* светокамень */

  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 4.5, id: ItemID.litherite},
  {chance: 3.38, id: ItemID.erodium},
  {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_cyan= [
  {chance: 28.68, id: 56},/* алмазная руда */

    {chance: 22.52, id: 16},/* угольная руда */
    {chance: 16.89, id: 15},/* железная руда */
    {chance: 12.61, id: 153},/* кварцевая руда */
    {chance: 11.6, id: 73},/* редстоуновая руда */
    {chance: 7.72, id: 21},/* лазуритовая руда */
    {chance: 7.0, id: 14},/* золотая руда */
    {chance: 3.51, id: 129},/* эмеральдовая руда */
    {chance: 5.27, id: 89},/* светокамень */
    {chance: 4.5, id: ItemID.litherite},
    {chance: 3.38, id: ItemID.erodium},
    {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_lime= [
  {chance: 27.63, id: 129},/* эмеральдовая руда */
    {chance: 22.52, id: 16},/* угольная руда */
    {chance: 16.89, id: 15},/* железная руда */
    {chance: 12.61, id: 153},/* кварцевая руда */
    {chance: 11.6, id: 73},/* редстоуновая руда */
    {chance: 7.72, id: 21},/* лазуритовая руда */
    {chance: 7.0, id: 14},/* золотая руда */
    {chance: 4.91, id: 56},/* алмазная руда */
    {chance: 5.27, id: 89},/* светокамень */
    {chance: 4.5, id: ItemID.litherite},
    {chance: 3.38, id: ItemID.erodium},
    {chance: 0.09, id: ItemID.lonsdaleite},
];
var t1_vom_random_crystal= [
  {chance: 22.7, id: ItemID.litherite},
  {chance: 22.02, id: ItemID.erodium},

  {chance: 22.52, id: 16},/* угольная руда */
  {chance: 16.89, id: 15},/* железная руда */
  {chance: 12.61, id: 153},/* кварцевая руда */
  {chance: 11.6, id: 73},/* редстоуновая руда */
  {chance: 7.72, id: 21},/* лазуритовая руда */
  {chance: 7.0, id: 14},/* золотая руда */
  {chance: 4.91, id: 56},/* алмазная руда */
  {chance: 3.51, id: 129},/* эмеральдовая руда */
  {chance: 5.27, id: 89},/* светокамень */
  {chance: 0.09, id: ItemID.lonsdaleite},

];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier2.js

//список рандома
var t2_vom_random_clear = [
  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_black = [
  {chance: 33.14, id: 16},/* угольная руда */
  {chance: 20.09, id: ItemID.lonsdaleite},

  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
];
var t2_vom_random_white= [
  {chance: 29.85, id: 15},/* железная руда */
  {chance: 27.35, id: 153},/* кварцевая руда */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_red= [
  {chance: 33.44, id: 73},/* редстоуновая руда */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_blue= [
  {chance: 30.62, id: 21},/* лазуритовая руда */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_yellow= [
  {chance: 24.08, id: 14},/* золотая руда */
  {chance: 23.06, id: 89},/* светокамень */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_cyan= [
  {chance: 28.56, id: 56},/* алмазная руда */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_lime= [
  {chance: 27.54, id: 129},/* эмеральдовая руда */

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 4.38, id: ItemID.litherite},
  {chance: 3.29, id: ItemID.erodium},
  {chance: 2.63, id: ItemID.kyronite},
  {chance: 0.18, id: ItemID.lonsdaleite},
];
var t2_vom_random_crystal= [
  {chance: 18.85, id: ItemID.litherite},
  {chance: 18.3, id: ItemID.erodium},
  {chance: 17.97, id: ItemID.kyronite},

  {chance: 21.91, id: 16},/* угольная руда */
  {chance: 16.43, id: 15},/* железная руда */
  {chance: 12.27, id: 153},/* кварцевая руда */
  {chance: 11.28, id: 73},/* редстоуновая руда */
  {chance: 7.51, id: 21},/* лазуритовая руда */
  {chance: 6.81, id: 14},/* золотая руда */
  {chance: 4.78, id: 56},/* алмазная руда */
  {chance: 3.42, id: 129},/* эмеральдовая руда */
  {chance: 5.13, id: 89},/* светокамень */
  {chance: 0.18, id: ItemID.lonsdaleite},
];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier3.js

//список рандома
var t3_vom_random_clear = [
  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_black = [
  {chance: 31.83, id: 16},/* угольная руда */
  {chance: 18.34, id: ItemID.lonsdaleite},

  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
];
var t3_vom_random_white= [
  {chance: 28.42, id: 15},/* железная руда */
  {chance: 25.82, id: 153},/* кварцевая руда */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_red= [
  {chance: 30.81, id: 73},/* редстоуновая руда */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_blue= [
  {chance: 27.93, id: 21},/* лазуритовая руда */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_yellow= [
  {chance: 22.42, id: 14},/* золотая руда */
  {chance: 21.37, id: 89},/* светокамень */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_cyan= [
  {chance: 25.85, id: 56},/* алмазная руда */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_lime= [
  {chance: 24.81, id: 129},/* эмеральдовая руда */

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 4.29, id: ItemID.litherite},
  {chance: 3.22, id: ItemID.erodium},
  {chance: 2.58, id: ItemID.kyronite},
  {chance: 1.93, id: ItemID.pladium},
  {chance: 0.26, id: ItemID.lonsdaleite},
];
var t3_vom_random_crystal= [
  {chance: 15.33, id: ItemID.litherite},
  {chance: 14.83, id: ItemID.erodium},
  {chance: 14.53, id: ItemID.kyronite},
  {chance: 14.23, id: ItemID.pladium},

  {chance: 21.46, id: 16},/* угольная руда */
  {chance: 16.1, id: 15},/* железная руда */
  {chance: 12.02, id: 153},/* кварцевая руда */
  {chance: 11.05, id: 73},/* редстоуновая руда */
  {chance: 7.36, id: 21},/* лазуритовая руда */
  {chance: 6.68, id: 14},/* золотая руда */
  {chance: 4.68, id: 56},/* алмазная руда */
  {chance: 3.35, id: 129},/* эмеральдовая руда */
  {chance: 5.02, id: 89},/* светокамень */
  {chance: 0.26, id: ItemID.lonsdaleite},
];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier4.js

//список рандома
var t4_vom_random_clear = [
  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_black = [
  {chance: 31.65, id: 16},/* угольная руда */
  {chance: 18.39, id: ItemID.lonsdaleite},

  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
];
var t4_vom_random_white = [
  {chance: 28.28, id: 15},/* железная руда */
  {chance: 25.72, id: 153},/* кварцевая руда */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_red = [
  {chance: 30.69, id: 73},/* редстоуновая руда */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_blue = [
  {chance: 27.85, id: 21},/* лазуритовая руда */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_yellow = [
  {chance: 22.36, id: 14},/* золотая руда */
  {chance: 21.32, id: 89},/* светокамень */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_cyan = [
  {chance: 25.79, id: 56},/* алмазная руда */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_lime = [
  {chance: 24.77, id: 129},/* эмеральдовая руда */

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 4.23, id: ItemID.litherite},
  {chance: 3.18, id: ItemID.erodium},
  {chance: 2.54, id: ItemID.kyronite},
  {chance: 1.91, id: ItemID.pladium},
  {chance: 1.27, id: ItemID.ionite},
  {chance: 0.34, id: ItemID.lonsdaleite},
];
var t4_vom_random_crystal = [
  {chance: 13.5, id: ItemID.litherite},
  {chance: 13.07, id: ItemID.erodium},
  {chance: 12.81, id: ItemID.kyronite},
  {chance: 12.54, id: ItemID.pladium},
  {chance: 12.28, id: ItemID.ionite},

  {chance: 21.17, id: 16},/* угольная руда */
  {chance: 15.88, id: 15},/* железная руда */
  {chance: 11.86, id: 153},/* кварцевая руда */
  {chance: 10.9, id: 73},/* редстоуновая руда */
  {chance: 7.26, id: 21},/* лазуритовая руда */
  {chance: 6.58, id: 14},/* золотая руда */
  {chance: 4.62, id: 56},/* алмазная руда */
  {chance: 3.3, id: 129},/* эмеральдовая руда */
  {chance: 4.95, id: 89},/* светокамень */
  {chance: 0.34, id: ItemID.lonsdaleite},
];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier5.js

//список рандома
var t5_vom_random_clear = [
  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_black = [
  {chance: 30.67, id: 16},/* угольная руда */
  {chance: 16.94, id: ItemID.lonsdaleite},

  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
];
var t5_vom_random_white= [
  {chance: 27.17, id: 15},/* железная руда */
  {chance: 24.51, id: 153},/* кварцевая руда */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_red= [
  {chance: 28.65, id: 73},/* редстоуновая руда */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_blue= [
  {chance: 25.75, id: 21},/* лазуритовая руда */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_yellow= [
  {chance: 21.02, id: 14},/* золотая руда */
  {chance: 19.94, id: 89},/* светокамень */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_cyan= [
  {chance: 23.65, id: 56},/* алмазная руда */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_lime= [
  {chance: 22.61, id: 129},/* эмеральдовая руда */

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.42, id: ItemID.lonsdaleite},
];
var t5_vom_random_crystal= [
  {chance: 11.68, id: ItemID.litherite},
  {chance: 11.26, id: ItemID.erodium},
  {chance: 11.01, id: ItemID.kyronite},
  {chance: 10.75, id: ItemID.pladium},
  {chance: 10.05, id: ItemID.ionite},
  {chance: 10.25, id: ItemID.aethium},

  {chance: 21.02, id: 16},/* угольная руда */
  {chance: 15.77, id: 15},/* железная руда */
  {chance: 11.77, id: 153},/* кварцевая руда */
  {chance: 10.83, id: 73},/* редстоуновая руда */
  {chance: 7.21, id: 21},/* лазуритовая руда */
  {chance: 6.54, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.92, id: 89},/* светокамень */
  {chance: 0.42, id: ItemID.lonsdaleite},
];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/ore/tier6.js

//список рандома
var t6_vom_random_clear = [
  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_black = [
  {chance: 30.67, id: 16},/* угольная руда */
  {chance: 17.0, id: ItemID.lonsdaleite},

  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
];
var t6_vom_random_white= [
  {chance: 27.17, id: 15},/* железная руда */
  {chance: 24.51, id: 153},/* кварцевая руда */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_red= [
  {chance: 28.65, id: 73},/* редстоуновая руда */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_blue= [
  {chance: 25.76, id: 21},/* лазуритовая руда */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_yellow= [
  {chance: 21.02, id: 14},/* золотая руда */
  {chance: 19.94, id: 89},/* светокамень */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_cyan= [
  {chance: 23.66, id: 56},/* алмазная руда */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_lime= [
  {chance: 22.62, id: 129},/* эмеральдовая руда */

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 4.2, id: ItemID.litherite},
  {chance: 3.15, id: ItemID.erodium},
  {chance: 2.52, id: ItemID.kyronite},
  {chance: 1.89, id: ItemID.pladium},
  {chance: 1.26, id: ItemID.ionite},
  {chance: 0.63, id: ItemID.aethium},
  {chance: 0.5, id: ItemID.lonsdaleite},
];
var t6_vom_random_crystal= [
  {chance: 11.68, id: ItemID.litherite},
  {chance: 11.26, id: ItemID.erodium},
  {chance: 11.01, id: ItemID.kyronite},
  {chance: 10.76, id: ItemID.pladium},
  {chance: 10.5, id: ItemID.ionite},
  {chance: 10.25, id: ItemID.aethium},

  {chance: 21.0, id: 16},/* угольная руда */
  {chance: 15.75, id: 15},/* железная руда */
  {chance: 11.76, id: 153},/* кварцевая руда */
  {chance: 10.82, id: 73},/* редстоуновая руда */
  {chance: 7.2, id: 21},/* лазуритовая руда */
  {chance: 6.53, id: 14},/* золотая руда */
  {chance: 4.58, id: 56},/* алмазная руда */
  {chance: 3.28, id: 129},/* эмеральдовая руда */
  {chance: 4.91, id: 89},/* светокамень */
  {chance: 0.5, id: ItemID.lonsdaleite},

];




// file: EnvironmentalTech/creating/Void_Miners/Randoms/resource/random.js

//список рандома
var vrm_random_clear = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];

var vrm_random_black = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 6.49, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_red = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 8.21, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 6.47, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 8.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 5.47, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_green = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 6.82, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 6.82, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 5.77, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_brown = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 7.71, id: 3, meta: 0},//brown 7.71
  {chance: 6.47, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 7.21, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 5.47, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_blue = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 6.49, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_purple = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 6.69, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 6.56, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 5.77, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_cyan = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 6.49, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_light_gray = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 9.45, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 7.09, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 5.77, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_gray = [
  {chance: 8.75, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 8.51, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 8.27, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 5.2, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_pink = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 10.0, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 6.11, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_lime = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 6.49, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_yellow = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 8.51, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 6.15, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 6.5, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 5.2, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 8.27, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_light_blue = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 6.11, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 6.94, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_magenta = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 6.49, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_orange = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 5.05, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 7.5, id: 172, meta: 0},//orange 7.5
  {chance: 0.34, id: 159, meta: 0},//white 5.77
  {chance: 6.11, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 0.34, id: BlockID.mica, meta: 0},//white 5.77
];
var vrm_random_white = [
  {chance: 5.39, id: 1, meta: 0},//gray 8.75
  {chance: 5.05, id: 1, meta: 1},//pink 10.0
  {chance: 9.45, id: 1, meta: 3},//white 9.45
  {chance: 5.05, id: 1, meta: 5},//gray 8.51
  {chance: 5.05, id: 13, meta: 0},//l gray 9.45
  {chance: 1.68, id: 2, meta: 0},//green 6.82
  {chance: 3.37, id: 3, meta: 0},//brown 7.71
  {chance: 1.68, id: 3, meta: 2},//brown 6.47
  {chance: 5.05, id: 12, meta: 0},//yellow 8.51
  {chance: 4.04, id: 0.12, meta: 1},//red 8.21
  {chance: 1.68, id: 24, meta: 0},//yellow 6.15
  {chance: 1.68, id: 24, meta: 1},//red 6.47
  {chance: 4.71, id: 4, meta: 0},//gray 8.27
  {chance: 1.68, id: 48, meta: 0},//green 6.82
  {chance: 1.52, id: 49, meta: 0},//purple 6.69
  {chance: 2.02, id: 82, meta: 0},//l gray 7.09
  {chance: 4.71, id: 87, meta: 0},//red 8.71
  {chance: 2.69, id: 88, meta: 0},//brown 7.21
  {chance: 1.35, id: 110, meta: 0},//purple 6.56
  {chance: 2.19, id: 121, meta: 0},//yellow 6.5
  {chance: 2.02, id: 172, meta: 0},//orange 7.5
  {chance: 5.77, id: 159, meta: 0},//white 5.77
  {chance: 0.34, id: 159, meta: 1},//orange 6.11
  {chance: 0.34, id: 159, meta: 2},//magenta 6.49
  {chance: 0.34, id: 159, meta: 3},//l blue 6.11
  {chance: 0.34, id: 159, meta: 4},//yellow 5.2
  {chance: 0.34, id: 159, meta: 5},//lime 6.49
  {chance: 0.34, id: 159, meta: 6},//pink 6.11
  {chance: 0.34, id: 159, meta: 7},//gray 5.2
  {chance: 0.34, id: 159, meta: 8},//l gray 5.77
  {chance: 0.34, id: 159, meta: 9},//cyan 6.49
  {chance: 0.34, id: 159, meta: 10},//purple 5.77
  {chance: 0.34, id: 159, meta: 11},//blue 6.49
  {chance: 0.34, id: 159, meta: 12},//brown 5.47
  {chance: 0.34, id: 159, meta: 13},//green 5.77
  {chance: 0.34, id: 159, meta: 14},//red 5.47
  {chance: 0.34, id: 159, meta: 15},//black 6.49
  {chance: 4.71, id: 19, meta: 0},//yellow 8.27
  {chance: 1.35, id: 174, meta: 0},//l blue 6.94
  {chance: 5.77, id: BlockID.mica, meta: 0},//white 5.77
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier1.js

var vm1_structure = [
{x: +1, y: -1, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t1},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t1},
{x: +2, y: -2, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -2, z: -2, id: BlockID.st_f_t1},
{x: -2, y: -2, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -2, z: +2, id: BlockID.st_f_t1},
{x: +1, y: -3, z: -3, id: BlockID.st_f_t1},
{x: 0, y: -3, z: -3, id: BlockID.st_f_t1},
{x: -1, y: -3, z: -3, id: BlockID.st_f_t1},
{x: -2, y: -3, z: -2, id: BlockID.st_f_t1},
{x: -3, y: -3, z: -1, id: BlockID.st_f_t1},
{x: -3, y: -3, z: 0, id: BlockID.st_f_t1},
{x: -3, y: -3, z: +1, id: BlockID.st_f_t1},
{x: -2, y: -3, z: +2, id: BlockID.st_f_t1},
{x: -1, y: -3, z: +3, id: BlockID.st_f_t1},
{x: 0, y: -3, z: +3, id: BlockID.st_f_t1},
{x: +1, y: -3, z: +3, id: BlockID.st_f_t1},
{x: +2, y: -3, z: +2, id: BlockID.st_f_t1},
{x: +3, y: -3, z: +1, id: BlockID.st_f_t1},
{x: +3, y: -3, z: 0, id: BlockID.st_f_t1},
{x: +3, y: -3, z: -1, id: BlockID.st_f_t1},
{x: +2, y: -3, z: -2, id: BlockID.st_f_t1},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +1, y: -3, z: -1, id: BlockID.st_p},
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: 0, y: -3, z: -2, id: BlockID.st_p},
{x: 0, y: -3, z: -1, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: 0, id: BlockID.st_p},
{x: -1, y: -3, z: 0, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -1, y: -3, z: +1, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: 0, y: -3, z: +2, id: BlockID.st_p},
{x: 0, y: -3, z: +1, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: 0, id: BlockID.st_p},
{x: +1, y: -3, z: 0, id: BlockID.st_p},
{x: 0, y: -1, z: 0, id: BlockID.laser_core},
{x: 0, y: -3, z: 0, id: BlockID.laser_core}
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier2.js

var vm2_structure = [
{x: 0, y: -1, z: -1, id: BlockID.st_f_t2},
{x: 0, y: -1, z: -2, id: BlockID.st_f_t2},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t2},
{x: -2, y: -1, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t2},
{x: 0, y: -1, z: +2, id: BlockID.st_f_t2},
{x: +1, y: -1, z: 0, id: BlockID.st_f_t2},
{x: +2, y: -1, z: 0, id: BlockID.st_f_t2},
{x: +3, y: -2, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -2, z: -3, id: BlockID.st_f_t2},
{x: -3, y: -2, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -2, z: +3, id: BlockID.st_f_t2},
{x: +3, y: -3, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -3, z: -3, id: BlockID.st_f_t2},
{x: -3, y: -3, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -3, z: +3, id: BlockID.st_f_t2},
{x: +3, y: -4, z: -1, id: BlockID.st_f_t2},
{x: +3, y: -4, z: 0, id: BlockID.st_f_t2},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t2},
{x: +2, y: -4, z: +2, id: BlockID.st_f_t2},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t2},
{x: 0, y: -4, z: +3, id: BlockID.st_f_t2},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t2},
{x: -2, y: -4, z: +2, id: BlockID.st_f_t2},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t2},
{x: -3, y: -4, z: 0, id: BlockID.st_f_t2},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t2},
{x: -2, y: -4, z: -2, id: BlockID.st_f_t2},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t2},
{x: 0, y: -4, z: -3, id: BlockID.st_f_t2},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t2},
{x: +2, y: -4, z: -2, id: BlockID.st_f_t2},
{x: +2, y: -4, z: -1, id: BlockID.st_p},
{x: +1, y: -4, z: -1, id: BlockID.st_p},
{x: 0, y: -4, z: -1, id: BlockID.st_p},
{x: -1, y: -4, z: -1, id: BlockID.st_p},
{x: -2, y: -4, z: -1, id: BlockID.st_p},
{x: -2, y: -4, z: +1, id: BlockID.st_p},
{x: -1, y: -4, z: +1, id: BlockID.st_p},
{x: 0, y: -4, z: +1, id: BlockID.st_p},
{x: +1, y: -4, z: +1, id: BlockID.st_p},
{x: +2, y: -4, z: +1, id: BlockID.st_p},
{x: +1, y: -4, z: -2, id: BlockID.st_p},
{x: +1, y: -4, z: 0, id: BlockID.st_p},
{x: +1, y: -4, z: +2, id: BlockID.st_p},
{x: -1, y: -4, z: +2, id: BlockID.st_p},
{x: -1, y: -4, z: 0, id: BlockID.st_p},
{x: -1, y: -4, z: -2, id: BlockID.st_p},
{x: -2, y: -4, z: 0, id: BlockID.null_modifier},
{x: +2, y: -4, z: 0, id: BlockID.null_modifier},
{x: 0, y: -4, z: -2, id: BlockID.null_modifier},
{x: 0, y: -4, z: +2, id: BlockID.null_modifier},
{x: 0, y: -1, z: 0, id: BlockID.laser_core},
{x: 0, y: -2, z: 0, id: BlockID.laser_core},
{x: 0, y: -4, z: 0, id: BlockID.laser_core},
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier3.js

var vm3_structure = [
{x: +1, y: -1, z: 0, id: BlockID.st_f_t3},
{x: +2, y: -1, z: 0, id: BlockID.st_f_t3},
{x: +3, y: -1, z: 0, id: BlockID.st_f_t3},
{x: +4, y: -1, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t3},
{x: 0, y: -1, z: -2, id: BlockID.st_f_t3},
{x: 0, y: -1, z: -3, id: BlockID.st_f_t3},
{x: 0, y: -1, z: -4, id: BlockID.st_f_t3},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t3},
{x: -2, y: -1, z: 0, id: BlockID.st_f_t3},
{x: -3, y: -1, z: 0, id: BlockID.st_f_t3},
{x: -4, y: -1, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t3},
{x: 0, y: -1, z: +2, id: BlockID.st_f_t3},
{x: 0, y: -1, z: +3, id: BlockID.st_f_t3},
{x: 0, y: -1, z: +4, id: BlockID.st_f_t3},
{x: +5, y: -2, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -2, z: +5, id: BlockID.st_f_t3},
{x: -5, y: -2, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -2, z: -5, id: BlockID.st_f_t3},
{x: +5, y: -3, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -3, z: +5, id: BlockID.st_f_t3},
{x: -5, y: -3, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -3, z: -5, id: BlockID.st_f_t3},
{x: +5, y: -4, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -4, z: +5, id: BlockID.st_f_t3},
{x: -5, y: -4, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -4, z: -5, id: BlockID.st_f_t3},
{x: +5, y: -5, z: -1, id: BlockID.st_f_t3},
{x: +5, y: -5, z: 0, id: BlockID.st_f_t3},
{x: +5, y: -5, z: +1, id: BlockID.st_f_t3},
{x: +4, y: -5, z: +2, id: BlockID.st_f_t3},
{x: +4, y: -5, z: +3, id: BlockID.st_f_t3},
{x: +3, y: -5, z: +4, id: BlockID.st_f_t3},
{x: +2, y: -5, z: +4, id: BlockID.st_f_t3},
{x: +1, y: -5, z: +5, id: BlockID.st_f_t3},
{x: 0, y: -5, z: +5, id: BlockID.st_f_t3},
{x: -1, y: -5, z: +5, id: BlockID.st_f_t3},
{x: -2, y: -5, z: +4, id: BlockID.st_f_t3},
{x: -3, y: -5, z: +4, id: BlockID.st_f_t3},
{x: -4, y: -5, z: +3, id: BlockID.st_f_t3},
{x: -4, y: -5, z: +2, id: BlockID.st_f_t3},
{x: -5, y: -5, z: +1, id: BlockID.st_f_t3},
{x: -5, y: -5, z: 0, id: BlockID.st_f_t3},
{x: -5, y: -5, z: -1, id: BlockID.st_f_t3},
{x: -4, y: -5, z: -2, id: BlockID.st_f_t3},
{x: -4, y: -5, z: -3, id: BlockID.st_f_t3},
{x: -3, y: -5, z: -4, id: BlockID.st_f_t3},
{x: -2, y: -5, z: -4, id: BlockID.st_f_t3},
{x: -1, y: -5, z: -5, id: BlockID.st_f_t3},
{x: 0, y: -5, z: -5, id: BlockID.st_f_t3},
{x: +1, y: -5, z: -5, id: BlockID.st_f_t3},
{x: +2, y: -5, z: -4, id: BlockID.st_f_t3},
{x: +3, y: -5, z: -4, id: BlockID.st_f_t3},
{x: +4, y: -5, z: -3, id: BlockID.st_f_t3},
{x: +4, y: -5, z: -2, id: BlockID.st_f_t3},
{x: +4, y: -5, z: -1, id: BlockID.st_p},
{x: +3, y: -5, z: -1, id: BlockID.st_p},
{x: +3, y: -5, z: 0, id: BlockID.st_p},
{x: +3, y: -5, z: +1, id: BlockID.st_p},
{x: +4, y: -5, z: +1, id: BlockID.st_p},
{x: +2, y: -5, z: +1, id: BlockID.st_p},
{x: +1, y: -5, z: +1, id: BlockID.st_p},
{x: +1, y: -5, z: 0, id: BlockID.st_p},
{x: +2, y: -5, z: 0, id: BlockID.st_p},
{x: +2, y: -5, z: -1, id: BlockID.st_p},
{x: +1, y: -5, z: -1, id: BlockID.st_p},
{x: 0, y: -5, z: -1, id: BlockID.st_p},
{x: 0, y: -5, z: +1, id: BlockID.st_p},
{x: -1, y: -5, z: +1, id: BlockID.st_p},
{x: -1, y: -5, z: 0, id: BlockID.st_p},
{x: -1, y: -5, z: -1, id: BlockID.st_p},
{x: -2, y: -5, z: -1, id: BlockID.st_p},
{x: -2, y: -5, z: 0, id: BlockID.st_p},
{x: -2, y: -5, z: +1, id: BlockID.st_p},
{x: -3, y: -5, z: +1, id: BlockID.st_p},
{x: -3, y: -5, z: 0, id: BlockID.st_p},
{x: -3, y: -5, z: -1, id: BlockID.st_p},
{x: -4, y: -5, z: -1, id: BlockID.st_p},
{x: -4, y: -5, z: +1, id: BlockID.st_p},
{x: +3, y: -5, z: -2, id: BlockID.st_p},
{x: +2, y: -5, z: -2, id: BlockID.st_p},
{x: +1, y: -5, z: -2, id: BlockID.st_p},
{x: 0, y: -5, z: -2, id: BlockID.st_p},
{x: -1, y: -5, z: -2, id: BlockID.st_p},
{x: -2, y: -5, z: -2, id: BlockID.st_p},
{x: -3, y: -5, z: -2, id: BlockID.st_p},
{x: -3, y: -5, z: +2, id: BlockID.st_p},
{x: -2, y: -5, z: +2, id: BlockID.st_p},
{x: -1, y: -5, z: +2, id: BlockID.st_p},
{x: 0, y: -5, z: +2, id: BlockID.st_p},
{x: +1, y: -5, z: +2, id: BlockID.st_p},
{x: +2, y: -5, z: +2, id: BlockID.st_p},
{x: +3, y: -5, z: +2, id: BlockID.st_p},
{x: +2, y: -5, z: -3, id: BlockID.st_p},
{x: +1, y: -5, z: -3, id: BlockID.st_p},
{x: +1, y: -5, z: -4, id: BlockID.st_p},
{x: 0, y: -5, z: -3, id: BlockID.st_p},
{x: -1, y: -5, z: -3, id: BlockID.st_p},
{x: -1, y: -5, z: -4, id: BlockID.st_p},
{x: -2, y: -5, z: -3, id: BlockID.st_p},
{x: -2, y: -5, z: +3, id: BlockID.st_p},
{x: -1, y: -5, z: +3, id: BlockID.st_p},
{x: -1, y: -5, z: +4, id: BlockID.st_p},
{x: 0, y: -5, z: +3, id: BlockID.st_p},
{x: +1, y: -5, z: +3, id: BlockID.st_p},
{x: +1, y: -5, z: +4, id: BlockID.st_p},
{x: +2, y: -5, z: +3, id: BlockID.st_p},

{x: -4, y: -5, z: 0, id: BlockID.null_modifier},
{x: 0, y: -5, z: +4, id: BlockID.null_modifier},
{x: +4, y: -5, z: 0, id: BlockID.null_modifier},
{x: 0, y: -5, z: -4, id: BlockID.null_modifier},
{x: -3, y: -5, z: -3, id: BlockID.null_modifier},
{x: +3, y: -5, z: -3, id: BlockID.null_modifier},
{x: +3, y: -5, z: +3, id: BlockID.null_modifier},
{x: -3, y: -5, z: +3, id: BlockID.null_modifier},

{x: 0, y: -1, z: 0, id: BlockID.laser_core},
{x: 0, y: -2, z: 0, id: BlockID.laser_core},
{x: 0, y: -3, z: 0, id: BlockID.laser_core},
{x: 0, y: -5, z: 0, id: BlockID.laser_core},
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier4.js

var vm4_structure = [
{x: 0, y: -1, z: -1, id: BlockID.st_f_t4},
{x: 0, y: -1, z: -2, id: BlockID.st_f_t4},
{x: 0, y: -1, z: -3, id: BlockID.st_f_t4},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t4},
{x: -2, y: -1, z: 0, id: BlockID.st_f_t4},
{x: -3, y: -1, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t4},
{x: 0, y: -1, z: +2, id: BlockID.st_f_t4},
{x: 0, y: -1, z: +3, id: BlockID.st_f_t4},
{x: +1, y: -1, z: 0, id: BlockID.st_f_t4},
{x: +2, y: -1, z: 0, id: BlockID.st_f_t4},
{x: +3, y: -1, z: 0, id: BlockID.st_f_t4},
{x: +4, y: -2, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -2, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -2, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -2, z: -4, id: BlockID.st_f_t4},

{x: +5, y: -3, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -3, z: -5, id: BlockID.st_f_t4},
{x: -5, y: -3, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -3, z: +5, id: BlockID.st_f_t4},

{x: +5, y: -4, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -4, z: -5, id: BlockID.st_f_t4},
{x: -5, y: -4, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -4, z: +5, id: BlockID.st_f_t4},

{x: +5, y: -5, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -5, z: -5, id: BlockID.st_f_t4},
{x: -5, y: -5, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -5, z: +5, id: BlockID.st_f_t4},

{x: +5, y: -6, z: -2, id: BlockID.st_f_t4},
{x: +5, y: -6, z: -1, id: BlockID.st_f_t4},
{x: +5, y: -6, z: 0, id: BlockID.st_f_t4},
{x: +5, y: -6, z: +1, id: BlockID.st_f_t4},
{x: +5, y: -6, z: +2, id: BlockID.st_f_t4},
{x: +4, y: -6, z: +3, id: BlockID.st_f_t4},
{x: +3, y: -6, z: +4, id: BlockID.st_f_t4},
{x: +2, y: -6, z: +5, id: BlockID.st_f_t4},
{x: +1, y: -6, z: +5, id: BlockID.st_f_t4},
{x: 0, y: -6, z: +5, id: BlockID.st_f_t4},
{x: -1, y: -6, z: +5, id: BlockID.st_f_t4},
{x: -2, y: -6, z: +5, id: BlockID.st_f_t4},
{x: -3, y: -6, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -6, z: +3, id: BlockID.st_f_t4},
{x: -5, y: -6, z: +2, id: BlockID.st_f_t4},
{x: -5, y: -6, z: +1, id: BlockID.st_f_t4},
{x: -5, y: -6, z: 0, id: BlockID.st_f_t4},
{x: -5, y: -6, z: -1, id: BlockID.st_f_t4},
{x: -5, y: -6, z: -2, id: BlockID.st_f_t4},
{x: -4, y: -6, z: -3, id: BlockID.st_f_t4},
{x: -3, y: -6, z: -4, id: BlockID.st_f_t4},
{x: -2, y: -6, z: -5, id: BlockID.st_f_t4},
{x: -1, y: -6, z: -5, id: BlockID.st_f_t4},
{x: 0, y: -6, z: -5, id: BlockID.st_f_t4},
{x: +1, y: -6, z: -5, id: BlockID.st_f_t4},
{x: +2, y: -6, z: -5, id: BlockID.st_f_t4},
{x: +3, y: -6, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -6, z: -3, id: BlockID.st_f_t4},


{x: +4, y: -6, z: -2, id: BlockID.st_p},
{x: +3, y: -6, z: -2, id: BlockID.st_p},
{x: +3, y: -6, z: -1, id: BlockID.st_p},
{x: +3, y: -6, z: 0, id: BlockID.st_p},
{x: +3, y: -6, z: +1, id: BlockID.st_p},
{x: +3, y: -6, z: +2, id: BlockID.st_p},
{x: +4, y: -6, z: +2, id: BlockID.st_p},
{x: +2, y: -6, z: +4, id: BlockID.st_p},
{x: +2, y: -6, z: +3, id: BlockID.st_p},
{x: +1, y: -6, z: +3, id: BlockID.st_p},
{x: 0, y: -6, z: +3, id: BlockID.st_p},
{x: -1, y: -6, z: +3, id: BlockID.st_p},
{x: -2, y: -6, z: +3, id: BlockID.st_p},
{x: -2, y: -6, z: +4, id: BlockID.st_p},
{x: -4, y: -6, z: +2, id: BlockID.st_p},
{x: -3, y: -6, z: +2, id: BlockID.st_p},
{x: -3, y: -6, z: +1, id: BlockID.st_p},
{x: -3, y: -6, z: 0, id: BlockID.st_p},
{x: -3, y: -6, z: -1, id: BlockID.st_p},
{x: -3, y: -6, z: -2, id: BlockID.st_p},
{x: -4, y: -6, z: -2, id: BlockID.st_p},
{x: -2, y: -6, z: -4, id: BlockID.st_p},
{x: -2, y: -6, z: -3, id: BlockID.st_p},
{x: -1, y: -6, z: -3, id: BlockID.st_p},
{x: 0, y: -6, z: -3, id: BlockID.st_p},
{x: +1, y: -6, z: -3, id: BlockID.st_p},
{x: +2, y: -6, z: -3, id: BlockID.st_p},
{x: +2, y: -6, z: -4, id: BlockID.st_p},
{x: -2, y: -6, z: -2, id: BlockID.st_p},
{x: -1, y: -6, z: +2, id: BlockID.st_p},
{x: -2, y: -6, z: +2, id: BlockID.st_p},
{x: -2, y: -6, z: +1, id: BlockID.st_p},
{x: -2, y: -6, z: 0, id: BlockID.st_p},
{x: -2, y: -6, z: -1, id: BlockID.st_p},
{x: -1, y: -6, z: -1, id: BlockID.st_p},
{x: -1, y: -6, z: -2, id: BlockID.st_p},
{x: 0, y: -6, z: -2, id: BlockID.st_p},
{x: 0, y: -6, z: -1, id: BlockID.st_p},
{x: -1, y: -6, z: 0, id: BlockID.st_p},
{x: -1, y: -6, z: +1, id: BlockID.st_p},
{x: 0, y: -6, z: +1, id: BlockID.st_p},
{x: 0, y: -6, z: +2, id: BlockID.st_p},
{x: +1, y: -6, z: +2, id: BlockID.st_p},
{x: +1, y: -6, z: +1, id: BlockID.st_p},
{x: +2, y: -6, z: +2, id: BlockID.st_p},
{x: +2, y: -6, z: +1, id: BlockID.st_p},
{x: +2, y: -6, z: 0, id: BlockID.st_p},
{x: +2, y: -6, z: -1, id: BlockID.st_p},
{x: +2, y: -6, z: -2, id: BlockID.st_p},
{x: +1, y: -6, z: -2, id: BlockID.st_p},
{x: +1, y: -6, z: -1, id: BlockID.st_p},
{x: +1, y: -6, z: 0, id: BlockID.st_p},
{x: +4, y: -6, z: -1, id: BlockID.null_modifier},
{x: +4, y: -6, z: 0, id: BlockID.null_modifier},
{x: +4, y: -6, z: +1, id: BlockID.null_modifier},
{x: +1, y: -6, z: +4, id: BlockID.null_modifier},
{x: 0, y: -6, z: +4, id: BlockID.null_modifier},
{x: -1, y: -6, z: +4, id: BlockID.null_modifier},
{x: -4, y: -6, z: -1, id: BlockID.null_modifier},
{x: -4, y: -6, z: 0, id: BlockID.null_modifier},
{x: -4, y: -6, z: +1, id: BlockID.null_modifier},
{x: -1, y: -6, z: -4, id: BlockID.null_modifier},
{x: 0, y: -6, z: -4, id: BlockID.null_modifier},
{x: +1, y: -6, z: -4, id: BlockID.null_modifier},
{x: 0, y: -1, z: 0, id: BlockID.laser_core},
{x: 0, y: -2, z: 0, id: BlockID.laser_core},
{x: 0, y: -3, z: 0, id: BlockID.laser_core},
{x: 0, y: -4, z: 0, id: BlockID.laser_core},
{x: 0, y: -6, z: 0, id: BlockID.laser_core},
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier5.js

var vm5_structure = [
{x: 0, y: -1, z: -1, id: BlockID.st_f_t5},
{x: 0, y: -1, z: -2, id: BlockID.st_f_t5},
{x: 0, y: -1, z: -3, id: BlockID.st_f_t5},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t5},
{x: -2, y: -1, z: 0, id: BlockID.st_f_t5},
{x: -3, y: -1, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t5},
{x: 0, y: -1, z: +2, id: BlockID.st_f_t5},
{x: 0, y: -1, z: +3, id: BlockID.st_f_t5},
{x: +1, y: -1, z: 0, id: BlockID.st_f_t5},
{x: +2, y: -1, z: 0, id: BlockID.st_f_t5},
{x: +3, y: -1, z: 0, id: BlockID.st_f_t5},
{x: +4, y: -2, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -2, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -2, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -2, z: -4, id: BlockID.st_f_t5},

{x: +5, y: -3, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -3, z: -5, id: BlockID.st_f_t5},
{x: -5, y: -3, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -3, z: +5, id: BlockID.st_f_t5},

{x: +5, y: -4, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -4, z: -5, id: BlockID.st_f_t5},
{x: -5, y: -4, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -4, z: +5, id: BlockID.st_f_t5},

{x: +5, y: -5, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -5, z: -5, id: BlockID.st_f_t5},
{x: -5, y: -5, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -5, z: +5, id: BlockID.st_f_t5},

{x: +5, y: -6, z: -2, id: BlockID.st_f_t5},
{x: +5, y: -6, z: -1, id: BlockID.st_f_t5},
{x: +5, y: -6, z: 0, id: BlockID.st_f_t5},
{x: +5, y: -6, z: +1, id: BlockID.st_f_t5},
{x: +5, y: -6, z: +2, id: BlockID.st_f_t5},
{x: +4, y: -6, z: +3, id: BlockID.st_f_t5},
{x: +3, y: -6, z: +4, id: BlockID.st_f_t5},
{x: +2, y: -6, z: +5, id: BlockID.st_f_t5},
{x: +1, y: -6, z: +5, id: BlockID.st_f_t5},
{x: 0, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -1, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -2, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -3, y: -6, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -6, z: +3, id: BlockID.st_f_t5},
{x: -5, y: -6, z: +2, id: BlockID.st_f_t5},
{x: -5, y: -6, z: +1, id: BlockID.st_f_t5},
{x: -5, y: -6, z: 0, id: BlockID.st_f_t5},
{x: -5, y: -6, z: -1, id: BlockID.st_f_t5},
{x: -5, y: -6, z: -2, id: BlockID.st_f_t5},
{x: -4, y: -6, z: -3, id: BlockID.st_f_t5},
{x: -3, y: -6, z: -4, id: BlockID.st_f_t5},
{x: -2, y: -6, z: -5, id: BlockID.st_f_t5},
{x: -1, y: -6, z: -5, id: BlockID.st_f_t5},
{x: 0, y: -6, z: -5, id: BlockID.st_f_t5},
{x: +1, y: -6, z: -5, id: BlockID.st_f_t5},
{x: +2, y: -6, z: -5, id: BlockID.st_f_t5},
{x: +3, y: -6, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -6, z: -3, id: BlockID.st_f_t5},

{x: +2, y: -7, z: -1, id: BlockID.null_modifier},
{x: +3, y: -7, z: -1, id: BlockID.null_modifier},
{x: +1, y: -7, z: -2, id: BlockID.null_modifier},
{x: +1, y: -7, z: -3, id: BlockID.null_modifier},
{x: -1, y: -7, z: -2, id: BlockID.null_modifier},
{x: -1, y: -7, z: -3, id: BlockID.null_modifier},
{x: -2, y: -7, z: -1, id: BlockID.null_modifier},
{x: -3, y: -7, z: -1, id: BlockID.null_modifier},
{x: -3, y: -7, z: +1, id: BlockID.null_modifier},
{x: -2, y: -7, z: +1, id: BlockID.null_modifier},
{x: -1, y: -7, z: +2, id: BlockID.null_modifier},
{x: -1, y: -7, z: +3, id: BlockID.null_modifier},
{x: +1, y: -7, z: +3, id: BlockID.null_modifier},
{x: +1, y: -7, z: +2, id: BlockID.null_modifier},
{x: +2, y: -7, z: +1, id: BlockID.null_modifier},
{x: +3, y: -7, z: +1, id: BlockID.null_modifier},

{x: +4, y: -7, z: +1, id: BlockID.st_p},
{x: +4, y: -7, z: +2, id: BlockID.st_p},
{x: +3, y: -7, z: +2, id: BlockID.st_p},
{x: +3, y: -7, z: +3, id: BlockID.st_p},
{x: +2, y: -7, z: +3, id: BlockID.st_p},
{x: +2, y: -7, z: +2, id: BlockID.st_p},
{x: +2, y: -7, z: +4, id: BlockID.st_p},
{x: +1, y: -7, z: +4, id: BlockID.st_p},

{x: -1, y: -7, z: +4, id: BlockID.st_p},
{x: -2, y: -7, z: +4, id: BlockID.st_p},
{x: -2, y: -7, z: +3, id: BlockID.st_p},
{x: -3, y: -7, z: +3, id: BlockID.st_p},
{x: -3, y: -7, z: +2, id: BlockID.st_p},
{x: -2, y: -7, z: +2, id: BlockID.st_p},
{x: -4, y: -7, z: +2, id: BlockID.st_p},
{x: -4, y: -7, z: +1, id: BlockID.st_p},

{x: -4, y: -7, z: -1, id: BlockID.st_p},
{x: -4, y: -7, z: -2, id: BlockID.st_p},
{x: -3, y: -7, z: -2, id: BlockID.st_p},
{x: -3, y: -7, z: -3, id: BlockID.st_p},
{x: -2, y: -7, z: -3, id: BlockID.st_p},
{x: -2, y: -7, z: -2, id: BlockID.st_p},
{x: -2, y: -7, z: -4, id: BlockID.st_p},
{x: -1, y: -7, z: -4, id: BlockID.st_p},

{x: +1, y: -7, z: -4, id: BlockID.st_p},
{x: +2, y: -7, z: -4, id: BlockID.st_p},
{x: +2, y: -7, z: -3, id: BlockID.st_p},
{x: +2, y: -7, z: -2, id: BlockID.st_p},
{x: +3, y: -7, z: -2, id: BlockID.st_p},
{x: +3, y: -7, z: -3, id: BlockID.st_p},
{x: +4, y: -7, z: -2, id: BlockID.st_p},
{x: +4, y: -7, z: -1, id: BlockID.st_p},

{x: +1, y: -7, z: -1, id: BlockID.st_p},
{x: -1, y: -7, z: -1, id: BlockID.st_p},
{x: -1, y: -7, z: +1, id: BlockID.st_p},
{x: +1, y: -7, z: +1, id: BlockID.st_p},
{x: +1, y: -7, z: 0, id: BlockID.st_f_t5},
{x: +2, y: -7, z: 0, id: BlockID.st_f_t5},
{x: +3, y: -7, z: 0, id: BlockID.st_f_t5},
{x: +4, y: -7, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -7, z: +1, id: BlockID.st_f_t5},
{x: 0, y: -7, z: +2, id: BlockID.st_f_t5},
{x: 0, y: -7, z: +3, id: BlockID.st_f_t5},
{x: 0, y: -7, z: +4, id: BlockID.st_f_t5},
{x: -1, y: -7, z: 0, id: BlockID.st_f_t5},
{x: -2, y: -7, z: 0, id: BlockID.st_f_t5},
{x: -3, y: -7, z: 0, id: BlockID.st_f_t5},
{x: -4, y: -7, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -7, z: -1, id: BlockID.st_f_t5},
{x: 0, y: -7, z: -2, id: BlockID.st_f_t5},
{x: 0, y: -7, z: -3, id: BlockID.st_f_t5},
{x: 0, y: -7, z: -4, id: BlockID.st_f_t5},
{x: 0, y: -1, z: 0, id: BlockID.laser_core},
{x: 0, y: -2, z: 0, id: BlockID.laser_core},
{x: 0, y: -3, z: 0, id: BlockID.laser_core},
{x: 0, y: -4, z: 0, id: BlockID.laser_core},
{x: 0, y: -5, z: 0, id: BlockID.laser_core},
{x: 0, y: -7, z: 0, id: BlockID.laser_core},
];




// file: EnvironmentalTech/creating/Void_Miners/Structures/tier6.js

var vm6_structure = [
{x: 0, y: -1, z: +1, id:BlockID.st_f_t6},
{x: 0, y: -1, z: +2, id:BlockID.st_f_t6},
{x: 0, y: -1, z: +3, id:BlockID.st_f_t6},
{x: 0, y: -1, z: +4, id:BlockID.st_f_t6},
{x: +1, y: -1, z: 0, id:BlockID.st_f_t6},
{x: +2, y: -1, z: 0, id:BlockID.st_f_t6},
{x: +3, y: -1, z: 0, id:BlockID.st_f_t6},
{x: +4, y: -1, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -1, z: -1, id:BlockID.st_f_t6},
{x: 0, y: -1, z: -2, id:BlockID.st_f_t6},
{x: 0, y: -1, z: -3, id:BlockID.st_f_t6},
{x: 0, y: -1, z: -4, id:BlockID.st_f_t6},
{x: -1, y: -1, z: 0, id:BlockID.st_f_t6},
{x: -2, y: -1, z: 0, id:BlockID.st_f_t6},
{x: -3, y: -1, z: 0, id:BlockID.st_f_t6},
{x: -4, y: -1, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -2, z: +5, id:BlockID.st_f_t6},
{x: +5, y: -2, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -2, z: -5, id:BlockID.st_f_t6},
{x: -5, y: -2, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -3, z: +6, id:BlockID.st_f_t6},
{x: +6, y: -3, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -3, z: -6, id:BlockID.st_f_t6},
{x: -6, y: -3, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -4, z: +6, id:BlockID.st_f_t6},
{x: +6, y: -4, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -4, z: -6, id:BlockID.st_f_t6},
{x: -6, y: -4, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -5, z: +6, id:BlockID.st_f_t6},
{x: +6, y: -5, z: 0, id:BlockID.st_f_t6},
{x: 0, y: -5, z: -6, id:BlockID.st_f_t6},
{x: -6, y: -5, z: 0, id:BlockID.st_f_t6},

{x: +6, y: -6, z: -2, id:BlockID.st_f_t6},
{x: +6, y: -6, z: -1, id:BlockID.st_f_t6},
{x: +6, y: -6, z: 0, id:BlockID.st_f_t6},
{x: +6, y: -6, z: +1, id:BlockID.st_f_t6},
{x: +6, y: -6, z: +2, id:BlockID.st_f_t6},
{x: +5, y: -6, z: +3, id:BlockID.st_f_t6},
{x: +5, y: -6, z: +4, id:BlockID.st_f_t6},
{x: +4, y: -6, z: +5, id:BlockID.st_f_t6},
{x: +3, y: -6, z: +5, id:BlockID.st_f_t6},
{x: +2, y: -6, z: +6, id:BlockID.st_f_t6},
{x: +1, y: -6, z: +6, id:BlockID.st_f_t6},
{x: 0, y: -6, z: +6, id:BlockID.st_f_t6},
{x: -1, y: -6, z: +6, id:BlockID.st_f_t6},
{x: -2, y: -6, z: +6, id:BlockID.st_f_t6},
{x: -3, y: -6, z: +5, id:BlockID.st_f_t6},
{x: -4, y: -6, z: +5, id:BlockID.st_f_t6},
{x: -5, y: -6, z: +4, id:BlockID.st_f_t6},
{x: -5, y: -6, z: +3, id:BlockID.st_f_t6},
{x: -6, y: -6, z: +2, id:BlockID.st_f_t6},
{x: -6, y: -6, z: +1, id:BlockID.st_f_t6},
{x: -6, y: -6, z: 0, id:BlockID.st_f_t6},
{x: -6, y: -6, z: -1, id:BlockID.st_f_t6},
{x: -6, y: -6, z: -2, id:BlockID.st_f_t6},
{x: -5, y: -6, z: -3, id:BlockID.st_f_t6},
{x: -5, y: -6, z: -4, id:BlockID.st_f_t6},
{x: -4, y: -6, z: -5, id:BlockID.st_f_t6},
{x: -3, y: -6, z: -5, id:BlockID.st_f_t6},
{x: -2, y: -6, z: -6, id:BlockID.st_f_t6},
{x: -1, y: -6, z: -6, id:BlockID.st_f_t6},
{x: 0, y: -6, z: -6, id:BlockID.st_f_t6},
{x: +1, y: -6, z: -6, id:BlockID.st_f_t6},
{x: +2, y: -6, z: -6, id:BlockID.st_f_t6},
{x: +3, y: -6, z: -5, id:BlockID.st_f_t6},
{x: +4, y: -6, z: -5, id:BlockID.st_f_t6},
{x: +5, y: -6, z: -4, id:BlockID.st_f_t6},
{x: +5, y: -6, z: -3, id:BlockID.st_f_t6},


{x: +4, y: -7, z: +1, id:BlockID.st_p},
{x: +5, y: -7, z: +1, id:BlockID.st_p},
{x: +5, y: -7, z: +2, id:BlockID.st_p},
{x: +4, y: -7, z: +2, id:BlockID.st_p},
{x: +3, y: -7, z: +2, id:BlockID.st_p},
{x: +3, y: -7, z: +3, id:BlockID.st_p},
{x: +4, y: -7, z: +3, id:BlockID.st_p},
{x: +2, y: -7, z: +3, id:BlockID.st_p},
{x: +2, y: -7, z: +4, id:BlockID.st_p},
{x: +3, y: -7, z: +4, id:BlockID.st_p},
{x: +4, y: -7, z: +4, id:BlockID.st_p},
{x: +1, y: -7, z: +4, id:BlockID.st_p},
{x: +1, y: -7, z: +5, id:BlockID.st_p},
{x: +2, y: -7, z: +5, id:BlockID.st_p},

{x: -1, y: -7, z: +5, id:BlockID.st_p},
{x: -1, y: -7, z: +4, id:BlockID.st_p},
{x: -2, y: -7, z: +4, id:BlockID.st_p},
{x: -2, y: -7, z: +5, id:BlockID.st_p},
{x: -3, y: -7, z: +4, id:BlockID.st_p},
{x: -3, y: -7, z: +3, id:BlockID.st_p},
{x: -2, y: -7, z: +3, id:BlockID.st_p},
{x: -4, y: -7, z: +4, id:BlockID.st_p},
{x: -4, y: -7, z: +3, id:BlockID.st_p},
{x: -4, y: -7, z: +2, id:BlockID.st_p},
{x: -3, y: -7, z: +2, id:BlockID.st_p},
{x: -5, y: -7, z: +2, id:BlockID.st_p},
{x: -5, y: -7, z: +1, id:BlockID.st_p},
{x: -4, y: -7, z: +1, id:BlockID.st_p},

{x: -5, y: -7, z: -1, id:BlockID.st_p},
{x: -4, y: -7, z: -1, id:BlockID.st_p},
{x: -4, y: -7, z: -2, id:BlockID.st_p},
{x: -5, y: -7, z: -2, id:BlockID.st_p},
{x: -4, y: -7, z: -3, id:BlockID.st_p},
{x: -3, y: -7, z: -2, id:BlockID.st_p},
{x: -3, y: -7, z: -3, id:BlockID.st_p},
{x: -3, y: -7, z: -4, id:BlockID.st_p},
{x: -2, y: -7, z: -3, id:BlockID.st_p},
{x: -2, y: -7, z: -4, id:BlockID.st_p},
{x: -1, y: -7, z: -4, id:BlockID.st_p},
{x: -1, y: -7, z: -5, id:BlockID.st_p},
{x: -2, y: -7, z: -5, id:BlockID.st_p},
{x: -4, y: -7, z: -4, id:BlockID.st_p},

{x: +1, y: -7, z: -5, id:BlockID.st_p},
{x: +1, y: -7, z: -4, id:BlockID.st_p},
{x: +2, y: -7, z: -5, id:BlockID.st_p},
{x: +2, y: -7, z: -4, id:BlockID.st_p},
{x: +2, y: -7, z: -3, id:BlockID.st_p},
{x: +3, y: -7, z: -3, id:BlockID.st_p},
{x: +3, y: -7, z: -4, id:BlockID.st_p},
{x: +4, y: -7, z: -3, id:BlockID.st_p},
{x: +4, y: -7, z: -2, id:BlockID.st_p},
{x: +3, y: -7, z: -2, id:BlockID.st_p},
{x: +5, y: -7, z: -2, id:BlockID.st_p},
{x: +5, y: -7, z: -1, id:BlockID.st_p},
{x: +4, y: -7, z: -1, id:BlockID.st_p},
{x: +4, y: -7, z: -4, id:BlockID.st_p},

{x: +1, y: -7, z: -3, id:BlockID.null_modifier},
{x: +1, y: -7, z: -2, id:BlockID.null_modifier},
{x: +2, y: -7, z: -2, id:BlockID.null_modifier},
{x: +2, y: -7, z: -1, id:BlockID.null_modifier},
{x: +3, y: -7, z: -1, id:BlockID.null_modifier},
{x: +3, y: -7, z: +1, id:BlockID.null_modifier},
{x: +2, y: -7, z: +1, id:BlockID.null_modifier},
{x: +2, y: -7, z: +2, id:BlockID.null_modifier},
{x: +1, y: -7, z: +2, id:BlockID.null_modifier},
{x: +1, y: -7, z: +3, id:BlockID.null_modifier},
{x: -1, y: -7, z: +3, id:BlockID.null_modifier},
{x: -1, y: -7, z: +2, id:BlockID.null_modifier},
{x: -2, y: -7, z: +2, id:BlockID.null_modifier},
{x: -2, y: -7, z: +1, id:BlockID.null_modifier},
{x: -3, y: -7, z: +1, id:BlockID.null_modifier},
{x: -3, y: -7, z: -1, id:BlockID.null_modifier},
{x: -2, y: -7, z: -1, id:BlockID.null_modifier},
{x: -2, y: -7, z: -2, id:BlockID.null_modifier},
{x: -1, y: -7, z: -2, id:BlockID.null_modifier},
{x: -1, y: -7, z: -3, id:BlockID.null_modifier},
{x: 0, y: -7, z: -5, id:BlockID.st_f_t6},
{x: 0, y: -7, z: -4, id:BlockID.st_f_t6},
{x: 0, y: -7, z: -3, id:BlockID.st_f_t6},
{x: 0, y: -7, z: -2, id:BlockID.st_f_t6},
{x: 0, y: -7, z: -1, id:BlockID.st_f_t6},
{x: +1, y: -7, z: -1, id:BlockID.st_f_t6},
{x: -1, y: -7, z: -1, id:BlockID.st_f_t6},
{x: +1, y: -7, z: 0, id:BlockID.st_f_t6},
{x: -1, y: -7, z: 0, id:BlockID.st_f_t6},
{x: -2, y: -7, z: 0, id:BlockID.st_f_t6},
{x: -3, y: -7, z: 0, id:BlockID.st_f_t6},
{x: -4, y: -7, z: 0, id:BlockID.st_f_t6},
{x: -5, y: -7, z: 0, id:BlockID.st_f_t6},
{x: +2, y: -7, z: 0, id:BlockID.st_f_t6},
{x: +3, y: -7, z: 0, id:BlockID.st_f_t6},
{x: +4, y: -7, z: 0, id:BlockID.st_f_t6},
{x: +5, y: -7, z: 0, id:BlockID.st_f_t6},
{x: +1, y: -7, z: +1, id:BlockID.st_f_t6},
{x: 0, y: -7, z: +1, id:BlockID.st_f_t6},
{x: -1, y: -7, z: +1, id:BlockID.st_f_t6},
{x: 0, y: -7, z: +2, id:BlockID.st_f_t6},
{x: 0, y: -7, z: +3, id:BlockID.st_f_t6},
{x: 0, y: -7, z: +4, id:BlockID.st_f_t6},
{x: 0, y: -7, z: +5, id:BlockID.st_f_t6},
{x: 0, y: -1, z: 0, id:BlockID.laser_core},
{x: 0, y: -2, z: 0, id:BlockID.laser_core},
{x: 0, y: -3, z: 0, id:BlockID.laser_core},
{x: 0, y: -4, z: 0, id:BlockID.laser_core},
{x: 0, y: -5, z: 0, id:BlockID.laser_core},
{x: 0, y: -7, z: 0, id:BlockID.laser_core},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier1.js

var t1_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t1},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t1},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t1},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t1},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t1},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t1},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t1},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t1},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t1},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t1},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t1},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t1},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t1},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t1},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t1},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t1},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t1},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier1 structure panel_________________________________________________
{x: +2, y: -2, z: -2, id: BlockID.st_p},
{x: -2, y: -2, z: -2, id: BlockID.st_p},
{x: -2, y: -2, z: +2, id: BlockID.st_p},
{x: +2, y: -2, z: +2, id: BlockID.st_p},
];
var t1_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier2.js

var t2_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t2},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t2},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t2},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t2},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t2},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t2},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t2},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t2},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t2},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t2},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t2},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t2},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t2},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t2},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t2},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t2},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t2},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t2},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier2 upgrade frame_________________________________________________
{x: +3, y: -2, z: -3, id: BlockID.st_f_t2},
{x: +3, y: -2, z: +3, id: BlockID.st_f_t2},
{x: -3, y: -2, z: +3, id: BlockID.st_f_t2},
{x: -3, y: -2, z: -3, id: BlockID.st_f_t2},
{x: +2, y: -3, z: -3, id: BlockID.st_f_t2},

{x: +3, y: -3, z: -2, id: BlockID.st_f_t2},
{x: +3, y: -3, z: +2, id: BlockID.st_f_t2},
{x: +2, y: -3, z: +3, id: BlockID.st_f_t2},
{x: -2, y: -3, z: +3, id: BlockID.st_f_t2},
{x: -3, y: -3, z: +2, id: BlockID.st_f_t2},
{x: -3, y: -3, z: -2, id: BlockID.st_f_t2},
{x: -2, y: -3, z: -3, id: BlockID.st_f_t2},

{x: +2, y: -3, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -3, z: -2, id: BlockID.st_f_t2},
{x: -2, y: -3, z: 0, id: BlockID.st_f_t2},
{x: 0, y: -3, z: +2, id: BlockID.st_f_t2},

//tier2 structure panel_________________________________________________
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},

//tier2 modifiers_________________________________________________
{x: +3, y: -3, z: -3, id: BlockID.st_p},
{x: -3, y: -3, z: -3, id: BlockID.st_p},
{x: +3, y: -3, z: +3, id: BlockID.st_p},
{x: -3, y: -3, z: +3, id: BlockID.st_p},
];
var t2_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},

{x: +2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: +2, id: BlockID.null_modifier},
{x: +2, y: -2, z: +2, id: BlockID.null_modifier},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier3.js

var t3_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t3},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t3},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t3},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t3},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t3},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t3},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t3},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t3},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t3},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t3},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t3},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t3},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t3},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t3},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t3},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t3},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t3},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t3},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier2 upgrade frame_________________________________________________
{x: +3, y: -2, z: -3, id: BlockID.st_f_t3},
{x: +3, y: -2, z: +3, id: BlockID.st_f_t3},
{x: -3, y: -2, z: +3, id: BlockID.st_f_t3},
{x: -3, y: -2, z: -3, id: BlockID.st_f_t3},
{x: +2, y: -3, z: -3, id: BlockID.st_f_t3},

{x: +3, y: -3, z: -2, id: BlockID.st_f_t3},
{x: +3, y: -3, z: +2, id: BlockID.st_f_t3},
{x: +2, y: -3, z: +3, id: BlockID.st_f_t3},
{x: -2, y: -3, z: +3, id: BlockID.st_f_t3},
{x: -3, y: -3, z: +2, id: BlockID.st_f_t3},
{x: -3, y: -3, z: -2, id: BlockID.st_f_t3},
{x: -2, y: -3, z: -3, id: BlockID.st_f_t3},

{x: +2, y: -3, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -3, z: -2, id: BlockID.st_f_t3},
{x: -2, y: -3, z: 0, id: BlockID.st_f_t3},
{x: 0, y: -3, z: +2, id: BlockID.st_f_t3},

//tier2 structure panel_________________________________________________
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t3},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t3},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t3},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t3},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t3},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t3},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t3},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t3},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t3},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t3},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t3},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t3},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t3},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t3},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t3},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t3},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t3},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t3},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t3},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t3},

//tier3 structure panel_________________________________________________
{x: +2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: -2, id: BlockID.st_p},
{x: -2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: +2, id: BlockID.st_p},

{x: +3, y: -4, z: +2, id: BlockID.st_p},
{x: +3, y: -4, z: +3, id: BlockID.st_p},
{x: +2, y: -4, z: +3, id: BlockID.st_p},
{x: -2, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +2, id: BlockID.st_p},
{x: -3, y: -4, z: -2, id: BlockID.st_p},
{x: -3, y: -4, z: -3, id: BlockID.st_p},
{x: -2, y: -4, z: -3, id: BlockID.st_p},
{x: +2, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -2, id: BlockID.st_p},

//tier3 modifiers_________________________________________________
{x: +4, y: -4, z: -4, id: BlockID.st_p},
{x: +4, y: -4, z: +4, id: BlockID.st_p},
{x: -4, y: -4, z: +4, id: BlockID.st_p},
{x: -4, y: -4, z: -4, id: BlockID.st_p},
];
var t3_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},

{x: +2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: +2, id: BlockID.null_modifier},
{x: +2, y: -2, z: +2, id: BlockID.null_modifier},

{x: +3, y: -3, z: -3, id: BlockID.null_modifier},
{x: -3, y: -3, z: -3, id: BlockID.null_modifier},
{x: +3, y: -3, z: +3, id: BlockID.null_modifier},
{x: -3, y: -3, z: +3, id: BlockID.null_modifier},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier4.js

var t4_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t4},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t4},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t4},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t4},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t4},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t4},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t4},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t4},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t4},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t4},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t4},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t4},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t4},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t4},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t4},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t4},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t4},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t4},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier2 upgrade frame_________________________________________________
{x: +3, y: -2, z: -3, id: BlockID.st_f_t4},
{x: +3, y: -2, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -2, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -2, z: -3, id: BlockID.st_f_t4},
{x: +2, y: -3, z: -3, id: BlockID.st_f_t4},

{x: +3, y: -3, z: -2, id: BlockID.st_f_t4},
{x: +3, y: -3, z: +2, id: BlockID.st_f_t4},
{x: +2, y: -3, z: +3, id: BlockID.st_f_t4},
{x: -2, y: -3, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -3, z: +2, id: BlockID.st_f_t4},
{x: -3, y: -3, z: -2, id: BlockID.st_f_t4},
{x: -2, y: -3, z: -3, id: BlockID.st_f_t4},

{x: +2, y: -3, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -3, z: -2, id: BlockID.st_f_t4},
{x: -2, y: -3, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -3, z: +2, id: BlockID.st_f_t4},

//tier2 structure panel_________________________________________________
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t4},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t4},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t4},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t4},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t4},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t4},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t4},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t4},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t4},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t4},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t4},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t4},

//tier3 structure panel_________________________________________________
{x: +2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: -2, id: BlockID.st_p},
{x: -2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: +2, id: BlockID.st_p},

{x: +3, y: -4, z: +2, id: BlockID.st_p},
{x: +3, y: -4, z: +3, id: BlockID.st_p},
{x: +2, y: -4, z: +3, id: BlockID.st_p},
{x: -2, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +2, id: BlockID.st_p},
{x: -3, y: -4, z: -2, id: BlockID.st_p},
{x: -3, y: -4, z: -3, id: BlockID.st_p},
{x: -2, y: -4, z: -3, id: BlockID.st_p},
{x: +2, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t4},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t4},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t4},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t4},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t4},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t4},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t4},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t4},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t4},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t4},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t4},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t4},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t4},


//tier4 upgrade frame_________________________________________________
{x: +5, y: -4, z: +5, id: BlockID.st_f_t4},
{x: -5, y: -4, z: +5, id: BlockID.st_f_t4},
{x: -5, y: -4, z: -5, id: BlockID.st_f_t4},
{x: +5, y: -4, z: -5, id: BlockID.st_f_t4},

{x: +5, y: -5, z: +4, id: BlockID.st_f_t4},
{x: +4, y: -5, z: +5, id: BlockID.st_f_t4},
{x: -4, y: -5, z: +5, id: BlockID.st_f_t4},
{x: -5, y: -5, z: +4, id: BlockID.st_f_t4},
{x: -5, y: -5, z: -4, id: BlockID.st_f_t4},
{x: -4, y: -5, z: -5, id: BlockID.st_f_t4},
{x: +5, y: -5, z: -4, id: BlockID.st_f_t4},
{x: +4, y: -5, z: -5, id: BlockID.st_f_t4},

{x: 0, y: -5, z: -3, id: BlockID.st_f_t4},
{x: +3, y: -5, z: 0, id: BlockID.st_f_t4},
{x: 0, y: -5, z: +3, id: BlockID.st_f_t4},
{x: -3, y: -5, z: 0, id: BlockID.st_f_t4},
{x: +2, y: -5, z: -4, id: BlockID.st_f_t4},
{x: -2, y: -5, z: -4, id: BlockID.st_f_t4},
{x: -4, y: -5, z: -2, id: BlockID.st_f_t4},
{x: -4, y: -5, z: +2, id: BlockID.st_f_t4},
{x: -2, y: -5, z: +4, id: BlockID.st_f_t4},
{x: +2, y: -5, z: +4, id: BlockID.st_f_t4},
{x: +4, y: -5, z: +2, id: BlockID.st_f_t4},
{x: +4, y: -5, z: -2, id: BlockID.st_f_t4},

//tier4 structure panel_________________________________________________
{x: -1, y: -5, z: -3, id: BlockID.st_p},
{x: +1, y: -5, z: -3, id: BlockID.st_p},
{x: +3, y: -5, z: -1, id: BlockID.st_p},
{x: +3, y: -5, z: +1, id: BlockID.st_p},
{x: +1, y: -5, z: +3, id: BlockID.st_p},
{x: -1, y: -5, z: +3, id: BlockID.st_p},
{x: -3, y: -5, z: +1, id: BlockID.st_p},
{x: -3, y: -5, z: -1, id: BlockID.st_p},
{x: -4, y: -5, z: +3, id: BlockID.st_p},
{x: -4, y: -5, z: +4, id: BlockID.st_p},
{x: -3, y: -5, z: +4, id: BlockID.st_p},
{x: +3, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +3, id: BlockID.st_p},
{x: +4, y: -5, z: -3, id: BlockID.st_p},
{x: +4, y: -5, z: -4, id: BlockID.st_p},
{x: +3, y: -5, z: -4, id: BlockID.st_p},
{x: -4, y: -5, z: -3, id: BlockID.st_p},
{x: -4, y: -5, z: -4, id: BlockID.st_p},
{x: -3, y: -5, z: -4, id: BlockID.st_p},

//tier4 modifiers_________________________________________________
{x: +5, y: -5, z: +5, id: BlockID.st_p},
{x: -5, y: -5, z: +5, id: BlockID.st_p},
{x: -5, y: -5, z: -5, id: BlockID.st_p},
{x: +5, y: -5, z: -5, id: BlockID.st_p},
];
var t4_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},

{x: +2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: +2, id: BlockID.null_modifier},
{x: +2, y: -2, z: +2, id: BlockID.null_modifier},

{x: +3, y: -3, z: -3, id: BlockID.null_modifier},
{x: -3, y: -3, z: -3, id: BlockID.null_modifier},
{x: +3, y: -3, z: +3, id: BlockID.null_modifier},
{x: -3, y: -3, z: +3, id: BlockID.null_modifier},

{x: +4, y: -4, z: -4, id: BlockID.null_modifier},
{x: +4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: -4, id: BlockID.null_modifier},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier5.js

var t5_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t5},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t5},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t5},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t5},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t5},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t5},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t5},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t5},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t5},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t5},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t5},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t5},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t5},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t5},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t5},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t5},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t5},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t5},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier2 upgrade frame_________________________________________________
{x: +3, y: -2, z: -3, id: BlockID.st_f_t5},
{x: +3, y: -2, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -2, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -2, z: -3, id: BlockID.st_f_t5},
{x: +2, y: -3, z: -3, id: BlockID.st_f_t5},

{x: +3, y: -3, z: -2, id: BlockID.st_f_t5},
{x: +3, y: -3, z: +2, id: BlockID.st_f_t5},
{x: +2, y: -3, z: +3, id: BlockID.st_f_t5},
{x: -2, y: -3, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -3, z: +2, id: BlockID.st_f_t5},
{x: -3, y: -3, z: -2, id: BlockID.st_f_t5},
{x: -2, y: -3, z: -3, id: BlockID.st_f_t5},

{x: +2, y: -3, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -3, z: -2, id: BlockID.st_f_t5},
{x: -2, y: -3, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -3, z: +2, id: BlockID.st_f_t5},

//tier2 structure panel_________________________________________________
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t5},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t5},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t5},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t5},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t5},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t5},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t5},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t5},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t5},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t5},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t5},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t5},

//tier3 structure panel_________________________________________________
{x: +2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: -2, id: BlockID.st_p},
{x: -2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: +2, id: BlockID.st_p},

{x: +3, y: -4, z: +2, id: BlockID.st_p},
{x: +3, y: -4, z: +3, id: BlockID.st_p},
{x: +2, y: -4, z: +3, id: BlockID.st_p},
{x: -2, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +2, id: BlockID.st_p},
{x: -3, y: -4, z: -2, id: BlockID.st_p},
{x: -3, y: -4, z: -3, id: BlockID.st_p},
{x: -2, y: -4, z: -3, id: BlockID.st_p},
{x: +2, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t5},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t5},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t5},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t5},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t5},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t5},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t5},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t5},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t5},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t5},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t5},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t5},


//tier4 upgrade frame_________________________________________________
{x: +5, y: -4, z: +5, id: BlockID.st_f_t5},
{x: -5, y: -4, z: +5, id: BlockID.st_f_t5},
{x: -5, y: -4, z: -5, id: BlockID.st_f_t5},
{x: +5, y: -4, z: -5, id: BlockID.st_f_t5},

{x: +5, y: -5, z: +4, id: BlockID.st_f_t5},
{x: +4, y: -5, z: +5, id: BlockID.st_f_t5},
{x: -4, y: -5, z: +5, id: BlockID.st_f_t5},
{x: -5, y: -5, z: +4, id: BlockID.st_f_t5},
{x: -5, y: -5, z: -4, id: BlockID.st_f_t5},
{x: -4, y: -5, z: -5, id: BlockID.st_f_t5},
{x: +5, y: -5, z: -4, id: BlockID.st_f_t5},
{x: +4, y: -5, z: -5, id: BlockID.st_f_t5},

{x: 0, y: -5, z: -3, id: BlockID.st_f_t5},
{x: +3, y: -5, z: 0, id: BlockID.st_f_t5},
{x: 0, y: -5, z: +3, id: BlockID.st_f_t5},
{x: -3, y: -5, z: 0, id: BlockID.st_f_t5},
{x: +2, y: -5, z: -4, id: BlockID.st_f_t5},
{x: -2, y: -5, z: -4, id: BlockID.st_f_t5},
{x: -4, y: -5, z: -2, id: BlockID.st_f_t5},
{x: -4, y: -5, z: +2, id: BlockID.st_f_t5},
{x: -2, y: -5, z: +4, id: BlockID.st_f_t5},
{x: +2, y: -5, z: +4, id: BlockID.st_f_t5},
{x: +4, y: -5, z: +2, id: BlockID.st_f_t5},
{x: +4, y: -5, z: -2, id: BlockID.st_f_t5},

//tier4 structure panel_________________________________________________
{x: -1, y: -5, z: -3, id: BlockID.st_p},
{x: +1, y: -5, z: -3, id: BlockID.st_p},
{x: +3, y: -5, z: -1, id: BlockID.st_p},
{x: +3, y: -5, z: +1, id: BlockID.st_p},
{x: +1, y: -5, z: +3, id: BlockID.st_p},
{x: -1, y: -5, z: +3, id: BlockID.st_p},
{x: -3, y: -5, z: +1, id: BlockID.st_p},
{x: -3, y: -5, z: -1, id: BlockID.st_p},
{x: -4, y: -5, z: +3, id: BlockID.st_p},
{x: -4, y: -5, z: +4, id: BlockID.st_p},
{x: -3, y: -5, z: +4, id: BlockID.st_p},
{x: +3, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +3, id: BlockID.st_p},
{x: +4, y: -5, z: -3, id: BlockID.st_p},
{x: +4, y: -5, z: -4, id: BlockID.st_p},
{x: +3, y: -5, z: -4, id: BlockID.st_p},
{x: -4, y: -5, z: -3, id: BlockID.st_p},
{x: -4, y: -5, z: -4, id: BlockID.st_p},
{x: -3, y: -5, z: -4, id: BlockID.st_p},

//tier5 upgrade frame_________________________________________________
{x: +6, y: -5, z: +6, id: BlockID.st_f_t5},
{x: -6, y: -5, z: +6, id: BlockID.st_f_t5},
{x: -6, y: -5, z: -6, id: BlockID.st_f_t5},
{x: +6, y: -5, z: -6, id: BlockID.st_f_t5},

{x: +6, y: -6, z: +5, id: BlockID.st_f_t5},
{x: +5, y: -6, z: +6, id: BlockID.st_f_t5},
{x: -5, y: -6, z: +6, id: BlockID.st_f_t5},
{x: -6, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -6, y: -6, z: -5, id: BlockID.st_f_t5},
{x: -5, y: -6, z: -6, id: BlockID.st_f_t5},
{x: +5, y: -6, z: -6, id: BlockID.st_f_t5},
{x: +6, y: -6, z: -5, id: BlockID.st_f_t5},

{x: +4, y: -6, z: -1, id: BlockID.st_f_t5},
{x: +4, y: -6, z: +1, id: BlockID.st_f_t5},
{x: +1, y: -6, z: +4, id: BlockID.st_f_t5},
{x: -1, y: -6, z: +4, id: BlockID.st_f_t5},
{x: -4, y: -6, z: +1, id: BlockID.st_f_t5},
{x: -4, y: -6, z: -1, id: BlockID.st_f_t5},
{x: -1, y: -6, z: -4, id: BlockID.st_f_t5},
{x: +1, y: -6, z: -4, id: BlockID.st_f_t5},

{x: +5, y: -6, z: -3, id: BlockID.st_f_t5},
{x: +5, y: -6, z: +3, id: BlockID.st_f_t5},
{x: +3, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -3, y: -6, z: +5, id: BlockID.st_f_t5},
{x: -5, y: -6, z: +3, id: BlockID.st_f_t5},
{x: -5, y: -6, z: -3, id: BlockID.st_f_t5},
{x: -3, y: -6, z: -5, id: BlockID.st_f_t5},
{x: +3, y: -6, z: -5, id: BlockID.st_f_t5},

//tier5 structure panel_________________________________________________
{x: +3, y: -6, z: 0, id: BlockID.st_p},
{x: +4, y: -6, z: -2, id: BlockID.st_p},
{x: +4, y: -6, z: +2, id: BlockID.st_p},

{x: 0, y: -6, z: +3, id: BlockID.st_p},
{x: -2, y: -6, z: +4, id: BlockID.st_p},
{x: +2, y: -6, z: +4, id: BlockID.st_p},

{x: -3, y: -6, z: 0, id: BlockID.st_p},
{x: -4, y: -6, z: +2, id: BlockID.st_p},
{x: -4, y: -6, z: -2, id: BlockID.st_p},

{x: 0, y: -6, z: -3, id: BlockID.st_p},
{x: -2, y: -6, z: -4, id: BlockID.st_p},
{x: +2, y: -6, z: -4, id: BlockID.st_p},

{x: +5, y: -6, z: +4, id: BlockID.st_p},
{x: +5, y: -6, z: +5, id: BlockID.st_p},
{x: +4, y: -6, z: +5, id: BlockID.st_p},
{x: -4, y: -6, z: +5, id: BlockID.st_p},
{x: -5, y: -6, z: +5, id: BlockID.st_p},
{x: -5, y: -6, z: +4, id: BlockID.st_p},
{x: -5, y: -6, z: -4, id: BlockID.st_p},
{x: -5, y: -6, z: -5, id: BlockID.st_p},
{x: -4, y: -6, z: -5, id: BlockID.st_p},
{x: +4, y: -6, z: -5, id: BlockID.st_p},
{x: +5, y: -6, z: -5, id: BlockID.st_p},
{x: +5, y: -6, z: -4, id: BlockID.st_p},

//tier5 modifiers_________________________________________________
{x: +6, y: -6, z: +6, id: BlockID.st_p},
{x: -6, y: -6, z: +6, id: BlockID.st_p},
{x: -6, y: -6, z: -6, id: BlockID.st_p},
{x: +6, y: -6, z: -6, id: BlockID.st_p},
];
var t5_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},

{x: +2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: +2, id: BlockID.null_modifier},
{x: +2, y: -2, z: +2, id: BlockID.null_modifier},

{x: +3, y: -3, z: -3, id: BlockID.null_modifier},
{x: -3, y: -3, z: -3, id: BlockID.null_modifier},
{x: +3, y: -3, z: +3, id: BlockID.null_modifier},
{x: -3, y: -3, z: +3, id: BlockID.null_modifier},

{x: +4, y: -4, z: -4, id: BlockID.null_modifier},
{x: +4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: -4, id: BlockID.null_modifier},

{x: +5, y: -5, z: +5, id: BlockID.null_modifier},
{x: -5, y: -5, z: +5, id: BlockID.null_modifier},
{x: -5, y: -5, z: -5, id: BlockID.null_modifier},
{x: +5, y: -5, z: -5, id: BlockID.null_modifier},
];




// file: EnvironmentalTech/creating/NanoBot Beacon/Structures/tier6.js

var t6_nb = [
//tier1 upgrade frame_________________________________________________
{x: -1, y: 0, z: -1, id: BlockID.st_f_t6},
{x: -1, y: 0, z: +1, id: BlockID.st_f_t6},
{x: +1, y: 0, z: +1, id: BlockID.st_f_t6},
{x: +1, y: 0, z: -1, id: BlockID.st_f_t6},

{x: +1, y: -1, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -1, z: -1, id: BlockID.st_f_t6},
{x: -1, y: -1, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -1, z: +1, id: BlockID.st_f_t6},

{x: +2, y: -1, z: -2, id: BlockID.st_f_t6},
{x: -2, y: -1, z: -2, id: BlockID.st_f_t6},
{x: -2, y: -1, z: +2, id: BlockID.st_f_t6},
{x: +2, y: -1, z: +2, id: BlockID.st_f_t6},

{x: +1, y: -2, z: -2, id: BlockID.st_f_t6},
{x: +2, y: -2, z: -1, id: BlockID.st_f_t6},
{x: +2, y: -2, z: +1, id: BlockID.st_f_t6},
{x: +1, y: -2, z: +2, id: BlockID.st_f_t6},
{x: -1, y: -2, z: +2, id: BlockID.st_f_t6},
{x: -2, y: -2, z: +1, id: BlockID.st_f_t6},
{x: -2, y: -2, z: -1, id: BlockID.st_f_t6},
{x: -1, y: -2, z: -2, id: BlockID.st_f_t6},

//tier1 structure panel_________________________________________________
{x: +1, y: -2, z: -1, id: BlockID.st_p},
{x: +1, y: -2, z: 0, id: BlockID.st_p},
{x: +1, y: -2, z: +1, id: BlockID.st_p},
{x: 0, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: +1, id: BlockID.st_p},
{x: -1, y: -2, z: 0, id: BlockID.st_p},
{x: -1, y: -2, z: -1, id: BlockID.st_p},
{x: 0, y: -2, z: -1, id: BlockID.st_p},

//tier2 upgrade frame_________________________________________________
{x: +3, y: -2, z: -3, id: BlockID.st_f_t6},
{x: +3, y: -2, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -2, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -2, z: -3, id: BlockID.st_f_t6},
{x: +2, y: -3, z: -3, id: BlockID.st_f_t6},

{x: +3, y: -3, z: -2, id: BlockID.st_f_t6},
{x: +3, y: -3, z: +2, id: BlockID.st_f_t6},
{x: +2, y: -3, z: +3, id: BlockID.st_f_t6},
{x: -2, y: -3, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -3, z: +2, id: BlockID.st_f_t6},
{x: -3, y: -3, z: -2, id: BlockID.st_f_t6},
{x: -2, y: -3, z: -3, id: BlockID.st_f_t6},

{x: +2, y: -3, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -3, z: -2, id: BlockID.st_f_t6},
{x: -2, y: -3, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -3, z: +2, id: BlockID.st_f_t6},

//tier2 structure panel_________________________________________________
{x: +1, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -2, id: BlockID.st_p},
{x: +2, y: -3, z: -1, id: BlockID.st_p},
{x: +2, y: -3, z: +1, id: BlockID.st_p},
{x: +2, y: -3, z: +2, id: BlockID.st_p},
{x: +1, y: -3, z: +2, id: BlockID.st_p},
{x: -1, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +2, id: BlockID.st_p},
{x: -2, y: -3, z: +1, id: BlockID.st_p},
{x: -2, y: -3, z: -1, id: BlockID.st_p},
{x: -2, y: -3, z: -2, id: BlockID.st_p},
{x: -1, y: -3, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t6},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t6},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t6},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t6},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t6},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t6},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t6},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t6},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t6},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t6},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t6},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t6},

//tier3 structure panel_________________________________________________
{x: +2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: -2, id: BlockID.st_p},
{x: -2, y: -4, z: 0, id: BlockID.st_p},
{x: 0, y: -4, z: +2, id: BlockID.st_p},

{x: +3, y: -4, z: +2, id: BlockID.st_p},
{x: +3, y: -4, z: +3, id: BlockID.st_p},
{x: +2, y: -4, z: +3, id: BlockID.st_p},
{x: -2, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +3, id: BlockID.st_p},
{x: -3, y: -4, z: +2, id: BlockID.st_p},
{x: -3, y: -4, z: -2, id: BlockID.st_p},
{x: -3, y: -4, z: -3, id: BlockID.st_p},
{x: -2, y: -4, z: -3, id: BlockID.st_p},
{x: +2, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -3, id: BlockID.st_p},
{x: +3, y: -4, z: -2, id: BlockID.st_p},

//tier3 upgrade frame_________________________________________________
{x: +4, y: -3, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -3, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -3, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -3, z: -4, id: BlockID.st_f_t6},

{x: +3, y: -4, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -4, z: -3, id: BlockID.st_f_t6},
{x: +4, y: -4, z: +3, id: BlockID.st_f_t6},
{x: +3, y: -4, z: +4, id: BlockID.st_f_t6},
{x: -3, y: -4, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -4, y: -4, z: -3, id: BlockID.st_f_t6},
{x: -3, y: -4, z: -4, id: BlockID.st_f_t6},

{x: +3, y: -4, z: -1, id: BlockID.st_f_t6},
{x: +3, y: -4, z: +1, id: BlockID.st_f_t6},
{x: +1, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -1, y: -4, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -4, z: +1, id: BlockID.st_f_t6},
{x: -3, y: -4, z: -1, id: BlockID.st_f_t6},
{x: -1, y: -4, z: -3, id: BlockID.st_f_t6},
{x: +1, y: -4, z: -3, id: BlockID.st_f_t6},


//tier4 upgrade frame_________________________________________________
{x: +5, y: -4, z: +5, id: BlockID.st_f_t6},
{x: -5, y: -4, z: +5, id: BlockID.st_f_t6},
{x: -5, y: -4, z: -5, id: BlockID.st_f_t6},
{x: +5, y: -4, z: -5, id: BlockID.st_f_t6},

{x: +5, y: -5, z: +4, id: BlockID.st_f_t6},
{x: +4, y: -5, z: +5, id: BlockID.st_f_t6},
{x: -4, y: -5, z: +5, id: BlockID.st_f_t6},
{x: -5, y: -5, z: +4, id: BlockID.st_f_t6},
{x: -5, y: -5, z: -4, id: BlockID.st_f_t6},
{x: -4, y: -5, z: -5, id: BlockID.st_f_t6},
{x: +5, y: -5, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -5, z: -5, id: BlockID.st_f_t6},

{x: 0, y: -5, z: -3, id: BlockID.st_f_t6},
{x: +3, y: -5, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -5, z: +3, id: BlockID.st_f_t6},
{x: -3, y: -5, z: 0, id: BlockID.st_f_t6},
{x: +2, y: -5, z: -4, id: BlockID.st_f_t6},
{x: -2, y: -5, z: -4, id: BlockID.st_f_t6},
{x: -4, y: -5, z: -2, id: BlockID.st_f_t6},
{x: -4, y: -5, z: +2, id: BlockID.st_f_t6},
{x: -2, y: -5, z: +4, id: BlockID.st_f_t6},
{x: +2, y: -5, z: +4, id: BlockID.st_f_t6},
{x: +4, y: -5, z: +2, id: BlockID.st_f_t6},
{x: +4, y: -5, z: -2, id: BlockID.st_f_t6},

//tier4 structure panel_________________________________________________
{x: -1, y: -5, z: -3, id: BlockID.st_p},
{x: +1, y: -5, z: -3, id: BlockID.st_p},
{x: +3, y: -5, z: -1, id: BlockID.st_p},
{x: +3, y: -5, z: +1, id: BlockID.st_p},
{x: +1, y: -5, z: +3, id: BlockID.st_p},
{x: -1, y: -5, z: +3, id: BlockID.st_p},
{x: -3, y: -5, z: +1, id: BlockID.st_p},
{x: -3, y: -5, z: -1, id: BlockID.st_p},
{x: -4, y: -5, z: +3, id: BlockID.st_p},
{x: -4, y: -5, z: +4, id: BlockID.st_p},
{x: -3, y: -5, z: +4, id: BlockID.st_p},
{x: +3, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +4, id: BlockID.st_p},
{x: +4, y: -5, z: +3, id: BlockID.st_p},
{x: +4, y: -5, z: -3, id: BlockID.st_p},
{x: +4, y: -5, z: -4, id: BlockID.st_p},
{x: +3, y: -5, z: -4, id: BlockID.st_p},
{x: -4, y: -5, z: -3, id: BlockID.st_p},
{x: -4, y: -5, z: -4, id: BlockID.st_p},
{x: -3, y: -5, z: -4, id: BlockID.st_p},

//tier5 upgrade frame_________________________________________________
{x: +6, y: -5, z: +6, id: BlockID.st_f_t6},
{x: -6, y: -5, z: +6, id: BlockID.st_f_t6},
{x: -6, y: -5, z: -6, id: BlockID.st_f_t6},
{x: +6, y: -5, z: -6, id: BlockID.st_f_t6},

{x: +6, y: -6, z: +5, id: BlockID.st_f_t6},
{x: +5, y: -6, z: +6, id: BlockID.st_f_t6},
{x: -5, y: -6, z: +6, id: BlockID.st_f_t6},
{x: -6, y: -6, z: +5, id: BlockID.st_f_t6},
{x: -6, y: -6, z: -5, id: BlockID.st_f_t6},
{x: -5, y: -6, z: -6, id: BlockID.st_f_t6},
{x: +5, y: -6, z: -6, id: BlockID.st_f_t6},
{x: +6, y: -6, z: -5, id: BlockID.st_f_t6},

{x: +4, y: -6, z: -1, id: BlockID.st_f_t6},
{x: +4, y: -6, z: +1, id: BlockID.st_f_t6},
{x: +1, y: -6, z: +4, id: BlockID.st_f_t6},
{x: -1, y: -6, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -6, z: +1, id: BlockID.st_f_t6},
{x: -4, y: -6, z: -1, id: BlockID.st_f_t6},
{x: -1, y: -6, z: -4, id: BlockID.st_f_t6},
{x: +1, y: -6, z: -4, id: BlockID.st_f_t6},

{x: +5, y: -6, z: -3, id: BlockID.st_f_t6},
{x: +5, y: -6, z: +3, id: BlockID.st_f_t6},
{x: +3, y: -6, z: +5, id: BlockID.st_f_t6},
{x: -3, y: -6, z: +5, id: BlockID.st_f_t6},
{x: -5, y: -6, z: +3, id: BlockID.st_f_t6},
{x: -5, y: -6, z: -3, id: BlockID.st_f_t6},
{x: -3, y: -6, z: -5, id: BlockID.st_f_t6},
{x: +3, y: -6, z: -5, id: BlockID.st_f_t6},

//tier5 structure panel_________________________________________________
{x: +3, y: -6, z: 0, id: BlockID.st_p},
{x: +4, y: -6, z: -2, id: BlockID.st_p},
{x: +4, y: -6, z: +2, id: BlockID.st_p},

{x: 0, y: -6, z: +3, id: BlockID.st_p},
{x: -2, y: -6, z: +4, id: BlockID.st_p},
{x: +2, y: -6, z: +4, id: BlockID.st_p},

{x: -3, y: -6, z: 0, id: BlockID.st_p},
{x: -4, y: -6, z: +2, id: BlockID.st_p},
{x: -4, y: -6, z: -2, id: BlockID.st_p},

{x: 0, y: -6, z: -3, id: BlockID.st_p},
{x: -2, y: -6, z: -4, id: BlockID.st_p},
{x: +2, y: -6, z: -4, id: BlockID.st_p},

{x: +5, y: -6, z: +4, id: BlockID.st_p},
{x: +5, y: -6, z: +5, id: BlockID.st_p},
{x: +4, y: -6, z: +5, id: BlockID.st_p},
{x: -4, y: -6, z: +5, id: BlockID.st_p},
{x: -5, y: -6, z: +5, id: BlockID.st_p},
{x: -5, y: -6, z: +4, id: BlockID.st_p},
{x: -5, y: -6, z: -4, id: BlockID.st_p},
{x: -5, y: -6, z: -5, id: BlockID.st_p},
{x: -4, y: -6, z: -5, id: BlockID.st_p},
{x: +4, y: -6, z: -5, id: BlockID.st_p},
{x: +5, y: -6, z: -5, id: BlockID.st_p},
{x: +5, y: -6, z: -4, id: BlockID.st_p},

//tier6 ugrade frame_________________________________________________
{x: +7, y: -6, z: +7, id: BlockID.st_f_t6},
{x: -7, y: -6, z: +7, id: BlockID.st_f_t6},
{x: -7, y: -6, z: -7, id: BlockID.st_f_t6},
{x: +7, y: -6, z: -7, id: BlockID.st_f_t6},

{x: +7, y: -7, z: +6, id: BlockID.st_f_t6},
{x: +6, y: -7, z: +7, id: BlockID.st_f_t6},
{x: -6, y: -7, z: +7, id: BlockID.st_f_t6},
{x: -7, y: -7, z: +6, id: BlockID.st_f_t6},
{x: -7, y: -7, z: -6, id: BlockID.st_f_t6},
{x: -6, y: -7, z: -7, id: BlockID.st_f_t6},
{x: +6, y: -7, z: -7, id: BlockID.st_f_t6},
{x: +7, y: -7, z: -6, id: BlockID.st_f_t6},

{x: +4, y: -7, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -7, z: +4, id: BlockID.st_f_t6},
{x: -4, y: -7, z: 0, id: BlockID.st_f_t6},
{x: 0, y: -7, z: -4, id: BlockID.st_f_t6},
{x: -2, y: -7, z: +5, id: BlockID.st_f_t6},
{x: +2, y: -7, z: +5, id: BlockID.st_f_t6},
{x: +5, y: -7, z: +2, id: BlockID.st_f_t6},
{x: +5, y: -7, z: -2, id: BlockID.st_f_t6},
{x: -5, y: -7, z: +2, id: BlockID.st_f_t6},
{x: -5, y: -7, z: -2, id: BlockID.st_f_t6},
{x: -2, y: -7, z: -5, id: BlockID.st_f_t6},
{x: +2, y: -7, z: -5, id: BlockID.st_f_t6},

{x: +6, y: -7, z: +4, id: BlockID.st_f_t6},
{x: +6, y: -7, z: -4, id: BlockID.st_f_t6},
{x: +4, y: -7, z: +6, id: BlockID.st_f_t6},
{x: +4, y: -7, z: -6, id: BlockID.st_f_t6},
{x: -4, y: -7, z: +6, id: BlockID.st_f_t6},
{x: -6, y: -7, z: +4, id: BlockID.st_f_t6},
{x: -6, y: -7, z: -4, id: BlockID.st_f_t6},
{x: -4, y: -7, z: -6, id: BlockID.st_f_t6},

//tier6 structure panel_________________________________________________
{x: +4, y: -7, z: 0, id: BlockID.st_f_t6},
{x: +5, y: -7, z: -3, id: BlockID.st_p},
{x: +5, y: -7, z: +3, id: BlockID.st_p},
{x: +6, y: -7, z: +5, id: BlockID.st_p},
{x: +6, y: -7, z: +6, id: BlockID.st_p},
{x: +5, y: -7, z: +6, id: BlockID.st_p},
{x: +6, y: -7, z: -5, id: BlockID.st_p},
{x: +6, y: -7, z: -6, id: BlockID.st_p},
{x: +5, y: -7, z: -6, id: BlockID.st_p},

{x: -4, y: -7, z: 0, id: BlockID.st_f_t6},
{x: -5, y: -7, z: -3, id: BlockID.st_p},
{x: -5, y: -7, z: +3, id: BlockID.st_p},
{x: -6, y: -7, z: +5, id: BlockID.st_p},
{x: -6, y: -7, z: +6, id: BlockID.st_p},
{x: -5, y: -7, z: +6, id: BlockID.st_p},
{x: -6, y: -7, z: -5, id: BlockID.st_p},
{x: -6, y: -7, z: -6, id: BlockID.st_p},
{x: -5, y: -7, z: -6, id: BlockID.st_p},

{x: 0, y: -7, z: -4, id: BlockID.st_f_t6},
{x: -3, y: -7, z: -5, id: BlockID.st_p},
{x: +3, y: -7, z: -5, id: BlockID.st_p},

{x: 0, y: -7, z: +4, id: BlockID.st_f_t6},
{x: -3, y: -7, z: +5, id: BlockID.st_p},
{x: +3, y: -7, z: +5, id: BlockID.st_p},

{x: +4, y: -7, z: -1, id: BlockID.st_p},
{x: +4, y: -7, z: +1, id: BlockID.st_p},
{x: +1, y: -7, z: +4, id: BlockID.st_p},
{x: -1, y: -7, z: +4, id: BlockID.st_p},
{x: -4, y: -7, z: +1, id: BlockID.st_p},
{x: -4, y: -7, z: -1, id: BlockID.st_p},
{x: -1, y: -7, z: -4, id: BlockID.st_p},
{x: +1, y: -7, z: -4, id: BlockID.st_p},

//tier6 modifiers_________________________________________________
{x: +7, y: -7, z: -7, id: BlockID.st_p},
{x: -7, y: -7, z: -7, id: BlockID.st_p},
{x: -7, y: -7, z: +7, id: BlockID.st_p},
{x: +7, y: -7, z: +7, id: BlockID.st_p},
];
var t6_nb_m = [
{x: +1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: -1, id: BlockID.null_modifier},
{x: -1, y: -1, z: +1, id: BlockID.null_modifier},
{x: +1, y: -1, z: +1, id: BlockID.null_modifier},

{x: +2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: -2, id: BlockID.null_modifier},
{x: -2, y: -2, z: +2, id: BlockID.null_modifier},
{x: +2, y: -2, z: +2, id: BlockID.null_modifier},

{x: +3, y: -3, z: -3, id: BlockID.null_modifier},
{x: -3, y: -3, z: -3, id: BlockID.null_modifier},
{x: +3, y: -3, z: +3, id: BlockID.null_modifier},
{x: -3, y: -3, z: +3, id: BlockID.null_modifier},

{x: +4, y: -4, z: -4, id: BlockID.null_modifier},
{x: +4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: +4, id: BlockID.null_modifier},
{x: -4, y: -4, z: -4, id: BlockID.null_modifier},

{x: +5, y: -5, z: +5, id: BlockID.null_modifier},
{x: -5, y: -5, z: +5, id: BlockID.null_modifier},
{x: -5, y: -5, z: -5, id: BlockID.null_modifier},
{x: +5, y: -5, z: -5, id: BlockID.null_modifier},

{x: +6, y: -6, z: +6, id: BlockID.null_modifier},
{x: -6, y: -6, z: +6, id: BlockID.null_modifier},
{x: -6, y: -6, z: -6, id: BlockID.null_modifier},
{x: +6, y: -6, z: -6, id: BlockID.null_modifier},
]




// file: EnvironmentalTech/creating/NanoBot Beacon/tier1.js


MachineRegistry.registerPrototype(BlockID.pnbbct1, {
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
		let m = modifierAugmentApi.getModifier(t1_nb_m, x, y, z);
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
		var structure = ValkyrieLib.getStructure(x, y, z, t1_nb);
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





// file: EnvironmentalTech/creating/NanoBot Beacon/tier2.js


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





// file: EnvironmentalTech/creating/NanoBot Beacon/tier3.js


MachineRegistry.registerPrototype(BlockID.pnbbct3, {
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
		let m = modifierAugmentApi.getModifier(t3_nb_m, x, y, z);
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
		var structure = ValkyrieLib.getStructure(x, y, z, t3_nb);
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





// file: EnvironmentalTech/creating/NanoBot Beacon/tier4.js


MachineRegistry.registerPrototype(BlockID.pnbbct4, {
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
		let m = modifierAugmentApi.getModifier(t4_nb_m, x, y, z);
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
		var structure = ValkyrieLib.getStructure(x, y, z, t4_nb);
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





// file: EnvironmentalTech/creating/NanoBot Beacon/tier5.js


MachineRegistry.registerPrototype(BlockID.pnbbct5, {
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
		let m = modifierAugmentApi.getModifier(t5_nb_m, x, y, z);
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
		var structure = ValkyrieLib.getStructure(x, y, z, t5_nb);
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





// file: EnvironmentalTech/creating/NanoBot Beacon/tier6.js


MachineRegistry.registerPrototype(BlockID.pnbbct6, {
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
		let m = modifierAugmentApi.getModifier(t6_nb_m, x, y, z);
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
		var structure = ValkyrieLib.getStructure(x, y, z, t6_nb);
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
		return this.data.esm;
	}
});














		
















// file: EnvironmentalTech/creating/Void_Miners/Ore/tier1.js

/*
 * Litherite Void Miner Controller Tier 1
 * Gui and MachineRegistry
 */
const vomct_l_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 1"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_l_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_litherite = new UI.StandartWindow(vomct_l_gui); 

MachineRegistry.registerPrototype(BlockID.vomct1, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 660,
      work_time: 600,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_litherite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working+ "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t1_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t1_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t1_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t1_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t1_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t1_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t1_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t1_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t1_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm1_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Ore/tier2.js

/*
 * Erodium Void Miner Controller Tier 2
 * Gui and MachineRegistry
 */
const vomct_e_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 2"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_e_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_erodium = new UI.StandartWindow(vomct_e_gui);

MachineRegistry.registerPrototype(BlockID.vomct2, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 575,
      work_time: 400,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_erodium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t2_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t2_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t2_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t2_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t2_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t2_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t2_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t2_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t2_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
      let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm2_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Ore/tier3.js

/*
 * Kyronite Void Miner Controller Tier 3
 * Gui and MachineRegistry
 */
const vomct_k_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 3"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_k_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_kyronite = new UI.StandartWindow(vomct_k_gui);

MachineRegistry.registerPrototype(BlockID.vomct3, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 750,
      work_time: 300,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_kyronite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t3_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t3_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t3_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t3_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t3_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t3_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t3_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t3_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t3_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm3_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Ore/tier4.js

/*
 * Pladium Void Miner Controller Tier 4
 * Gui and MachineRegistry
 */
const vomct_p_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 4"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_p_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_pladium = new UI.StandartWindow(vomct_p_gui);

MachineRegistry.registerPrototype(BlockID.vomct4, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 900,
      work_time: 200,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_pladium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t4_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t4_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t4_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t4_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t4_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t4_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t4_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t4_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t4_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
      let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm4_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Ore/tier5.js

/*
 * Ionite Void Miner Controller Tier 5
 * Gui and MachineRegistry
 */
const vomct_i_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 5"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_i_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_ionite = new UI.StandartWindow(vomct_i_gui);

MachineRegistry.registerPrototype(BlockID.vomct5, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 1000,
      work_time: 100,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_ionite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t5_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t5_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t5_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t5_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t5_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t5_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t5_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t5_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t5_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
      let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm5_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Ore/tier6.js

/*
 * Aethium Void Miner Controller Tier 6
 * Gui and MachineRegistry
 */
const vomct_a_gui = {
  standart: {
    header: {
      text: {
      text: "Void Ore Miner Controller Tier 6"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vomct_a_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  ore_miner_aethium = new UI.StandartWindow(vomct_a_gui);

MachineRegistry.registerPrototype(BlockID.vomct6, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 800,
      work_time: 40,
      timer: 0
    },
    getGuiScreen: function () {
        return ore_miner_aethium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(t6_vom_random_clear);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(t6_vom_random_black);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(t6_vom_random_white);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(t6_vom_random_red);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(t6_vom_random_blue);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(t6_vom_random_yellow);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(t6_vom_random_cyan);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(t6_vom_random_lime);
      }else
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(t6_vom_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
      let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm6_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier1.js

/*
 * Litherite Void Miner Controller Tier 1
 * Gui and MachineRegistry
 */
const vbmct_l_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 1"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_l_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_litherite = new UI.StandartWindow(vbmct_l_gui);

MachineRegistry.registerPrototype(BlockID.vbmct1, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 160,
      work_time: 600,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_litherite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
      let x = this.x;
      let y = this.y;
      let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm1_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier2.js

/*
 * Erodium Void Miner Controller Tier 2
 * Gui and MachineRegistry
 */
const vbmct_e_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 2"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_e_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_erodium = new UI.StandartWindow(vbmct_e_gui);

MachineRegistry.registerPrototype(BlockID.vbmct2, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 100,
      work_time: 400,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_erodium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm2_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier3.js

/*
 * Kyronite Void Miner Controller Tier 3
 * Gui and MachineRegistry
 */
const vbmct_k_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 3"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_k_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_kyronite = new UI.StandartWindow(vbmct_k_gui);

MachineRegistry.registerPrototype(BlockID.vbmct3, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 100,
      work_time: 300,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_kyronite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm3_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier4.js

/*
 * Pladium Void Miner Controller Tier 4
 * Gui and MachineRegistry
 */
const vbmct_p_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 4"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_p_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_pladium = new UI.StandartWindow(vbmct_p_gui);

MachineRegistry.registerPrototype(BlockID.vbmct4, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 100,
      work_time: 200,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_pladium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm4_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier5.js

/*
 * Ionite Void Miner Controller Tier 5
 * Gui and MachineRegistry
 */
const vbmct_i_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 5"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_i_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_ionite = new UI.StandartWindow(vbmct_i_gui);

MachineRegistry.registerPrototype(BlockID.vbmct5, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 100,
      work_time: 100,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_ionite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;

    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm5_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Botanic/tier6.js

/*
 * Aethium Void Miner Controller Tier 6
 * Gui and MachineRegistry
 */
const vbmct_a_gui = {
  standart: {
    header: {
      text: {
      text: "Void Botanic Miner Controller Tier 6"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vbmct_a_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const botanic_miner_aethium = new UI.StandartWindow(vbmct_a_gui);

MachineRegistry.registerPrototype(BlockID.vbmct6, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 100,
      work_time: 40,
      timer: 0
    },
    getGuiScreen: function () {
        return botanic_miner_aethium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;

    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vbm_random_clear);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vbm_random_green);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vbm_random_brown);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm6_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier1.js

/*
 * Litherite Void Miner Controller Tier 1
 * Gui and MachineRegistry
 */
const vrmct_l_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 1"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_l_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_litherite = new UI.StandartWindow(vrmct_l_gui);

MachineRegistry.registerPrototype(BlockID.vrmct1, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 660,
      work_time: 600,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_litherite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-2, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm1_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier2.js

/*
 * Erodium Void Miner Controller Tier 2
 * Gui and MachineRegistry
 */
const vrmct_e_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 2"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_e_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_erodium = new UI.StandartWindow(vrmct_e_gui);

MachineRegistry.registerPrototype(BlockID.vrmct2, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 575,
      work_time: 400,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_erodium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-3, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm2_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier3.js

/*
 * Kyronite Void Miner Controller Tier 3
 * Gui and MachineRegistry
 */
const vrmct_k_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 3"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_k_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_kyronite = new UI.StandartWindow(vrmct_k_gui);

MachineRegistry.registerPrototype(BlockID.vrmct3, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 750,
      work_time: 300,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_kyronite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-4, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm3_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier4.js

/*
 * Pladium Void Miner Controller Tier 4
 * Gui and MachineRegistry
 */
const vrmct_p_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 4"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_p_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_pladium = new UI.StandartWindow(vrmct_p_gui);

MachineRegistry.registerPrototype(BlockID.vrmct4, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 900,
      work_time: 200,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_pladium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-5, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm4_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier5.js

/*
 * Ionite Void Miner Controller Tier 5
 * Gui and MachineRegistry
 */
const vrmct_i_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 5"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_i_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_ionite = new UI.StandartWindow(vrmct_i_gui);

MachineRegistry.registerPrototype(BlockID.vrmct5, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 1000,
      work_time: 100,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_ionite;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm5_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/creating/Void_Miners/Resource/tier6.js

/*
 * Aethium Void Miner Controller Tier 6
 * Gui and MachineRegistry
 */
const vrmct_a_gui = {
  standart: {
    header: {
      text: {
      text: "Void Resource Miner Controller Tier 6"}
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
  drawing: [
    {type: "bitmap", x: 640, y: 200, bitmap: "border", scale: 3.2},
  ],
  elements: {
    "energyScale": {type: "scale", x: 640, y: 200, direction: 0, bitmap: "energy", scale: 3.2},
    "textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 160, width: 300, height: 39, text: "Storage: "},
    "storage_max": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 300, width: 300, height: 39, text: "Storage: "},
    "consumption": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 330, width: 300, height: 39, text: "Storage: "},
    "work_time": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 360, width: 300, height: 39, text: "Storage: "},
    "working": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 390, width: 300, height: 39, text: "Storage: "},
    "time_left": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 640, y: 420, width: 300, height: 39, text: "Storage: "},
  }
};
slots = 0;
for(let y_pos=0;y_pos<8;y_pos++){
  for(let x_pos=0;x_pos<5;x_pos++){
    vrmct_a_gui.elements["slot_"+slots] = {type: "slot", x: 320+x_pos*60, y: 40+y_pos*60};
    slots++;
  }
}
const  resource_miner_aethium = new UI.StandartWindow(vrmct_a_gui);

MachineRegistry.registerPrototype(BlockID.vrmct6, {
    defaultValues: {
      energy_storage_max: 50000,
      energy_consumption: 800,
      work_time: 40,
      timer: 0
    },
    getGuiScreen: function () {
        return resource_miner_aethium;
    },
    tick: function(){
    this.setDefaultValues();
    this.checkStorage();
    isValidStructure = false;
    this.validStructure();
    let content = this.container.getGuiContent();
    if(working){
      if(isValidStructure){
        if(this.data.energy >= this.data.energy_consumption){
          this.data.timer+=1;
          this.getLens();
          this.data.energy -= this.data.energy_consumption;
            if(this.data.timer == this.data.work_time){
              if(drop_item !== "lol"){
                this.addItemToStorage(drop_item.id);
              }else{
                //alert("dropped");
              }
              this.resetTimer();
            }
          }else{this.resetTimer();}
        }else{this.resetTimer();}
      }
      this.container.setScale("energyScale", this.data.energy / this.data.energy_storage_max);
      this.container.setText("textStorage", "Storage: " + this.data.energy+"/"+this.data.energy_storage_max);
      this.container.setText("storage_max", "Storage max: " +this.data.energy_storage_max);
      this.container.setText("consumption", "Consumption: " +this.data.energy_consumption);
      this.container.setText("work_time", "Work Time: " +this.data.work_time/20+" seconds");
      this.container.setText("working", "Working: " + working + "  Valid: " + isValidStructure);
      let time_left = this.data.work_time-this.data.timer;
      time_left = Math.floor(Math.min(time_left/20));
      this.container.setText("time_left", "Time left: " + time_left+" seconds");
    },
    checkStorage: function(){
      for (let i = 0; i<40; i++) {
        let slot = this.container.getSlot("slot_" + i);
        if(!slot.id){
          working =true;
          break;
        }else if(Item.getMaxStack(slot.id) - slot.count !== 0){
          working = true;
          break;
        }
      }
    },
    setDefaultValues: function(){
      this.data.energy_storage_max = this.defaultValues.energy_storage_max;
      this.data.energy_consumption = this.defaultValues.energy_consumption;
      this.data.work_time = this.defaultValues.work_time;
    },
    addItemToStorage: function (items) {
      for (let i = 0; i<40; i++) {
       let slot = this.container.getSlot("slot_" + i);
       if(!slot.id){
         slot.id = items;
         slot.count = 1;
         slot.data = 0;
         working =true;
         break;
       }else if(slot.id === items && Item.getMaxStack(slot.id) - slot.count !== 0){
         slot.count += 1;
         working = true;
         break;
       }
      }
    },
    getLens: function(){
      if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_black){
        drop_item = get_random(vrm_random_black);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_red){
        drop_item = get_random(vrm_random_red);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_green){
        drop_item = get_random(vrm_random_green);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_brown){
        drop_item = get_random(vrm_random_brown);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_blue){
        drop_item = get_random(vrm_random_blue);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_purple){
        drop_item = get_random(vrm_random_purple);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_cyan){
        drop_item = get_random(vrm_random_cyan);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_light_gray){
        drop_item = get_random(vrm_random_light_gray);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_gray){
        drop_item = get_random(vrm_random_gray);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_pink){
        drop_item = get_random(vrm_random_pink);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_lime){
        drop_item = get_random(vrm_random_lime);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_yellow){
        drop_item = get_random(vrm_random_yellow);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_light_blue){
        drop_item = get_random(vrm_random_light_blue);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_magenta){
        drop_item = get_random(vrm_random_magenta);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_orange){
        drop_item = get_random(vrm_random_orange);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_white){
        drop_item = get_random(vrm_random_white);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_clear){
        drop_item = get_random(vrm_random_clear);
      }else if(World.getBlock(this.x,this.y-6, this.z).id === BlockID.laser_lens_crystal){
        drop_item = get_random(vrm_random_crystal);
      }else{
        this.resetTimer();
        drop_item = "lol";
      }
    },
    validStructure: function(){
    	let x = this.x;
		  let y = this.y;
		  let z = this.z;
      isValidStructure = ValkyrieLib.getStructure(x, y, z, vm6_structure);
    },
    resetTimer: function(){
      this.data.timer=0;
    },
    energyTick: function (type, src) {
        this.data.energy += src.get(this.data.energy_storage_max - this.data.energy);
    },
    getEnergyStorage: function(){
		 return this.data.energy;
	 }
});




// file: EnvironmentalTech/translations.js

Translation.addTranslation("Mica", {ru: "Миса "});
Translation.addTranslation("Null modifier", {ru: " Модификатор "});
Translation.addTranslation("Speed modifier", {ru: " Модификатор Скорости "});
Translation.addTranslation("Piezo modifier", {ru: " Модификатор пйезо "});
Translation.addTranslation("Accuracy modifier", {ru: " Модификатор Аккуратности "});
Translation.addTranslation("Regen modifier", {ru: " Модификатор Регенерации "});
Translation.addTranslation("Absorption modifier", {ru: " Модификатор Поглощения "});
Translation.addTranslation("Haste modifier", {ru: " Модификатор Скорости добычи"});
Translation.addTranslation("Resistance modifier", {ru: " Модификатор Сопротивления "});
Translation.addTranslation("Water modifier", {ru: " Модификатор Подводного дыхания "});
Translation.addTranslation("Jump modifier", {ru: " Модификатор Прыжка "});
Translation.addTranslation("Night modifier", {ru: " Модификатор Ночного видения"});
Translation.addTranslation("Saturation modifier", {ru: " Модификатор "});
Translation.addTranslation("Luck modifier", {ru: " Модификатор Удачи"});
Translation.addTranslation("Flight modifier", {ru: " Модификатор Полета"});
Translation.addTranslation("Health Boost modifier", {ru: " Модификатор "});
Translation.addTranslation("Fire immunity modifier", {ru: " Модификатор Иммунитета к огню"});
Translation.addTranslation("Invisibility modifier", {ru: " Модификатор невидимости"});
Translation.addTranslation("Strength modifier", {ru: " Модификатор Силы"});
Translation.addTranslation("Structure frame tier 1", {ru: " Структурный блок 1 уровня "});
Translation.addTranslation("Structure frame tier 2", {ru: " Структурный блок 2 уровня "});
Translation.addTranslation("Structure frame tier 3", {ru: " Структурный блок 3 уровня "});
Translation.addTranslation("Structure frame tier 4", {ru: " Структурный блок 4 уровня "});
Translation.addTranslation("Structure frame tier 5", {ru: " Структурный блок 5 уровня "});
Translation.addTranslation("Structure frame tier 6", {ru: " Структурный блок 6 уровня "});
Translation.addTranslation("Structure panel", {ru: " Структурная панель "});
Translation.addTranslation("Clear Structure panel", {ru: " Чистая структурная панель "});
Translation.addTranslation("Litherite solar panel", {ru: " Лизеритовая солнечная панель "});
Translation.addTranslation("Erodium solar panel", {ru: " Эродиумовая Солнечная панель "});
Translation.addTranslation("Kyronite solar panel", {ru: " Киронитовая Солнечная панель "});
Translation.addTranslation("Pladium solar panel", {ru: " Пладиумовая Солнечная панель "});
Translation.addTranslation("Ionite solar panel", {ru: " Ионитовая Солнечная панель "});
Translation.addTranslation("Aethium solar panel", {ru: " Аезиумовая Солнечная панель "});
Translation.addTranslation("Light Rod", {ru: " Громовой стержень "});
Translation.addTranslation("Insulated Light Rod", {ru: " Защищенный Громовой стержень "});
Translation.addTranslation("Laser core", {ru: " Лазерное ядро "});
Translation.addTranslation("Laser Lens clear", {ru: " Чистая Лазерная линза "});
Translation.addTranslation("Laser Lens crystal", {ru: " Кристальная лазерная линза "});
Translation.addTranslation("Laser Lens white", {ru: " Белая лазерная линза "});
Translation.addTranslation("Laser Lens orange", {ru: " Оранжевая лазерная линза "});
Translation.addTranslation("Laser Lens magenta", {ru: " Пурпурная лазерная линза "});
Translation.addTranslation("Laser Lens light blue", {ru: " Светло-синяя лазерная линза "});
Translation.addTranslation("Laser Lens yellow", {ru: " Желтая лазерная линза "});
Translation.addTranslation("Laser Lens lime", {ru: " Лаймовая лазерная линза "});
Translation.addTranslation("Laser Lens pink", {ru: " Розовая лазерная линза "});
Translation.addTranslation("Laser Lens gray", {ru: " Серая лазерная линза "});
Translation.addTranslation("Laser Lens light_gray", {ru: " Светло-серая лазерная линза "});
Translation.addTranslation("Laser Lens cyan", {ru: " Голубая лазерная линза "});
Translation.addTranslation("Laser Lens purple", {ru: " Фиолетовая лазерная линза "});
Translation.addTranslation("Laser Lens blue", {ru: " Синяя лазерная линза "});
Translation.addTranslation("Laser Lens brown", {ru: " Коричневая лазерная линза "});
Translation.addTranslation("Laser Lens green", {ru: " Зеленая лазерная линза "});
Translation.addTranslation("Laser Lens red", {ru: " Красная лазерная линза "});
Translation.addTranslation("Laser Lens black", {ru: " Черная лазерная линза "});
Translation.addTranslation("Interconnect", {ru: " Интерконнект "});
Translation.addTranslation("Solar Array Controller Tier 1", {ru: " Солнечный контроллер 1 тира "});
Translation.addTranslation("Solar Array Controller Tier 2", {ru: " Солнечный контроллер 2 тира "});
Translation.addTranslation("Solar Array Controller Tier 3", {ru: " Солнечный контроллер 3 тира "});
Translation.addTranslation("Solar Array Controller Tier 4", {ru: " Солнечный контроллер 4 тира "});
Translation.addTranslation("Solar Array Controller Tier 5", {ru: " Солнечный контроллер 5 тира "});
Translation.addTranslation("Solar Array Controller Tier 6", {ru: " Солнечный контроллер 6 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 1", {ru: " Контроллер рудного пустотного карьера 1 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 2", {ru: " Контроллер рудного пустотного карьера 2 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 3", {ru: " Контроллер рудного пустотного карьера 3 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 4", {ru: " Контроллер рудного пустотного карьера 4 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 5", {ru: " Контроллер рудного пустотного карьера 5 тира "});
Translation.addTranslation("Void Ore Miner Controller Tier 6", {ru: " Контроллер рудного пустотного карьера 6 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 1", {ru: " Контроллер ресурсного пустотного карьера 1 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 2", {ru: " Контроллер ресурсного пустотного карьера 2 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 3", {ru: " Контроллер ресурсного пустотного карьера 3 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 4", {ru: " Контроллер ресурсного пустотного карьера 4 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 5", {ru: " Контроллер ресурсного пустотного карьера 5 тира "});
Translation.addTranslation("Void Resource Miner Controller Tier 6", {ru: " Контроллер ресурсного пустотного карьера 6 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 1", {ru: " Контроллер ботанического пустотного карьера 1 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 2", {ru: " Контроллер ботанического пустотного карьера 2 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 3", {ru: " Контроллер ботанического пустотного карьера 3 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 4", {ru: " Контроллер ботанического пустотного карьера 4 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 5", {ru: " Контроллер ботанического пустотного карьера 5 тира "});
Translation.addTranslation("Void Botanic Miner Controller Tier 6", {ru: " Контроллер ботанического пустотного карьера 6 тира "});
Translation.addTranslation("Lightning Controller Tier 1", {ru: " Контроллер громоотвода 1 тира "});
Translation.addTranslation("Lightning Controller Tier 2", {ru: " Контроллер громоотвода 2 тира "});
Translation.addTranslation("Lightning Controller Tier 3", {ru: " Контроллер громоотвода 3 тира "});
Translation.addTranslation("Lightning Controller Tier 4", {ru: " Контроллер громоотвода 4 тира "});
Translation.addTranslation("Lightning Controller Tier 5", {ru: " Контроллер громоотвода 5 тира "});
Translation.addTranslation("Lightning Controller Tier 6", {ru: " Контроллер громоотвода 6 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 1", {ru: " Персональный контроллер нано ботов 1 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 2", {ru: " Персональный контроллер нано ботов 2 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 3", {ru: " Персональный контроллер нано ботов 3 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 4", {ru: " Персональный контроллер нано ботов 4 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 5", {ru: " Персональный контроллер нано ботов 5 тира "});
Translation.addTranslation("Personal Nano Bot Beacon Controller Tier 6", {ru: " Персональный контроллер нано ботов 6 тира "});




// file: Lunar/lunar_config.js

var Lunar_config = {
	tier1: {
		gen_night: __config__.access("Lunar_t1.gen_night")
	},
	tier2: {
		gen_night: __config__.access("Lunar_t2.gen_night")
	},
	tier3: {
		gen_night: __config__.access("Lunar_t3.gen_night")
	},
	tier4: {
		gen_night: __config__.access("Lunar_t4.gen_night")
	},
	tier5: {
		gen_night: __config__.access("Lunar_t5.gen_night")
	},
	tier6: {
		gen_night: __config__.access("Lunar_t6.gen_night")
	}
}




// file: Lunar/define.js

IDRegistry.genBlockID("lunar_sp");
IDRegistry.genItemID("lunarvoltaic");
IDRegistry.genBlockID("lact1");
IDRegistry.genBlockID("lact2");
IDRegistry.genBlockID("lact3");
IDRegistry.genBlockID("lact4");
IDRegistry.genBlockID("lact5");
IDRegistry.genBlockID("lact6");




// file: Lunar/create.js

Block.createBlock("lunar_sp", [{name: "Lunar panel", texture: [["st_p", 0], ["lunar_p", 0], ["st_p", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.lunar_sp, {x: 0, y: 0, z: 0}, {x: 1, y: 13/16, z: 1});
Block.createBlock("lact1", [{name: "Lunar Array Controller Tier 1", texture: [["lact1_bottom", 0], ["st_p", 0], ["lact1_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact2", [{name: "Lunar Array Controller Tier 2", texture: [["lact2_bottom", 0], ["st_p", 0], ["lact2_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact3", [{name: "Lunar Array Controller Tier 3", texture: [["lact3_bottom", 0], ["st_p", 0], ["lact3_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact4", [{name: "Lunar Array Controller Tier 4", texture: [["lact4_bottom", 0], ["st_p", 0], ["lact4_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact5", [{name: "Lunar Array Controller Tier 5", texture: [["lact5_bottom", 0], ["st_p", 0], ["lact5_sides", 0]], inCreative: true}], light_block_envtech);
Block.createBlock("lact6", [{name: "Lunar Array Controller Tier 6", texture: [["lact6_bottom", 0], ["st_p", 0], ["lact6_sides", 0]], inCreative: true}], light_block_envtech);

Item.createItem("lunarvoltaic", "Lunarvoltaic Cell", {name: "lunarvoltaic_cell", meta: 0}, {stack: 64});
ValkyrieLib.solarModel("lact1");
ValkyrieLib.solarModel("lact2");
ValkyrieLib.solarModel("lact3");
ValkyrieLib.solarModel("lact4");
ValkyrieLib.solarModel("lact5");
ValkyrieLib.solarModel("lact6");




// file: Lunar/crafts.js

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.photovoltaic, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "], [
    'a', 351, 4,
		'b', 351, 1]);
});




// file: Lunar/Solar/Structures/tier1.js

var t1_lunar = [
{x: -1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.st_f_t1},
{x: +2, y: +1, z: -1, id: BlockID.st_f_t1},
{x: +2, y: +1, z: -2, id: BlockID.st_f_t1},
{x: +1, y: +1, z: -2, id: BlockID.st_f_t1},
{x: 0, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -1, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: +1, z: -2, id: BlockID.st_f_t1},
{x: -2, y: +1, z: -1, id: BlockID.st_f_t1},
{x: -2, y: +1, z: 0, id: BlockID.st_f_t1},
{x: -2, y: +1, z: +1, id: BlockID.st_f_t1},
{x: -2, y: +1, z: +2, id: BlockID.st_f_t1},
{x: -1, y: +1, z: +2, id: BlockID.st_f_t1},
{x: 0, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +1, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +2, y: +1, z: +2, id: BlockID.st_f_t1},
{x: +2, y: +1, z: +1, id: BlockID.st_f_t1},
];




// file: Lunar/Solar/Structures/tier2.js

var t2_lunar = [
{x: -1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -1, id: BlockID.null_modifier},
{x: +2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +3, y: +1, z: +2, id: BlockID.st_f_t2},
{x: +3, y: +1, z: +1, id: BlockID.st_f_t2},
{x: +3, y: +1, z: 0, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -1, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -2, id: BlockID.st_f_t2},
{x: +3, y: +1, z: -3, id: BlockID.st_f_t2},
{x: +2, y: +1, z: -3, id: BlockID.st_f_t2},
{x: +1, y: +1, z: -3, id: BlockID.st_f_t2},
{x: 0, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -1, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -2, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -3, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -2, id: BlockID.st_f_t2},
{x: -3, y: +1, z: -1, id: BlockID.st_f_t2},
{x: -3, y: +1, z: 0, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +1, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +2, id: BlockID.st_f_t2},
{x: -3, y: +1, z: +3, id: BlockID.st_f_t2},
{x: -2, y: +1, z: +3, id: BlockID.st_f_t2},
{x: -1, y: +1, z: +3, id: BlockID.st_f_t2},
{x: 0, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +1, y: +1, z: +3, id: BlockID.st_f_t2},
{x: +2, y: +1, z: +3, id: BlockID.st_f_t2},
];




// file: Lunar/Solar/Structures/tier3.js

var t3_lunar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: +3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +3, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +2, id: BlockID.st_f_t3},
{x: +4, y: +1, z: +1, id: BlockID.st_f_t3},
{x: +4, y: +1, z: 0, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -1, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -2, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -3, id: BlockID.st_f_t3},
{x: +4, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +3, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +2, y: +1, z: -4, id: BlockID.st_f_t3},
{x: +1, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -1, y: +1, z: -4, id: BlockID.st_f_t3},
{x: 0, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -2, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -3, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -4, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -3, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -2, id: BlockID.st_f_t3},
{x: -4, y: +1, z: -1, id: BlockID.st_f_t3},
{x: -4, y: +1, z: 0, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +1, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +2, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +3, id: BlockID.st_f_t3},
{x: -4, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -3, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -2, y: +1, z: +4, id: BlockID.st_f_t3},
{x: -1, y: +1, z: +4, id: BlockID.st_f_t3},
{x: 0, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +1, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +2, y: +1, z: +4, id: BlockID.st_f_t3},
{x: +3, y: +1, z: +4, id: BlockID.st_f_t3},
];




// file: Lunar/Solar/Structures/tier4.js

var t4_lunar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +4, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +3, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +2, id: BlockID.st_f_t4},
{x: +5, y: +1, z: +1, id: BlockID.st_f_t4},
{x: +5, y: +1, z: 0, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -1, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -2, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -3, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -4, id: BlockID.st_f_t4},
{x: +5, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +4, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +3, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +2, y: +1, z: -5, id: BlockID.st_f_t4},
{x: +1, y: +1, z: -5, id: BlockID.st_f_t4},
{x: 0, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -1, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -2, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -3, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -4, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -5, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -4, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -3, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -2, id: BlockID.st_f_t4},
{x: -5, y: +1, z: -1, id: BlockID.st_f_t4},
{x: -5, y: +1, z: 0, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +1, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +2, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +3, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +4, id: BlockID.st_f_t4},
{x: -5, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -4, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -3, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -2, y: +1, z: +5, id: BlockID.st_f_t4},
{x: -1, y: +1, z: +5, id: BlockID.st_f_t4},
{x: 0, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +1, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +2, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +3, y: +1, z: +5, id: BlockID.st_f_t4},
{x: +4, y: +1, z: +5, id: BlockID.st_f_t4},
];




// file: Lunar/Solar/Structures/tier5.js

var t5_lunar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +2, id: BlockID.null_modifier},
{x: -2, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +5, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -5, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -5, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +5, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +4, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +3, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +2, id: BlockID.st_f_t5},
{x: +6, y: +1, z: +1, id: BlockID.st_f_t5},
{x: +6, y: +1, z: 0, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -1, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -2, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -3, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -4, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: +6, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +5, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +4, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +3, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +2, y: +1, z: -6, id: BlockID.st_f_t5},
{x: +1, y: +1, z: -6, id: BlockID.st_f_t5},
{x: 0, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -1, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -2, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -3, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -4, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -5, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -6, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -5, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -4, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -3, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -2, id: BlockID.st_f_t5},
{x: -6, y: +1, z: -1, id: BlockID.st_f_t5},
{x: -6, y: +1, z: 0, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +1, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +2, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +3, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +4, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +5, id: BlockID.st_f_t5},
{x: -6, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -5, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -4, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -3, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -2, y: +1, z: +6, id: BlockID.st_f_t5},
{x: -1, y: +1, z: +6, id: BlockID.st_f_t5},
{x: 0, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +1, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +2, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +3, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +4, y: +1, z: +6, id: BlockID.st_f_t5},
{x: +5, y: +1, z: +6, id: BlockID.st_f_t5},
];




// file: Lunar/Solar/Structures/tier6.js

var t6_lunar = [
{x: +2, y: 0, z: -1, id: BlockID.null_modifier},
{x: +1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -1, y: 0, z: -2, id: BlockID.null_modifier},
{x: -2, y: 0, z: -1, id: BlockID.null_modifier},
{x: -2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +1, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +1, id: BlockID.null_modifier},
{x: -2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +2, y: 0, z: +2, id: BlockID.null_modifier},
{x: -2, y: 0, z: +2, id: BlockID.null_modifier},
{x: +2, y: 0, z: -2, id: BlockID.null_modifier},
{x: +4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -1, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +1, id: BlockID.lunar_sp},
{x: 0, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +5, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -5, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -5, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +5, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +5, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +4, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +3, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +2, id: BlockID.lunar_sp},
{x: +6, y: +1, z: +1, id: BlockID.lunar_sp},
{x: +6, y: +1, z: 0, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -1, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -2, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -3, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -4, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -5, id: BlockID.lunar_sp},
{x: +6, y: +1, z: -6, id: BlockID.lunar_sp},
{x: +5, y: +1, z: -6, id: BlockID.lunar_sp},
{x: +4, y: +1, z: -6, id: BlockID.lunar_sp},
{x: +3, y: +1, z: -6, id: BlockID.lunar_sp},
{x: +2, y: +1, z: -6, id: BlockID.lunar_sp},
{x: +1, y: +1, z: -6, id: BlockID.lunar_sp},
{x: 0, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -1, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -2, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -3, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -4, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -5, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -6, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -5, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -4, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -3, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -2, id: BlockID.lunar_sp},
{x: -6, y: +1, z: -1, id: BlockID.lunar_sp},
{x: -6, y: +1, z: 0, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +1, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +2, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +3, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +4, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +5, id: BlockID.lunar_sp},
{x: -6, y: +1, z: +6, id: BlockID.lunar_sp},
{x: -5, y: +1, z: +6, id: BlockID.lunar_sp},
{x: -4, y: +1, z: +6, id: BlockID.lunar_sp},
{x: -3, y: +1, z: +6, id: BlockID.lunar_sp},
{x: -2, y: +1, z: +6, id: BlockID.lunar_sp},
{x: -1, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +1, y: +1, z: +6, id: BlockID.lunar_sp},
{x: 0, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +2, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +3, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +4, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +5, y: +1, z: +6, id: BlockID.lunar_sp},
{x: +7, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +6, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +5, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +4, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +3, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +2, id: BlockID.st_f_t6},
{x: +7, y: +1, z: +1, id: BlockID.st_f_t6},
{x: +7, y: +1, z: 0, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -1, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -2, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -3, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -4, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -5, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -6, id: BlockID.st_f_t6},
{x: +7, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +6, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +5, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +4, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +3, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +2, y: +1, z: -7, id: BlockID.st_f_t6},
{x: +1, y: +1, z: -7, id: BlockID.st_f_t6},
{x: 0, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -1, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -2, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -3, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -4, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -5, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -6, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -7, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -6, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -5, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -4, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -3, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -2, id: BlockID.st_f_t6},
{x: -7, y: +1, z: -1, id: BlockID.st_f_t6},
{x: -7, y: +1, z: 0, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +1, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +2, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +3, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +4, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +5, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +6, id: BlockID.st_f_t6},
{x: -7, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -6, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -5, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -4, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -2, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -3, y: +1, z: +7, id: BlockID.st_f_t6},
{x: -1, y: +1, z: +7, id: BlockID.st_f_t6},
{x: 0, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +1, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +2, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +3, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +4, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +5, y: +1, z: +7, id: BlockID.st_f_t6},
{x: +6, y: +1, z: +7, id: BlockID.st_f_t6},
];




// file: Lunar/Solar/tier1.js

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




// file: Lunar/Solar/tier2.js

var erodium_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Erodium Lunar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.lact2, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return erodium_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier2.gen_night;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t2_lunar);
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
		let gen = Lunar_config.tier2.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier2.gen_night;
		if(time > 13500 && time < 22500)
			src.add(gen);
	}
});




// file: Lunar/Solar/tier3.js

var kyronite_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Kyronite Lunar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.lact3, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return kyronite_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier3.gen_night; 
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t3_lunar);
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
		let gen = Lunar_config.tier3.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier3.gen_night;
		if(time > 13500 && time < 22500)
			src.add(gen);
	}
});




// file: Lunar/Solar/tier4.js

var pladium_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Pladium Lunar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.lact4, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return pladium_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier4.gen_night;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t4_lunar);
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
		let gen = Lunar_config.tier4.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier4.gen_night;
		if(time > 13500 && time < 22500)
			src.add(gen);
	}
});




// file: Lunar/Solar/tier5.js

var ionite_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ionite Lunar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.lact5, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return ionite_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier5.gen_night;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t5_lunar);
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
		let gen = Lunar_config.tier5.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier5.gen_night;
		if(time > 13500 && time < 22500)
			src.add(gen);
	}
});




// file: Lunar/Solar/tier6.js

var aethium_lunar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "aethium Lunar Panel"}},
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

MachineRegistry.registerPrototype(BlockID.lact6, {
	isGenerator: function() {
		return true;
	},

	getGuiScreen: function(){
		return aethium_lunar;
	},

	tick: function(){
		let gen = Lunar_config.tier6.gen_night;
		var content = this.container.getGuiContent();
		let x = this.x;
		let y = this.y;
		let z = this.z;
		let time = World.getWorldTime();
		let structure = ValkyrieLib.getStructure(x, y, z, t6_lunar);
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
		let gen = Lunar_config.tier6.gen_night;
		if(time > 13500 && time < 22500)
			return gen;
		else
			return 0;
	},
	energyTick: function(type, src){
		let time = World.getWorldTime();
		let gen = Lunar_config.tier6.gen_night;
		if(this.data.time > 13500 && this.data.time < 22500)
			src.add(gen);
	}
});




// file: EnvironmentalTech/creating/models.js

//Beacons
  ValkyrieLib.beaconModel("1");
  ValkyrieLib.beaconModel("2");
  ValkyrieLib.beaconModel("3");
  ValkyrieLib.beaconModel("4");
  ValkyrieLib.beaconModel("5");
  ValkyrieLib.beaconModel("6");
//Void Miners
//ore miner
  ValkyrieLib.minerModel("1", "o");
  ValkyrieLib.minerModel("2", "o");
  ValkyrieLib.minerModel("3", "o");
  ValkyrieLib.minerModel("4", "o");
  ValkyrieLib.minerModel("5", "o");
  ValkyrieLib.minerModel("6", "o");
//resource miner
  ValkyrieLib.minerModel("1", "r");
  ValkyrieLib.minerModel("2", "r");
  ValkyrieLib.minerModel("3", "r");
  ValkyrieLib.minerModel("4", "r");
  ValkyrieLib.minerModel("5", "r");
  ValkyrieLib.minerModel("6", "r");
//botanic miner
  ValkyrieLib.minerModel("1", "b");
  ValkyrieLib.minerModel("2", "b");
  ValkyrieLib.minerModel("3", "b");
  ValkyrieLib.minerModel("4", "b");
  ValkyrieLib.minerModel("5", "b");
  ValkyrieLib.minerModel("6", "b");
//Solars
  ValkyrieLib.solarModel("1");
  ValkyrieLib.solarModel("2");
  ValkyrieLib.solarModel("3");
  ValkyrieLib.solarModel("4");
  ValkyrieLib.solarModel("5");
  ValkyrieLib.solarModel("6");
//Lightning
  ValkyrieLib.lightningModel("1");
  ValkyrieLib.lightningModel("2");
  ValkyrieLib.lightningModel("3");
  ValkyrieLib.lightningModel("4");
  ValkyrieLib.lightningModel("5");
  ValkyrieLib.lightningModel("6");
//Lens
  ValkyrieLib.lens_creator("black", 0);
  ValkyrieLib.lens_creator("red", 1);
  ValkyrieLib.lens_creator("green", 2);
  ValkyrieLib.lens_creator("brown", 3);
  ValkyrieLib.lens_creator("blue", 4);
  ValkyrieLib.lens_creator("purple", 5);
  ValkyrieLib.lens_creator("cyan", 6);
  ValkyrieLib.lens_creator("light_gray", 7);
  ValkyrieLib.lens_creator("gray", 8);
  ValkyrieLib.lens_creator("pink", 9);
  ValkyrieLib.lens_creator("lime", 10);
  ValkyrieLib.lens_creator("yellow", 11);
  ValkyrieLib.lens_creator("light_blue", 12);
  ValkyrieLib.lens_creator("magenta", 13);
  ValkyrieLib.lens_creator("orange", 14);
  ValkyrieLib.lens_creator("white", 15);
  ValkyrieLib.lens_creator("clear", 16);
  ValkyrieLib.lens_creator("crystal", 17);




