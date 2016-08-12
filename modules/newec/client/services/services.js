'use strict';
materialAdmin

		// =========================================================================
		// Header Messages and Notifications list Data
		// =========================================================================

		.service('messageService', ['$resource', function ($resource) {
				this.getMessage = function (img, user, text) {
					var gmList = $resource("modules/newec/client/assets/data/messages-notifications.json");

					return gmList.get({
						img: img,
						user: user,
						text: text
					});
				}
			}])


		// =========================================================================
		// Best Selling Widget Data (Home Page)
		// =========================================================================

		.service('bestsellingService', ['$resource', function ($resource) {
				this.getBestselling = function (img, name, range) {
					var gbList = $resource("client/assets/data/best-selling.json");

					return gbList.get({
						img: img,
						name: name,
						range: range,
					});
				}
			}])


		// =========================================================================
		// Todo List Widget Data
		// =========================================================================

		.service('todoService', ['$resource', function ($resource) {
				this.getTodo = function (todo) {
					var todoList = $resource("client/assets/data/todo.json");

					return todoList.get({
						todo: todo
					});
				}
			}])


		// =========================================================================
		// Recent Items Widget Data
		// =========================================================================

		.service('recentitemService', ['$resource', function ($resource) {
				this.getRecentitem = function (id, name, price) {
					var recentitemList = $resource("client/assets/data/recent-items.json");

					return recentitemList.get({
						id: id,
						name: name,
						price: price
					})
				}
			}])


		// =========================================================================
		// Recent Posts Widget Data
		// =========================================================================

		.service('recentpostService', ['$resource', function ($resource) {
				this.getRecentpost = function (img, user, text) {
					var recentpostList = $resource("modules/newec/client/assets/data/messages-notifications.json");

					return recentpostList.get({
						img: img,
						user: user,
						text: text
					})
				}
			}])

		// =========================================================================
		// Data Table
		// =========================================================================

		.service('contactInfoService', [function () {
				this.data = [
					{
						1: {
							phoneNumber: '(382)-122-5001',
							name: 'Contact Name 1',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove",
								title: "Mr",
								name: "Contact Name 1",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5001',
								secondaryPhone: '(382)-122-5000',
								extension: '123',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
												2: {
							phoneNumber: '(382)-122-5002',
							name: 'Contact Name 2',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 2",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5002',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						3: {
							phoneNumber: '(382)-122-5003',
							name: 'Contact Name 3',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 3",
								title: "Mr",
								name: "Contact Name 3",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5003',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						4: {
							phoneNumber: '(382)-122-5004',
							name: 'Contact Name 4',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 4",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5004',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						5: {
							phoneNumber: '(382)-122-5005',
							name: 'Contact Name 5',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 5",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5005',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						6: {
							phoneNumber: '(382)-122-5006',
							name: 'Contact Name 6',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 6",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5006',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						7: {
							phoneNumber: '(382)-122-5007',
							name: 'Contact Name 7',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 7",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5007',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						8: {
							phoneNumber: '(382)-122-5008',
							name: 'Contact Name 8',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 8",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5008',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						9: {
							phoneNumber: '(382)-122-5009',
							name: 'Contact Name 9',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 9",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5006',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						10: {
							phoneNumber: '(382)-122-5010',
							name: 'Contact Name 10',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 10",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5010',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						12: {
							phoneNumber: '(382)-122-5012',
							name: 'Contact Name 12',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 12",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5002',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						11: {
							phoneNumber: '(382)-122-5011',
							name: 'Contact Name 11',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 11",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5011',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						13: {
							phoneNumber: '(382)-122-5003',
							name: 'Contact Name 13',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 3",
								title: "Mr",
								name: "Contact Name 13",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5013',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						14: {
							phoneNumber: '(382)-122-5014',
							name: 'Contact Name 14',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 14",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5004',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						15: {
							phoneNumber: '(382)-122-5015',
							name: 'Contact Name 15',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 15",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5015',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						16: {
							phoneNumber: '(382)-122-5016',
							name: 'Contact Name 16',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 16",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5016',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						17: {
							phoneNumber: '(382)-122-5017',
							name: 'Contact Name 17',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 17",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5017',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						18: {
							phoneNumber: '(382)-122-5018',
							name: 'Contact Name 18',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 18",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5018',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						19: {
							phoneNumber: '(382)-122-5019',
							name: 'Contact Name 19',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 19",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5019',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						},
						20: {
							phoneNumber: '(382)-122-5020',
							name: 'Contact Name 20',
							leadstatus: 'Hot Lead',
							notes: '',
							basicInformation: {
								leadSource: "Impiger",
								company: "Glencove 2",
								title: "Mr",
								name: "Contact Name 20",
								gender: "Male",
								age: "35"
							},
							contactInformation: {
								primaryPhone: '(382)-122-5020',
								secondaryPhone: '(382)-122-5000',
								extension: '1234',
								email: "letsdance@arthurmurraymemorial.com",
								fax: '234123',
								website: "http://www.arthurmurraymemorial.com/"
							},
							addressInformation: {
								street: "9746 Katy Fwy",
								city: "Hacienda Heights",
								state: "Ca",
								country: "US",
								zipCode: '456654'
							},
							otherInformation: {
								listed: "06/16/15",
								dom: "183",
								areaName: "Hacienda Heights",
								propertyType: "Single Family Residence",
								office: "IRN Realty",
								listAgent: "Lazar Chang",
								offMarket: "12/15/15",
								listPrice: "$932,558",
								status: "Expired",
								mlslistingID: "TR15131807",
								prevStatusDate: "06/18/15",
								prevStatus: "Active",
								mlsid: "8241-002-042"
							}
						}
					}
				];
			}])
		
		
    // =========================================================================
    // Data Table
    // =========================================================================
    
//    .service('tableService', [function(){
//			   this.data = [];
//
//    }])

    // =========================================================================
    // Data Table
    // =========================================================================
		.factory('tableService', ['$http', function ($http) {
				var tableDataOp = {};
				tableDataOp.getContacts = function () {
					return $http({
						method: "post",
						url: '/listContacts',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
				};

		return tableDataOp;
	}])
//    .service('leadService', [function(){
//        
//    }])


		// =========================================================================
		// Nice Scroll - Custom Scroll bars
		// =========================================================================
		.service('nicescrollService', function () {
			var ns = {};
			ns.niceScroll = function (selector, color, cursorWidth) {

				$(selector).niceScroll({
					cursorcolor: color,
					cursorborder: 0,
					cursorborderradius: 0,
					cursorwidth: cursorWidth,
					bouncescroll: true,
					mousescrollstep: 100,
					autohidemode: false
				});
			}

			return ns;
		})


		//==============================================
		// BOOTSTRAP GROWL
		//==============================================

		.service('growlService', function () {
			var gs = {};
			gs.growl = function (message, type) {
				$.growl({
					message: message
				}, {
					type: type,
					allow_dismiss: false,
					label: 'Cancel',
					className: 'btn-xs btn-inverse',
					placement: {
						from: 'top',
						align: 'right'
					},
					delay: 2500,
					animate: {
						enter: 'animated bounceIn',
						exit: 'animated bounceOut'
					},
					offset: {
						x: 20,
						y: 85
					}
				});
			}

			return gs;
		});
