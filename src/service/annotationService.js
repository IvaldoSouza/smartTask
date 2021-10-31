const Model = require('../model/annotationModel');

const read = async (data) => {
  const result = await Model.read(data);
  
  return result;
};

const create = async (data) => {
  const result = await Model.create(data);
  
  return result;
};

// const deleteAnnotation = async (id) => await Model.deleteAnnotation(id);

const deleteAnnotation = async (id) => {
  const result = await Model.getId(id);

  if (!result) return null;
  
  await Model.deleteAnnotation(id);

  console.log('service', result);

  return result;
} 

module.exports = {
  read,
  create,
  deleteAnnotation,
}