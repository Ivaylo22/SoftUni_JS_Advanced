function solve(obj){
    let validMetods = ['GET', 'POST', 'DELETE','CONNECT'];
    const myRe = new RegExp(/^[\w.]+$/);
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`]

    if(!validMetods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method')
    }

    if(!obj.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI')
    }

    if(obj.uri !== "*" && !myRe.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI')
    }

    if(obj.uri.length === 0){
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!validVersion.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version')
    }

    if(!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message')
    }

    for(let ch of obj.message){
        if(specialChars.includes(ch)){
        throw new Error('Invalid request header: Invalid Message')
        }
    }

    return obj;

}

solve(
    {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
)