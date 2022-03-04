var express = require('express')
var app = express()
const cors = require('cors');
var sendPhoneOtpPost = require('./apiJson/send-phone-otp-post.json')
var verifyPhoneOtpGet = require('./apiJson/verfiy-phone-otp-get.json')
var integratedPortfolioGet = require('./apiJson/integrated-portfolio-get.json')
var panGet = require('./apiJson/pan-get.json')
var panPost = require('./apiJson/pan-post.json')
var verifyBankAccPost = require("./apiJson/verify-bank-account-post.json")
var uploadChequePost = require("./apiJson/upload-cheque-post.json")
var aofDetailPost = require("./apiJson/aof-details-post.json")
var aofDetailsGet = require("./apiJson/aof-details-get.json")
var userGet = require("./apiJson/user-get.json")
var portfolioGet = require("./apiJson//portfolioGet.json")
var exclusiveDetailsGet = require("./apiJson/exclusive-details-get.json")
var registerLoginWorkEmailPost = require("./apiJson/register-login-workemail-post.json")
var quizGet = require('./apiJson/quiz.get.json')
var quizPost = require('./apiJson/quiz-post.json')
var constantsGet = require('./apiJson/constants-get.json')
var uploadSignaturePost = require('./apiJson/upload-signature-post.json')
var customerServiceGet = require('./apiJson/customer-service-get.json')
var userSavePut = require('./apiJson/user-save-put.json')
var verifyNewInvitePost = require('./apiJson/verify-new-invite-post.json')
var sendNewInvitePost = require('./apiJson/send-new-invite-post.json')

app.use(cors());
const SEND_PHONE_OTP = '/send-phone-otp'
const VERIFY_PHONE_OTP = '/verify-phone-otp'
const INTEGRATED_PORTFOLIO = '/integrated-portfolio'
const PAN = '/pan'
const VERIFY_BANK_ACCOUNT = '/verify-bank-account'
const UPLOAD_CHEQUE = '/upload-cheque'
const AOF_DETAILS = '/aof-details'
const PORTFOLIO = '/portfolio'
const USER = '/user'
const USER_SAVE = '/user-save'
const QUIZ = '/quiz'
const CUSTOMER_SERVICE = '/customer-service'
const CONSTANT = '/constants'
const EXCLUSIVE_DETAILS = '/exclusive-deals'
const REGISTER_LOGIN_WORKEMAIL = '/register-login-workemail'
const SEND_WORK_EMAIL = '/send-work-email-otp'
const UPLOAD_SIGNATURE = '/upload-signature'
const VERIFY_NEW_INVITE = '/verify-new-invite';
const SEND_NEW_INVITE = '/send-new-invite';

app.post(SEND_NEW_INVITE, function (req, res) {
	res.json(sendNewInvitePost)
})


app.post(VERIFY_NEW_INVITE, function (req, res) {
	res.json(verifyNewInvitePost)
})

app.put(USER_SAVE, function (req, res) {
	res.json(userSavePut)
})


app.get(CONSTANT, function (req, res) {
	res.json(constantsGet)
})

app.get(CUSTOMER_SERVICE, function (req, res) {
	res.json(customerServiceGet)
})

app.get(QUIZ, function (req, res) {
	// res.status(401).send('Sorry, we cannot find that!');
	// res.status(401);
	res.json(quizGet)
})

app.post(QUIZ, function (req, res) {
	res.json({})
	// res.json(quizPost)
})

app.post(UPLOAD_SIGNATURE, function (req, res) {
	res.json(uploadSignaturePost)
})

app.post(SEND_WORK_EMAIL, function (req, res) {
	res.json({
		success:true,
		workEmail:'sdklfjd@gmail.com',
		phone:"23847239423"
	})
})

app.post(SEND_PHONE_OTP, function (req, res) {
	res.json(sendPhoneOtpPost)
})

app.post(REGISTER_LOGIN_WORKEMAIL, function (req, res) {
	res.json(registerLoginWorkEmailPost)
})
app.post(VERIFY_PHONE_OTP, function (req, res) {
	res.json(verifyPhoneOtpGet)
})

app.get(VERIFY_PHONE_OTP, function (req, res) {
	res.json(verifyPhoneOtpGet)
})
app.get(INTEGRATED_PORTFOLIO, function (req, res) {
	res.json(integratedPortfolioGet)
})

app.get(PAN, function (req, res) {
	res.json(panGet)
})

app.post(PAN, function (req, res) {
	setTimeout(()=>res.json(panPost),2000)
	// res.json(panPost)
})

app.post(VERIFY_BANK_ACCOUNT, function (req, res) {
	res.json(verifyBankAccPost)
})
app.post(UPLOAD_CHEQUE, function (req, res) {
	res.json(uploadChequePost)
})
app.get(AOF_DETAILS, function (req, res) {
	res.json(aofDetailsGet)
})
app.post(AOF_DETAILS, function (req, res) {
	// res.status(404).send('Not Found')
	res.json(aofDetailPost)
})

app.get(PORTFOLIO, function (req, res) {
	res.json(portfolioGet)
})
app.get(USER, function (req, res) {
	res.json(userGet)
})

app.put(USER, function (req, res) {
	res.json(userGet)
})

app.get(EXCLUSIVE_DETAILS, function (req, res) {
	res.json(exclusiveDetailsGet)
})
app.listen(3090, () => {
	console.log(`Server started on 3090`)
})
module.exports = {
	app
}