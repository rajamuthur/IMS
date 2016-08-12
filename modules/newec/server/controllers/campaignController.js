'use strict';

exports.updateTemplate = function (req, res, next) {
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.deleteEmailTemplate = function (req, res, next) {
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.deleteSchdTemplate = function (req, res, next) {
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.getSchdTemplate = function (req, res, next) {
	var data = [
					{
						"id": 600,
						"name": "Follow 1",
						"created_on": "2016-01-18 01:02:04",
						"updated_on": "2016-01-18 01:02:04",
					},
					{
						"id": 601,
						"name": "Follow 2",
						"created_on": "2016-01-16 01:02:04",
						"updated_on": "2016-01-16 01:02:04",
					},
					{
						"id": 602,
						"name": "Follow 3",
						"created_on": "2016-01-10 01:02:04",
						"updated_on": "2016-01-10 01:02:04",
					}
				];
//		return data;
		res.send({"result": data});
};

exports.getAllTemplate = function (req, res, next) {
	var data = [
		{
						"id": 10250,
						"name": "Template 1",
						"owner": "Dhilip",
						"created_on": "2016-01-18 01:02:04",
						"updated_on": "2016-01-18 01:02:04",
						"mailid": "2010",
					},
					{
						"id": 10251,
						"name": "Template 2",
						"owner": "Dhilip",
						"created_on": "2016-01-19 01:02:04",
						"updated_on": "2016-01-19 01:02:04",
						"mailid": "2011",
					},
					{
						"id": 10252,
						"name": "Template 3",
						"owner": "Dhilip",
						"created_on": "2016-01-20 01:02:04",
						"updated_on": "2016-01-20 01:02:04",
						"mailid": "2012",
					}
				];
//		return data;
		res.send({"result": data});
};

exports.getTemplateDetailsById = function (req, res, next) {
	var data = [
		{
						"id": 10250,
						"name": "Template 1",
						"owner": "Dhilip",
						"created_on": "2016-01-18 01:02:04",
						"updated_on": "2016-01-18 01:02:04",
						"mailid": "2010",
					},
					{
						"id": 10251,
						"name": "Template 2",
						"owner": "Dhilip",
						"created_on": "2016-01-19 01:02:04",
						"updated_on": "2016-01-19 01:02:04",
						"mailid": "2011",
					},
					{
						"id": 10252,
						"name": "Template 3",
						"owner": "Dhilip",
						"created_on": "2016-01-20 01:02:04",
						"updated_on": "2016-01-20 01:02:04",
						"mailid": "2012",
					}
				];
//		return data[0];
		res.send({"result": data[0]});
};

exports.getAllCampaignSettings = function (req, res, next) {
	var data = [		
					{
						"id": 10250,
						"name": "Settings 1",
						"recording1": "yellow",
						"recording2": "green",
						"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "dhilip"

					},
					{
						"id": 10251,
						"name": "Settings 2",
						"recording1": "yellow",
						"recording2": "green",
						"recording3":"blue",
								"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "RM"
					},
					{
						"id": 10252,
						"name": "Settings 3",
						"recording1": "yellow",
						"recording2": "green",
						"recording3":"blue",
								"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "Vinodha"
					}
			];
//		return data;
		res.send({"result": data});
};
exports.getCampSettingDetails = function (req, res, next) {
	var data = [{
						"id": 10250,
						"name": "Settings 1",
						"recording1": "yellow",
						"recording2": "green",
						"recording3": "blue",
						"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "dhilip"

					},
					{
						"id": 10251,
						"name": "Settings 2",
						"recording1": "yellow",
						"recording2": "green",
						"recording3":"blue",
						"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "RM"
					},
					{
						"id": 10252,
						"name": "Settings 3",
						"recording1": "yellow",
						"recording2": "green",
						"recording3":"blue",
						"answering": "white",
						"autoPause": "1",
						"enableDNC": "1",
						"enableRecording": "1",
						"scheduledAppointmentMailFormat": "Red",
						"meetingRemindersEmail": "1",
						"callerId": "9629835888",
						"lines": "4",
						"ringTime": "30",
						"zillowSearch": "1",
						"truliaSearch": "1",
						"sendEmail": "1",
						"owner": "Vinodha"
					}
				];
//		return data[1];
		res.send({"result": data[1]});
};
exports.deleteCampaignSetting = function (req, res, next) {
//	var id = data.id;
	// Do update operation
//	return true;
	res.send({"result": true});
};
exports.updateCampSetting = function (req, res, next) {
//	var id = data.id;
	// Do update operation
//	return true;
	res.send({"result": true});
};
exports.addCampaignSetting = function (req, res, next) {
//	var id = data.id;
	// Do update operation
//	return true;
res.send({"result": true});
};

var getDetails = function (data, id) {

	for (var i = 0; i < data.length; i++)
	{
		if (data[i].id == id)
		{
			return data[i];
		}
	}
};


exports.getContactDetailsById = function (req, res, next) {
	var data = [
					{
						"id": 1,
						"name": "New Bay Realty 4",
						"leads": 12,
						"contacts": 120,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 2,
						"name": "Hardin County Kentucky Medicare Recall Campaign",
						"leads": 1,
						"contacts": 10,
						"lines": 3,
						"status": ""
					},
					{
						"id": 3,
						"name": "Ron Watts-76065-Midlothian 76084-Venus 76009-Alvarodo 76050-Grandview",
						"leads": 2,
						"contacts": 20,
						"lines": 4,
						"status": "Started"
					},
					{
						"id": 4,
						"name": "Larry Thompson- Lincoln Parish, LA NEW- Feb. 2018",
						"leads": 12,
						"contacts": 180,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 5,
						"name": "Ron Watts- Lancaster, TX",
						"leads": 0,
						"contacts": 10,
						"lines": 4,
						"status": "Paused"
					},
					{
						"id": 7,
						"name": "Phoenix BOL Weldon",
						"leads": 12,
						"contacts": 120,
						"lines": 2,
						"status": "Stopped"
					},
					{
						"id": 8,
						"name": "Donnie Campbell - Caldwell Parish",
						"leads": 7,
						"contacts": 120,
						"lines": 2,
						"status": ""
					},
					{
						"id": 9,
						"name": "W 42nd-48th St",
						"leads": 8,
						"contacts": 120,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 10,
						"name": "Nebraska",
						"leads": 6,
						"contacts": 89,
						"lines": 4,
						"status": "Stopped"
					},
					{
						"id": 11,
						"name": "Tampa Prev",
						"leads": 45,
						"contacts": 80,
						"lines": 2,
						"status": "Paused"
					},
					
				];
		var result = getDetails(data, id);
//		return result;
		res.send({"result": result});
	}
			

exports.getCampaigns = function (req, res, next) {
	var data = [
					{
						"id": 1,
						"name": "New Bay Realty 4",
						"leads": 12,
						"contacts": 120,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 2,
						"name": "Hardin County Kentucky Medicare Recall Campaign",
						"leads": 1,
						"contacts": 10,
						"lines": 3,
						"status": ""
					},
					{
						"id": 3,
						"name": "Ron Watts-76065-Midlothian 76084-Venus 76009-Alvarodo 76050-Grandview",
						"leads": 2,
						"contacts": 20,
						"lines": 4,
						"status": "Started"
					},
					{
						"id": 4,
						"name": "Larry Thompson- Lincoln Parish, LA NEW- Feb. 2018",
						"leads": 12,
						"contacts": 180,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 5,
						"name": "Ron Watts- Lancaster, TX",
						"leads": 0,
						"contacts": 10,
						"lines": 4,
						"status": "Paused"
					},
					{
						"id": 7,
						"name": "Phoenix BOL Weldon",
						"leads": 12,
						"contacts": 120,
						"lines": 2,
						"status": "Stopped"
					},
					{
						"id": 8,
						"name": "Donnie Campbell - Caldwell Parish",
						"leads": 7,
						"contacts": 120,
						"lines": 2,
						"status": ""
					},
					{
						"id": 9,
						"name": "W 42nd-48th St",
						"leads": 8,
						"contacts": 120,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 10,
						"name": "Nebraska",
						"leads": 6,
						"contacts": 89,
						"lines": 4,
						"status": "Stopped"
					},
					{
						"id": 11,
						"name": "Tampa Prev",
						"leads": 45,
						"contacts": 80,
						"lines": 2,
						"status": "Paused"
					},
					
				];
//				return data;
				res.send({"result": data});
}
exports.getCampaignsDetailsById = function (req, res, next) {
	var data = [
		{
						"id": 1,
						"name": "New Bay Realty 4",
						"leads": 12,
						"contacts": 120,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 2,
						"name": "Hardin County Kentucky Medicare Recall Campaign",
						"leads": 1,
						"contacts": 10,
						"lines": 3,
						"status": ""
					},
					{
						"id": 3,
						"name": "Ron Watts-76065-Midlothian 76084-Venus 76009-Alvarodo 76050-Grandview",
						"leads": 2,
						"contacts": 20,
						"lines": 4,
						"status": "Started"
					},
					{
						"id": 4,
						"name": "Larry Thompson- Lincoln Parish, LA NEW- Feb. 2018",
						"leads": 12,
						"contacts": 180,
						"lines": 2,
						"status": "Paused"
					},
					{
						"id": 5,
						"name": "Ron Watts- Lancaster, TX",
						"leads": 0,
						"contacts": 10,
						"lines": 4,
						"status": "Paused"
					}
				];
//		return data[0];
		res.send({"result": data[3]});
};