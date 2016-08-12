'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Service for recording
 */

materialAdmin

		.factory('mediaService', ['$http', function ($http) {
				var csData = {};				
				csData.getAllRecodings  = function () {
					return $http({
						method: "post",
						url: '/getAllRecodings',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.updateRecording = function (data) {
					return $http({
						method: "post",
						url: '/updateRecording',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.deleteRecording = function (data) {
					return $http({
						method: "post",
						url: '/deleteRecording',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.getRecodingDetailById = function (data) {
					return $http({
						method: "post",
						url: '/getRecodingDetailById',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};
				csData.addRecording = function (data) {
					return $http({
						method: "post",
						url: '/addRecording',
						data: $.param(data),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};

		return csData;
	}]);