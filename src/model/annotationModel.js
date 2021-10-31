const connection = require('./connection');
const { ObjectId } = require('mongodb');

const read = async (data) => connection()
  .then((db) => db.collection('Annotation').find().toArray()).then((result) => ({ Annotation: result }));

const create = async (data) => {
  const { title, employee, notes, priority } = data;

  const annotationConnection = await connection().then((db) => db.collection('Annotation'));

  const result = await annotationConnection.insertOne({ title, employee, notes, priority });
  
  const { insertedId } = result;

  return { _id: insertedId, title, employee, notes, priority };
};

const getId = async (id) => connection()
  .then((db) => db.collection('Annotation').findOne({ _id: ObjectId(id) }))
  .then((result) => result);

const deleteAnnotation = async (id) => connection()
  .then((db) => db.collection('Annotation').deletOne({ _id: ObjectId(id) }));

module.exports = {
  read,
  create,
  getId,
  deleteAnnotation,
}