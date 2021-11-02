const Service = require('../service/priorityService');

const readPriority = async (req, res) => {
  const data = req.query;

  console.log('controller : 1', data)

  const response = await Service.readPriority(data);

  console.log('controller 2:', response)

  if (!response) return { details: [{ message: 'Wrong priority ID or invalid' }] };

  return res.status(200).json(response);
};

const updatePriority = async (req, res) => {
  const { id } = rea.parms;

  const response = await Service.update(id);
  if (!response) return { details: [{ message: 'Wrong priority ID or invalid' }] };

  return res.status(200).json(response);
}

module.exports = {
  readPriority,
  updatePriority,
}