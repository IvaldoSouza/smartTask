const Service = require('../service/annotationService');

const read = async (req, res) => {
  const data = req.body;

  const response = await Service.read(data);

  if (!response) return { details: [{ message: 'Wrong annotation ID or invalid' }] };

  return res.status(200).json(response);
};

const create = async (req, res, next) => {
  const data = req.body;

  const { title, notes } = data
    
  const response = await Service.create(data);

  if (!title || '' || !notes || '') return next({ details: [{ message: 'Wrong annotation ID or invalid' }] });

  return res.status(200).json(response); 	
};

  const deleteAnnotation = async (req, res, next) => {
    const { id } = req.params;
  
    const response = await Service.deleteAnnotation(id);

    console.log('controller', response)
  
    if (!response) return next({ details: [{ message: 'Wrong or invalid annotation id' }] });

    return res.status(200).json(response);
  };

  module.exports = {
    read,
    create,
    deleteAnnotation
  }