// This file connects to the remote Prisma DB and gives us the ability to query it with JS.

const { Prisma } = require('prisma-binding');

const db = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: 'https://eu1.prisma.sh/thomas-blaymire/tomblaymire-backend/dev',
	secret: process.env.PRISMA_SECRET,
	debug: true,
});

module.exports = db;
