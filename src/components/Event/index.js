import React from 'react'
import HtmlParser from 'react-html-parser'
import './style.scss'

/**
 * @param {Object} props
 * @param {string} props.summary
 * @param {string} props.location
 * @param {string} props.description
 */
export default function Event (props) {
  const { summary, description, location } = props

  return (
    <div className='Event'>
      <h3 className='summary'>{ summary }</h3>
      <h4 className='location'>{ location }</h4>
      <div className='description'>
        {
          HtmlParser(description, {
            transform: node => {
              // modify all links
              if (node.name === 'a') {
                node.attribs.target = '_blank'
                node.attribs.rel = 'noopener noreferrer'
              }
            }
          })
        }
      </div>
    </div>
  )
}
