function save(id) {
    if(localStorage.getItem(id) == 'true') {
        localStorage.setItem(id, false);
    } else {
        localStorage.setItem(id, true);
    }
    getCounts();
}

function load() {
    for(i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem(localStorage.key(i)) == 'true') {
            document.getElementById(localStorage.key(i)).checked = true;
        } else {
            document.getElementById(localStorage.key(i)).checked = false;
        }
    }
    getCounts();
}

var roundtable = ['table of lost grace'];

var limgrave = ['the first step', 'church of elleh', 'gatefront', 'waypoint ruins cellar', 'artist\'s shack', 'third church of marika', 'fort haight west', 'agheel lake south', 'agheel lake north', 'church of dragon communion', 'seaside ruins', 'mistwood outskirts', 'murkwater coast', 'summonwater village outskirts', 'stormfoot catacombs', 'murkwater catacombs', 'groveside cave', 'coastal cave', 'murkwater cave', 'highroad cave', 'limgrave tunnels', 'cave of knowledge', 'stranded graveyard', 'stormhill shack', 'castleward tunnel', 'margit, the fell omen', 'warmaster\'s shack', 'saintsbridge', 'deathtouched catacombs', 'limgrave tower bridge', 'divine tower of limgrave', 'church of pilgrimage', 'castle morne rampart', 'tombsward', 'south of the lookout tower', 'ailing village outskirts', 'beside the crater-pocked glade', 'isolated merchant\'s shack', 'fourth church of marika', 'bridge of sacrifice', 'castle morne lift', 'behind the castle', 'beside the rampart gaol', 'morne moangrave', 'impaler\'s catacombs', 'tombsward catacombs', 'earthbore cave', 'tombsward cave', 'morne tunnel'];

var stormveil = ['stormveil main gate', 'gateside chamber', 'stormveil cliffside', 'rampart tower', 'liftside chamber', 'secluded cell', 'godrick the grafted'];

var liurnia = ['lake-facing cliffs', 'liurnia lake shore', 'laskyar ruins', 'scenic isle', 'academy gate town', 'south raya lucaria gate', 'main academy gate', 'liurnia highway south', 'liurnia highway north', 'gate town bridge', 'artist\'s shack', 'eastern liurnia lake shore', 'eastern tableland', 'church of vows', 'ruined labyrinth', 'mausoleum compound', 'slumbering wolf\'s shack', 'boilprawn shack', 'fallen ruins of the lake', 'folly on the lake', 'village of the albinaurics', 'converted tower', 'revenger\'s shack', 'temple quarter', 'crystalline woods', 'foot of the four belfries', 'the four belfries', 'sorcerer\'s isle', 'gate town north', 'northern liurnia lake shore', 'road to the manor', 'main caria manor gate', 'manor upper level', 'manor lower level', 'royal moongazing grounds', 'ranni\'s rise', 'behind caria manor', 'the ravine', 'ravine-veiled village', 'cliffbottom catacombs', 'road\'s end catacombs', 'black knife catacombs', 'stillwater cave', 'lakeside crystal cave', 'academy crystal cave', 'raya lucaria crystal tunnel', 'study hall entrance', 'liurnia tower bridge', 'divine tower of liurnia', 'east raya lucaria gate', 'bellum church', 'grand lift of dectus', 'church of inhibition', 'ruin-strewn precipice', 'ruin-strewn precipice overlook', 'magma wyrm', 'moonlight altar', 'cathedral of manus celes'];

var academy = ['church of the cuckoo', 'schoolhouse classroom', 'debate parlor', 'raya lucaria grand library'];

var altus = ['abandoned coffin', 'erdtree-gazing hill', 'altus highway junction', 'bower of bounty', 'windmill village', 'windmill heights', 'road of iniquity side path', 'rampartside path', 'old altus tunnel', 'altus tunnel', 'bridge of iniquity', 'first mt. gelmir campsite', 'ninth mt. gelmir campsite', 'road of iniquity', 'seethewater river', 'seethewater terminus', 'craftsman\'s shack', 
'primeval sorcerer azur', 'gelmir hero\'s grave', 'seethewater cave', 'volcano cave', 'outer wall phantom tree', 'minor erdtree church', 'sealed tunnel'];

var volcano = ['volcano manor', 'volcano manor', 'prison town church', 'temple of eiglay', 'guest hall', 'audience pathway'];

var leyndell = ['divine bridge'];

var caelid = ['smoldering church', 'rotview balcony', 'caelem ruins', 'smoldering wall', 'called highway south', 'selia backstreets', 'selia under-stair', 'chair-crypt of sellia', 'church of the plague', 'deep siofra well', 'impassable greatbridge', 'chamber outside the plaza', 'starscourge radahn', 'sellia crystal tunnel', 'heart of aenoia', 'greyoll\'s dragonbarrow', 'dragonbarrow west', 'fort froth', 'dragonbarrow fork', 'lenne\'s rise', 'farum greatbridge', 'bestial sanctum', 'sellia hideaway'];

function getCounts() {
    var areas = ['roundtable', 'limgrave', 'stormveil', 'liurnia', 'academy', 'altus', 'volcano', 'leyndell', 'caelid'];
    total = 0;
    totalCount = 0;
    for (k = 0; k < areas.length; k++) {
        console.log(areas[k]);
        total+=window[areas[k]].length;
        totalCount+=getSites(areas[k]);
    }
    document.getElementById('all-count').innerHTML = `Total: ${totalCount}/${total}`;
}

function getSites(id) {
    count = 0;
    for(i = 0; i < window[id].length; i++) {
        if(localStorage.getItem(window[id][i]) == 'true') {
            count++;
        }
    }
    document.getElementById(`${id}-count`).innerHTML = `${count}/${window[id].length}`;
    return count;
}

//var sites = [];

/*function createInputs() {
    console.log('---------------------------------------');
    for (i = 0; i < sites.length; i++) {
        console.log(`<input type="checkbox" id="${sites[i].toLowerCase()}" onclick="save(\'${sites[i].toLowerCase()}\')">\n<label for="${sites[i].toLowerCase()}">${sites[i]}</label><br>`)
    }
    console.log('---------------------------------------');
}*/

//createInputs();

window.onload = function() {
    load();
}


/*function lower() {
    console.log("".toLowerCase());
}

lower();*/