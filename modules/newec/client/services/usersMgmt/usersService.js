'use strict';
/* 
 * Created on : 28th Jan 2016
 * Author: Dhilip James
 * Controller for usermanagement
 */

materialAdmin
.service('userService', [function(){
        this.data = [
            {
                "id": 100,
                "name": "Marc Agent",
                "role": "Agent",
                "email": "marc.agent@example.com",
                "phone": "(582) 122-5003",
                "product_code": "200",
                "product_name": "SD1MU",
                "sub_start_date": "2015-10-10",
                "sub_end_date": "2015-12-10"
            },
            {   
                "id": 101,
                "name": "Marc1 Agent",
                "role": "Agent",
                "email": "marc1.agent@example.com",
                "phone": "(582) 122-5004",
                "product_code": "200",
                "product_name": "SD1MU",
                "sub_start_date": "2015-10-10",
                "sub_end_date": "2015-12-10"
            },
//			{
//                "id": 102,
//                "name": "Marc2 Agent",
//                "role": "Agent",
//                "email": "marc2.agent@example.com",
//                "phone": "(582)-122-5005",
//                "product_code": "202",
//                "product_name": "SD2MU",
//                "sub_start_date": "2015-10-10",
//                "sub_end_date": "2015-12-10"
//            },
//            {   
//                "id": 103,
//                "name": "Marc3 Agent",
//                "role": "Agent",
//                "email": "marc3.agent@example.com",
//                "phone": "(582)-122-5006",
//                "product_code": "203",
//                "product_name": "SD3MU",
//                "sub_start_date": "2015-10-10",
//                "sub_end_date": "2015-12-10"
//            },
//			{
//                "id": 104,
//                "name": "Marc4 Agent",
//                "role": "Closer Agent",
//                "email": "marc4.agent@example.com",
//                "phone": "(582)-122-5007",
//                "product_code": "204",
//                "product_name": "SD4MU",
//                "sub_start_date": "2015-10-10",
//                "sub_end_date": "2015-12-10"
//            },
            {   
                "id": 105,
                "name": "Marc5 Agent",
                "role": "Closer Agent",
                "email": "marc5.agent@example.com",
                "phone": "(582) 122-5008",
                "product_code": "205",
                "product_name": "SD1P1",
                "sub_start_date": "2015-10-10",
                "sub_end_date": "2015-12-10"
            },
        ];
    }])

    .service('userService1', [function(){
        this.data = [
            {
                "id": 100,
                "name": "Marc Agent",
                "role": "Agent",
                "email": "marc.agent@example.com",
                "phone": "(582)-122-5003",
                "product_code": "200",
                "product_name": "SD1MU",
                "sub_start_date": "2015-10-10",
                "sub_end_date": "2015-12-10"
            },
//            {   
//                "id": 101,
//                "name": "Marc1 Agent",
//                "role": "Agent",
//                "email": "marc1.agent@example.com",
//                "phone": "(582)-122-5004",
//                "product_code": "200",
//                "product_name": "SD1MU",
//                "sub_start_date": "2015-10-10",
//                "sub_end_date": "2015-12-10"
//            },
//			{
//                "id": 102,
//                "name": "Marc2 Agent",
//                "role": "Agent",
//                "email": "marc2.agent@example.com",
//                "phone": "(582)-122-5005",
//                "product_code": "202",
//                "product_name": "SD2MU",
//                "sub_start_date": "2015-10-10",
//                "sub_end_date": "2015-12-10"
//            },
            {   
                "id": 103,
                "name": "Marc3 Agent",
                "role": "Agent",
                "email": "marc3.agent@example.com",
                "phone": "(582)-122-5006",
                "product_code": "203",
                "product_name": "SD3MU",
                "sub_start_date": "2015-10-10",
                "sub_end_date": "2015-12-10"
            }
        ];
    }]);