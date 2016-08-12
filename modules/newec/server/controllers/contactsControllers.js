'use strict';

exports.getContacts = function (req, res, next) {
//var getContacts = function(){
	var data = [
            {
                "id": 10238,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "username": "MarcBarnes",
                "contact": "(382) 122-5003"
            },
            {   
                "id": 10243,
                "name": "Glen Curtis",
                "email": "glen.curtis11@example.com",
                "username": "GlenCurtis",
                "contact": "(477) 981-4948"
            },
            {
                "id": 10248,
                "name": "Beverly Gonzalez",
                "email": "beverly.gonzalez54@example.com",
                "username": "BeverlyGonzalez",
                "contact": "(832) 255-5161"
            },
            {
                "id": 10253,
                "name": "Yvonne Chavez",
                "email": "yvonne.chavez@example.com",
                "username": "YvonneChavez",
                "contact": "(477) 446-3715"
            },
            {
                "id": 10234,
                "name": "Melinda Mitchelle",
                "email": "melinda@example.com",
                "username": "MelindaMitchelle",
                "contact": "(813) 716-4996"
                
            },
            {
                "id": 10239,
                "name": "Shannon Bradley",
                "email": "shannon.bradley42@example.com",
                "username": "ShannonBradley",
                "contact": "(774) 291-9928"
            },
            {
                "id": 10244,
                "name": "Virgil Kim",
                "email": "virgil.kim81@example.com",
                "username": "VirgilKim",
                "contact": "(219) 181-7898"
            },
            {
                "id": 10249,
                "name": "Letitia Robertson",
                "email": "letitia.rober@example.com",
                "username": "Letitia Robertson",
                "contact": "(647) 209-4589"
            },
            {
                "id": 10237,
                "name": "Claude King",
                "email": "claude.king22@example.com",
                "username": "ClaudeKing",
                "contact": "(657) 988-8701"
            },
            {
                "id": 10242,
                "name": "Roland Craig",
                "email": "roland.craig47@example.com",
                "username": "RolandCraig",
                "contact": "(932) 935-9471"
            },
            {
                "id": 10247,
                "name": "Colleen Parker",
                "email": "colleen.parker38@example.com",
                "username": "ColleenParker",
                "contact": "(857) 459-2792"
            },
            {
                "id": 10252,
                "name": "Leah Jensen",
                "email": "leah.jensen27@example.com",
                "username": "LeahJensen",
                "contact": "(861) 275-4686"
            },
            {
                "id": 10236,
                "name": "Harold Martinez",
                "email": "martinez67@example.com",
                "username": "HaroldMartinez",
                "contact": "(836) 634-9133"
            },
            {
                "id": 10241,
                "name": "Keith Lowe",
                "email": "keith.lowe96@example.com",
                "username": "KeithLowe",
                "contact": "(778) 787-3100"
            },
            {
                "id": 10246,
                "name": "Charles Walker",
                "email": "charles.walker90@example.com",
                "username": "CharlesWalker",
                "contact": "(486) 440-4716"
            },
            {
                "id": 10251,
                "name": "Lillie Curtis",
                "email": "lillie.curtis12@example.com",
                "username": "LillieCurtis",
                "contact": "(342) 510-2258"
            },
            {
                "id": 10235,
                "name": "Genesis Reynolds",
                "email": "genesis@example.com",
                "username": "GenesisReynolds",
                "contact": "(339) 375-1858"
            },
            {
                "id": 10240,
                "name": "Oscar Palmer",
                "email": "oscar.palmer24@example.com",
                "username": "OscarPalmer",
                "contact": "(544) 270-9912"

			}
        ];
//		return data;
		res.send({"result": data});
};

