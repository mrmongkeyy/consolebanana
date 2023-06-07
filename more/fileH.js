const fs = require('fs');
const fileTypeHandler = require('./fileTypeHandler');
module.exports = {
	do(req,res){
		this[req.path](req.query.fn,res,req.query.dir);
	},
	"/scripts"(fn,res){
		res.file(`./more/public/scripts/${fn}.js`);
	},
	"/styles"(fn,res){
		res.file(`./more/public/scripts/${fn}.css`);
	},
	"/file"(fn,res,cDir='public/media'){
		//handline filetype.
		res.file(`./more/${cDir}/${fn}`);
	}
}