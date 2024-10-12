import React from 'react'
import { ForsideData } from '../data/ForsideData'

const classes = {
  container: {
    gap: '5px',
    padding: '5rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '80px',
    lineHeight: '5rem',
    marginBottom: '40px',
  },
  linkButton: {
    width: '3rem',
    padding: '10px',
    margin: 'auto',
    borderRadius: '50%',
    border: 'solid',
  },
}

const Header = () => {
  return (
    <div style={classes.container}>
        <h2 style={classes.title}>{ForsideData.title1} <br /> <span>{ForsideData.title2}</span> <br />{ForsideData.title3}</h2>
        <a style={classes.linkButton} href="/Contact">{ForsideData.button}</a>
    </div>
  )
}

export default Header