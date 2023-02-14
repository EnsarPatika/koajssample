const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if(ctx.request.url=="/" || ctx.request.url=="/index"){
        ctx.response.status=200;
        ctx.response.header = {"Content-type":"text/html"}; 
        ctx.body = `<h1>Index sayfasına hoşgeldiniz</h1>`;
    }
    else if(ctx.request.url=="/hakkimda"){
        ctx.response.status=200;
        ctx.response.header = {"Content-type":"text/html"}; 
        ctx.body = `<h1>Hakkimda sayfasına hoşgeldiniz</h1>`;
    }
    else if(ctx.request.url=="/iletisim"){
        ctx.response.status=200;
        ctx.response.header = {"Content-type":"text/html"}; 
        ctx.body = `<h1>İletisim sayfasına hoşgeldiniz</h1>`;
    }
});

const port = 3000

app.listen(port,()=>{
    console.log(`Koa js server ${port} ile açilmistir`)
});