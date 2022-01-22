import React from 'react'

const Updating = ()=>{
  return (
    
<div>
<h1> <b> Component Updating : </b> </h1>

   <h4> A typical example of a component updating phase is when an user trigger updations like state value change trough a function executed on user events like onClick, onChange etc. What follows is a set of component state/props change usually and the component render occurs updating the DOM accordingly.The Lifecycle methods that go through in the <b> updating phase are,</b></h4>

   <ul>
     <li> <b> componentWillReceiveProps()</b> </li>
     <li> <b> shouldComponentUpdate()</b></li>
     <li> <b> componentWillUpdate()</b></li>
     <li> <b> render()</b></li>
     <li><b> componentDidUpdate()</b></li>
  </ul>

<h3> componentWillReceiveProps()</h3>

     <h5> The first method available to us is <b> componentWillReceiveProps().</b> This method is called when props are passed to the Component instance. This is the first hook that allows us to look into the upcoming Update. Here we could extract the new props and allows us to check and see if new props are coming in and we can make choices based on the data.The componentWillReceiveProps() can be skipped if the Update is triggered by just a state change.</h5>

<h3> shouldComponentUpdate())</h3>

     <h5> The <b> shouldComponentUpdate() </b> method allows your Component to exit the Update life cycle if there is no reason to apply a new render. Whenever a component’s state changes, React re-renders the component and all its children. Often times, the component and its children barely change yet we need to render everything causing an inefficient code rendering.

    This lifecycle method checks the current props and state, compares it to the next props and state and then returns true if they are different, or false if they are the same. Based on the Boolean value, we shall be able to avoid rendering when it isn’t needed.</h5>

<h3> componentDidUpdate())</h3>

     <h5> The componentDidUpdate is particularly useful when an operation needs to happen after the DOM is updated and the update queue is emptied. It’s probably most useful on complex renders and state or DOM changes or when you need something to be the absolutely last thing to be executed. A most common use case would be, updating the DOM in response to prop or state changes</h5>
  
</div>
  )
}

export default Updating 