const Service = require('../service/annotationService');

const read = async (req, res) => {
  
  const response = await Service.read();

   console.log('xablau', response);

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
  
    if (!response) return next({ details: [{ message: 'Wrong id format' }] });

    res.status(200).json(response);
  };

  module.exports = {
    read,
    create,
    deleteAnnotation
  }