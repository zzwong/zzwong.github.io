// GET /
exports.index = (req, res) => {

	res.render('home', {
		title: 'Home'
	});

	// res.sendFile('index.html');
};


exports.getResume = (req, res) => {
	res.redirect('https://www.dropbox.com/s/guqfuj63l7b6jcu/ResumeAug2016.pdf?dl=0');
};
