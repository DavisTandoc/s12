const express = require('express');

const app = express();

const port = 4000;

app.use(express.json())

let users = [
	{
		email: "mightydeclan@gmail.com",
		username: "mightyDeclan",
		password: "notrelatedtodeclan",
		isAdmin: false
	},
	{
		email: "seungdavid@gmail.com",
		username: "seungD",
		password: "seungsincestart",
		isAdmin: false
	},
	{
		email: "juandelacruz@gmail.com",
		username: "huwanKing",
		password: "thefacethatrunstheplace",
		isAdmin: true
	},
	{
		email: "davisgabrielle01@gmail.com",
		username: "davisTandoc",
		password: "quetzalcoatl",
		isAdmin: true
	},
	{
		email: "jdelacruz@gmail.com",
		username: "juanDelaCruz",
		password: "magnezone",
		isAdmin: true
	},

	];

let items = [
	{
		name: "DAVIS T-shirt",
		description: "Davis-design printed on T-shirt",
		price: 400,
		isActive: true
	},
	{
		name: "DAVIS Special comics",
		description: "Davis Special comics published on special days",
		price: 600,
		isActive: true
	},
	{
		name: "DAVIS' Perrserker Plush",
		description: "Hari (Suzuna White's Meowth's evolution) plush",
		price: 3500,
		isActive: true
	},
	{
		name: "DAVIS' Rhyperior Plush",
		description: "Luke (Rachel's Rhyperior) plush",
		price: 3500,
		isActive: true
	},
	{
		name: "DAVIS' Eevee Plush",
		description: "Penumbra (Matthew's Eevee) plush",
		price: 4000,
		isActive: false
	},
	{
		name: "DAVIS' Ms. Davis chibi figure",
		description: "Ms. Davis in chibi version figure",
		price: 1000,
		isActive: true
	},
	{
		name: "DAVIS' Captain Deibisu chibi figure",
		description: "Captain Deibisu in chibi version figure",
		price: 1000,
		isActive: true
	},
	];

let loggedUser;

app.get("/hello", (req, res) =>{
	res.send("Hi, I am Dave, BSIT student. I'm glad to meet you.");
});

app.post('/users', (req, res) =>{
	console.log(req.body)
	let newUser = {
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		isAdmin: req.body.isAdmin
	};
	users.push(newUser);
	console.log(users);

	res.send("Registered Successfully!!")
});
app.post('/users/login', (req, res) =>{
	console.log(req.body)
	let foundUser = users.find((user) =>{
		return user.username === req.body.username && user.password === req.body.password;
});

	if(foundUser !== undefined){
		let foundUserIndex = users.findIndex((user) => {
			return user.username === foundUser.username
		});
		foundUser.index = foundUserIndex

		loggedUser = foundUser;
		console.log(loggedUser);

		res.send('Thank you for logging in')
	} else {
		loggedUser = foundUser;
		res.send('Login failed. Wrong credentials.')
	}
})
app.post('/users/login/items', (req, res) =>{
	console.log(req.body)
	let foundUser = users.find((user) =>{
		return user.username === req.body.username && user.password === req.body.password;
});
	if(foundUser !== undefined){
		let foundUserIndex = users.findIndex((user) => {
			return user.username === foundUser.username
		});
		foundUser.index = foundUserIndex

		loggedUser = foundUser;
		console.log(loggedUser);
			if(foundUser.isAdmin === true){
		    console.log(items)
	        } else {
	        	res.send('Unauthorized: Action Forbidden!')
	        }
	} else {
		loggedUser = foundUser;
		res.send('Login failed. Wrong credentials.')
	}
})
app.post('/users/login/items/add', (req, res) =>{
	console.log(req.body)
	let foundUser = users.find((user) =>{
		return user.username === req.body.username && user.password === req.body.password;
});
	if(foundUser !== undefined){
		let foundUserIndex = users.findIndex((user) => {
			return user.username === foundUser.username
		});
		foundUser.index = foundUserIndex

		loggedUser = foundUser;
		console.log(loggedUser);
			if(foundUser.isAdmin === true){
		    	let newItems = {
		          name: req.body.name,
		          description: req.body.description,
		          price: req.body.price,
		          isActive: req.body.isActive
	            };
	           items.push(newItems);
	           console.log(items);
	        } else {
	        	res.send('Unauthorized: Action Forbidden!')
	        }
	} else {
		loggedUser = foundUser;
		res.send('Login failed. Wrong credentials.')
	}
})
app.listen(port, () => console.log(`Server running at port ${port}`));

