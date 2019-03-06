import React from 'react'

const AccordionMenu = (props) => {

  const renderMenu = () => {
    if (true) return (
      <div className='accordion-menu-open'>
        <p>I am the menu</p>
      </div>
    )
  }

  return (
    <div>
      <button>Menu</button>
      {renderMenu()}
    </div>
  )
}

export default AccordionMenu
