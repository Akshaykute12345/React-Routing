import React from 'react'





const Unmounting = ()=>{

 
  return (

<div>
    <h1> <b> Component Unmounting : </b></h1>

    <h5> The react component undergoes the Unmounting Phase, while the component is deleted/removed from the DOM, and any last updations and functions to be executed while the component is being removed shall be done in the Unmounting phase via the <b> componentWillUnmount() </b> lifecycle method.

    The Lifecycle method that go through in the <b> unmounting phase are, </b></h5>

<ul>
  <li> <b> componentWillUnmount() </b> </li>
</ul>

<h3> componentWillUnmount()</h3>

   <h5> Here the component is almost done and is going to be removed/deleted. Maybe forever or conditionally like show and remove. Before it goes, it asks if you have any last-minute requests. Here you can cancel any outgoing network requests, or remove all event listeners associated with the component.

   Basically, clean up anything to do that solely involves the component</h5>


  
</div>

  )
}



export default Unmounting

