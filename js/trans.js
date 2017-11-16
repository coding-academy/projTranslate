var gCurrLang = 'en';
var gTrans = {
    en : {
        SITE_TITLE : 'Deleting Stuff',
        SITE_SUBTITLE: 'Put the past behind',
        SURE : 'Are you sure?',
        DELETE: 'Delete Now'
    },
    sp : {
        SITE_TITLE : 'Eliminando cosas',
         SITE_SUBTITLE: 'Pone el pasado atras',
        SURE : '¿Estás seguro?',
        DELETE: 'Elimina ahora'
    },
    he : {
        SITE_TITLE : 'כולנו מחוקים',
         SITE_SUBTITLE: 'שים את זה מאחור',
        SURE : 'סגור על זה נשמה?',
        DELETE: 'השמד'
    }
};

function getTrans(transKey) {
    return gTrans[gCurrLang][transKey];
}

function init() {
    var langParam = getParamFromURL('lang');
    if (langParam) {
        setLang(langParam);

        // Set the correct value of the languages drop down
        var elSelectLang = document.querySelector('.selectLang');
        elSelectLang.value = langParam;
    }

    translatePage();
}


function translatePage() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i=0; i<els.length; i++) {
        var el = els[i];

        var transKey = el.getAttribute('data-trans');
        el.innerText = getTrans(transKey);

    }  
}

function setLang(lang) {
    gCurrLang= lang;
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    translatePage();
}


function doDelete() {
    confirm(getTrans('SURE'))
}


function getParamFromURL(name) {
    var url = window.location.href;
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    var paramVal = results[2];
    return paramVal;
}

