import Koa from "koa";
import serve from "koa-static";

const app = new Koa();
app.use(serve("../../cf-pages/"));

app.listen(9900)

console.log('http://127.0.0.1:9900');

