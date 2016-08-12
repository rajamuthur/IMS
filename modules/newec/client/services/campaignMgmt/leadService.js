'use strict';
/* 
 * Date Feb- 17, 2016
 * Author : vinodha
 */
materialAdmin
		.factory('leadService', ['$http', function ($http) {
				var leadDataOp = {};
				leadDataOp.getLeads = function () {
					return $http({
						method: "post",
						url: '/listLeads',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
							
				leadDataOp.deleteLeadById = function (data) {
					return $http({
						method: "post",
						url: '/deleteLeadById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				return leadDataOp;
			}]);
