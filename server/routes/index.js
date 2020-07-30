module.exports = {
  get: (req, res) => {
    res.render('index.ejs')
  },

  post: async (req, res) => {
    const datareturned = req.body
    console.log(datareturned)
    res.render('index.ejs')
  }
}
