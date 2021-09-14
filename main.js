const iframe = document.querySelector('iframe')
const url = location.href.split('?url=')
if(url.length < 2 || url[1].trim() == ""){
    window.open("https://github.com/khaledYS/browser-on-browser/nourl!", "_self")
}else{
    iframe.src = url[1]
}