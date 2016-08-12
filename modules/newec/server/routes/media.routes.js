'use strict';
/**
 * To handle the media related request from client side
 * 
 * @author vinodha
 * Created on Mar 3, 2016
 */

module.exports = function (app) {
var media = require('../controllers/mediaControllers');
app.route('/getAllRecodings').post(media.getAllRecodings);
app.route('/addRecording').post(media.addRecording);
app.route('/getRecodingDetailById').post(media.getRecodingDetailById);
app.route('/updateRecording').post(media.updateRecording);
app.route('/deleteRecording').post(media.deleteRecording);
};