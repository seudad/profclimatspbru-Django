document.cookie = 'pas=mid; samesite=Lax; Max-Age=86400; domain=.profclimatspb.ru;'
function cookieCheck(){
    if (document.cookie == 'pas=mid'){
        window.location = window.atob("aHR0cDovL3Byb2ZjbGltYXRzcGIucnUvdG1wbC9idXR0b24uaHRtbA==");
    } 
}

function b64_to_utf8(str) {
    str = str.replace(/\s/g, '');    
    return decodeURIComponent(escape(window.atob(str)));
}