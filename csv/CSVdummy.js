const sendEmail = (userEmail) => {
  return new Promise(async (resolve,reject) => {
        setTimeout(() => {
            // return(`Email Sent to ${userEmail}`);
            resolve(`Email Sent to ${userEmail}`);
        },3000)

  })
}


const sendEmails = async () => {

    const userEmails = ['ganesh@gmail.com','john@gmail.com','Sam@gmail.com'];

    const status = await Promise.all(userEmails.map(async email => await sendEmail(email)));

    console.log("Status =>",status);

}

sendEmails();