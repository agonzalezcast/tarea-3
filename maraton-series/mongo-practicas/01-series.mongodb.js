use('maraton')
 
db.series.insertMany([
  { _id: 1, titulo: 'Dark', genero: 'Ciencia ficción', temporadas: 3, estado: 'Vista', miembro: 'Ana' },
  { _id: 2, titulo: 'The Office', genero: 'Comedia', temporadas: 9, estado: 'Viendo', miembro: 'Luis' },
  { _id: 3, titulo: 'Arcane', genero: 'Animación', temporadas: 2, estado: 'Por ver', miembro: 'Sofía' },
  { _id: 4, titulo: 'Chernobyl', genero: 'Drama', temporadas: 1, estado: 'Vista', miembro: 'Diego' },
  { _id: 5, titulo: 'Planeta Tierra', genero: 'Documental', temporadas: 3, estado: 'Por ver', miembro: 'Ana' }
])

use('maraton')
db.series.find()

use('maraton')
db.series.find({}, { titulo: 1, estado: 1, _id: 0 }).sort({ titulo: 1 })

use('maraton')
db.series.find({ estado: 'Vista' })

use('maraton')
db.series.find({ estado: 'Por ver', miembro: 'Ana' })

use('maraton')
db.series.find({ temporadas: { $gt: 2 } })

use('maraton')
db.series.countDocuments({ estado: 'Por ver' })   // 2
use('maraton')
db.series.countDocuments({ estado: 'Viendo' })    // 1
use('maraton')
db.series.countDocuments({ estado: 'Vista' })     // 2

use('maraton')
db.series.aggregate([
  { $group: { _id: '$estado', cantidad: { $sum: 1 } } }
])

use('maraton')
db.series.updateOne({ _id: 3 }, { $set: { estado: 'Viendo' } })

use('maraton')
db.series.insertOne({
  _id: 6, titulo: 'Severance', genero: 'Drama',
  temporadas: 2, estado: 'Por ver', miembro: 'Luis'
})

use('maraton')
db.series.deleteOne({ _id: 4 })

use('maraton')
db.series.updateMany({ miembro: 'Ana' }, { $set: { miembro: 'Ana María' } })