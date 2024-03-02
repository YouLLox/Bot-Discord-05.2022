const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(`
Veuillez patienter le temps que je m'allume !`)
console.clear()
console.log(`Bot en ligne !`)
console.log(`Code chargé !`)
require("./bot")
}
load()