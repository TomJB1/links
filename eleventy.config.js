export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
};

export const config = {
    dir: {
	data: "_data"
  }
};
