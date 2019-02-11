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
