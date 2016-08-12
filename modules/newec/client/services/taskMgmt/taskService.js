'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for campaign Management
 */

materialAdmin

.service('appointmentsService', [function(){
		this.tiltle = [{"date": "2015-01-11"}];
        this.data = [
            {
                "id": 500,
                "name": "Melinda John",
                "phone1":"(581) 533-6801",
				"phone2":"(581) 533-8745",
				"phone3":"(581) 533-6456",
				"company":"Impiger",
				"address":"T.Nagar",
				"email":"melinda.john@example.com",
				"web":"impigertech.com",
				"extension":"333",
				"gender":"Male",
				"fax":"1-451-9876543",
				"Notes":"Appointment is Fixed",
				"date":"2016-03-11",
				"time":"19:00:00",
				"campaign":"Appointment"

            },
            {   
                "id": 500,
                "name": "Oscar Palmer",
                "phone1":"(544) 270-9912",
				"phone2":"(544) 270-2365",
				"phone3":"(544) 270-7845",
				"company":"Impiger",
				"address":"T.Nagar",
				"email":"oscar.palmer24@example.com",
				"web":"impigertech.com",
				"extension":"333",
				"gender":"Male",
				"fax":"1-874-9876543",
				"Notes":"Appointment is Fixed",
				"date":"2016-04-11",
				"time":"17:00:00",
				"campaign":"Appointment"
            },
            {
                 "id": 500,
                "name": "Kent Nguyen",
                "phone1":"(506) 533-6801",
				"phone2":"(506) 533-8523",
				"phone3":"(506) 533-6874",
				"company":"Impiger",
				"address":"T.Nagar",
				"email":"kent.nguyen34@example.com",
				"web":"impigertech.com",
				"extension":"333",
				"gender":"Male",
				"fax":"1-212-8745543",
				"Notes":"Appointment is Fixed",
				"date":"2016-03-15",
				"time":"15:00:00",
				"campaign":"Appointment"
            }
        ];
    }]);