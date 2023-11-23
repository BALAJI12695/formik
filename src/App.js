import './App.css';
import './Css/Signup.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from './Component/TodoList';
import Todos from './Component/Todos';
import Counter from './Component/UseReducer';
import UseStatecounter from './Component/UseState';
import SignupForm from './Component/SignupForm';
import Signup from './Component/Signup';
import Layout from './Component/Layout';


function App() {
  return (
    <div  >

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UseStatecounter />} />
          <Route path="blogs" element={<TodoList />} />
          <Route path="contact" element={<Todos />} />
          <Route path="*" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
      {/* <Counter />
      <UseStatecounter />
      <TodoList />
      <Todos />
      < SignupForm />
      < Signup /> */}
    
    </div>
  );
}

export default App;
