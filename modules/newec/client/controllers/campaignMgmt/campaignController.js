'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for campaign Management
 */

materialAdmin

		.controller('campaignsettingsCtrl', function ($filter, $sce, ngTableParams, $scope, $stateParams, campaignsettingsService) {

			$scope.date = {
				startDate: moment().subtract(1, "days"),
				endDate: moment()
			};
			$scope.date2 = {
				startDate: moment().subtract(1, "days"),
				endDate: moment()
			};

			$scope.opts = {
				locale: {
					applyClass: 'btn-green',
					applyLabel: "Apply",
					fromLabel: "Od",
					toLabel: "Do",
					cancelLabel: 'Cancel',
					customRangeLabel: 'Custom Range',
					daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					firstDay: 1,
					monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					]
				},
				ranges: {
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()]
				}
			};

			$scope.setStartDate = function () {
				$scope.date.startDate = moment().subtract(4, "days");
			};

			$scope.setRange = function () {
				$scope.date = {
					startDate: moment().subtract(5, "days"),
					endDate: moment()
				};
			};

			//Watch for date changes
			$scope.$watch('date', function (newDate) {
				console.log('New date set: ', newDate);
			}, false);
			var data;
			$scope.getAllCampaignSettings = function () {
				var result = campaignsettingsService.getAllCampaignSettings().success(function (res) {
					console.log("Service Result");
					console.log(res.result);
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.settingsEdit = new ngTableParams({
							page: 1, // show first page
							count: 2           // count per page
						}, {
							counts: [], // hide page counts control 
							total: data.length, // length of data
							getData: function ($defer, params) {
								$scope.totalcount = data.length;
								$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
							}
						});
					}
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			
			$scope.deleteCampaignSetting = function (id) {
				var data = {id: id};
				console.log(data);
				var result = campaignsettingsService.deleteCampaignSetting(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};
			
			$scope.getCampSettingDetails = function () {
				$scope.campaignPreferenceId = $stateParams.templateId;
				var data = {id: $scope.campaignPreferenceId
				};
				console.log($scope.campaignPreferenceId);
				var result = campaignsettingsService.getCampSettingDetails(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			
			$scope.updateCampSetting = function () {
				var result = campaignsettingsService.updateCampSetting($scope.data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
			$scope.addCampaignSetting = function () {
				var data = {name: $scope.cname || null,
				phone: $scope.phone,
				autopause: $scope.autopause || null,
				ccalls: $scope.ccalls || null,
				isRecording: $scope.isRecording || null,
				ringTime: $scope.ringTime || null,
				allowDNC: $scope.allowDNC || null,
				onhold1: $scope.onhold1 || null,
				onhold2: $scope.onhold2 || null,
				onhold3: $scope.onhold3 || null,
				amRecording: $scope.amRecording || null,
				emailTemplate: $scope.emailTemplate,
				zillow: $scope.zillow || null,
				trulia: $scope.trulia || null,
				googleMap: $scope.googleMap || null,
				precoding: $scope.precoding || null,
				callTransNumber: $scope.callTransNumber || null,
				callScript: $scope.callScript || null
			};
			console.log('data');
			console.log(data);
				var result = campaignsettingsService.addCampaignSetting(data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
		})

		.controller('mailTemplateCtrl', function ($filter, $sce, $stateParams, ngTableParams, $scope, mailTemplateService, textAngularManager) {

			var data;

			$scope.content = '';

			$scope.insert = function () {
				// code to insert at current position in  html editor
				console.log(textAngularManager);
				var editor = textAngularManager.retrieveEditor('editor').scope;
					$(("div[contenteditable='true']")).focus();
				editor.displayElements.text.trigger('focus');
				editor.wrapSelection('insertHTML', $scope.target, false);
			}
			$scope.getAllTemplates = function () {
				var result = mailTemplateService.getAllTemplates().success(function (res) {
					console.log("Service Result");
					console.log(res.result);
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.settingsEdit = new ngTableParams({
							page: 1, // show first page
							count: 2           // count per page
						}, {
							counts: [], // hide page counts control 
							total: data.length, // length of data
							getData: function ($defer, params) {
								$scope.totalcount = data.length;
								$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
							}
						});
					}
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			$scope.deleteEmailTemplate = function (id) {
				var data = {id: id};
				console.log(data);
				var result = mailTemplateService.deleteEmailTemplate(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};

			$scope.getTemplateDetailsById = function () {
				$scope.templateId = $stateParams.templateId;
				var data = {id: $scope.templateId
				};
				console.log($scope.templateId);
				var result = mailTemplateService.getTemplateDetailsById(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};

			$scope.updateTemplate = function () {
				var result = mailTemplateService.updateTemplate($scope.data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
		})

		.controller('followupEmailsCtrl', function ($scope, $filter, $sce, ngTableParams, followupemailsService, mailTemplateService ) {
			
			var data;
			$scope.getSchdTemplate = function () {
				var result = followupemailsService.getSchdTemplate().success(function (res) {
					console.log("Service Result");
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.followEdit = new ngTableParams({
							page: 1, // show first page
							count: 2           // count per page
						}, {
							counts: [], // hide page counts control 
							total: data.length, // length of data
							getData: function ($defer, params) {
								$scope.totalcount = data.length;
								$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
							}
						});
					}
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			$scope.deleteSchdTemplate = function (id) {
				var data = {id: id};	
				console.log(data);
				var result = followupemailsService.deleteSchdTemplate(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};
			$scope.getAllTemplates = function () {
				var result = mailTemplateService.getAllTemplates().success(function (res) {
					console.log("Service Result");
					console.log(res.result);
					$scope.emailTemplates = res.result;
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};					
		})
		
	materialAdmin
		.controller('campCtrl', function ($scope, $state, $stateParams, $http, $filter, $sce, ngTableParams, campService) {
			console.log('campctrl');
			var data;
			$scope.getCampaigns = function () {
				console.log('campService');
				console.log(campService);
				var result = campService.getCampaigns().success(function (res) {
					console.log("campCtrl Service Result");
					console.log(res);
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.aEdit = new ngTableParams({
							page: 1, // show first page
							count: 10           // count per page
						}, {
							counts: [], // hide page counts control 
							total: data.length, // length of data
							getData: function ($defer, params) {
								$scope.totalcount = data.length;
								$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
							}
						});
					}
				}).error(function (data, status, headers, config) {
					console.log("campCtrl Service Error");
					console.log(data);
					console.log(status);
					console.log(headers);
					console.log(config);
					alert('fail11');
				});
			};
			
			
			$scope.getCampaignsDetailsById = function () {
				$scope.targetId = $stateParams.targetId
					console.log($scope.targetId);
					var data = {id: $scope.targetId};
					var result = campService.getCampaignsDetailsById(data).success(function (res) {
					console.log("getCampaignsDetailsById Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			
			$scope.deleteContactById = function (id) {
				var data = {id: id};	
				console.log(data);
				var result = contactService.deleteContactById(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};
			
		});