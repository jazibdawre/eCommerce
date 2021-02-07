import Category from '../../models/categoryModel.js';

const createCategory = async (args, req) => {
  // if (!req.isAuth) {
  //   throw new Error('Unauthenticated!');
  // }
  try {
    const { name } = args;

    const resp = await Category.find({ name: name });

    if(resp.length === 0) {
      const newCategory = new Category({
        name: name,
      });
      await newCategory.save();
    }
    
    return { msg: 'success' };
  } catch (err) {
    throw err;
  }
};

const categories = async (args, req) => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (err) {
    throw err;
  }
};

const updateCategory = async (args, req) => {
  // if (!req.isAuth) {
  //   throw new Error('Unauthenticated!');
  // }
  try {
    const { name, newName } = args;

    let updatedCategory = {
      name: newName,
    };
    updatedCategory = { $set: updatedCategory };

    await Category.update(
      { name: name },
      updatedCategory
    ).exec();
    
    return { msg: 'success' };
  } catch (err) {
    throw err;
  }
};

const deleteCategory = async (args, req) => {
  // if (!req.isAuth) {
  //   throw new Error('Unauthenticated!');
  // }
  try {
    const { name } = args;

    await Category.deleteOne({ name: name });
    
    return { msg: 'success' };
  } catch (err) {
    throw err;
  }
};

export { createCategory, categories, updateCategory, deleteCategory };
