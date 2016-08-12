'use strict';
/**
 * To handle the campaign related request from client side
 * 
 * @author vinodha
 * Created on Mar 3, 2016
 */

module.exports = function (app) {
	var campaign = require('../controllers/campaignController');
	app.route('/listCampaigns').post(campaign.getCampaigns);
	app.route('/getCampaignsDetailsById').post(campaign.getCampaignsDetailsById);
	app.route('/getSchdTemplate').post(campaign.getSchdTemplate);
	app.route('/deleteSchdTemplate').post(campaign.deleteSchdTemplate);
	app.route('/getAllTemplate').post(campaign.getAllTemplate);
	app.route('/getTemplateDetailsById').post(campaign.getTemplateDetailsById);
	app.route('/updateTemplate').post(campaign.updateTemplate);
	app.route('/deleteEmailTemplate').post(campaign.deleteEmailTemplate);
	app.route('/getAllCampaignSettings').post(campaign.getAllCampaignSettings);
	app.route('/addCampaignSetting').post(campaign.addCampaignSetting);
	app.route('/getCampSettingDetails').post(campaign.getCampSettingDetails);
	app.route('/updateCampSetting').post(campaign.updateCampSetting);
	app.route('/deleteCampaignSetting').post(campaign.deleteCampaignSetting);
};
