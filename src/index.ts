import express, {Request, Response} from 'express'
import themeRepository, { CreateVote } from './repositories/themeRepository'


const app = express()
app.use(express.json())

app.get('/voting', async (req:Request, res: Response)=> {
  const result = await themeRepository.getAllVotes();
  res.json({'result': result})
})

app.post('/voting', async (req:Request, res: Response)=> {
  const result = await themeRepository.createVoting(req.body);
  res.json({'result': result})
})

app.listen(3000, () =>{console.log('EXPRESS START ON PORT 3000')})