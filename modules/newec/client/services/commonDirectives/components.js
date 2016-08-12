'use strict';
materialAdmin

    // =========================================================================
    // WEATHER WIDGET
    // =========================================================================

    .directive('weatherWidget', function(){
        return {
            restrict: 'A',
            link: function(scope, element) {
                $.simpleWeather({
                    location: 'Austin, TX',
                    woeid: '',
                    unit: 'f',
                    success: function(weather) {
                        html = '<div class="weather-status">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
                        html += '<ul class="weather-info"><li>'+weather.city+', '+weather.region+'</li>';
                        html += '<li class="currently">'+weather.currently+'</li></ul>';
                        html += '<div class="weather-icon wi-'+weather.code+'"></div>';
                        html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[1].high+'/'+weather.forecast[1].low+'</span><span>'+weather.forecast[1].text+'</span>';
                        html += '</div>';
                        html += '<div class="weather-list after-tomorrow">';
                        html += '<span class="weather-list-icon wi-'+weather.forecast[2].code+'"></span><span>'+weather.forecast[2].high+'/'+weather.forecast[2].low+'</span><span>'+weather.forecast[2].text+'</span>';
                        html += '</div></div>';
                        $("#weather-widget").html(html);
                    },
                    error: function(error) {
                        $("#weather-widget").html('<p>'+error+'</p>');
                    }
                });
            }
        }
        
    })



    // =========================================================================
    // SWEATALERT
    // =========================================================================

    //Basic
    .directive('swalBasic', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!");
                });
            }
        }
    })
    
    //A title with a text under
    .directive('swalText', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")

                });
            }
        }
    })

    //Success Message
    .directive('swalSuccess', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")

                });
            }
        }
    })
	
    //Campaign update Message
    .directive('addedSuccess', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Added successfully", "success")

                });
            }
        }
    })
    .directive('campCreate', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Campaign created successfully", "success")

                });
            }
        }
    })
    .directive('contactAdd', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Contacts addedted successfully", "success")

                });
            }
        }
    })
    .directive('campUpdate', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Campaign updated successfully", "success")

                });
            }
        }
    })
	
    //Account update Message
    .directive('swalUpdate', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Account updated successfully", "success")

                });
            }
        }
    })
	
	 //Custom Image
    .directive('swalImgUpdate', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Success!",   
                        text: "Account updated successfully.",   
                        imageUrl: "client/assets/img/thumbs-up.png" 
                    });
                });
            }
        }
    })
	
	.directive('recordingAdd', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Recornding added successfully", "success")

                });
            }
        }
    })
	.directive('recordingUpdate', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal("Success!", "Recording updated successfully", "success")

                });
            }
        }
    })

    //Disable Message
    .directive('swalDisable', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
//                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, Disable it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Disabled!", "User has been disabled.", "success"); 
                    });
                });
            }
        }
    })
	
    //Reset Message
    .directive('swalReset', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
//                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, Reset it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Reset!", "Reset Done.", "success"); 
                    });
                });
            }
        }
    })
	
    //Renew Message
    .directive('swalRenew', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Do you want to Renewal your product?",   
                        text: "Once renewed, will not refund!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, Renew it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Reset!", "Renewal Done.", "success"); 
                    });
                });
            }
        }
    })
	
    //Renew Message
    .directive('swalAddproduct', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
//                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, Create a Product",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Account!", "Created.", "success"); 
                    });
                });
            }
        }
    })
	
    //Delete Settings Message
    .directive('swalPreference', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this settings!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Deleted!", "Campaign Settings has been deleted.", "success"); 
                    });
                });
            }
        }
    })
    //Delete Appointment Message
    .directive('swalappointment', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this appointment!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Deleted!", "Appointment has been deleted.", "success"); 
                    });
                });
            }
        }
    })
	
    //Delete Settings Message
    .directive('swalRecording', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this media!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Deleted!", "Media has been deleted.", "success"); 
                    });
                });
            }
        }
    })
    .directive('swalDownload', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Success!!!",   
                        text: "Media has been downloaded sucessfully.",   
                    }, function(){   
                        swal("Download!", "Media has been downloaded.", "success"); 
                    });
                });
            }
        }
    })
	
    //Warning Message
    .directive('swalWarning', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You want to delete!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        closeOnConfirm: false 
                    }, function(){   
                        swal("Deleted!", "Deleted successfully.", "success"); 
                    });
                });
            }
        }
    })

    //Parameter
    .directive('swalParams', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Are you sure?",   
                        text: "You will not be able to recover this imaginary file!",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Yes, delete it!",   
                        cancelButtonText: "No, cancel plx!",   
                        closeOnConfirm: false,   
                        closeOnCancel: false 
                    }, function(isConfirm){   
                        if (isConfirm) {     
                            swal("Deleted!", "Your imaginary file has been deleted.", "success");   
                        } else {     
                            swal("Cancelled", "Your imaginary file is safe :)", "error");   
                        } 
                    });
                });
            }
        }
    })

    //Custom Image
    .directive('swalImg', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    swal({   
                        title: "Sweet!",   
                        text: "Here's a custom image.",   
                        imageUrl: "client/assets/img/thumbs-up.png" 
                    });
                });
            }
        }
    })
            
    //Auto Close Timer
    .directive('swalTimer', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                     swal({   
                        title: "Auto close alert!",   
                        text: "I will close in 2 seconds.",   
                        timer: 2000,   
                        showConfirmButton: false 
                    });
                });
            }
        }
    })

    

    // =========================================================================
    // GROWL
    // =========================================================================

    .directive('growlDemo', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                function notify(from, align, icon, type, animIn, animOut){
                    $.growl({
                        icon: icon,
                        title: ' Bootstrap Growl ',
                        message: 'Turning standard Bootstrap alerts into awesome notifications',
                        url: ''
                    },{
                            element: 'body',
                            type: type,
                            allow_dismiss: true,
                            placement: {
                                    from: from,
                                    align: align
                            },
                            offset: {
                                x: 20,
                                y: 85
                            },
                            spacing: 10,
                            z_index: 1031,
                            delay: 2500,
                            timer: 1000,
                            url_target: '_blank',
                            mouse_over: false,
                            animate: {
                                    enter: animIn,
                                    exit: animOut
                            },
                            icon_type: 'class',
                            template: '<div data-growl="container" class="alert" role="alert">' +
                                            '<button type="button" class="close" data-growl="dismiss">' +
                                                '<span aria-hidden="true">&times;</span>' +
                                                '<span class="sr-only">Close</span>' +
                                            '</button>' +
                                            '<span data-growl="icon"></span>' +
                                            '<span data-growl="title"></span>' +
                                            '<span data-growl="message"></span>' +
                                            '<a href="#" data-growl="url"></a>' +
                                        '</div>'
                    });
                }
                
                element.on('click', function(e){
                    e.preventDefault();
                    
                    var nFrom = attrs.from;
                    var nAlign = attrs.align;
                    var nIcons = attrs.icon;
                    var nType = attrs.type;
                    var nAnimIn = attrs.animationIn;
                    var nAnimOut = attrs.animationOut;

                    notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
            
                })
                
                
            }
        }
    })
    .directive('growlSuccess', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                function notify(from, align, icon, type, animIn, animOut){
                    $.growl({
                        icon: icon,
                        title: ' Success. ',
                        message: 'Your details updated successfully',
                        url: ''
                    },{
                            element: 'body',
                            type: type,
                            allow_dismiss: true,
                            placement: {
                                    from: from,
                                    align: align
                            },
                            offset: {
                                x: 20,
                                y: 85
                            },
                            spacing: 10,
                            z_index: 1031,
                            delay: 2500,
                            timer: 1000,
                            url_target: '_blank',
                            mouse_over: false,
                            animate: {
                                    enter: animIn,
                                    exit: animOut
                            },
                            icon_type: 'class',
                            template: '<div data-growl="container" class="alert" role="alert">' +
                                            '<button type="button" class="close" data-growl="dismiss">' +
                                                '<span aria-hidden="true">&times;</span>' +
                                                '<span class="sr-only">Close</span>' +
                                            '</button>' +
                                            '<span data-growl="icon"></span>' +
                                            '<span data-growl="title"></span>' +
                                            '<span data-growl="message"></span>' +
                                            '<a href="#" data-growl="url"></a>' +
                                        '</div>'
                    });
                }
                
                element.on('click', function(e){
                    e.preventDefault();
                    
                    var nFrom = attrs.from;
                    var nAlign = attrs.align;
                    var nIcons = attrs.icon;
                    var nType = attrs.type;
                    var nAnimIn = attrs.animationIn;
                    var nAnimOut = attrs.animationOut;

                    notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
            
                })
                
                
            }
        }
    });

