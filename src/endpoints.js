import { Router } from 'express'
import { Primaria, Cinema, Freq, Maior, Tabuada, Febre, Dobro, Soma, Media } from './services.js'

const server = Router();


server.get('/primaria/:cor' , (req, resp) => {
    try{
        const a = req.params.cor;

        const x = Primaria(a);

        resp.send({
            primaria: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/cinema' , (req, resp) => {
    try{

        const {a,b,c,d} = req.body

        const y = Cinema(a,b,c,d)

    resp.send({
        cinema: y
    })
}
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

server.get('/freq/:frase/:c' , (req, resp) =>{
    try{
        const {frase, c} = req.params;

        const x = Freq(frase, c)

        resp.send({
            Numero: x
        })
    }
    catch(err){
        resp.send({
            erro: err.message
        }) 
    }

})

server.post('/maior' , (req,resp) => {
    try{
        const n = req.body;
        //aaa
        const y = Maior(n)

        resp.send({
            maior: y 
        })

    }
    catch(err){
        resp.send({
            erro : err.message 
        })
    }
})

server.get('/tabuada' , (req, resp) => {
    try{
    const a = req.query.n

     const x = Tabuada(a)

     resp.send({
         tabuada: x
     })

}
    catch(err){
        resp.send({
            erro: err.message 
        })
    }
})

server.get('/febre' , (req, resp) => {
    try{
    
    const g = req.query.g

    const x = Febre(g) 

    resp.send({
        febre: x 
    })
}
    catch(err) {
        resp.send({
            erro: err.message 
        })
    }
})

server.get('/dobro/:n' , (req, resp) => {
    try{
    const n = req.params.n

    const x = Dobro(n) 
    resp.send ({
        dobro: x
    })
}
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/soma' , (req,resp) => {
    try{
    //const {n1, n2} = Number(req.query) 

    const n1 = Number(req.query.n1)
    const n2 = Number(req.query.n2)

    const x = Soma(n1,n2) 

    resp.send({
        soma: x 
    })
}
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.post('/soma' , (req,resp) => {
    try{
    const {n1, n2} = req.body 

    const x = Soma(n1,n2) 

    resp.send({
        soma: x 
    })
}
    catch(err){
        resp.send({
            erro: err.message
        })
    } 
})

server.post('/media' , (req,resp) => {
    try{
    const {n1,n2,n3} = req.body

    const x = Media (n1,n2,n3)

    resp.send({
        media: x
    })
}
    catch(err) {
        resp.send({
            erro: err.message
        }) 
    }
})

export default server;
