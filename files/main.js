let pre=document.createElement('pre')
pre.textContent=`\
Raw value:
    devicePixelRatio: ${devicePixelRatio}
    screen.height: ${screen.height}
    screen.width: ${screen.width}
    navigator.platform: ${navigator.platform}
    navigator.userAgent: ${navigator.userAgent}
    navigator.vendor: ${navigator.vendor}
Estimated value:
    Screen width: ${screen.width*devicePixelRatio}
    Screen height: ${screen.height*devicePixelRatio}
`
document.body.appendChild(pre)
