'use strict';
/**
 * To handle the contacts related request from client side
 * 
 * @author vinodha
 * Created on Mar 3, 2016
 */

module.exports = function (app) {
	var contacts = require('../controllers/contactsControllers');
	console.log(contacts.getLeads);
	app.route('/listContacts').post(contacts.getContacts);
	app.route('/getContactsDetailsById').post(contacts.getContactDetailsById);
	app.route('/updateContactById').post(contacts.updateContactById);
	app.route('/getContactsDetails').post(contacts.getContactsDetails);
	app.route('/deleteContactById').post(contacts.deleteContactById);
	app.route('/listLeads').post(contacts.getLeads);
	app.route('/deleteLeadById').post(contacts.deleteLeadById);
};