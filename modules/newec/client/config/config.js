'use strict';
materialAdmin
    .config(function ($stateProvider){
//        $urlRouterProvider.otherwise("/login");
        $stateProvider
//angular.module('materialAdmin').config(['$stateProvider',
//  function ($stateProvider) {
//    // Articles state routing
//    $stateProvider        
            //------------------------------
            // HOME
            //------------------------------
        
		.state ('login', {
                url: '/login',
                templateUrl: 'modules/newec/client/views/login.html'
            })
			.state ('echome', {
                url: '/echome',
                templateUrl: 'modules/newec/client/views/home.html'
            })
			.state ('typography', {
                url: '/typography',
                templateUrl: 'modules/newec/client/views/typography.html'
            })	
			  .state ('widgets', {
                url: '/widgets',
                templateUrl: 'modules/newec/client/views/common.html'
            })

            .state ('widgets.widgets', {
                url: '/widgets',
                templateUrl: 'modules/newec/client/views/widgets.html',
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/mediaelement/build/mediaelementplayer.css',
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/mediaelement/build/mediaelement-and-player.js',
//                                    'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })

            .state ('widgets.widget-templates', {
                url: '/widget-templates',
                templateUrl: 'modules/newec/client/views/widget-templates.html',
            })


            //------------------------------
            // TABLES
            //------------------------------
        
            .state ('tables', {
                url: '/tables',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
            .state ('tables.tables', {
                url: '/tables',
                templateUrl: 'modules/newec/client/views/tables.html'
            })
            
            .state ('tables.data-table', {
                url: '/data-table',
                templateUrl: 'modules/newec/client/views/data-table.html'
            })
			
            //------------------------------
            // Contacts
            //------------------------------
        
//            .state ('contacts', {
//                url: '/contacts',
//                templateUrl: 'modules/newec/client/views/common.html'
//            })
//            
//            .state ('contacts.listContacts', {
//                url: '/listcontacts',
//                templateUrl: 'modules/newec/client/views/contactMgmt/view/list_contacts.html'
//            })
//			
//			.state ('contacts.viewLeads', {
//                url: '/viewleads',
//                templateUrl: 'modules/newec/client/views/contactMgmt/view/view_leads.html'
//            })
//			
//			.state ('contacts.appointment', {
//                url: '/listappointments',
//                templateUrl: 'modules/newec/client/views/taskMgmt/view/list_appointments.html',
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
//									'public/lib/bower_components/datetime-picker/css/datetimepicker.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css',
//									'public/lib/bower_components/time-picker/css/timepicker.css',
//									'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//									
//									'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js',
//									
//									
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//									'public/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
//                                    'public/lib/bower_components/datetime-picker/js/datetimepicker.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
//            })
//			
//			.state ('contacts.appointments', {
//                url: '/appointments',
//                templateUrl: 'modules/newec/client/views/taskMgmt/create/appointment.html',
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/time-picker/css/timepicker.css',
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/moment/min/moment.min.js',
////									'public/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
////                                    'public/lib/bower_components/time-picker/js/timepicker.js',
//									'public/lib/bower_components/time-picker/js/timepickerpop.js',
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
//            })
//			
//            .state ('contacts.editContact', {
//                url: '/editContact/:contactId',
//                templateUrl: 'modules/newec/client/views/contactMgmt/edit/edit_contact.html',
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
//            })
//			
//            .state ('contacts.editLead', {
//                url: '/editLead/:leadId',
//                templateUrl: 'modules/newec/client/views/contactMgmt/edit/edit_lead.html',
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
//            })
			
			//------------------------------
            // Users
            //------------------------------
			
            .state ('users', {
                url: '/users',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
            .state ('users.listUsers', {
                url: '/listUsers',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/list_users.html'
            })
			
            .state ('users.addUser', {
                url: '/addUser',
                templateUrl: 'modules/newec/client/views/usersMgmt/create/add_user.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
            .state ('users.addUserForm', {
                url: '/addUserForm',
                templateUrl: 'modules/newec/client/views/usersMgmt/create/add_userform.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
            .state ('users.editUser', {
                url: '/editUser/:userId',
                templateUrl: 'modules/newec/client/views/usersMgmt/edit/edit_user.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
            .state ('users.viewUserData', {
                url: '/viewUserData/:userId',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userdata.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			.state ('user', {
                url: '/user',
                templateUrl: 'modules/newec/client/views/common.html'
            })
			
			.state ('user.listUsersProfile', {
                url: '/listUsersProfile',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/list_usersprofile.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/filter/filter.css'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
            
			.state ('user.adduserprofile', {
                url: '/userprofile',
                templateUrl: 'modules/newec/client/views/usersMgmt/create/add_userprofile.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
        
			.state ('user.adduserprofile.adduserprofile-basic', {
				url: '/add_userprofile-basic',
				templateUrl: 'modules/newec/client/views/usersMgmt/create/add_userprofile-basic.html'
//				resolve: {
//					loadPlugin: function($ocLazyLoad) {
//						return $ocLazyLoad.load ([
//							{
//								name: 'vendors',
//								files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//								]
//							}
//						])
//					}
//				}
			})
            
         .state ('user.adduserprofile.adduserprofile-subscriptions', {
                url: '/add_userprofile-subscriptions',
                templateUrl: 'modules/newec/client/views/usersMgmt/create/add_userprofile-subscriptions.html'
            })
			
		.state ('user.viewuserprofile', {
                url: '/view_userprofile/:userId',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userprofile.html'
            })
			.state ('user.viewuserprofile.viewuserprofile-basic', {
                url: '/view_userprofile-basic',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userprofile-basic.html'
            })
            .state ('user.viewuserprofile.viewuserprofile-smtp', {
                url: '/view_userprofile-smtp',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userprofile-smtp.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
           .state ('user.viewuserprofile.viewuserprofile-softphone', {
                url: '/view_userprofile-softphone',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userprofile-softphone.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
            .state ('user.viewuserprofile.viewuserprofile-subscriptions', {
                url: '/view_userprofile-subscriptions',
                templateUrl: 'modules/newec/client/views/usersMgmt/view/view_userprofile-subscriptions.html'
            })
			
			 //------------------------------
            // Email Campaigns
            //------------------------------
        
            .state ('email', {
                url: '/email',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
            .state ('email.listfollowupemails', {
                url: '/followupemails',
                templateUrl: 'modules/newec/client/views/campaignMgmt/view/list_followupemail.html'
            })
            .state ('email.addschedule', {
                url: '/addschedule',
                templateUrl: 'modules/newec/client/views/campaignMgmt/create/add_schedule.html'
            })
			
			//------------------------------
            // Preferences
            //------------------------------

            .state ('preference', {
                url: '/preference',
                templateUrl: 'modules/newec/client/views/common.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//							 {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
            
            .state ('preference.campaignsettings', {
                url: '/campaignsettings',
                templateUrl: 'modules/newec/client/views/campaignMgmt/view/list_campaignsettings.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
////                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
////                                    'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
//									'public/lib/bower_components/daterangepicker/css/daterangepicker.min.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
////									'public/lib/bower_components/daterangepicker/js/daterangepicker.min.js',
////									'public/lib/bower_components/daterangepicker/js/angular-daterangepicker.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
            .state ('preference.addcampaignsetting', {
                url: '/addcampaignsetting',
                templateUrl: 'modules/newec/client/views/campaignMgmt/create/add_campaignsetting.html'
            })
			
            .state ('preference.editcampaignsetting', {
                url: '/editcampaignsetting/:campaignPreferenceId',
                templateUrl: 'modules/newec/client/views/campaignMgmt/edit/edit_campaignsetting.html'
            })
			
			.state ('preference.mailtemplate', {
                url: '/mailtemplate',
                templateUrl: 'modules/newec/client/views/campaignMgmt/view/list_mailtemplate.html'
            })
			
			.state ('preference.addmailtemplate', {
                url: '/addmailtemplate',
                templateUrl: 'modules/newec/client/views/campaignMgmt/create/add_mailtemplate.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css',
//									'public/lib/bower_components/text-angular/css/style.css',
//									'modules/newec/client/assets/fonts/font-awesome41.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js'
////                                    'public/lib/bower_components/text-angular/js/textAngular-sanitize.min.js',
////                                    'public/lib/bower_components/text-angular/js/textAngular-rangy.min.js',
////                                    'public/lib/bower_components/text-angular/js/textAngular.min.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			.state ('preference.editmailtemplate', {
		url: '/editmailtemplate/:templateId',
                templateUrl: 'modules/newec/client/views/campaignMgmt/edit/edit_mailtemplate.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css',
//									'public/lib/bower_components/text-angular/css/style.css',
//									'modules/newec/client/assets/fonts/font-awesome41.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			.state ('preference.inboundsetting', {
                url: '/inboundsetting',
                templateUrl: 'modules/newec/client/views/contactMgmt/create/incoming_call_settings.html'
            })
			
			//------------------------------
            // Recordings
            //------------------------------
			
            .state ('recordings', {
                url: '/recordings',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
            .state ('preference.listrecordings', {
                url: '/recordings',
                templateUrl: 'modules/newec/client/views/mediaMgmt/view/list_recordings.html'
            })
			
            .state ('preference.addRecording', {
                url: '/addrecording',
                templateUrl: 'modules/newec/client/views/mediaMgmt/create/add_recording.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
            .state ('preference.editrecording', {
                url: '/editrecording/:mediaId',
                templateUrl: 'modules/newec/client/views/mediaMgmt/edit/edit_recording.html'
            })
			
            //------------------------------
            // FORMS
            //------------------------------
            .state ('form', {
                url: '/form',
                templateUrl: 'modules/newec/client/views/common.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'modules/newec/client/controllers/table.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })

            .state ('form.basic-form-elements', {
                url: '/basic-form-elements',
                templateUrl: 'modules/newec/client/views/form-elements.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })

            .state ('form.form-components', {
                url: '/form-components',
                templateUrl: 'modules/newec/client/views/form-components.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
        
            .state ('form.form-examples', {
                url: '/form-examples',
                templateUrl: 'modules/newec/client/views/form-examples.html'
            })
        
            .state ('form.form-validations', {
                url: '/form-validations',
                templateUrl: 'modules/newec/client/views/form-validations.html'
            })
        
            
            //------------------------------
            // USER INTERFACE
            //------------------------------
        
            .state ('user-interface', {
                url: '/user-interface',
                templateUrl: 'modules/newec/client/views/common.html'
            })
        
            .state ('user-interface.ui-bootstrap', {
                url: '/ui-bootstrap',
                templateUrl: 'modules/newec/client/views/ui-bootstrap.html'
            })

            .state ('user-interface.colors', {
                url: '/colors',
                templateUrl: 'modules/newec/client/views/colors.html'
            })

            .state ('user-interface.animations', {
                url: '/animations',
                templateUrl: 'modules/newec/client/views/animations.html'
            })
        
            .state ('user-interface.box-shadow', {
                url: '/box-shadow',
                templateUrl: 'modules/newec/client/views/box-shadow.html'
            })
        
            .state ('user-interface.buttons', {
                url: '/buttons',
                templateUrl: 'modules/newec/client/views/buttons.html'
            })
        
            .state ('user-interface.icons', {
                url: '/icons',
                templateUrl: 'modules/newec/client/views/icons.html'
            })
        
            .state ('user-interface.alerts', {
                url: '/alerts',
                templateUrl: 'modules/newec/client/views/alerts.html'
            })
        
            .state ('user-interface.notifications-dialogs', {
                url: '/notifications-dialogs',
                templateUrl: 'modules/newec/client/views/notification-dialog.html'
            })
        
            .state ('user-interface.media', {
                url: '/media',
                templateUrl: 'modules/newec/client/views/media.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/mediaelement/build/mediaelementplayer.css',
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/mediaelement/build/mediaelement-and-player.js',
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
        
            .state ('user-interface.other-components', {
                url: '/other-components',
                templateUrl: 'modules/newec/client/views/other-components.html'
            })
            
        
            //------------------------------
            // CHARTS
            //------------------------------
            
            .state ('charts', {
                url: '/charts',
                templateUrl: 'modules/newec/client/views/common.html'
            })

            .state ('charts.flot-charts', {
                url: '/flot-charts',
                templateUrl: 'modules/newec/client/views/flot-charts.html',
            })

            .state ('charts.other-charts', {
                url: '/other-charts',
                templateUrl: 'modules/newec/client/views/other-charts.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/sparklines/jquery.sparkline.min.js',
//                                    'public/lib/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
        
        
            //------------------------------
            // CALENDAR
            //------------------------------
            
            .state ('calendar', {
                url: '/calendar',
                templateUrl: 'modules/newec/client/views/calendar.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
        
        
            //------------------------------
            // PHOTO GALLERY
            //------------------------------
            
             .state ('photo-gallery', {
                url: '/photo-gallery',
                templateUrl: 'modules/newec/client/views/common.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })

            //Default
        
            .state ('photo-gallery.photos', {
                url: '/photos',
                templateUrl: 'modules/newec/client/views/photos.html'
            })
        
            //Timeline
    
            .state ('photo-gallery.timeline', {
                url: '/timeline',
                templateUrl: 'modules/newec/client/views/photo-timeline.html'
            })
        
        
            //------------------------------
            // GENERIC CLASSES
            //------------------------------
            
            .state ('generic-classes', {
                url: '/generic-classes',
                templateUrl: 'modules/newec/client/views/generic-classes.html'
            })
        
            
            //------------------------------
            // PAGES
            //------------------------------
            
            .state ('pages', {
                url: '/pages',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
        
            //Profile
        
            .state ('pages.profile', {
                url: '/profile',
                templateUrl: 'modules/newec/client/views/profile.html'
            })
        
            .state ('pages.profile.profile-about', {
                url: '/profile-about',
                templateUrl: 'modules/newec/client/views/profile-about.html'
            })
        
            .state ('pages.profile.profile-timeline', {
                url: '/profile-timeline',
                templateUrl: 'modules/newec/client/views/profile-timeline.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })

            .state ('pages.profile.profile-photos', {
                url: '/profile-photos',
                templateUrl: 'modules/newec/client/views/profile-photos.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
        
            .state ('pages.profile.profile-connections', {
                url: '/profile-connections',
                templateUrl: 'modules/newec/client/views/profile-connections.html'
            })
        
        
            //-------------------------------
        
            .state ('pages.listview', {
                url: '/listview',
                templateUrl: 'modules/newec/client/views/list-view.html'
            })
        
            .state ('pages.messages', {
                url: '/messages',
                templateUrl: 'modules/newec/client/views/messages.html'
            })
        
            .state ('pages.pricing-table', {
                url: '/pricing-table',
                templateUrl: 'modules/newec/client/views/pricing-table.html'
            })
        
            .state ('pages.contacts', {
                url: '/contacts',
                templateUrl: 'modules/newec/client/views/contacts.html'
            })
        
            .state ('pages.invoice', {
                url: '/invoice',
                templateUrl: 'modules/newec/client/views/invoice.html'
            })
                                
            .state ('pages.wall', {
                url: '/wall',
                templateUrl: 'modules/newec/client/views/wall.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'vendors',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/autosize/dist/autosize.min.js',
//                                    'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/mediaelement/build/mediaelement-and-player.js',
//                                    'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
            
            //------------------------------
            // BREADCRUMB DEMO
            //------------------------------
            .state ('breadcrumb-demo', {
                url: '/breadcrumb-demo',
                templateUrl: 'modules/newec/client/views/breadcrumb-demo.html'
            })

			
			//------------------------------
            // Campaign
            //------------------------------
        
            .state ('campaign', {
                url: '/campaign',
                templateUrl: 'modules/newec/client/views/common.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			.state ('campaign.listcampaign', {
                url: '/listcampaign',
                templateUrl: 'modules/newec/client/views/listcampaign.html'
                
            })
            
			.state ('campaign.editcampaign', {
                url: '/editcampaign/:targetId',
                templateUrl: 'modules/newec/client/views/editcampaign.html'
            })
			
            .state ('campaign.uploadcontact', {
                url: '/uploadcontact',
                templateUrl: 'modules/newec/client/views/uploadcontact.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			.state ('campaign.uploadcontact.uploadcontact-step1', {
                url: '/uploadcontact-step1/:fm',
                templateUrl: 'modules/newec/client/views/uploadcontact-step1.html'
            })
			.state ('campaign.uploadcontact.uploadcontact-setting', {
                url: '/uploadcontact-setting/:fm',
                templateUrl: 'modules/newec/client/views/uploadcontact-setting.html'
            })
			.state ('campaign.uploadcontact.uploadcontact-mapping', {
                url: '/uploadcontact-mapping/:fm',
                templateUrl: 'modules/newec/client/views/uploadcontact-mapping.html'
            })
			
            .state ('contact', {
                url: '/contact',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            
            .state ('contact.listcontact', {
                url: '/listcontact',
                templateUrl: 'modules/newec/client/views/listcontact.html',
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'materialAdmin',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js'
//                                ]
//                            }
//                        ]).then(
//							function success(args) {
//								console.log(args);
//								console.log('success');
//								return args;
//							}, 
//							function error(err) {
//								console.log(err);
//								return err;
//							}
//						);
//                    }
//                }
            })
			
            .state ('contact.addcontact', {
                url: '/addcontact',
                templateUrl: 'modules/newec/client/views/addcontact.html'
            })
            
            .state ('contact.editcontact', {
                url: '/editcontact/:targetId',
                templateUrl: 'modules/newec/client/views/editcontact.html'
            })
			
            .state ('contact.viewcontact', {
                url: '/viewcontact/:targetId',
                templateUrl: 'modules/newec/client/views/viewcontact.html'
            })
            .state ('contact.viewcontact.viewcontact-about', {
                url: '/viewcontact-about',
                templateUrl: 'modules/newec/client/views/viewcontact-about.html'
            })
            .state ('contact.viewcontact.viewcontact-notes', {
                url: '/viewcontact-notes',
                templateUrl: 'modules/newec/client/views/viewcontact-notes.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
//									'public/lib/bower_components/datetime-picker/css/datetimepicker.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css',
//									'public/lib/bower_components/time-picker/css/timepicker.css',
//									'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//									
//									'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js',
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//									'public/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
//                                    'public/lib/bower_components/datetime-picker/js/datetimepicker.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
            .state ('contact.viewcontact.viewcontact-leads', {
                url: '/viewcontact-leads',
                templateUrl: 'modules/newec/client/views/viewcontact-leads.html'
            })
            .state ('contact.viewcontact.viewcontact-calls', {
                url: '/viewcontact-calls',
                templateUrl: 'modules/newec/client/views/viewcontact-calls.html'
            })
			
			.state ('lead', {
                url: '/contact',
                templateUrl: 'modules/newec/client/views/common.html'
            })
            .state ('lead.listlead', {
                url: '/listlead',
                templateUrl: 'modules/newec/client/views/listleads.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			.state ('lead.appointment', {
                url: '/listappointments',
                templateUrl: 'modules/newec/client/views/taskMgmt/view/list_appointments.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
//									'public/lib/bower_components/datetime-picker/css/datetimepicker.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css',
//									'public/lib/bower_components/time-picker/css/timepicker.css',
//									'public/lib/bower_components/filter/filter.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//									
//									'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js',			
//									
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
//									'public/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
//                                    'public/lib/bower_components/datetime-picker/js/datetimepicker.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			.state ('contact.appointments', {
                url: '/appointments',
                templateUrl: 'modules/newec/client/views/taskMgmt/create/appointment.html'
//				resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//                            {
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//                                    'public/lib/bower_components/time-picker/css/timepicker.css',
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/bower_components/moment/min/moment.min.js',
////									'public/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
////                                    'public/lib/bower_components/time-picker/js/timepicker.js',
//									'public/lib/bower_components/time-picker/js/timepickerpop.js',
//                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
//                        ])
//                    }
//                }
            })
			
			//------------------------------
            // CALLING
            //------------------------------
			.state ('calling', {
                url: '/calling',
                templateUrl: 'modules/newec/client/views/calling.html'
//                resolve: {
//                    loadPlugin: function($ocLazyLoad) {
//                        return $ocLazyLoad.load ([
//							{
//                                name: 'css',
//                                insertBefore: '#app-level',
//                                files: [
//									'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.css',
//                                    'public/lib/farbtastic/farbtastic.css',
//                                    'public/lib/bower_components/summernote/dist/summernote.css',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
//                                    'public/lib/bower_components/chosen/chosen.min.css'
//                                ]
//                            },
//                            {
//                                name: 'vendors',
//                                files: [
//                                    'public/lib/input-mask/input-mask.min.js',
//                                    'public/lib/bower_components/nouislider/jquery.nouislider.min.js',
//                                    'public/lib/bower_components/moment/min/moment.min.js',
//                                    'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                                    'public/lib/bower_components/summernote/dist/summernote.min.js',
//                                    'public/lib/fileinput/fileinput.min.js',
//                                    'public/lib/bower_components/chosen/chosen.jquery.js',
//                                    'public/lib/bower_components/angular-chosen-localytics/chosen.js',
//									'public/lib/bower_components/autosize/dist/autosize.min.js'
//                                ]
//                            }
////                            {
////                                name: 'css',
////                                insertBefore: '#app-level',
////                                files: [
////                                    'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
////                                ]
////                            },
////                            {
////                                name: 'vendors',
////                                insertBefore: '#app-level-js',
////                                files: [
////                                    'public/lib/sparklines/jquery.sparkline.min.js',
////                                    'public/lib/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
////                                    'public/lib/bower_components/simpleWeather/jquery.simpleWeather.min.js',
////									'public/lib/bower_components/autosize/dist/autosize.min.js'
////                                ]
////                            }
//                        ])
//                    }
//                }
            })
			
			.state ('calling.info', {
                url: '/info',
                templateUrl: 'modules/newec/client/views/calling-info.html'
            })
			.state ('calling.notes', {
                url: '/notes',
                templateUrl: 'modules/newec/client/views/calling-notes.html'
            })
			.state ('calling.calls', {
                url: '/calls',
                templateUrl: 'modules/newec/client/views/calling-calls.html'
            })
			.state ('calling.leads', {
                url: '/leads',
                templateUrl: 'modules/newec/client/views/calling-leads.html'
            })
	
  }
  );
