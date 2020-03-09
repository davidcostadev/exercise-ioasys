const controllerCreator = controller => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    const response = {
      error: error.message,
    };

    if (process.env.NODE_ENV !== 'production') {
      response.track = error;
    }

    res.status(500).json(response);
  }
};

module.exports = { controllerCreator };
