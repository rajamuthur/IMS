'use strict';
/* 
 * Date Feb- 12, 2016
 * Author : vinodha
 */
materialAdmin
		.controller('contactCtrl', function ($scope, $state, $stateParams, $http, $filter, $sce, ngTableParams, contactService) {
			var data;
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
			
			$scope.getContacts = function () {
				var result = contactService.getContacts().success(function (res) {
					console.log("Service Result");
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
			
			
			$scope.getLeads = function () {
				var data = leadService.data;
				var result = leadService.getLeads().success(function (res) {
					console.log("Service Result");
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.leadEdit = new ngTableParams({
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
					alert('fail');
				});
			};
			
			$scope.moveToUploadContacts = function(){
				$state.go('campaign.uploadcontact.uploadcontact-step1/:cl');
			}
			
			$scope.deleteLeadById = function (id) {
				var data = {id: id};	
				console.log(data);
				var result = leadService.deleteLeadById(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};
			
			$scope.getContactsDetailsById = function () {
				$scope.targetId = $stateParams.targetId
				console.log($scope.targetId);
					var data = {id: $scope.targetId};
				var result = contactService.getContactsDetailsById(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
			$scope.updateContactById = function () {
				var result = contactService.updateContactById($scope.data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
			
			var param1 = $stateParams.fm;
			console.log('param1:');
			console.log($stateParams);
//			console.log(param1);
			if(param1 === ''){
				//Upload-contact from campaign
				$scope.utitle = 'Create Campaign';
				$scope.uploadcontactSetting = 'Step 2';
				$scope.uploadcontactMapping = 'Step 3';
				$scope.showUploadcontactMapping = true;
				$scope.uploadcontactStep1Sref = 'campaign.uploadcontact.uploadcontact-setting';
				$scope.uploadcontactMappingSref = 'campaign.listcampaign';
				$scope.uploadcontactMappingSwal = 'data-camp-create';
			}else{
				//Upload-contact to contact library
				$scope.uploadcontactStep1Sref = 'campaign.uploadcontact.uploadcontact-mapping({fm:"cl"})';
				$scope.uploadcontactMappingSref = 'contact.listcontact';
				$scope.showUploadcontactMapping = false;
				$scope.uploadcontactSetting = 'Step 2';
				$scope.uploadcontactMapping = 'Step 2';
				$scope.utitle = 'Add Contacts';
				$scope.uploadcontactMappingSwal = 'data-contact-add';
			}
			
			$scope.cfields = [
				{
					label: "Name1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Name2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Email",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number3",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Fax",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Address",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "City",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "State",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Zip Code",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Name1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Name2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Email",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number3",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Fax",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Address",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "City",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "State",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Zip Code",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Name1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Name2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Email",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number1",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
				{
					label: "Number2",
					allowedTypes: ['default'],
					max: 1,
					people: []
				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Name2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Email",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number1",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number2",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Number3",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Fax",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Address",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "City",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "State",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Zip Code",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Country",
//					allowedTypes: ['default'],
//					max: 1,
//					people: []
//				}
				];
				
			$scope.dfields = [
				{
					label: "People",
					allowedTypes: ['default', 'own'],
					max: 60,
					people: [
						{name: "First Name", type: "default"},
						{name: "Last Name", type: "default"},
						{name: "Email", type: "default"},
						{name: "Phone Number1", type: "default"},
						{name: "Phone Number2", type: "default"},
						{name: "Phone Number3", type: "default"},
						{name: "City", type: "default"},
						{name: "Zip Code", type: "default"},
						{name: "Country", type: "default"},
						{name: "State", type: "default"},
						{name: "Address", type: "default"},
						{name: "New Numbers", type: "default"},
						{name: "Fax", type: "default"}
					]
				}
				];
				
//			$scope.lists = [
//				{
//					label: "Men",
//					allowedTypes: ['man'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "Women",
//					allowedTypes: ['woman'],
//					max: 1,
//					people: []
//				},
//				{
//					label: "People",
//					allowedTypes: ['man', 'woman'],
//					max: 60,
//					people: [
//						{name: "Frank", type: "man"},
//						{name: "Mallory", type: "woman"},
//						{name: "Alex", type: "unknown"},
//						{name: "Oscar", type: "man"},
//						{name: "Wendy", type: "woman"}
//					]
//				}
//			];

			// Model to JSON for demo purpose
			$scope.$watch('lists', function (lists) {
				$scope.modelAsJson = angular.toJson(lists, true);
			}, true);
			
			
			$scope.getContactsDetails = function () {
					//Edit
					this.basicInformation = 1;
					this.contactInformation = 1;
					this.addressInformation = 1;
					this.otherInformation = 1;
					$scope.targetId = $stateParams.targetId;
					var data = {id: $scope.targetId
					};
				var result = contactService.getContactsDetails(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};
//			
//			this.moveToUploadContacts = function(){
//				$state.go('campaign.uploadcontact.uploadcontact-step1');
//			}
//
//			this.submit = function (item, message) {				
//				var result = contactService.updateContactById($scope.data).success(function (res) {
//					console.log("Update Service Result");
//					console.log(res.result);
////					if (item === 'basicInformation') {
////					this.basicInformation = 0;
////				} else if (item === 'contactInformation') {
////					this.contactInformation = 0;
////				} else if (item === 'addressInformation') {
////					this.addressInformation = 0;
////				}else if (item === 'otherInformation') {
////					this.otherInformation = 0;
////				}
//				}).error(function (data, status, headers, config) {
//					console.log("Update Service Result");
//					alert('fail');
//				});
//				
//
//				growlService.growl(message + ' has updated Successfully!', 'inverse');
//			}
		});