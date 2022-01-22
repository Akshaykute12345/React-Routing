import React from 'react'

const Home = ()=>{
  return (
 <div>
 <h1> <b> Blog Introduction: </b> </h1>
  <h4> React <b> Component Lifecycle Methods </b> are the functions that are        executed on the course from a component import to rendering in the view.When a   view is rendered through react i.e., a react component it goes through 4 phases. <b> Initialization, Mounting, Updating and Unmounting </b> in this specified hierarchical flow. Of which Updating may or may not occur based on the user scenario in which case the Initialization, Mounting and Unmounting will occur.

    Once a Component is fully mounted i.e., rendered in the view and if the users closes the browser window without unmounting it then the component will not go through the Unmounting phase also.</h4>

<img style={{marginLeft:"300px",width:"700px"}} src="https://miro.medium.com/max/4516/1*552z6hbX_b648DjpTLHZNg.png" alt=""/>

<h3> kindly refer the above specific links from header to know more about lifecycle methods</h3>

</div>
  )
}

export default Home