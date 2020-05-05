/*
    required:
        template string
*/
let pre=document.createElement('pre')
pre.textContent=`\
Raw value:
    devicePixelRatio: ${window.devicePixelRatio}
    screen.availHeight: ${screen.availHeight}
    screen.availWidth: ${screen.availWidth}
    screen.colorDepth: ${screen.colorDepth}
    screen.height: ${screen.height}
    screen.left: ${screen.left}
    screen.orientation.angle: ${screen.orientation.angle}
    screen.orientation.type: ${screen.orientation.type}
    screen.pixelDepth: ${screen.pixelDepth}
    screen.top: ${screen.top}
    screen.width: ${screen.width}
    navigator.cookieEnabled: ${navigator.cookieEnabled}
    navigator.hardwareConcurrency: ${navigator.hardwareConcurrency}
    navigator.language: ${navigator.language}
    navigator.maxTouchPoints: ${navigator.maxTouchPoints}
    navigator.onLine: ${navigator.onLine}
    navigator.platform: ${navigator.platform}
    navigator.userAgent: ${navigator.userAgent}
    navigator.vendor: ${navigator.vendor}
    navigator.webdriver: ${navigator.webdriver}
Estimated value:
    Screen width (screen.width*devicePixelRatio): ${screen.width*devicePixelRatio}
    Screen height (screen.height*devicePixelRatio): ${screen.height*devicePixelRatio}
`
document.body.appendChild(pre)
if(window.performance){
    pre.textContent+=`\
Performance:
`
    let start=0,end=0
    for(var j=0;end-start<1e2;j++){
        start=performance.now()
        for(var i=0;i<Math.pow(10,j);i++);
        end=performance.now()
    pre.textContent+=`\
    for(var i=0;i<1e${j};i++);: ${end-start}ms
`
    }
}
if(navigator.plugins){
    pre.textContent+=`\
Plugins:
`
    for(var i=0;i<navigator.plugins.length;i++)
        pre.textContent+=`\
    ${i}:
        name: ${navigator.plugins[i].name}
        filename: ${navigator.plugins[i].filename}
        description: ${navigator.plugins[i].description}
        version: ${navigator.plugins[i].version}
`
}
