const connection = require('./connection');

// const read = async ({priority}) => connection()
//   .then((db) => db.collection('Annotation').find({priority}).toArray())
//   .then((result) => ({ result })); 

const readPriority = async (data) => {
  const annotationConnection = await connection().then((db) => db.collection('Annotation'));
  const result = await annotationConnection.find(data);

  console.log('o que vem aqui priority', result)

  return result;



  // const db = await connection();

  // console.log('model 1:', priority )

  // const result = await db.collection('Annotation').find( {priority});
  
  // // const result = {_id: inserted.id, priority };
  // console.log('model 2:', result)
  // return result;
};

const update = async (id) => {
  // if (!ObjectId.isValid(id)) return false;

  await connection()
    .then((db) => db.collection('products').updateOne({ _id: ObjectId(id) }));

  const result = { _id: id };

  return result;
}; 
  
module.exports = {
  readPriority,
}