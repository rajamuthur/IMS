var express = require('express');
var exApp = express();
var bodyParser = require('body-parser');
//var Regex = require("regex");
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://10.100.100.76:27017/sdnew";
var urlencodedParser = bodyParser.urlencoded({extended: false});

exApp.use(express.static(__dirname));
exApp.use(bodyParser.urlencoded({extended: true}));

exApp.get('/index.htm', function (req, res) {
	res.sendFile(__dirname + "/login.html");
});

exApp.get('/home', function (req, res) {
	res.sendFile(__dirname + "/index.html");
});
exApp.post('/checkCredential', urlencodedParser, function (req, res) {
	console.log("req.body");
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	var params = {"username": username, "password": password};
	res.send({"success": true});
});

exApp.post('/listCampaigns', function (req, res) {
//	res.sendFile(__dirname + "/public/sample1.html");
//var db = require('./db.js');
	var campaign = require('./server/controllers/campaignController');
	var result = campaign.getCampaigns();
	console.log(' exApp.post listcampaign: ');
	console.log(campaign);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getCampaignsDetailsById', function (req, res) {
	var targetId = req.body.id;
	var campaign = require('./server/controllers/campaignController');
	var result = campaign.getCampaignsDetailsById(targetId);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/listContacts', function (req, res) {
//	res.sendFile(__dirname + "/public/sample1.html");
//var db = require('./db.js');
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.addX(1000);
	var result = contacts.getContacts();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getContactsDetailsById', function (req, res) {
	var targetId = req.body.id;
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.getContactDetailsById(targetId);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getContactsDetails', function (req, res) {
	var targetId = req.body.id;
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.getContactsDetails(targetId);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/updateContactById', function (req, res) {
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.updateContactById(req.body);
	console.log(req.body);
	res.send({"result": result});
});
exApp.post('/deleteContactById', function (req, res) {
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.deleteContactById(req.body);
	console.log(req.body);
	res.send({"result": result});
});
exApp.post('/listLeads', function (req, res) {
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.getLeads();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/deleteLeadById', function (req, res) {
	var contacts = require('./server/controllers/contactsControllers');
	var result = contacts.deleteLeadById(req.body);
	console.log(result);
	res.send({"result": result});
});

exApp.post('/getSchdTemplate', function (req, res) {
	var controller = require('./server/controllers/campaignController');
	var result = controller.getSchdTemplate();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/deleteSchdTemplate', function (req, res) {
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.deleteSchdTemplate(req.body);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getAllTemplate', function (req, res) {
	var controller = require('./server/controllers/campaignController');
	var result = controller.getAllTemplate();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/deleteEmailTemplate', function (req, res) {
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.deleteEmailTemplate(req.body);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getTemplateDetailsById', function (req, res) {
	var id = req.body.id;
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.getTemplateDetailsById(id);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/updateTemplate', function (req, res) {
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.updateTemplate(req.body);
	console.log(req.body);
	res.send({"result": result});
});

exApp.post('/getAllCampaignSettings', function (req, res) {
	var controller = require('./server/controllers/campaignController');
	var result = controller.getAllCampaignSettings();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getCampSettingDetails', function (req, res) {
	var id = req.body.id;
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.getCampSettingDetails(id);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/updateCampSetting', function (req, res) {
	var contacts = require('./server/controllers/campaignController');
	var result = contacts.updateCampSetting(req.body);
	console.log(req.body);
	res.send({"result": result});
});
exApp.post('/deleteCampaignSetting', function (req, res) {
	var controller = require('./server/controllers/campaignController');
	var result = controller.deleteCampaignSetting(req.body);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/addCampaignSetting', function (req, res) {
	var controller = require('./server/controllers/campaignController');
	var result = controller.addCampaignSetting(req.body);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getAllRecodings', function (req, res) {
	var controller = require('./server/controllers/mediaControllers');
	var result = controller.getAllRecodings();
	console.log(result);
	res.send({"result": result});
});
exApp.post('/getRecodingDetailById', function (req, res) {
	var id = req.body.id;
	var contacts = require('./server/controllers/mediaControllers');
	var result = contacts.getRecodingDetailById(id);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/updateRecording', function (req, res) {
	var contacts = require('./server/controllers/mediaControllers');
	var result = contacts.updateRecording(req.body);
	console.log(req.body);
	res.send({"result": result});
});
exApp.post('/deleteRecording', function (req, res) {
	var controller = require('./server/controllers/mediaControllers');
	var result = controller.deleteRecording(req.body);
	console.log(result);
	res.send({"result": result});
});
exApp.post('/addRecording', function (req, res) {
	var controller = require('./server/controllers/mediaControllers');
	var result = controller.addRecording(req.body);
	console.log(result);
	res.send({"result": result});
});
var server = exApp.listen(8082, function () {

	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port)

});