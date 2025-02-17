module.exports = async (req, res, next) => {
  try {
    if (req.session.userID) {
      return res.redirect('/');
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
