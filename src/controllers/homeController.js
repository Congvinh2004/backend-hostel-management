
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getHomePage = (req, res) => {
    return res.send('hello worl from controller');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}