import { useNavigate} from 'react-router-dom'
const Main = () => {
  const navigate = useNavigate();

  const NavigateToStore = () => {
    navigate('/store');

    
  }


  return (
    <div className="main">
      <div className="main-wrapper">
      



        <h1>You deserve a comfortable life</h1>
        <p>We have made quality our habit. It’s not something that we just strive for – we live by<br/> this principle every day. </p>
        <button onClick={NavigateToStore}>Our store</button>
      </div>
    </div>
  )
}

export default Main