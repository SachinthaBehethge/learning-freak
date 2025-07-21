const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');


let users = [];
let table= new Table({
    head: ['userName','likes', 'challenges'],
    colWidths:[15,5,10],

});



const options = {
    url: 'https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&plugin_column_ids=8',
    json: true
}

rp(options).then((data) => {
    // let promises = [];
    let userData = [];

    for (let user of data.directory_items) {
        userData.push({ name: user.user.username, likes_received: user.likes_received });

    }

    process.stdout.write('loading');

    getChallengesCompletedPushToUserArray(userData);
}).catch((err) => {
    console.log(err);

})


const getChallengesCompletedPushToUserArray = async (userData) => {

    let i = 0;
    function next() {
        if (i < userData.length) {
            const options = {
                url: `https://freecodecamp.org/${userData[i].name}`,
                transform : body => cheerio.load(body)
            }
            rp(options).then(($)=>{
                process.stdout.write('.');
                const fccAccount = $('h1.landing-heading').length === 0;
                const challengesPassed = fccAccount ? $('tbody tr').length : 'unknown';
                table.push([userData[i].name, userData[i].likes_received, challengesPassed]);
                ++i;
                return next();
            }) .catch(err => {
          console.log(`Error loading profile of ${userData[i].name}:`, err.message);
          i++;
          return next();
        });
        }
        else{
            printData();
        }
    };

    return next();

};


const printData = ()=>{
console.log('\n✅ Scraping Complete!\n');
console.log(table.toString());


}