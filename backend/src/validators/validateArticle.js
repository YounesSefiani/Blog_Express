const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  description: Joi.string().min(10).max(50).required(),
  content: Joi.string().min(5).required(),
  image_src: Joi.string().max(255).required(),
  image_alt: Joi.string().max(255).required(),
  author_id: Joi.number().integer().required(),
});

const validateArticle = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateArticle;
