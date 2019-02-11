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
