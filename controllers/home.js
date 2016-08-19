// GET /
exports.index = (req, res) => {

	res.render('home', {
		title: 'Home'
	});

	// res.sendFile('index.html');
};


exports.getResume = (req, res) => {
	res.redirect('https://www.dropbox.com/s/dhwhhiodl1dln4j/ResumeAug.pdf?raw=1');
};

exports.getPaper = (req, res) => {
	res.redirect('https://www.dropbox.com/s/3xanobwufootzul/factura_wong-datamining.pdf?raw=1');
}
