// Needed by the Prismic library for the rich text blocks

function linkResolver(doc) {
    if (doc.type === 'portfolio') {
      return `/blog/${doc.uid}`;
    }
    return '/';
  }

  module.exports = {
    linkResolver
  };
