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
