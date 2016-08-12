'use strict';
/* 
 * Date Feb- 17, 2016
 * Author : vinodha
 */
materialAdmin
.factory('contactService', ['$http', function ($http) {
				var contactDataOp = {};				
				contactDataOp.getContactsDetailsById = function (data) {
					return $http({
						method: "post",
						url: '/getContactsDetailsById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				contactDataOp.updateContactById = function (data) {
					return $http({
						method: "post",
						url: '/updateContactById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				contactDataOp.deleteContactById = function (data) {
					return $http({
						method: "post",
						url: '/deleteContactById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				contactDataOp.getContactsDetails = function (data) {
					return $http({
						method: "post",
						url: '/getContactsDetails',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				contactDataOp.getContacts = function () {
						return $http({
							method: "post",
							url: '/listContacts',
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
					};

		return contactDataOp;
	}]);
