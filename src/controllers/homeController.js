import db from "../models/index"
import CRUDservice from "../services/CRUDservice";
// let getHomePage = (req, res) => {
//     return res.render('homepage.ejs');
// }

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs',

            { data: JSON.stringify(data) }
        );


    }
    catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}
let postCRUD = async (req, res) => {

    let message = await CRUDservice.createNewUser(req.body)
    console.log('check create a new user: ', message)
    return res.send('post crud with server')
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}