'use strict';
/* 
 * Date Feb- 12, 2016
 * Author : vinodha
 */
materialAdmin
		.controller('leadCtrl', function ($scope, $stateParams, growlService, contactService) {
			$scope.targetId = $stateParams.targetId;
			var data = {id: $scope.targetId
			};
			//Edit
			this.basicInformation = 0;
			this.contactInformation = 0;
			this.addressInformation = 0;
			this.otherInformation = 0;
			$scope.getContactsDetails = function () {
				var result = contactService.getContactsDetails(data).success(function (res) {
					console.log("Service Result");
					$scope.data = res.result;
					console.log($scope.data);
				}).error(function (data, status, headers, config) {
					alert('fail');
				});
			};

			this.submit = function (item, message) {				
				var result = contactService.updateContactById($scope.data).success(function (res) {
					console.log("Update Service Result");
					console.log(res.result);
					if (item === 'basicInformation') {
					this.basicInformation = 0;
				} else if (item === 'contactInformation') {
					this.contactInformation = 0;
				} else if (item === 'addressInformation') {
					this.addressInformation = 0;
				}else if (item === 'otherInformation') {
					this.otherInformation = 0;
				}
				}).error(function (data, status, headers, config) {
					console.log("Update Service Result");
					alert('fail');
				});
				

				growlService.growl(message + ' has updated Successfully!', 'inverse');
			}
		});