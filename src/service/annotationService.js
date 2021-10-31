const Model = require('../model/annotationModel');

const read = async (data) => {
  const result = await Model.read(data);
  
  return result;
};

const create = async (data) => {
  const result = await Model.create(data);
  
  return result;
};

const deleteAnnotation = async (id) => await Model.deleteAnnotation(id);

module.exports = {
  read,
  create,
  deleteAnnotation,
}