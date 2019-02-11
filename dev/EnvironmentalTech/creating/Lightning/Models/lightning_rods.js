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
