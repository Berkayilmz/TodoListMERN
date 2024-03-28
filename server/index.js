const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MongoDBURI } = require('./config.js');
const TodoModel = require('./models/TodoModel.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MongoDBURI)
    .then(() => {
        console.log('Connected by MongoDB');
        app.listen(PORT, () => { // PORT doğru şekilde kullanılıyor
            console.log("Server is running");
        })
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

//Add Task
app.post('/', async (req, res) => {
    const task = req.body.task;

    try {
        const newTask = await TodoModel.create({ task });
        return res.status(201).send(newTask);
    } catch (error) {
        return res.status(500).send(error);
    }
});

//Delete Task
app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TodoModel.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({ msg: 'Task is not found!' });
        } else {
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

//Get all tasks
app.get('/', async (req, res) => {
    try {
        const allTasks = await TodoModel.find({});
        res.status(200).send({
            data: allTasks
        })
    } catch (error) {

    }
})

//Get task by id
app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TodoModel.findById(id);
        return res.status(200).send({
            data: task
        })
    } catch (error) {
        return res.status(400).send(error);
    }
})

//Update task by id
app.put('/:id', async (req,res)=>{
    try {
        if(!req.body.task){
            return res.status(400).send({
                error:'Task can not be empty'
            })
        }else{
            const {id}=req.params;
            const updatedTask=await TodoModel.findByIdAndUpdate(id,req.body);
            if(!upda){
                return res.status(404).send({message:'Task not found!'});
            }else{
                return res.status(200).send(updatedTask);
            }
        }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})