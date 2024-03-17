const createError = require("http-errors");
const mongoose = require('mongoose');

const findItemById = async (Model, id, option = {}) => {
  try {
    
    const item = await Model.findById(id, option);

    if (!item) throw createError(404, `${Model.name} not found with this id`);
    return item;
    
  } catch (error) {
    if(error instanceof mongoose.Error){
        throw createError(400, 'Invalid user id')
      }
      throw error;
  }
};


module.exports = {findItemById}