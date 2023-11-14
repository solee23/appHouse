import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const withRouter = (Components) => props => {
    const navigation = useNavigate()
    const location = useLocation()
  return (
   <Components navigation={navigation} location={location} {...props}/>
  )
}

export default withRouter