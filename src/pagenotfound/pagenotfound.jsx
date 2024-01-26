import React from 'react';
import { Button, Result } from 'antd';
import Navbar from '../navbar/navbar';
import { useNavigate, Link } from 'react-router-dom'
export default function PageNotFound() {
  // const item = [
  //   {
  //     label : 'Home',
  //     key : '/home'
  //   }
  // ]
  // const navigate = useNavigate();
  function backHome(){
    <Link>{<Navbar/>}</Link>
  }
  return (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={backHome}  type="primary">Back Home</Button>}
  />
  )
}
