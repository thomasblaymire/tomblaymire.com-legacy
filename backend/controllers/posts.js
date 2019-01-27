// Primary GET
exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [
			{
				title: 'First Post',
				content:
					'This is some of the first post content. This is some of the first post content. This is some of the first post content. This is some of the first post content.',
			},
			{
				title: 'Second Post',
				content:
					'This is some of the first post content. This is some of the first post content. This is some of the first post content. This is some of the first post content.',
			},
			{
				title: 'Third Post',
				content:
					'This is some of the first post content. This is some of the first post content. This is some of the first post content. This is some of the first post content.',
			},
			{
				title: 'Fourth Post',
				content:
					'This is some of the first post content. This is some of the first post content. This is some of the first post content. This is some of the first post content.',
			},
		],
	});
};
