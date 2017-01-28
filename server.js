module.exports=althea=>{
    althea.addPagemodule('/ci',pagemodule)
}
function pagemodule(env){
    if(!env.althea.allowOrigin(env.envVars,env.request.headers.origin))
        return 403
    if(env.request.method=='GET')
        return get(env)
    env.headers.allow='GET'
    return{
        status:405,
        headers:env.headers,
    }
}
function get(env){
    env.headers['content-type']='text/html;charset=utf-8'
    return{
        status:200,
        headers:env.headers,
        content:minifyHtml(calcContent(env)),
    }
}
function calcContent(env){
    return`
<!doctype html>
<title>Client Information</title>
<script src=${
    env.environmentvariables.moduleUrl
} data-main=plugins/althea-ci/main.js async></script>
    `
}
function minifyHtml(s){
    return s.split('\n').map(s=>s.trim()).join('')
}
