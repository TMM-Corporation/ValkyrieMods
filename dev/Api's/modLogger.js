modLogger = {
	config: {
		path:  __dir__,
		file: "modLogger.log",
	},
	Logger: {
		Delete: function(){
			let fp = this.config.path+this.config.file;
			if(FileTools.isExists(fp)){
				FileAPI.deleteF(fp);
			}
		},
		Log: function(text){
			let fp = FileAPI.select(this.config.path, this.config.file);
			if(FileTools.isExists(this.config.path+this.config.file)){
				let cache = FileAPI.read(fp);
				FileAPI.write(fp, cache+text);
			}else{
				FileAPI.create(this.config.path, this.config.file);
				modLogger.Logger.Log(text);
			}
		}
	}
}