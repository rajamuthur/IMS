'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Service for recording
 */

materialAdmin

//		.service('campaignsettingsService', [function () {
//				this.data = [];
//			}])
		.factory('campaignsettingsService', ['$http', function ($http) {
				var csData = {};				
				csData.getAllCampaignSettings  = function () {
					return $http({
						method: "post",
						url: '/getAllCampaignSettings',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.updateCampSetting = function (data) {
					return $http({
						method: "post",
						url: '/updateCampSetting',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.deleteCampaignSetting = function (data) {
					return $http({
						method: "post",
						url: '/deleteCampaignSetting',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.getCampSettingDetails = function (data) {
					return $http({
						method: "post",
						url: '/getCampSettingDetails',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.addCampaignSetting = function (data) {
					return $http({
						method: "post",
						url: '/addCampaignSetting',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};

		return csData;
	}])

//		.service('mailTemplateService', [function () {
//				this.data = [];
//			}])
		
		.factory('mailTemplateService', ['$http', function ($http) {
				var emaiTemplatelData = {};				
				emaiTemplatelData.getAllTemplates  = function () {
					return $http({
						method: "post",
						url: '/getSchdTemplate',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				emaiTemplatelData.updateTemplate = function (data) {
					return $http({
						method: "post",
						url: '/updateTemplate',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				emaiTemplatelData.deleteEmailTemplate = function (data) {
					return $http({
						method: "post",
						url: '/deleteContactById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				emaiTemplatelData.getTemplateDetailsById = function (data) {
					return $http({
						method: "post",
						url: '/getTemplateDetailsById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};

		return emaiTemplatelData;
	}])

	.factory('campService', ['$http', function ($http) {
			var campaignDataOp = {};				
			campaignDataOp.getCampaigns = function () {
				return $http({
					method: "post",
					url: '/listCampaigns',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
			};
			campaignDataOp.getCampaignsDetailsById = function (data) {
					return $http({
						method: "post",
						url: '/getCampaignsDetailsById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
			console.log('insdie campService');
			console.log(campaignDataOp);
			return campaignDataOp;
		}])

//		.service('followupemailsService', [function () {
//				this.data = [];
//			}])
		.factory('followupemailsService', ['$http', function ($http) {
				var followupEmailDataOp = {};				
				followupEmailDataOp.getSchdTemplate = function () {
					return $http({
						method: "post",
						url: '/getSchdTemplate',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				followupEmailDataOp.updateContactById = function (data) {
					return $http({
						method: "post",
						url: '/updateContactById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				followupEmailDataOp.deleteSchdTemplate = function (data) {
					return $http({
						method: "post",
						url: '/deleteContactById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				followupEmailDataOp.getContactsDetails = function (data) {
					return $http({
						method: "post",
						url: '/getContactsDetails',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};

		return followupEmailDataOp;
	}]);
