'use strict';
materialAdmin
    // =========================================================================
    // Base controller for common functions
    // =========================================================================

	.controller("demoController", function demoController($scope) {
      $scope.htmlContent = '';
//      $scope.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol>';
    })

    .controller('materialadminCtrl', function($timeout, $state, growlService){
        //Welcome Message
        growlService.growl('Welcome back SalesDialers!', 'inverse')
        
        
        // Detact Mobile Browser
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           angular.element('html').addClass('ismobile');
        }

        // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
        this.sidebarToggle = {
            left: false,
            right: false
        }

        // By default template has a boxed layout
        this.layoutType = localStorage.getItem('ma-layout-status');
        
        // For Mainmenu Active Class
        this.$state = $state;    
        
        //Close sidebar on click
        this.sidebarStat = function(event) {
            if (!angular.element(event.target).parent().hasClass('active')) {
                this.sidebarToggle.left = false;
            }
        }
        
        //Listview Search (Check listview pages)
        this.listviewSearchStat = false;
        
        this.lvSearch = function() {
            this.listviewSearchStat = true; 
        }
        
        //Listview menu toggle in small screens
        this.lvMenuStat = false;
        
        //Blog
        this.wallCommenting = [];
        
        this.wallImage = false;
        this.wallVideo = false;
        this.wallLink = false;
    })


    // =========================================================================
    // Header
    // =========================================================================
    .controller('headerCtrl', function($timeout, messageService){
    
         // Top Search
        this.openSearch = function(){
            angular.element('#header').addClass('search-toggled');
            //growlService.growl('Welcome back Mallinda Hollaway', 'inverse');
        }

        this.closeSearch = function(){
            angular.element('#header').removeClass('search-toggled');
        }
        
        // Get messages and notification for header
        this.img = messageService.img;
        this.user = messageService.user;
        this.user = messageService.text;

        this.messageResult = messageService.getMessage(this.img, this.user, this.text);


        //Clear Notification
        this.clearNotification = function($event) {
            $event.preventDefault();
            
            var x = angular.element($event.target).closest('.listview');
            var y = x.find('.lv-item');
            var z = y.size();
            
            angular.element($event.target).parent().fadeOut();
            
            x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
            x.find('.grid-loading').fadeIn(1500);
            var w = 0;
            
            y.each(function(){
                var z = $(this);
                $timeout(function(){
                    z.addClass('animated fadeOutRightBig').delay(1000).queue(function(){
                        z.remove();
                    });
                }, w+=150);
            })
            
            $timeout(function(){
                angular.element('#notifications').addClass('empty');
            }, (z*150)+200);
        }
        
        // Clear Local Storage
        this.clearLocalStorage = function() {
            
            //Get confirmation, if confirmed clear the localStorage
            swal({   
                title: "Are you sure?",   
                text: "All your saved localStorage values will be removed",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#F44336",   
                confirmButtonText: "Yes, delete it!",   
                closeOnConfirm: false 
            }, function(){
                localStorage.clear();
                swal("Done!", "localStorage is cleared", "success"); 
            });
            
        }
        
        //Fullscreen View
        this.fullScreen = function() {
            //Launch
            function launchIntoFullscreen(element) {
                if(element.requestFullscreen) {
                    element.requestFullscreen();
                } else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if(element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if(element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }

            //Exit
            function exitFullscreen() {
                if(document.exitFullscreen) {
                    document.exitFullscreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }

            if (exitFullscreen()) {
                launchIntoFullscreen(document.documentElement);
            }
            else {
                launchIntoFullscreen(document.documentElement);
            }
        }
    
    })



    // =========================================================================
    // Best Selling Widget
    // =========================================================================

    .controller('bestsellingCtrl', function(bestsellingService){
        // Get Best Selling widget Data
        this.img = bestsellingService.img;
        this.name = bestsellingService.name;
        this.range = bestsellingService.range; 
        
        this.bsResult = bestsellingService.getBestselling(this.img, this.name, this.range);
    })

 
    // =========================================================================
    // Todo List Widget
    // =========================================================================

    .controller('todoCtrl', function(todoService){
        
        //Get Todo List Widget Data
        this.todo = todoService.todo;
        
        this.tdResult = todoService.getTodo(this.todo);
        
        //Add new Item (closed by default)
        this.addTodoStat = false;
    })


    // =========================================================================
    // Recent Items Widget
    // =========================================================================

    .controller('recentitemCtrl', function(recentitemService){
        
        //Get Recent Items Widget Data
        this.id = recentitemService.id;
        this.name = recentitemService.name;
        this.parseInt = recentitemService.price;
        
        this.riResult = recentitemService.getRecentitem(this.id, this.name, this.price);
    })


    // =========================================================================
    // Recent Posts Widget
    // =========================================================================
    
    .controller('recentpostCtrl', function(recentpostService){
        
        //Get Recent Posts Widget Items
        this.img = recentpostService.img;
        this.user = recentpostService.user;
        this.text = recentpostService.text;
        
        this.rpResult = recentpostService.getRecentpost(this.img, this.user, this.text);
    })


    //=================================================
    // Profile
    //=================================================

    .controller('profileCtrl', function(growlService){
        
        //Get Profile Information from profileService Service
        
        //User
        this.profileSummary = "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.";
    
        this.fullName = "Mallinda Hollaway";
        this.gender = "female";
        this.birthDay = "23/06/1988";
        this.martialStatus = "Single";
        this.mobileNumber = "00971123456789";
        this.emailAddress = "malinda.h@gmail.com";
        this.twitter = "@malinda";
        this.twitterUrl = "twitter.com/malinda";
        this.skype = "malinda.hollaway";
        this.addressSuite = "10098 ABC Towers";
        this.addressCity = "Dubai Silicon Oasis, Dubai";
        this.addressCountry = "United Arab Emirates";
    
    
        //Edit
        this.editSummary = 0;
        this.editInfo = 0;
        this.editContact = 0;
    
        
        this.submit = function(item, message) {            
            if(item === 'profileSummary') {
                this.editSummary = 0;
            }
            
            if(item === 'profileInfo') {
                this.editInfo = 0;
            }
            
            if(item === 'profileContact') {
                this.editContact = 0;
            }
            
            growlService.growl(message+' has updated Successfully!', 'inverse'); 
        }

    })
	

    //=================================================
    // LOGIN
    //=================================================

    .controller('loginCtrl', function($scope, $state){
        
        //Status
    
        this.login = 1;
        this.register = 0;
        this.forgot = 0;
		$scope.home = function(){
			$state.go('echome');
		}
    })


    //=================================================
    // CALENDAR
    //=================================================
    
    .controller('calendarCtrl', function($modal){
    
        //Create and add Action button with dropdown in Calendar header. 
        this.month = 'month';
    
        this.actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
                            '<li class="dropdown" dropdown>' +
                                '<a href="" dropdown-toggle><i class="zmdi zmdi-more-vert"></i></a>' +
                                '<ul class="dropdown-menu dropdown-menu-right">' +
                                    '<li class="active">' +
                                        '<a data-calendar-view="month" href="">Month View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="basicWeek" href="">Week View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="agendaWeek" href="">Agenda Week View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="basicDay" href="">Day View</a>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a data-calendar-view="agendaDay" href="">Agenda Day View</a>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</li>';

            
        //Open new event modal on selecting a day
        this.onSelect = function(argStart, argEnd) {            
            var modalInstance  = $modal.open({
                templateUrl: 'addEvent.html',
                controller: 'addeventCtrl',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    calendarData: function() {
                        var x = [argStart, argEnd];
                        return x;
                    }
                }
            });
        }
    })

    //Add event Controller (Modal Instance)
    .controller('addeventCtrl', function($scope, $modalInstance, calendarData){
        
        //Calendar Event Data
        $scope.calendarData = {
            eventStartDate: calendarData[0],
            eventEndDate:  calendarData[1]
        };
    
        //Tags
        $scope.tags = [
            'bgm-teal',
            'bgm-red',
            'bgm-pink',
            'bgm-blue',
            'bgm-lime',
            'bgm-green',
            'bgm-cyan',
            'bgm-orange',
            'bgm-purple',
            'bgm-gray',
            'bgm-black',
        ]
        
        //Select Tag
        $scope.currentTag = '';
        
        $scope.onTagClick = function(tag, $index) {
            $scope.activeState = $index;
            $scope.activeTagColor = tag;
        } 
        
        //Add new event
        $scope.addEvent = function() {
            if ($scope.calendarData.eventName) {

                //Render Event
                $('#calendar').fullCalendar('renderEvent',{
                    title: $scope.calendarData.eventName,
                    start: $scope.calendarData.eventStartDate,
                    end:  $scope.calendarData.eventEndDate,
                    allDay: true,
                    className: $scope.activeTagColor

                },true ); //Stick the event

                $scope.activeState = -1;
                $scope.calendarData.eventName = '';     
                $modalInstance.close();
            }
        }
        
        //Dismiss 
        $scope.eventDismiss = function() {
            $modalInstance.dismiss();
        }
    })

    // =========================================================================
    // COMMON FORMS
    // =========================================================================

    .controller('formCtrl', function(){
    
        //Input Slider
        this.nouisliderValue = 4;
        this.nouisliderFrom = 25;
        this.nouisliderTo = 80;
        this.nouisliderRed = 35;
        this.nouisliderBlue = 90;
        this.nouisliderCyan = 20;
        this.nouisliderAmber = 60;
        this.nouisliderGreen = 75;
    
        //Color Picker
        this.color = '#03A9F4';
        this.color2 = '#8BC34A';
        this.color3 = '#F44336';
        this.color4 = '#FFC107';
    })


    // =========================================================================
    // PHOTO GALLERY
    // =========================================================================

    .controller('photoCtrl', function(){
        
        //Default grid size (2)
        this.photoColumn = 'col-md-2';
        this.photoColumnSize = 2;
    
        this.photoOptions = [
            { value: 2, column: 6 },
            { value: 3, column: 4 },
            { value: 4, column: 3 },
            { value: 1, column: 12 },
        ]
    
        //Change grid
        this.photoGrid = function(size) {
            this.photoColumn = 'col-md-'+size;
            this.photoColumnSize = size;
        }
    
    })


    // =========================================================================
    // ANIMATIONS DEMO
    // =========================================================================
    .controller('animCtrl', function($timeout){
        
        //Animation List
        this.attentionSeekers = [
            { animation: 'bounce', target: 'attentionSeeker' },
            { animation: 'flash', target: 'attentionSeeker' },
            { animation: 'pulse', target: 'attentionSeeker' },
            { animation: 'rubberBand', target: 'attentionSeeker' },
            { animation: 'shake', target: 'attentionSeeker' },
            { animation: 'swing', target: 'attentionSeeker' },
            { animation: 'tada', target: 'attentionSeeker' },
            { animation: 'wobble', target: 'attentionSeeker' }
        ]
        this.flippers = [
            { animation: 'flip', target: 'flippers' },
            { animation: 'flipInX', target: 'flippers' },
            { animation: 'flipInY', target: 'flippers' },
            { animation: 'flipOutX', target: 'flippers' },
            { animation: 'flipOutY', target: 'flippers'  }
        ]
         this.lightSpeed = [
            { animation: 'lightSpeedIn', target: 'lightSpeed' },
            { animation: 'lightSpeedOut', target: 'lightSpeed' }
        ]
        this.special = [
            { animation: 'hinge', target: 'special' },
            { animation: 'rollIn', target: 'special' },
            { animation: 'rollOut', target: 'special' }
        ]
        this.bouncingEntrance = [
            { animation: 'bounceIn', target: 'bouncingEntrance' },
            { animation: 'bounceInDown', target: 'bouncingEntrance' },
            { animation: 'bounceInLeft', target: 'bouncingEntrance' },
            { animation: 'bounceInRight', target: 'bouncingEntrance' },
            { animation: 'bounceInUp', target: 'bouncingEntrance'  }
        ]
        this.bouncingExits = [
            { animation: 'bounceOut', target: 'bouncingExits' },
            { animation: 'bounceOutDown', target: 'bouncingExits' },
            { animation: 'bounceOutLeft', target: 'bouncingExits' },
            { animation: 'bounceOutRight', target: 'bouncingExits' },
            { animation: 'bounceOutUp', target: 'bouncingExits'  }
        ]
        this.rotatingEntrances = [
            { animation: 'rotateIn', target: 'rotatingEntrances' },
            { animation: 'rotateInDownLeft', target: 'rotatingEntrances' },
            { animation: 'rotateInDownRight', target: 'rotatingEntrances' },
            { animation: 'rotateInUpLeft', target: 'rotatingEntrances' },
            { animation: 'rotateInUpRight', target: 'rotatingEntrances'  }
        ]
        this.rotatingExits = [
            { animation: 'rotateOut', target: 'rotatingExits' },
            { animation: 'rotateOutDownLeft', target: 'rotatingExits' },
            { animation: 'rotateOutDownRight', target: 'rotatingExits' },
            { animation: 'rotateOutUpLeft', target: 'rotatingExits' },
            { animation: 'rotateOutUpRight', target: 'rotatingExits'  }
        ]
        this.fadeingEntrances = [
            { animation: 'fadeIn', target: 'fadeingEntrances' },
            { animation: 'fadeInDown', target: 'fadeingEntrances' },
            { animation: 'fadeInDownBig', target: 'fadeingEntrances' },
            { animation: 'fadeInLeft', target: 'fadeingEntrances' },
            { animation: 'fadeInLeftBig', target: 'fadeingEntrances'  },
            { animation: 'fadeInRight', target: 'fadeingEntrances'  },
            { animation: 'fadeInRightBig', target: 'fadeingEntrances'  },
            { animation: 'fadeInUp', target: 'fadeingEntrances'  },
            { animation: 'fadeInBig', target: 'fadeingEntrances'  }
        ]
        this.fadeingExits = [
            { animation: 'fadeOut', target: 'fadeingExits' },
            { animation: 'fadeOutDown', target: 'fadeingExits' },
            { animation: 'fadeOutDownBig', target: 'fadeingExits' },
            { animation: 'fadeOutLeft', target: 'fadeingExits' },
            { animation: 'fadeOutLeftBig', target: 'fadeingExits'  },
            { animation: 'fadeOutRight', target: 'fadeingExits'  },
            { animation: 'fadeOutRightBig', target: 'fadeingExits'  },
            { animation: 'fadeOutUp', target: 'fadeingExits'  },
            { animation: 'fadeOutUpBig', target: 'fadeingExits'  }
        ]
        this.zoomEntrances = [
            { animation: 'zoomIn', target: 'zoomEntrances' },
            { animation: 'zoomInDown', target: 'zoomEntrances' },
            { animation: 'zoomInLeft', target: 'zoomEntrances' },
            { animation: 'zoomInRight', target: 'zoomEntrances' },
            { animation: 'zoomInUp', target: 'zoomEntrances'  }
        ]
        this.zoomExits = [
            { animation: 'zoomOut', target: 'zoomExits' },
            { animation: 'zoomOutDown', target: 'zoomExits' },
            { animation: 'zoomOutLeft', target: 'zoomExits' },
            { animation: 'zoomOutRight', target: 'zoomExits' },
            { animation: 'zoomOutUp', target: 'zoomExits'  }
        ]

        //Animate    
        this.ca = '';
    
        this.setAnimation = function(animation, target) {
            if (animation === "hinge") {
                animationDuration = 2100;
            }
            else {
                animationDuration = 1200;
            }
            
            angular.element('#'+target).addClass(animation);
            
            $timeout(function(){
                angular.element('#'+target).removeClass(animation);
            }, animationDuration);
        }
    
    })

	
		//=================================================
		// Contact
		//=================================================

		.controller('searchCtrl', function ($scope, growlService) {
			$scope.listContactSearchContent = 'aa';
		})

		.controller('callingCtrl', function ($scope, growlService, contactInfoService) {

			// By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
			this.sidebarFolderToggle = {
				left: false,
				right: true
			}
			//Get Contact Information from profileService Service
			
//			//basicInformation
//			this.leadSource = "Impiger";
//			this.company = "Glencove";
//			this.title = "Mr";
//			this.name = "Jenchun Wu";
//			this.gender = "Male";
//			this.age = "35";
//
//			//contactInformation
//			this.primaryPhone = "17134681628";
//			this.secondaryPhone = "17134681627";
//			this.extension = "123";
//			this.email = "letsdance@arthurmurraymemorial.com";
//			this.fax = "123123";
//			this.website = "http://www.arthurmurraymemorial.com/";
//
//			//addressInformation
//			this.street = "9746 Katy Fwy";
//			this.city = "Hacienda Heights";
//			this.state = "Ca";
//			this.country = "US";
//			this.zipCode = "77055";
//
//			//Other Information
//			this.listed = "06/16/15";
//			this.dom = "183";
//			this.areaName = "Hacienda Heights";
//			this.propertyType = "Single Family Residence";
//			this.office = "IRN Realty";
//			this.listAgent = "Lazar Chang";
//			this.offMarket = "12/15/15";
//			this.listPrice = "$932,558";
//			this.status = "Expired";
//			this.mlslistingID = "TR15131807";
//			this.prevStatusDate = "06/18/15";
//			this.prevStatus = "Active";
//			this.mlsid = "8241-002-042";

			//Edit
//			this.basicInformation = 1;
//			this.contactInformation = 1;
//			this.addressInformation = 1;
//			this.otherInformation = 1;
//			
			
			$scope.submit = function (item, message) {
				console.log('submit');
				if (item === 'basicInformation') {
					this.basicInformation = 1;
				}

				if (item === 'contactInformation') {
					this.contactInformation = 1;
				}

				if (item === 'addressInformation') {
					this.addressInformation = 1;
				}

				if (item === 'otherInformation') {
					this.otherInformation = 1;
				}

				growlService.growl(message + ' has updated Successfully!', 'inverse');
			}
			
			$scope.closeContact = function(contact, $event){
				var ele = angular.element($event.currentTarget).parent();
				ele.remove();
			}
			$scope.basicInformation = 1;
			$scope.contactInformation = 1;
			$scope.addressInformation = 1;
			$scope.otherInformation = 1;
			
			$scope.contactsList = [
			{
				1: {
					cid: '1',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5001',
					cname: 'Contact Name 1',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				2:{
					cid: '2',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5002',
					cname: 'Contact Name 2',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				3:{
					cid: '3',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5003',
					cname: 'Contact Name 3',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				4:{
					cid: '4',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5004',
					cname: 'Contact Name 4',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				5:{
					cid: '5',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5005',
					cname: 'Contact Name 5',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				6:{
					cid: '6',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5006',
					cname: 'Contact Name 6',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				7:{
					cid: '7',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5007',
					cname: 'Contact Name 7',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				8:{
					cid: '8',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5008',
					cname: 'Contact Name 8',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				9:{
					cid: '9',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5009',
					cname: 'Contact Name 9',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				10:{
					cid: '10',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5010',
					cname: 'Contact Name 10',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				11:{
					cid: '11',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5011',
					cname: 'Contact Name 11',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				12:{
					cid: '12',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5012',
					cname: 'Contact Name 12',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				13:{
					cid: '13',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5013',
					cname: 'Contact Name 13',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				14:{
					cid: '14',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5014',
					cname: 'Contact Name 14',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				15:{
					cid: '15',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5015',
					cname: 'Contact Name 15',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				16:{
					cid: '16',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5016',
					cname: 'Contact Name 16',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				17:{
					cid: '17',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5017',
					cname: 'Contact Name 17',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				18:{
					cid: '18',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5018',
					cname: 'Contact Name 18',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				19:{
					cid: '19',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5019',
					cname: 'Contact Name 19',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				20:{
					cid: '20', 
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5020',
					cname: 'Contact Name 20',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
					
				}
			}]
			
			$scope.contactsList1 = [
			
				{
					cid: '1',
					pos: 0,
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5001',
					cname: 'Contact Name 1',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '2',
					pos: '1',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5002',
					cname: 'Contact Name 2',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '3',
					pos: '2',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5003',
					cname: 'Contact Name 3',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '4',
					pos: '3',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5004',
					cname: 'Contact Name 4',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '5',
					pos: '4',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5005',
					cname: 'Contact Name 5',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '6',
					pos: '5',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5006',
					cname: 'Contact Name 6',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '7',
					pos: '6',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5007',
					cname: 'Contact Name 7',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '8',
					pos: '7',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5008',
					cname: 'Contact Name 8',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '9',
					pos: '8',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5009',
					cname: 'Contact Name 9',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '10',
					pos: '9',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5010',
					cname: 'Contact Name 10',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '11',
					pos: '10',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5011',
					cname: 'Contact Name 11',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '12',
					pos: '11',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5012',
					cname: 'Contact Name 12',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '13',
					pos: '12',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5013',
					cname: 'Contact Name 13',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '14',
					pos: '13',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5014',
					cname: 'Contact Name 14',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '15',
					pos: '14',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5015',
					cname: 'Contact Name 15',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '16',
					pos: '15',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5016',
					cname: 'Contact Name 16',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '17',
					pos: '16',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5017',
					cname: 'Contact Name 17',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '18',
					pos: '17',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5018',
					cname: 'Contact Name 18',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '19',
					pos: '18',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5019',
					cname: 'Contact Name 19',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
				},
				{
					cid: '20', 
					pos: '19',
					css: '', 
					cstatus: '',
					cno1: '(382)-122-5020',
					cname: 'Contact Name 20',
					leadstatus: 'Hot Lead', show_disp: false, disp: false 
					
				}
			]
			
			$scope.makeDisposition = function(name, $event){
				console.log('makeDisposition');
				console.log($event);
				console.log("name: "+name);
				growlService.growl(name + ' has updated Successfully!', 'inverse');
				var id = $scope.getDisconnectCallId($event.target.parentNode.id, '_', 2);
				$scope.contactsList1[(parseInt(id) - 1)].disp = true;
				$scope.calling_disp = false;
				
				//Remove dispositioned && completed contact from list
				if($scope.contactsList1[(parseInt(id) - 1)].disp == true && $scope.contactsList1[(parseInt(id) - 1)].cstatus == 'Disconnected'){
					console.log('makeDisposition id: '+id);
					var nextCid = $scope.active_call_id;
//					var nextCidName = angular.element(document.querySelector('#c-'+id)).next().attr('id');
//					var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
					console.log('makeDisposition nextCid: '+nextCid);
					$scope.viewContactInfo($scope.contactsList1[(parseInt(nextCid) - 1)]);
					angular.element(document.querySelector('#c-'+id)).remove();
				}
				$scope.incompleted_disp_cnt -= 1;
			}
			
			$scope.max_incompleted_disp_cnt =  8;
			$scope.incompleted_disp_cnt =  0;
			$scope.calling_disp_css = '';
			$scope.calling_disconnect_css = '';
			$scope.calling_disp = false;
			$scope.calling_disconnect = false;
			$scope.active_call_id = 0;
			$scope.active_call_number = '';
			$scope.active_call_name = '';
			$scope.pause = true;
			
			$scope.concurrent_call = 4;
			$scope.last_talking_cid = 0;
			
			$scope.current_call_set = [];
			$scope.pause_campaign = false;
			$scope.campaign_status = 'stopped';
			
			$scope.startPauseCampaign1 = function($event){
				if($scope.max_incompleted_disp_cnt <= $scope.incompleted_disp_cnt) {
					growlService.growl('Please make dispostion then resume campaign!', 'inverse');
					$scope.pause_campaign = true;
					$scope.campaign_status = 'paused';
					console.log('startPauseCampaign max_incompleted_disp_cnt: '+$scope.max_incompleted_disp_cnt);
					console.log('startPauseCampaign incompleted_disp_cnt: '+$scope.incompleted_disp_cnt);
				} else {
					var camp_status = $event.target.parentNode.id;
					console.log($event);
					console.log($event.target.parentNode);
					console.log($event.target.parentNode.id);
					console.log('startPauseCampaign camp_status: '+camp_status);
					console.log('startPauseCampaign last_talking_cid: '+$scope.last_talking_cid);
					if(camp_status == 'stopped' || camp_status == 'paused') {
						$scope.pause_campaign = false;
						$scope.campaign_status = 'started';
						var cid = $scope.last_talking_cid;
						console.log('cid: '+cid);
					console.log($event.target.parentNode);
						if(cid == 0){
							console.log('trigger first set cid: '+cid);
							$scope.triggerFirstSetCall();
						} else {
							//Get next contact id
							console.log('trigger next set cid: '+cid);
							console.log(document.querySelector('#c-'+cid));
							console.log(angular.element(document.querySelector('#c-'+cid)));
							console.log(angular.element(document.querySelector('#c-'+cid)).next());
							var nextCidName = angular.element(document.querySelector('#c-'+cid)).next().attr('id');
							console.log('triggerNextSetCall  nextCidName: '+nextCidName);
							if(nextCidName != undefined){
								var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
								$scope.triggerNextSetCall(cid);
							} else {
								cid = (parseInt(cid) + 1);
								var nextCidName = angular.element(document.querySelector('#c-'+cid)).next().attr('id');
								console.log('triggerNextSetCall  nextCidName: '+nextCidName);
								var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
								$scope.triggerNextSetCall(cid);
							}
						}
						// start the campaign
						growlService.growl('Campaign has started Successfully!', 'inverse');
					} else if(camp_status == 'started') {
						// pause the campaign
						$scope.pause_campaign = true;
						$scope.campaign_status = 'paused';
						console.log($scope.pause_campaign);
						growlService.growl('Campaign will paused after current call set completed!', 'inverse');
					}else{
						console.log('startPauseCampaign else camp_status: '+camp_status);
					}
				}
			}
			
			$scope.startPauseCampaign = function($event){
				if($scope.max_incompleted_disp_cnt <= $scope.incompleted_disp_cnt) {
					growlService.growl('Please make dispostion then resume campaign!', 'inverse');
					$scope.pause_campaign = true;
					$scope.campaign_status = 'paused';
					console.log('startPauseCampaign max_incompleted_disp_cnt: '+$scope.max_incompleted_disp_cnt);
					console.log('startPauseCampaign incompleted_disp_cnt: '+$scope.incompleted_disp_cnt);
				} else {
					var camp_status = $event.target.id;
					console.log($event);
					console.log($event.target);
					console.log($event.target.id);
					console.log('startPauseCampaign camp_status: '+camp_status);
					console.log('startPauseCampaign last_talking_cid: '+$scope.last_talking_cid);
					if(camp_status == 'stopped' || camp_status == 'paused') {
						$scope.pause_campaign = false;
						$scope.campaign_status = 'started';
						var cid = $scope.last_talking_cid;
						console.log('cid: '+cid);
					console.log($event.target);
						if(cid == 0){
							console.log('trigger first set cid: '+cid);
							$scope.triggerFirstSetCall();
						} else {
							//Get next contact id
							console.log('trigger next set cid: '+cid);
							console.log(document.querySelector('#c-'+cid));
							console.log(angular.element(document.querySelector('#c-'+cid)));
							console.log(angular.element(document.querySelector('#c-'+cid)).next());
							var nextCidName = angular.element(document.querySelector('#c-'+cid)).next().attr('id');
							console.log('triggerNextSetCall  nextCidName: '+nextCidName);
							if(nextCidName != undefined){
								var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
								$scope.triggerNextSetCall(cid);
							} else {
								cid = (parseInt(cid) + 1);
								var nextCidName = angular.element(document.querySelector('#c-'+cid)).next().attr('id');
								console.log('triggerNextSetCall  nextCidName: '+nextCidName);
								var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
								$scope.triggerNextSetCall(cid);
							}
						}
						// start the campaign
						growlService.growl('Campaign has started Successfully!', 'inverse');
					} else if(camp_status == 'started') {
						// pause the campaign
						$scope.pause_campaign = true;
						$scope.campaign_status = 'paused';
						console.log($scope.pause_campaign);
						growlService.growl('Campaign will paused after current call set completed!', 'inverse');
					}else{
						console.log('startPauseCampaign else camp_status: '+camp_status);
					}
				}
			}
			
			$scope.triggerNextSetCall = function(id){
				console.log($scope.pause_campaign);
				if($scope.pause_campaign == false){
					var cc_cnt = $scope.concurrent_call;
					var cid = $scope.contactsList1[(parseInt(id) - 1)].cid;
					$scope.current_call_set = [];
					$scope.current_call_set[cid] = $scope.contactsList1[i];
					console.log('triggerNextSetCall cid:'+cid);
					console.log($scope.contactsList1[(parseInt(cid) - 1)]);
	//				$scope.current_call_set[cid] = $scope.contactsList1[(parseInt(cid) - 1)]
					$scope.initiateCall($scope.contactsList1[(parseInt(cid) - 1)], true);
					console.log('triggerNextSetCall id:'+id);
					console.log(document.querySelector('#c-'+cid));
					console.log(angular.element(document.querySelector('#c-'+cid)));
					console.log(angular.element(document.querySelector('#c-'+cid)).next());
					console.log(angular.element(document.querySelector('#c-'+cid)).next().attr('id'));
					console.log('triggerNextSetCall cid:'+cid);
					var nextCidName = angular.element(document.querySelector('#c-'+cid)).next().attr('id');
					console.log('triggerNextSetCall nextCidName:'+nextCidName);
					if(nextCidName != undefined){
						for(var i=0;i<(cc_cnt-1);i++){
							var nextCidName = angular.element(document.querySelector('#c-'+(parseInt(cid)+ i))).next().attr('id');
							console.log('triggerNextSetCall nextCidName:'+nextCidName);
							var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
							console.log('triggerNextSetCall nextCid:'+nextCid);
							var nextCidPos = (parseInt(nextCid) - 1);
							console.log('triggerNextSetCall i:'+i);
							console.log('triggerNextSetCall nextCidPos:'+ (nextCidPos));
							console.log($scope.contactsList1[nextCid]);
	//						$scope.current_call_set[nextCid] = $scope.contactsList1[nextCidPos];
							$scope.initiateCall($scope.contactsList1[nextCidPos], false);
	//						console.log($scope.current_call_set);
						}
						$scope.disconnect_call_cnt = 0;
						console.log('scope.current_call_set outside');
						console.log($scope.current_call_set);
					}
					console.log($scope.current_call_set);
				} else{
					growlService.growl('Campaign has paused Successfully!', 'inverse');
					$scope.pause = true;
				}
			}
			
			$scope.getTriggerNextSetElemId = function(id){
				var nextCidName = angular.element(document.querySelector('#c-'+id)).next().attr('id');
				var nextCid = $scope.getDisconnectCallId(nextCidName, '-', 1);
				return nextCid = (parseInt(nextCid) - 1);
			}
			
			$scope.triggerFirstSetCall = function(){
				var cc_cnt = $scope.concurrent_call;
				for(var i=0;i<cc_cnt;i++){
					var id = $scope.contactsList1[i].cid;
					$scope.current_call_set[id] = $scope.contactsList1[i];
					var enableTalking = (i==0)?true:false;
					$scope.initiateCall($scope.contactsList1[i], enableTalking);
					console.log('triggerFirstSetCall i:'+i);
					console.log('triggerFirstSetCall enableTalking:'+enableTalking);
				}
				console.log($scope.current_call_set);
			}
			
			$scope.dragoverCallback = function($event){
				console.log('onDragOver:');
				console.log($event);
				console.log('onDragOver End:');
//				growlService.growl('Contactsss added Successfully!', 'inverse');
			}
			
			$scope.drop = function($event){
				console.log($event);
				growlService.growl('Contact added Successfully!', 'inverse');
			}
			
			$scope.update_current_call_set = function (list) {
				$scope.current_call_set.push(list);
			};
			
			$scope.disconnectIncompletedCall = function(id, $event){
				console.log('disconnectIncompletedCall');
				console.log("id: "+id);
				console.log($scope.contactsList1[(parseInt(id) - 1)]);
				$scope.contactsList1[(parseInt(id) - 1)].disp = true;
				$scope.contactsList1[(parseInt(id) - 1)].css = 'bgm-gray c-white';
				$scope.contactsList1[(parseInt(id) - 1)].cstatus = 'Disconnected';
				console.log($scope.contactsList1[(parseInt(id) - 1)]);
				$scope.disconnect_call_cnt += 1;
				angular.element(document.querySelector('#c-'+id)).remove();
				var active_call_id = $scope.active_call_id;
				$scope.viewContactInfo($scope.contactsList1[(parseInt(active_call_id) - 1)]);
			}
			
			$scope.disconnect_call_cnt = 0;
			$scope.disconnectCall = function($event){
				console.log('disconnectCall:');
				console.log($event);
				console.log($event.target);
				console.log($event.target.parentNode);
				var id = $scope.getDisconnectCallId($event.target.parentNode.id, '_', 2);
				if(id == undefined){
					console.log($event.target.parentNode.parentNode);
					id = $scope.getDisconnectCallId($event.target.parentNode.parentNode.id, '_', 2);
				}
				console.log("id: "+id);
				$scope.calling_disconnect = false;
				console.log($scope.contactsList1[(parseInt(id) - 1)]);
				$scope.contactsList1[(parseInt(id) - 1)].show_disp = true;
				$scope.contactsList1[(parseInt(id) - 1)].css = 'bgm-gray c-white';
				$scope.contactsList1[(parseInt(id) - 1)].cstatus = 'Disconnected';
				console.log($scope.contactsList1[(parseInt(id) - 1)]);
				var nextEle = angular.element(document.querySelector('#c-'+id)).next().attr('id');
				console.log('next nextEle: '+nextEle);
				if(nextEle == undefined){
					$scope.pause = true;
					console.log('scope.pause: '+$scope.pause);
				}else {
					console.log(nextEle);
					console.log('next nextEle1111: '+typeof(nextEle));
					var nextElId = $scope.getDisconnectCallId(nextEle, '-', 1);
					console.log('next nextElId: '+nextElId);
					$scope.disconnect_call_cnt += 1;
					
					//check next element is already disconnected
					if($scope.contactsList1[(parseInt(nextElId)-1)].cstatus == 'Disconnected'){
						var nextEle = angular.element(document.querySelector('#c-'+nextElId)).next().attr('id');
						console.log('nnew next nextElId: '+nextEle);
						var nextElId = $scope.getDisconnectCallId(nextEle, '-', 1);
						console.log('next nextElId: '+nextElId);
					}
					
					
					console.log('next disconnect_call_cnt: '+$scope.disconnect_call_cnt);
					console.log('next concurrent_call: '+$scope.concurrent_call);
					if($scope.disconnect_call_cnt == $scope.concurrent_call){
						console.log('next incompleted_disp_cnt: '+$scope.incompleted_disp_cnt);
						console.log('next max_incompleted_disp_cnt: '+$scope.max_incompleted_disp_cnt);
						if($scope.max_incompleted_disp_cnt > $scope.incompleted_disp_cnt) {
							console.log('inside triggerNextSetCall: '+$scope.concurrent_call);
							$scope.triggerNextSetCall(nextElId);
						}else{
							$scope.pause_campaign = true;
							$scope.campaign_status = 'paused';
							$scope.pause = true;
							growlService.growl('Please make dispostion then resume campaign!', 'inverse');
						}
					}else {
						console.log('inside no triggerNextSetCall: '+$scope.concurrent_call);
						$scope.initiateCall($scope.contactsList1[(parseInt(nextElId)-1)], true);
					}
				}
				
				//Remove dispositioned contact from list
				if($scope.contactsList1[(parseInt(id) - 1)].disp == true){
					angular.element(document.querySelector('#c-'+id)).remove();
				}
				console.log($scope.contactsList1[(parseInt(id) - 1)].disp);
				console.log('disconnectCall END:');
			}
			
			$scope.getDisconnectCallId = function(string, split, pos) {
				return string.split(split)[pos];
			}
			
			$scope.childClick = function($event) {
				$scope.startPauseCampaign1($event);
			}
			$scope.initiateCall = function(contact, enableTalking, $event){
				$scope.pause = false;
				$scope.campaign_status = 'started';
				console.log('initiateCall:');
				console.log(contact);
				var id = contact.cid;
				console.log('id:'+id);
				console.log('id:'+typeof(id));
				console.log('id:'+typeof(parseInt(id)));
				var index = (parseInt(id) - 1);
//				var index1 = --index;
				console.log('index:'+ index);
				console.log($scope.contactsList1[(parseInt(id) - 1)]);
//				console.log('index:'+index1);
				$scope.contactsList1[(parseInt(id) - 1)].css = 'bgm-blue c-white';
				$scope.contactsList1[(parseInt(id) - 1)].cstatus = 'Dialling';
				console.log('initiateCall input cstatus: '+$scope.contactsList1[(parseInt(id) - 1)].cstatus);
				console.log('initiateCall input id: '+id);
				if(enableTalking == true){
					setTimeout(function(){
						$scope.$apply(function(){
							$scope.contactsList1[(parseInt(id) - 1)].css = 'bgm-blue c-white';
							$scope.contactsList1[(parseInt(id) - 1)].cstatus = 'Talking';
							$scope.contactsList1[(parseInt(id) - 1)].show_disp = true;
							$scope.calling_disconnect = true;
							$scope.calling_disconnect_css = 'calling_disconnect_'+contact.cid;
							$scope.active_call_id = contact.cid;
							$scope.active_call_number = contact.cno1;
							$scope.active_call_name = contact.cname;
							console.log('scope.active_call_name');
							console.log($scope.active_call_name);
							$scope.calling_disp = true;
							$scope.last_talking_cid = id;
							$scope.incompleted_disp_cnt +=  1;
						}
					)
					}, 500);
				}else{
					setTimeout(function(){
						$scope.$apply(function(){
							$scope.contactsList1[(parseInt(id) - 1)].css = 'bgm-orange c-white';
							$scope.contactsList1[(parseInt(id) - 1)].cstatus = 'On-Hold';
						}
					)
					}, 2000);
				}
				
				if(enableTalking == true){
					$scope.viewContactInfo(contact);
				}
			}
			
			$scope.viewContactInfo = function(contact, $event){
				$scope.calling_disp_css = 'calling_disp_'+contact.cid;
				if((contact.cstatus == 'Talking' || contact.cstatus == 'Disconnected') && contact.disp == false){
					$scope.calling_disp = true;
				} else{
					$scope.calling_disp = false;
				}
				console.log('viewContactInfo');
				console.log($event);
				console.log(contact);
				var data = contactInfoService.data[0][contact.cid];
				console.log('viewContactInfo data');
				console.log(data);
				
				//Get contact information based on contact id
				$scope.cid = contact.cid;
				$scope.notes = data.notes;
				$scope.leadstatus = data.leadstatus;
				
				//basicInformation
				$scope.leadSource = data.basicInformation.leadSource;
				$scope.company = data.basicInformation.company;
				$scope.title = data.basicInformation.title;
				$scope.name = data.basicInformation.name;
				$scope.gender = data.basicInformation.gender;
				$scope.age = data.basicInformation.age;

				//contactInformation
				$scope.primaryPhone = data.contactInformation.primaryPhone;
				$scope.secondaryPhone = data.contactInformation.secondaryPhone;
				$scope.extension = data.contactInformation.extension;
				$scope.email = data.contactInformation.email;
				$scope.fax = data.contactInformation.fax;
				$scope.website = data.contactInformation.website;

				//addressInformation
				$scope.street = data.addressInformation.street;
				$scope.city = data.addressInformation.city;
				$scope.state = data.addressInformation.state;
				$scope.country = data.addressInformation.country;
				$scope.zipCode = data.addressInformation.zipCode;

				//Other Information
				$scope.listed = data.addressInformation.listed;
				$scope.dom = data.addressInformation.dom;
				$scope.areaName = data.addressInformation.areaName;
				$scope.propertyType = data.addressInformation.propertyType;
				$scope.office = data.addressInformation.office;
				$scope.listAgent = data.addressInformation.listAgent;
				$scope.offMarket = data.addressInformation.offMarket;
				$scope.listPrice = data.addressInformation.listPrice;
				$scope.status = data.addressInformation.status;
				$scope.mlslistingID = data.addressInformation.mlslistingID;
				$scope.prevStatusDate = data.addressInformation.prevStatusDate;
				$scope.prevStatus = data.addressInformation.prevStatus;
				$scope.mlsid = data.addressInformation.mlsid;
			}
			
		})
		
//		.controller('contactCtrl', function ($scope, growlService) {
//
//			//Get Contact Information from profileService Service
//
//			//basicInformation
//			this.leadSource = "Impiger";
//			this.company = "Glencove";
//			this.title = "Mr";
//			this.name = "Jenchun Wu";
//			this.gender = "Male";
//			this.age = "35";
//
//			//contactInformation
//			this.primaryPhone = "17134681628";
//			this.secondaryPhone = "17134681627";
//			this.extension = "123";
//			this.email = "letsdance@arthurmurraymemorial.com";
//			this.fax = "123123";
//			this.website = "http://www.arthurmurraymemorial.com/";
//
//			//addressInformation
//			this.street = "9746 Katy Fwy";
//			this.city = "Hacienda Heights";
//			this.state = "Ca";
//			this.country = "US";
//			this.zipCode = "77055";
//
//			//Other Information
//			this.listed = "06/16/15";
//			this.dom = "183";
//			this.areaName = "Hacienda Heights";
//			this.propertyType = "Single Family Residence";
//			this.office = "IRN Realty";
//			this.listAgent = "Lazar Chang";
//			this.offMarket = "12/15/15";
//			this.listPrice = "$932,558";
//			this.status = "Expired";
//			this.mlslistingID = "TR15131807";
//			this.prevStatusDate = "06/18/15";
//			this.prevStatus = "Active";
//			this.mlsid = "8241-002-042";
//
//			//Edit
//			this.basicInformation = 1;
//			this.contactInformation = 1;
//			this.addressInformation = 1;
//			this.otherInformation = 1;
//
//			
//			this.submit = function (item, message) {
//				if (item === 'basicInformation') {
//					this.basicInformation = 1;
//				}
//
//				if (item === 'contactInformation') {
//					this.contactInformation = 1;
//				}
//
//				if (item === 'addressInformation') {
//					this.addressInformation = 1;
//				}
//
//				if (item === 'otherInformation') {
//					this.otherInformation = 1;
//				}
//
//				growlService.growl(message + ' has updated Successfully!', 'inverse');
//			}
//
//		})

		//=================================================
		// uploadcontact
		//=================================================

		.controller('uploadcontactCtrl', function ($scope, $state, growlService) {
			console.log($('#dfieldslistscroll'));
			console.log(jQuery('#dfieldslistscroll'));
//			jQuery('.offset').affix({
//				offset: {
//					top: jQuery('.offset').offset().top
//				}
//			});

//			$scope.uploadcontactstep2 = function() { 
//				$state.go('campaign.uploadcontact.uploadcontact-setting'); 
//		    };
//			$scope.uploadcontactstep3 = function() { 
//				$state.go('campaign.uploadcontact.uploadcontact-mapping'); 
//		    };
//			$scope.runCampaign = function() { 
//				$state.go('calling.info'); 
//		    };
			
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


			//Simple demo
//			$scope.models = {
//				selected: null,
//				lists: {"A": [], "B": []}
//			};
//			// Generate initial model
//			for (var i = 1; i <= 3; ++i) {
//				$scope.models.lists.A.push({label: "Item A" + i});
//				$scope.models.lists.B.push({label: "Item B" + i});
//			}
//
//			// Model to JSON for demo purpose
//			$scope.$watch('models', function (model) {
//				$scope.modelAsJson = angular.toJson(model, true);
//			}, true);


			/* large set */
//			$scope.dragoverCallback = function (event, index, external, type) {
//				$scope.logListEvent('dragged over', event, index, external, type);
//				// Disallow dropping in the third row. Could also be done with dnd-disable-if.
//				return index < 10;
//			};
//
//			$scope.dropCallback = function (event, index, item, external, type, allowedType) {
//				$scope.logListEvent('dropped at', event, index, external, type);
//				if (external) {
//					if (allowedType === 'itemType' && !item.label)
//						return false;
//					if (allowedType === 'containerType' && !angular.isArray(item))
//						return false;
//				}
//				return item;
//			};
//
//			$scope.logEvent = function (message, event) {
//				console.log(message, '(triggered by the following', event.type, 'event)');
//				console.log(event);
//			};
//
//			$scope.logListEvent = function (action, event, index, external, type) {
//				var message = external ? 'External ' : '';
//				message += type + ' element is ' + action + ' position ' + index;
//				$scope.logEvent(message, event);
//			};
//
//			$scope.model = [];
//
//			// Initialize model
//			var id = 10;
//			for (var i = 0; i < 3; ++i) {
//				$scope.model.push([]);
//				for (var j = 0; j < 2; ++j) {
//					$scope.model[i].push([]);
//					for (var k = 0; k < 7; ++k) {
//						$scope.model[i][j].push({label: 'Item ' + id++});
//					}
//				}
//			}
//
//			$scope.$watch('model', function (model) {
//				$scope.modelAsJson = angular.toJson(model, true);
//			}, true);
		});