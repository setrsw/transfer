const Koa = require('koa')
const axios = require('axios')
const bodyParse= require('koa-bodyparser')
const config= require('./config')
const app= new Koa();
app.use(bodyParse());

app.use(ctx=>{
    const options =ctx.request.body;
    const result = {
        code: 0,
        data: options,
        response : 'not sent',
        error : 'not sent'
    }
    console.log(result)
    if(config.secret && config.secret !== options.secret){
        result.code = 1;
        result.msg = 'wrong secret';
    }
    else if(!options.url){
        result.data = 2;
        result.msg = 'lacking url';
    }
    else{
        axios.post(config.ip,options,{
            headers:{
                "Content-type":"application/json"
            },
        }).then((response)=>{
            result.response=response
            console.log(response)
        }).catch(error=>{
            result.error=error
            console.log(error)
        })
    }
    ctx.body = JSON.stringify(result)
})
console.log(config.port)
app.listen(config.port,()=>{
    console.log('服务进行中。。。')
})

