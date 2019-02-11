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



