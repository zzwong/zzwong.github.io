// GET /
exports.index = (req, res) => {

	res.render('home', {
		title: 'Home'
	});

	// res.sendFile('index.html');
};
