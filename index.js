function save(id) {
    if(localStorage.getItem(id) == 'true') {
        localStorage.setItem(id, false);
    } else {
        localStorage.setItem(id, true);
    }
}

function load() {
    for(i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem(localStorage.key(i)) == 'true') {
            document.getElementById(localStorage.key(i)).checked = true;
        } else {
            document.getElementById(localStorage.key(i)).checked = false;
        }
    }   
}

window.onload = function() {
    load();
}