import Comment from './components/Comment';
import './App.css';


function App() {
  const user = {
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtU2EdWBnIBp5ru-S28ZCA4P0xVW983FPG3Mj5HONp_OkwdDZDBUDeS1VFxMTud1yu9Y&usqp=CAU',
      name: 'Hello Kitty'
    },
    text: 'I hope you enjoy learning React',
    date: new Date()
  }




  return (
    <div className="App">
      <Comment author={user.author} text={user.text}  date={user.date}/>

    </div>
  )
}

export default App;








