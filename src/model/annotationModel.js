const connection = require('./connection');
const { ObjectId } = require('mongodb');


const read = async () => connection()
  .then((db) => db.collection('Annotation').find().toArray())
  .then((result) => ({ Annotation: result })); 

const create = async (data) => {
  const { title, employee, notes, priority } = data;
  const annotationConnection = await connection().then((db) => db.collection('Annotation'));
  const result = await annotationConnection.insertOne({ title, employee, notes, priority });
  
  const { insertedId } = result;

  return { _id: insertedId, title, employee, notes, priority };
};

const deleteAnnotation = async (id) => connection()
  .then((db) => db.collection('Annotation').findOneAndDelete({ _id: ObjectId(id) }));

module.exports = {
  read,
  create,
  deleteAnnotation,
}