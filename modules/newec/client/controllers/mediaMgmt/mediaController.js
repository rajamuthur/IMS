'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for campaign Management
 */

materialAdmin

		.controller('mediaCtrl', function ($scope, $filter, $sce, $stateParams, ngTableParams, mediaService) {
			var data;
//			this.recordingEdit = new ngTableParams({
//							page: 1, // show first page
//							count: 2           // count per page
//						}, {
//							counts: [], // hide page counts control 
//							total: data.length, // length of data
//							getData: function ($defer, params) {
//								$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//							}
//						});
			$scope.getAllRecodings = function () {
				var result = mediaService.getAllRecodings().success(function (res) {
					console.log("Service Result");
					console.log(res.result);
					data = res.result;
					if (data.length > 0)
					{
						$scope.data = data;
						//Editable
						$scope.recordingEdit = new ngTableParams({
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
			$scope.deleteRecording = function (id) {
				var data = {id: id};
				console.log(data);
				var result = mediaService.deleteRecording(data).success(function (res) {
					console.log("Delete Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Delete Service Result");
					alert('fail');
				});
			};

			$scope.getRecodingDetailById = function () {
				$scope.mediaId = $stateParams.mediaId;
				var data = {id: $scope.mediaId
				};
				console.log($scope.mediaId);
				var result = mediaService.getRecodingDetailById(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};

			$scope.updateRecording = function () {
				var result = mediaService.updateRecording($scope.data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
			$scope.addRecording = function () {
				var data = {name: $scope.name || null,
				fileName: $scope.fileName
			};
			console.log('data');
			console.log(data);
				var result = mediaService.addRecording(data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
			};
		})

		.controller('recordingCtrl', function (growlService) {
			//Get Profile Information from profileService Service

			//User
			this.media_id = '250';
			this.name = 'Recording 1';
			this.file = 'rec.wav';
			this.owner = 'dhilip';

			//Edit
			this.editRecording = 0;

			this.submit = function (item, message) {

				if (item === 'recording') {
					this.editRecording = 0;
				}

				growlService.growl(message + ' has updated Successfully!', 'inverse');
			}

		});