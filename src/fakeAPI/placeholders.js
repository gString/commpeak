const data = {
	"firstName":{
	"name": "First Name",
		"max_length": 5,
		"example": "Ben",
		"id": "1-1-1",
},
	"lastName":{
	"name": "Last Name",
		"max_length": 8,
		"example": "Cohen",
		"id": "1-1-2",
},
	"country":{
	"name": "Country",
		"max_length": 7,
		"example": "United States",
		"id": "1-1-3",
},
	"city":{
	"name": "City",
		"max_length": 9,
		"example": "New-York",
		"id": "1-1-4",
},
	"email":{
	"name": "Email",
		"max_length": 18,
		"example": "benc@commpeak.com",
		"id": "1-1-5",
}
};

export const get_place_holders = () => {
	return new Promise (( resolve ) => {
		resolve(data);
	})
}