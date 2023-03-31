const { response } = require("express");

const path = require("path"),
	fs = require("fs"),
	express = require("express"),
	app = express(),
	cors = require("cors");

app.get("/getDB", cors(), (requset, response) => {
	const data = JSON.parse(fs.readFileSync(__dirname + "/Database/data.json", ""));
	const config = JSON.parse(fs.readFileSync(__dirname + "/Database/config.json", "utf-8"));

	function listCleaner(item, type) {
		if (item.type === type) {
			delete item.type;
			return item;
		}
	}

	const dataList = data.filter(item => listCleaner(item, "list"));
	const dataPipe = data.filter(item => listCleaner(item, "pipe"));
	const dataFix = data.filter(item => listCleaner(item, "fix"));
	const configSize = config.filter(item => listCleaner(item, "size"));
	const configFrame = config.filter(item => listCleaner(item, "frame"));
	const configMaterial = config.filter(item => listCleaner(item, "material"));
	const configFix = config.filter(item => listCleaner(item, "fix"));

	response.send({ data: {
		list: dataList,
		pipe: dataPipe,
		fix: dataFix
	},
	config: {
		size: configSize,
		frame: configFrame,
		material: configMaterial,
		fix: configFix
	}});
})

app.listen(3001, () => { console.log("Сервер начал прослушивание запросов по адресу localhost:3001/") });