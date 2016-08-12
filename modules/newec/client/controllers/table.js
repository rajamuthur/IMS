'use strict';
materialAdmin
		.controller('tableCtrl', function ($scope, $http, $filter, $sce, ngTableParams, tableService, contactService) {
			var data;
			$scope.getContacts = function () {
				var result = tableService.getContacts().success(function (res) {
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
		})

		.controller('listLeadCtrl', function ($scope, $filter, $sce, ngTableParams, leadService) {
			var data = leadService.data;
			//Editable
//			this.leadEdit = new ngTableParams({
//				page: 1, // show first page
//				count: 10           // count per page
//			}, {
//				total: data.length, // length of data
//				getData: function ($defer, params) {
//					$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//				}
//			});
			
			$scope.getLeads = function () {
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
		})
		.controller('EditContactCtrl', function ($scope, $stateParams, $filter, $sce, ngTableParams, contactService) {
			$scope.targetId = $stateParams.targetId;
			var data = {id: $scope.targetId
			};
			console.log($scope.targetId);
			$scope.getContactsDetailsById = function () {
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
		}
		);