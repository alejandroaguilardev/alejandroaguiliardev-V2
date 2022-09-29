function SiteMap() {
	generateSiteMap();
}

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<!--We manually set the two URLs we know already-->
		<url>
			<loc>https://alejandroaguilar.dev/</loc>
		</url>
		<url>
			<loc>https://alejandroaguilar.dev/about</loc>
		</url>
		<url>
			<loc>https://alejandroaguilar.dev/skills</loc>
		</url>
		<url>
			<loc>https://alejandroaguilar.dev/project</loc>
		</url>
   </urlset>
 `;
}

export async function getServerSideProps({ res }: any) {
	const sitemap = generateSiteMap();
	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();
}

export default SiteMap;
