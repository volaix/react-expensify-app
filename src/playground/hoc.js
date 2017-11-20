import React from 'react'
import ReactDOM from 'react-dom'

console.log('hoc is running')

//render hijacking

//higher order component

//info component
const Info = (props) => (<div>
  <h1>Info</h1>
  <p>Information :D</p>
  <p>There's some props: info here:{props.info}</p>
</div>)

const HigherOrder = (WrappedComponent) =>{
  return (props)=> (
    <div>
      {props.isAdmin &&
      <p>The following text is confidential</p>
         }
         <WrappedComponent {...props} /> 
    </div>
  )
}

const AdminInfo = HigherOrder(Info)

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>The magical information is below</p>
      {props.isAuthenticated ? 
        <WrappedComponent {...props} /> :
        <p>Sorry noob. Sign in.</p>}
    </div>
  )
}
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="this is from props" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is from props" />, document.getElementById('app'))
  


//admin warning component