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
