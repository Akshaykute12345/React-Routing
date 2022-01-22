import React from 'react'

const Mounting = ()=>{
  return (
 <div>
    <h1> <b> Component Mounting : </b> </h1>
    <h4> The Lifecycle methods that go through in the <b> mounting phase are,</b></h4>
    <ul>
      <li> <b>componentWillMount() </b> </li>
      <li><b> render() </b> </li>
      <li> <b> componentDidMount() </b></li>
    </ul>
 <h3> componentWillMount()</h3>
    <h5> The componentWillMount() method is the first called in this phase. It’s invoked once and immediately before the initial rendering occurs, hence before React inserts the component into the DOM. It’s very important to note that calling this.setState() within this method will not trigger a re-render.

    Since this method is called before render() our Component will not have access to the Native UI (DOM, etc.). We also will not have access to the children refs, because they are not created yet. The componentWillMount() is a chance for us to handle configuration, update our state, and in general prepare for the first render.</h5>
<h3> render()</h3>

   <h5> This is the method we go through when we first have the actual rendering of the component in the DOM. We create Elements (via jsx/js) and return them. We access the Component this.props and this.state and let these values derive how content should be generated. A real scenario would be the show/Hide of a component on first load.

   render() is the method unlike others, goes through multiple component phases like on mounting, updating. A user triggered update shall go through the updating phase which will also be rendered in the DOM via the render() method</h5>

<h3> componentDidMount()</h3>

    <h5> The last step in the Birth/Mount life cycle phase is our post-mount access via componentDidMount(). This method is called once all our children Elements and our Component instances are mounted onto the DOM. When this method is called we now have access to the Native UI (DOM, UIView, etc.), access to our children refs and the ability to potentially trigger a new render pass.</h5>
</div>
  )
}

export default Mounting