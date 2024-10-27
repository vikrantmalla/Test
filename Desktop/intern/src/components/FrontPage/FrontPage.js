import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bgtext from './Bgtext';
import Services from './Services';
import Technology from './Technology';
import Industry from './Industry';
import Projects from './Projects';
import Leading from './Leading';
import SatisfirdClients from './SatisfirdClients';
import Explore from './Explore';
import Form from './Form';
import ClientComment from './ClientComment';



export default function FrontPage() {
  return (
    <div>
       <Bgtext/>
     <Services/>
     <Technology/><br /><br />
     <Industry/>
     <Projects/><br /><br /><br />
     <Leading title="abcd"/><br /><br /><br />
     <SatisfirdClients/><br /><br />
     <Explore/><br />
     <ClientComment/><br /><br />
   <Form/>
   
    </div>
  )
}
