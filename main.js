const iframe = document.querySelector('iframe')
const url = location.href.split('?url=')
if(url.length < 2 || url[1].trim() == ""){
    window.open("/nourl!", "_self")
}else{
    iframe.src = url[1]
}