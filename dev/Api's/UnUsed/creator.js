//11043
IMPORT("ValkyrieBook", "*");
IDRegistry.genItemID("digital_guide");
Item.createItem("digital_guide", "Digital Guide", {name: "digital_guide", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id==ItemID.digital_guide){
		ValkyrieBook.openBook();
	}
});

	ValkyrieBook.BookAddGuide("guidetest", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
ValkyrieBook.BookAddGuide("guidetest1", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
ValkyrieBook.BookAddGuide("guidetest1", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest2", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest3", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest4", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest6", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest7", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest8", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest9", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
	ValkyrieBook.BookAddGuide("guidetest10", {
		item: ItemID.testGuide,
		BookName: "test",
		on: "art_0",
		off: "art_0_sel",
		debug: true,
		textures: {
			background: "your_texture",
			nextLink: "your_texture",
			preLink: "your_texture",
			close: "your_texture",
		},
		pages: {
			"default": {
				elements: []
			}
		}
	});
