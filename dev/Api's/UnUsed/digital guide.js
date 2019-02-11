IDRegistry.genItemID("digital_guide");
Item.createItem("digital_guide", "Digital Guide", {name: "digital_guide", meta: 0}, {stack: 1});
var modDir = __dir__;
var gui_js = "customizableGui.js";
var g1_2 = 1000/2;
var g1_3 = 1000/3; g1_3 -= 36;
var g1_5 = 1000/5; g1_5 -= 30;
FileAPI.create(modDir+"/dev", gui_js);
var customGui = modDir+"/dev/"+gui_js;
var em = [];
function read(){
	var cache = [];
	cache = FileTools.ReadKeyValueFile(customGui);
	return cache;
}
var text = uneval(UIScrollElement);
var guide_gui = new UI.Window({
 location: {
	padding: {
	 top: 30,
	 bottom: 30,
	 left: 40,
	 right: 40
	}
 },
 drawing: [
	{type: "background", color: null},
	{type: "frame", x: 0, y: 0, width: 1000, height: 597, bitmap: "border6", scale: 4.5},
	{type: "bitmap", x: 20, y: 20, width: 960, height: 530, bitmap: "border7", scale: 1}/*,
	{type: "bitmap", bitmap: "art_1", x: 30, y:30, width: g1_3, height: g1_5, scale: 1.6},
	{type: "bitmap", bitmap: "art_2", x: 30 + g1_3, y:30, width: g1_3, height: g1_5, scale: 1.6},
	{type: "bitmap", bitmap: "art_0", x: 30 + g1_3*2, y:30, width: g1_3, height: g1_5, scale: 1.6},
	{type: "bitmap", bitmap: "art_3", x: 30, y: 180, width: g1_3, height: g1_5, scale: 2.14}*/
 ],
 elements: {
	"e_m": {type: "button", bitmap: "art_1", bitmap2: "art_1_sel", x: 30, y: 30, width: g1_3-10, height: g1_5, scale: 1.3},
	"e_t": {type: "button", bitmap: "art_2", bitmap2: "art_2_sel", x: 45+g1_3, y: 30, width: g1_3-10, height: g1_5, scale: 1.3},
	"e_l": {type: "button", bitmap: "art_0", bitmap2: "art_0_sel", x: 60+g1_3*2, y: 30, width: g1_3-10, height: g1_5, scale: 1.3},
	"e_g": {type: "button", bitmap: "art_3", bitmap2: "art_3_sel", x: 30, y: 180, width: g1_3-10, height: g1_5, scale: 1.3},
	"close": {type: "closeButton", x: 957, y: 558, global: true, bitmap: "close1", bitmap2: "close2", scale: 0.6},
	"prev": {type: "button", x: g1_2-50, y: 558, bitmap: "button_prev", bitmap2: "prev_black", scale: 0.6},
	"next": {type: "button", x: g1_2+60, y: 558, bitmap: "button_next", bitmap2: "next_black", scale: 0.6},
	"home": {type: "button", x: g1_2, y: 558, bitmap: "home", bitmap2: "home_black", scale: 0.7},
 }
});

var containerGuide = new UI.Container();
Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id==ItemID.digital_guide){
		containerGuide.openAs(guide_gui)
	}
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
	if(screenName == "start_screen"){
		em = eval(read());
		alert(em["x1"]);
		containerGuide.openAs(guide_gui);
		content = containerGuide.getGuiContent();
		content.elements["close"].x = em["x1"];
		alert(text);
	}
});
/*if(block.id == BlockID.vomct1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vomct2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vomct3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vomct4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vomct5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vomct6){ValkyrieLib.openGuide(gui);}

	if(block.id == BlockID.vbmct1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vbmct2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vbmct3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vbmct4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vbmct5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vbmct6){ValkyrieLib.openGuide(gui);}

	if(block.id == BlockID.vrmct1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vrmct2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vrmct3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vrmct4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vrmct5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.vrmct6){ValkyrieLib.openGuide(gui);}

	if(block.id == BlockID.sact1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.sact2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.sact3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.sact4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.sact5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.sact6){ValkyrieLib.openGuide(gui);}

	if(block.id == BlockID.lact1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.lact2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.lact3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.lact4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.lact5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.lact6){ValkyrieLib.openGuide(gui);}

	if(block.id == BlockID.pnbbct1){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.pnbbct2){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.pnbbct3){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.pnbbct4){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.pnbbct5){ValkyrieLib.openGuide(gui);}
	if(block.id == BlockID.pnbbct6){ValkyrieLib.openGuide(gui);}*/
