
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: apiKey,
})

//setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());
async function main() {


    console.log(completion.choices[0]);
}


//endpoint
app.post("/chat", async (req, res, next) => {
    console.log(req.body);
    const { prompt } = req.body;
    const completion = await openai.chat.completions.create({
        messages: [
            // { "role": "system", "content": "You are a React js specialist." },
            { "role": "user", "content": prompt }],
        model: "gpt-3.5-turbo",
        stream: true,
    });
    console.log(completion,"-----==========");
    // if (completion.choices && completion.choices.length > 0) {
    //     for await (const chunk of completion) {
    //         process.stdout.write(chunk.choices[0]?.delta?.content || "");
    //     }
    //     res.status(200).send(completion.choices[0]);
    // } else {
    //     console.log("No completion choices available");
    //     res.status(200).send("No completion choices available");
    // }
})

const port = 8080;
app.listen(port, () => {
    console.log(`servr listening on port ${port}`);
})