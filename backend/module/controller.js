/*
 CRUD
 C = Create   R = Read    U = Update      D = Delete
*/

const notaSchema = require('./schema')
 
// ------ READ ------

//ler todos os dados
 const all = async (req, res) => {
     const notas = await notaSchema.find()
     return res.json(notas)
 }

 //ler apenas um dado pelo id
 const findByPlaceId = async (req, res) => {
     const { place_id } = req.params
     const model = await notaSchema.findOne({place_id})
     if (!model) {
         return res.status(404).send('Informações não encontradas!!')
     } else {
         return res.json(model)
     }
 }


 // ------ CREATE AND UPDATE ------

const createAndUpdate = async (req, res) => {
    const { place_id } = req.params
    const { body } = req
    const oldModel = await notaSchema.findOne({place_id}) 
    if(oldModel) {
        const { nota } = req.body
               
        let { mediaNota, totalDasNotas, nroClassificacoes } = oldModel
        totalDasNotas = totalDasNotas + nota
        nroClassificacoes = nroClassificacoes +1
        mediaNota = totalDasNotas/nroClassificacoes

        //update
        const model = await notaSchema.findOneAndUpdate(
            { place_id }, 
            { totalDasNotas, nroClassificacoes, mediaNota },
            { new: true }
        )
        
        console.log('model: ', model)
        if (!model) {
            return res.status(404).send('Informações não encontradas!')
        } else {
            console.log('model: ', model)
            return res.json(model)

        }

    } else {
        try {
            //create
            console.log('body.nota', body.nota)
            totalDasNotas = body.nota
            nroClassificacoes = 1
            mediaNota = body.nota
            const avaliacao = new notaSchema({local: body.local, place_id: body.place_id, mediaNota, totalDasNotas, nroClassificacoes} )
            await avaliacao.save()
            return res.status(201).send(avaliacao)
        } catch (err) {
            console.log('Ocorreu um erro ao tentar criar: ', err)
            return res.status(400).send('Erro ao salvas as informações pela primeira vez. ')
        }
    }
}


 // ------ DELETE ------

 const remove = async (req, res) => {
     const { place_id } = req.params
     await notaSchema.deleteOne({place_id})
     return res.status(204).send('nota removed success!')
 }



 module.exports = {
     all, 
     findByPlaceId, 
     createAndUpdate,
     remove
}