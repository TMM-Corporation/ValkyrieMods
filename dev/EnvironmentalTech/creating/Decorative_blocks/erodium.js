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