exports.getContactDetailsById = function (req, res, next) {
	var data = [
            {
                "id": 10238,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "username": "MarcBarnes",
                "leadSource": "Impiger",
                "company": "Impiger",
                "title": "Mr",
                "gender": "male",
                "age": "31",
                "primaryPhone": "3214569877",
                "secondaryPhone": "7894561236",
                "extension": "574",
                "fax": "78451236",
                "website": "http://www.arthurmurraymemorial.com/",
                "street": "9746 Katy Fwy",
                "city": "Hacienda Heights",
                "state": "Washington",
                "country": "United States",
                "zipCode": "600017",
                "contact": "(382) 122-5003",
				"basicInformation": "1",
			"contactInformation": "1",
			"addressInformation": "1",
			"otherInformation": "1"
            },
            {   
                "id": 10243,
                "name": "Glen Curtis",
                "email": "glen.curtis11@example.com",
                "username": "GlenCurtis",
                "contact": "(477)-981-4948"
            },
            {
                "id": 10248,
                "name": "Beverly Gonzalez",
                "email": "beverly.gonzalez54@example.com",
                "username": "BeverlyGonzalez",
                "contact": "(832)-255-5161"
            },
            {
                "id": 10253,
                "name": "Yvonne Chavez",
                "email": "yvonne.chavez@example.com",
                "username": "YvonneChavez",
                "contact": "(477)-446-3715"
            },
            {
                "id": 10234,
                "name": "Melinda Mitchelle",
                "email": "melinda@example.com",
                "username": "MelindaMitchelle",
                "contact": "(813)-716-4996"
                
            },
            {
                "id": 10239,
                "name": "Shannon Bradley",
                "email": "shannon.bradley42@example.com",
                "username": "ShannonBradley",
                "contact": "(774)-291-9928"
            },
            {
                "id": 10244,
                "name": "Virgil Kim",
                "email": "virgil.kim81@example.com",
                "username": "VirgilKim",
                "contact": "(219)-181-7898"
            },
            {
                "id": 10249,
                "name": "Letitia Robertson",
                "email": "letitia.rober@example.com",
                "username": "Letitia Robertson",
                "contact": "(647)-209-4589"
            },
            {
                "id": 10237,
                "name": "Claude King",
                "email": "claude.king22@example.com",
                "username": "ClaudeKing",
                "contact": "(657)-988-8701"
            },
            {
                "id": 10242,
                "name": "Roland Craig",
                "email": "roland.craig47@example.com",
                "username": "RolandCraig",
                "contact": "(932)-935-9471"
            },
            {
                "id": 10247,
                "name": "Colleen Parker",
                "email": "colleen.parker38@example.com",
                "username": "ColleenParker",
                "contact": "(857)-459-2792"
            },
            {
                "id": 10252,
                "name": "Leah Jensen",
                "email": "leah.jensen27@example.com",
                "username": "LeahJensen",
                "contact": "(861)-275-4686"
            },
            {
                "id": 10236,
                "name": "Harold Martinez",
                "email": "martinez67@example.com",
                "username": "HaroldMartinez",
                "contact": "(836)-634-9133"
            },
            {
                "id": 10241,
                "name": "Keith Lowe",
                "email": "keith.lowe96@example.com",
                "username": "KeithLowe",
                "contact": "(778)-787-3100"
            },
            {
                "id": 10246,
                "name": "Charles Walker",
                "email": "charles.walker90@example.com",
                "username": "CharlesWalker",
                "contact": "(486)-440-4716"
            },
            {
                "id": 10251,
                "name": "Lillie Curtis",
                "email": "lillie.curtis12@example.com",
                "username": "LillieCurtis",
                "contact": "(342)-510-2258"
            },
            {
                "id": 10235,
                "name": "Genesis Reynolds",
                "email": "genesis@example.com",
                "username": "GenesisReynolds",
                "contact": "(339)-375-1858"
            },
            {
                "id": 10240,
                "name": "Oscar Palmer",
                "email": "oscar.palmer24@example.com",
                "username": "OscarPalmer",
                "contact": "(544)-270-9912"
			}
		];
		var result = getDetails(data, id);
//		return result;
		res.send({"result": result});
};

exports.getContactsDetails = function (req, res, next) {
	var data = [
		{
			"leadSource": "Impiger",
			"company": "Glencove",
			"title": "Mr",
			"name": "Jenchun Wu",
			"gender": "male",
			"age": "35",
			"primaryPhone": "17134681628",
			"secondaryPhone": "17134681627",
			"extension": "123",
			"email": "letsdance@arthurmurraymemorial.com",
			"fax": "123123",
			"website": "http://www.arthurmurraymemorial.com/",
			"street": "9746 Katy Fwy",
			"city": "Hacienda Heights",
			"state": "Ca",
			"country": "US",
			"zipCode": "77055",
			"listed": "06/16/15",
			"dom": "183",
			"areaName": "Hacienda Heights",
			"propertyType": "Single Family Residence",
			"office": "IRN Realty",
			"listAgent": "Lazar Chang",
			"offMarket": "12/15/15",
			"listPrice": "$932,558",
			"status": "Expired",
			"mlslistingID": "TR15131807",
			"prevStatusDate": "06/18/15",
			"prevStatus": "Active",
			"mlsid": "8241-002-042"
//			"basicInformation": "1",
//			"contactInformation": "1",
//			"addressInformation": "1",
//			"otherInformation": "1"
		}
	];
//		var result = getDetails(data[i], id);
//	return data[0];
	res.send({"result": data[0]});
};

var getDetails = function (data, id) {

	for (var i = 0; i < data.length; i++)
	{
		if (data[i].id == id)
		{
			return data[i];
		}
	}
};

