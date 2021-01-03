import express from 'express';

const app = express();

const port = 3333;

app.post('/transcribe', (req, rest) => { 
    const { uri, job_name } = req?.body;
    // activate transcribe post
})

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
})
 
// https://docs.aws.amazon.com/transcribe/latest/dg/getting-started-python.html