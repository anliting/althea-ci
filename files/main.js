let pre=document.createElement('pre')
pre.textContent=`\
Estimated value:
    Screen width: ${screen.width*devicePixelRatio}
    Screen height: ${screen.height*devicePixelRatio}

Raw value:
    devicePixelRatio: ${devicePixelRatio}
    screen.height: ${screen.height}
    screen.width: ${screen.width}
`
document.body.appendChild(pre)
