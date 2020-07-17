const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const { stdout, stderr } = require('process');
const exec = require('child_process').exec;



(async () => {

console.log("scraping started")
 
 for(let page = 1; page <= `${process.argv[3]}`; page ++){
 axios.get(`${process.argv[2]}/${page}`).then((res) => {
	const $ = cheerio.load(res.data);
	console.log("reading first ")
	const guide = $('section.container > div > div > article > a').each((index, Element) => {
		const links = "https://www.reddit.tube" + ($(Element).attr('href'));
	
		
		 fs.appendFileSync(`${process.argv[4]}.txt`, `${links}\n`)
	
	})
	console.log(`done with scraping${page}`)
	
});
};
// youtube();
console.log("done");

	
function App() {
	exec(`youtube-dl -f best -a ${process.argv[4]}.txt -o "./videos/${process.argv[4]}/%(title)s%(id)s.%(ext)s"`, (e, stdout, stderr) => {
		if (e instanceof Error) {
			console.error(e);
			throw e;
		}
			console.log('stdout ', stdout );
				console.log('stderr ', stderr);
})
};



App();
})();






// youtubedl.exec(`-f best -a ${process.argv[4]}.txt`, [`-o "./videos/${process.argv[4]}/%(title)s%(id)s.%(ext)s"`]), (e, stdout, stderr) => {
	
// 	if (err) {
// 		if (err) throw err		
// 		console.error(e);
// 					throw e;
// 					}
// 				console.log('stdout ', stdout );
// 				console.log('stderr ', stderr);
// 				console.log(stdout.join("\n"));
// }
