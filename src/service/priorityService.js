const Model = require('../model/priorityModel');

const readPriority = async (data) => {
  console.log('service 1', data)

  const result = await Model.readPriority(data);

  console.log('service 2', result)
  
  return result;
};

const update = async (id) => {
  const result = await Model.update(id);

  return result;
}

module.exports = {
  readPriority,
  update,
}