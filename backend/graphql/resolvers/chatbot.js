const Question = require('../../models/question');

module.exports = {
  questions: async (args, req) => {
    try {
      const questions = await Question.find({});
      return questions;
    } catch (err) {
      throw err;
    }
  },
  question: async (args, req) => {
    try {
      const question = await Question.findOne({ level: args.level, index: args.index });
      return question;
    } catch (err) {
      throw err;
    }
  },
  editQuestions: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error('Unauthenticated!');
    // }
    try {
      const { details } = args;
    
      await Question.find({}).deleteMany({});

      for(let i=0;i<details.length;i++) {
        const newQuestions = new Question({
          msg: details[i].msg,
          level: details[i].level,
          index: details[i].index,
        });
        await newQuestions.save();
      }

      return {msg:"success"};
    } catch (err) {
      throw err;
    }
  }
};