'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/bower_components/animate.css/animate.min.css',
				'public/lib/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
				'public/lib/bower_components/bootstrap-sweetalert/lib/sweet-alert.css',
				'public/lib/bower_components/angular-loading-bar/src/loading-bar.css',
				'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
				'public/lib/bower_components/nouislider/jquery.nouislider.css',
				'public/lib/farbtastic/farbtastic.css',
				'public/lib/bower_components/summernote/dist/summernote.css',
				'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
				'public/lib/bower_components/filter/filter.css',
				'public/lib/bower_components/mediaelement/build/mediaelementplayer.css',
				'public/lib/bower_components/lightgallery/light-gallery/css/lightGallery.css',
				'public/lib/bower_components/daterangepicker/css/daterangepicker.min.css',
				'public/lib/bower_components/chosen/chosen.min.css',
				'public/lib/bower_components/text-angular/css/style.css',
				'public/lib/bower_components/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bower_components/datetime-picker/css/datetimepicker.css',
				'public/lib/bower_components/time-picker/css/timepicker.css'
			],
			js: [
				'public/lib/bower_components/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-messages/angular-messages.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/bower_components/moment/min/moment.min.js',
				'public/lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/bower_components/datetime-picker/js/datetimepicker.js',
				'public/lib/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
				'public/lib/angular-file-upload/angular-file-upload.js',
				'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
				'public/lib/bower_components/oclazyload/dist/ocLazyLoad.min.js',
				'public/lib/bower_components/angular-loading-bar/src/loading-bar.js',
				'public/lib/bower_components/jquery.nicescroll/jquery.nicescroll.min.js',
				'public/lib/bower_components/bootstrap-sweetalert/lib/sweet-alert.min.js',
				'public/lib/bower_components/Waves/dist/waves.min.js',
				'public/lib/bootstrap-growl/bootstrap-growl.min.js',
				'public/lib/bower_components/ng-table/dist/ng-table.js',
				'public/lib/bower_components/text-angular/js/textAngular-sanitize.min.js',
				'public/lib/bower_components/text-angular/js/textAngular-rangy.min.js',
				'public/lib/bower_components/text-angular/js/textAngular.min.js',
				'public/lib/bower_components/flot/jquery.flot.js',
				'public/lib/bower_components/flot.curvedlines/curvedLines.js',
				'public/lib/bower_components/flot/jquery.flot.resize.js',
				'public/lib/bower_components/flot/jQuery.circleMenu.js',
				'public/lib/bower_components/fullcalendar/dist/fullcalendar.min.js',
				'public/lib/bower_components/flot-orderBars/js/jquery.flot.orderBars.js',
				'public/lib/bower_components/flot/jquery.flot.pie.js',
				'public/lib/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
				'public/lib/bower_components/angular-nouislider/src/nouislider.min.js',
				'public/lib/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
				'public/lib/bower_components/daterangepicker/js/daterangepicker_bootstrap.min.js',
				'public/lib/bower_components/time-picker/js/timepickerpop.js',
				'public/lib/bower_components/daterangepicker/js/angular-daterangepicker.min.js',
				'public/lib/sparklines/jquery.sparkline.min.js',
				'public/lib/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
				'public/lib/bower_components/simpleWeather/jquery.simpleWeather.min.js',
//				'public/lib/*/!(lazyload)/**/*.js'
				'public/lib/input-mask/input-mask.min.js',				
				'public/lib/bower_components/summernote/dist/summernote.min.js',
				'public/lib/fileinput/fileinput.min.js',
				'public/lib/bower_components/chosen/chosen.jquery.js',
				'public/lib/bower_components/mediaelement/build/mediaelement-and-player.js',
				'public/lib/bower_components/autosize/dist/autosize.min.js',
				'public/lib/bower_components/angular-chosen-localytics/chosen.js',
				'public/lib/bower_components/lightgallery/light-gallery/js/lightGallery.min.js',
				
				
			],
			tests: ['public/lib/angular-mocks/angular-mocks.js']
		},
		css: [
			'modules/*/client/css/*.css',
			'modules/*/client/assets/css/*.css',
			'modules/newec/client/assets/fonts/font-awesome41.css'
		],
		less: [
//      'modules/*/client/less/*.less'
		],
		sass: [
			'modules/*/client/scss/*.scss'
		],
		js: [
			'modules/core/client/app/config.js',
			'modules/core/client/app/init.js',
			'modules/*/client/*.js',
			'modules/*/client/**/*.js',
			'modules/*/client/config/*.js',
			'modules/*/client/controllers/*/*.js',
			'modules/*/client/controllers/*.js',
			'modules/*/client/services/*/.js',
			'modules/*/client/services/*.js',
			'modules/*/client/!(lazyload)/**/*.js'

		],
		views: ['modules/*/client/views/**/*.html',
			'modules/*/client/views/*.html'
		],
		templates: ['build/templates.js'],
		image: ['modules/*/client/asset/img/*.png',
			'modules/*/client/asset/img/**/*.png'
		],
	},
	server: {
		gruntConfig: 'gruntfile.js',
		gulpConfig: 'gulpfile.js',
		allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
		models: 'modules/*/server/models/**/*.js',
		routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
		sockets: 'modules/*/server/sockets/**/*.js',
		config: 'modules/*/server/config/*.js',
		policies: 'modules/*/server/policies/*.js',
		views: 'modules/*/server/views/*.html'
	}
};
