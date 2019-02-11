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
