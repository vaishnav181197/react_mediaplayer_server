const json=require('json-server')

const server=json.create()

const middleware=json.defaults()

const router=json.router('db.json')

const PORT=process.env.PORT || 4000

server.use(middleware)
server.use(router)

server.listen(PORT,()=>{
    console.log('media player server started at PORT:',PORT)
})