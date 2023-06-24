export default async (req, res) => {
    // const fs = require('fs');
    //
    // const contactArray = fs.readFileSync('contacts.txt').toString();
    // const jsArray = JSON.parse(contactArray);
    // jsArray.push(req.body);
    //
    // fs.writeFile('contacts.txt', JSON.stringify(jsArray), function (err) {
    //     if (err) throw err;
    // });
    //
    // if (req.body.mailing_list) {
    //     const emailArray = fs.readFileSync('emailList.txt').toString();
    //     const jsEmailArray = JSON.parse(emailArray);
    //     jsEmailArray.push(req.body.email);
    //
    //     fs.writeFile('emailList.txt', JSON.stringify(jsEmailArray), function (err) {
    //         if (err) throw err;
    //     });
    // }

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.FORM_EMAIL,
            pass: process.env.FORM_PASSWORD,
        },
        secure: true,
    })
    const body = `
        <p><strong>Customer Name: <br /></strong>${req.body.full_name}</p> 
        <p><strong>Customer Email:</strong> <br />${req.body.email}</p> 
        <p><strong>Message:</strong> <br /> ${req.body.message}</p>
    `


    const mailData = {
        from: 'samanthamellowwebsite@gmail.com',
        to: 'samanthamellowwebsite@gmail.com',
        subject: `Message from Website`,
        text: body,
        html: body,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}