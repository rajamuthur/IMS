'use strict';
exports.getAllRecodings = function(req, res, next){
	var data = [
		{
			"id": 250,
			"name": "Recording 1",
			"uploaded_on": "2016-01-04 01:02:04",
			"owner": "SD"
		},
		{
			"id": 251,
			"name": "Recording 2",
			"uploaded_on": "2016-01-04 02:02:04",
			"owner": "SD"
		},
		{
			"id": 252,
			"name": "Recording 3",
			"uploaded_on": "2016-01-04 03:02:04",
			"owner": "SD"
		}
	];
	res.send({"result": data});
//	return data;
};
exports.getRecodingDetailById = function(req, res, next){
	var data = [{
			"id": 250,
			"name": "Recording 1",
			"uploaded_on": "2016-01-04 01:02:04",
			"owner": "SD"
		},
		{
			"id": 251,
			"name": "Recording 2",
			"uploaded_on": "2016-01-04 02:02:04",
			"owner": "SD"
		},
		{
			"id": 252,
			"name": "Recording 3",
			"uploaded_on": "2016-01-04 03:02:04",
			"owner": "SD"
		}
	];
	res.send({"result": data[1]});
//	return data[1];
};
exports.deleteRecording = function(req, res, next){
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.updateRecording = function(req, res, next){
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.addRecording = function(req, res, next){
//	var id = data.id;
	// Do update operation
//	return true;
	res.send({"result": true});
};
exports.getDetails = function(data, id){

	for (var i = 0; i < data.length; i++)
	{
		if (data[i].id === id)
		{
			return data[i];
		}
	}
};
//module.exports.getAllRecodings = getAllRecodings;
//module.exports.getRecodingDetailById = getRecodingDetailById;
//module.exports.deleteRecording = deleteRecording;
//module.exports.updateRecording = updateRecording;
//module.exports.addRecording = addRecording;