exports.updateContactById = function (req, res, next) {
//	var id = data.id;
	// Do update operation
//	return true;
	res.send({"result": true});
};
exports.deleteContactById = function (req, res, next) {
//	var id = data.id;
	// Do update operation
//	return true;
	res.send({"result": true});
};
exports.deleteLeadById = function (req, res, next) {
//	var id = data.id;
	// Do update operation
	res.send({"result": true});
};
exports.getLeads = function (req, res, next) {
	var data = [
             {
                "id": 10247,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "contact": "(382) 122-5003"
            },
            {   
                "id": 10248,
                "name": "Glen Curtis",
                "email": "glen.curtis11@example.com",
                "contact": "(477) 981-4948"
            },
            {
                "id": 10249,
                "name": "Beverly Gonzalez",
                "email": "beverly.gonzalez54@example.com",
                "contact": "(832) 255-5161"
            },
            {
                "id": 10250,
                "name": "Yvonne Chavez",
                "email": "yvonne.chavez@example.com",
                "contact": "(477) 446-3715"
            },
            {
                "id": 10251,
                "name": "Melinda Mitchelle",
                "email": "melinda@example.com",
                "contact": "(813) 716-4996"
                
            },
            {
                "id": 10252,
                "name": "Shannon Bradley",
                "email": "shannon.bradley42@example.com",
                "contact": "(774) 291-9928"
            },
            {
                "id": 10253,
                "name": "Virgil Kim",
                "email": "virgil.kim81@example.com",
                "username": "VirgilKim",
                "contact": "(219) 181-7898"
            },
            {
                "id": 10254,
                "name": "Letitia Robertson",
                "email": "letitia.rober@example.com",
                "username": "Letitia Robertson",
                "contact": "(647) 209-4589"
            },
            {
                "id": 10255,
                "name": "Claude King",
                "email": "claude.king22@example.com",
                "username": "ClaudeKing",
                "contact": "(657) 988-8701"
            },
            {
                "id": 10256,
                "name": "Roland Craig",
                "email": "roland.craig47@example.com",
                "username": "RolandCraig",
                "contact": "(932) 935-9471"
            },
            {
                "id": 10257,
                "name": "Colleen Parker",
                "email": "colleen.parker38@example.com",
                "username": "ColleenParker",
                "contact": "(857) 459-2792"
            },
            {
                "id": 10258,
                "name": "Leah Jensen",
                "email": "leah.jensen27@example.com",
                "username": "LeahJensen",
                "contact": "(861) 275-4686"
            },
            {
                "id": 10259,
                "name": "Harold Martinez",
                "email": "martinez67@example.com",
                "username": "HaroldMartinez",
                "contact": "(836) 634-9133"
            },
            {
                "id": 10260,
                "name": "Keith Lowe",
                "email": "keith.lowe96@example.com",
                "username": "KeithLowe",
                "contact": "(778) 787-3100"
            },
            {
                "id": 10261,
                "name": "Charles Walker",
                "email": "charles.walker90@example.com",
                "username": "CharlesWalker",
                "contact": "(486) 440-4716"
            },
            {
                "id": 10262,
                "name": "Lillie Curtis",
                "email": "lillie.curtis12@example.com",
                "username": "LillieCurtis",
                "contact": "(342) 510-2258"
            },
            {
                "id": 10263,
                "name": "Genesis Reynolds",
                "email": "genesis@example.com",
                "username": "GenesisReynolds",
                "contact": "(339) 375-1858"
            },
            {
                "id": 10264,
                "name": "Oscar Palmer",
                "email": "oscar.palmer24@example.com",
                "username": "OscarPalmer",
                "contact": "(544) 270-9912"

			},
            {
                "id": 10265,
                "name": "Lillie Lead",
                "email": "lillie.lead@example.com",
                "contact": "(342) 510-2258"
            },
            {
                "id": 10266,
                "name": "Genesis Lead",
                "email": "genesis@example.com",
                "contact": "(339) 375-1858"
            },
            {
                "id": 10267,
                "name": "Oscar Lead",
                "email": "oscar.lead@example.com",
                "contact": "(544) 270-9912"
            },
            {
                "id": 10268,
                "name": "Lena Lead",
                "email": "lean.lead@exampale.com",
                "contact": "(177) 521-1556"
            },
            {
                "id": 10269,
                "name": "Kent Lead",
                "email": "kent.lead@example.com",
                "contact": "(506) 533-6801"
            }
        ];
//		return data;
			res.send({"result": data});
};
//module.exports.x = x;
//module.exports.addX = addX;
////module.exports.getContacts = getContacts;
//module.exports.getContactDetailsById = getContactDetailsById;
//module.exports.updateContactById = updateContactById;
//module.exports.getContactsDetails = getContactsDetails;
//module.exports.deleteContactById = deleteContactById;
//module.exports.deleteLeadById = deleteLeadById;
//module.exports.getLeads = getLeads;