// 01-miembros.mongodb.js
use('maraton')
 
db.miembros.createIndex({ correo: 1 }, { unique: true })

use('maraton')
 
db.miembros.insertMany([
  { nombre: 'Ana', correo: 'ana@club.com',
    generosFavoritos: ['Ciencia ficción', 'Documental'],
    registro: new Date('2026-08-01') },
  { nombre: 'Luis', correo: 'luis@club.com',
    generosFavoritos: ['Comedia'],
    registro: new Date('2026-08-03') },
  { nombre: 'Sofía', correo: 'sofia@club.com',
    generosFavoritos: ['Animación', 'Drama'],
    registro: new Date('2026-08-10') },
  { nombre: 'Diego', correo: 'diego@club.com',
    generosFavoritos: ['Drama'],
    registro: new Date('2026-09-02') },
])

use('maraton')
 
db.miembros.insertOne({ nombre: 'Otra Ana', correo: 'ana@club.com' })

use('maraton')
 
db.miembros.find()

use('maraton')
 
db.miembros.find({}, { nombre: 1, correo: 1, _id: 0 }).sort({ nombre: 1 })

use('maraton')
 
db.miembros.findOne({ correo: 'sofia@club.com' })

use('maraton')
 
db.miembros.find({ generosFavoritos: 'Drama' }, { nombre: 1, _id: 0 })

use('maraton')
 
db.miembros.find(
  { registro: { $gte: new Date('2026-08-05') } },
  { nombre: 1, _id: 0 }
)

use('maraton')
 
db.miembros.countDocuments()

use('maraton')
 
db.miembros.updateOne(
  { correo: 'luis@club.com' },
  { $push: { generosFavoritos: 'Drama' } }
)

use('maraton')
 
db.miembros.updateOne(
  { correo: 'diego@club.com' },
  { $set: { nombre: 'Diego Mora' } }
)

use('maraton')
 
db.miembros.insertOne({ nombre: 'Prueba', correo: 'prueba@club.com', generosFavoritos: [], registro: new Date() })
db.miembros.deleteOne({ correo: 'prueba@club.com' })
