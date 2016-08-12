'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for usermanagement
 */

materialAdmin
.controller('userprofileCtrl', function(growlService){
        //Get Profile Information from profileService Service
        
        //User
        this.profileSummary = "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.";
    
        this.salutation = "Mr";
        this.firstName = "Leah ";
        this.lastName = "Jensen";
        this.gender = "Male";
        this.age = "22";
		
		this.id= 113,
		this.role= "Agent";
		this.product_code= "200";
		this.product_name= "SD1MU";
		this.sub_start_date= '2015-10-10';
		this.sub_end_date= '2015-12-10';
		
		this.primary = '(857)-459-2792'
		this.alternate = '(857)-412-2792'
		this.extension = '738'
		this.email = 'leah.jensen27@example.com'
		this.fax = '1-408-999 8888'
    
		this.street = '101 North Spring Street'
		this.city = 'Greensboro'
		this.state = 'NC'
		this.country = 'USA'
		this.zipcode = '27401'
		
		this.username = 'leah'
		this.password = 'leah'
		
		this.hostname='mailsvr.smtp.com'
		this.port='465'
		this.ssl='ssl'
		this.auth='1'
		this.smtpusername='leah.jensen27@example.com'
		this.smtppassword = '*******'
		this.smtppassword1 = 'salesdialers@123'
//				Manager, Manager Id, Number of Agents, Number of Closers
		this.manager = 'Kevin';
		this.manager1 = 'Kevin PPU';
		this.manager2 = 'Kevin UN LTD';
		this.manager_id = 'kevin';
		this.manager_id1 = 'kevinppu';
		this.manager_id2 = 'kevinul';
		this.total_agents = '4';
		this.total_closer = '2';
		
        //Edit
        this.editSummary = 0;
        this.editInfo = 0;
        this.editProfileContactInfo = 0;
        this.editProfileAddressInfo = 0;
        this.editProfileCredentialsInfo = 0;
        this.editProfileSmtpInfo = 0;
        this.editProfileSubscription = 0;
        this.editContact = 0;
    
        
        this.submit = function(item, message) {            
            if(item === 'profileSummary') {
                this.editSummary = 0;
            }
            
            if(item === 'profileBasic') {
                this.editInfo = 0;
            }
			
            if(item === 'profileContact') {
                this.editProfileContactInfo = 0;
            }
			
            if(item === 'profileAddress') {
                this.editProfileAddressInfo = 0;
            }
			
            if(item === 'profileCredentials') {
                this.editProfileCredentialsInfo = 0;
            }
			
            if(item === 'profileSMTP') {
                this.editProfileSmtpInfo = 0;
            }
			
            if(item === 'profileSubscription') {
                this.editProfileSubscription = 0;
            }
            
            if(item === 'profileContact') {
                this.editContact = 0;
            }
            
            growlService.growl(message+' has updated Successfully!', 'inverse'); 
        }

    })
	
	.controller('userCtrl', function ($filter, $sce, ngTableParams, userService) {
			var data = userService.data;
console.log(data);
			//Basic Example
			this.userBasic = new ngTableParams({
				page: 1, // show first page
				count: 5           // count per page
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			})

			//Sorting
			this.userSorting = new ngTableParams({
				page: 1, // show first page
				count: 5, // count per page
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
			this.userFilter = new ngTableParams({
				page: 1, // show first page
				count: 5
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					// use build-in angular filter
					var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

					this.role = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.phone = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.product_code = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.product_name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.sub_start_date = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.sub_end_date = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

					params.total(orderedData.length); // set total for recalc pagination
					$defer.resolve(this.role, this.name, this.id, this.email, this.phone, this.product_code, this.product_name, this.sub_start_date, this.sub_end_date);
				}
			})

			//Editable
			this.userEdit = new ngTableParams({
				page: 1, // show first page
				count: 5           // count per page
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			});
		})


		.controller('userCtrll', function ($filter, $sce, ngTableParams, userService) {
			var data = userService.data;

			//Basic Example
			this.userBasic = new ngTableParams({
				page: 1, // show first page
				count: 5           // count per page
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			})

			//Sorting
			this.userSorting = new ngTableParams({
				page: 1, // show first page
				count: 5, // count per page
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
			this.userFilter = new ngTableParams({
				page: 1, // show first page
				count: 5
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					// use build-in angular filter
					var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

					this.role = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.id = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.email = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.phone = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.product_code = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.product_name = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.sub_start_date = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
					this.sub_end_date = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

					params.total(orderedData.length); // set total for recalc pagination
					$defer.resolve(this.role, this.name, this.id, this.email, this.phone, this.product_code, this.product_name, this.sub_start_date, this.sub_end_date);
				}
			})

			//Editable
			this.userEdit = new ngTableParams({
				page: 1, // show first page
				count: 5           // count per page
			}, {
				total: data.length, // length of data
				getData: function ($defer, params) {
					$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			});
		});