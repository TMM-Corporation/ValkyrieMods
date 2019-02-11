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
