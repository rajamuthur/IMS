'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for campaign Management
 */

materialAdmin

.controller('appointmentTableCtrl', function ($scope, $filter, $sce, ngTableParams, appointmentsService) {
			
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
			
			var data = appointmentsService.data;
			$scope.time = new Date();
			$scope.showMeridian1 = true;
			$scope.showMeridian = true;
			$scope.raja = true;
			$scope.disabled = true;

			//Sorting
			this.appointmentsSorting = new ngTableParams({
				page: 1, // show first page
				count: 10, // count per page
				sorting: {
					name: 'asc'     // initial sorting
				}
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					// use build-in angular filter
					var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;

					$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			})

			//Filtering
			this.appointmentsFilter = new ngTableParams({
				page: 1, // show first page
				count: 10
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					// use build-in angular filter
					var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

					this.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.username = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.contact = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

					params.total(orderedData.length); // set total for recalc pagination
					$defer.resolve(this.id, this.name, this.email, this.username, this.contact);
				}
			})

			this.appointmentsEdit = new ngTableParams({
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
		});