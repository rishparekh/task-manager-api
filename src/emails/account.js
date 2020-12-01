const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'rushuparekh@gmail.com',
        subject: 'Welcome to the app!',
        text: `Thanks for joining in , ${name}. Let me know how you get alng with the app`
    })
}

const cancelMail = (email, name) => {
    sgmail.send({
        to:email,
        from:'rushuparekh@gmail.com',
        subject : 'Sorry to see you go!',
        text:`Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeMail,
    cancelMail
}