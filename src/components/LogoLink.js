import React, { Fragment, useState } from 'react'
import Logo from './Logo'

const LogoLink = ({ alt, className, hoverLogo, href, logo }) => {
  const [hover, setHover] = useState(false)

  return (
    <a
      aria-label={alt}
      alt={alt}
      className={className}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      role='button'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Fragment>
        <Logo className={!hover ? 'hovered' : 'not_hovered'} src={logo} />
        <Logo className={hover ? 'idle' : 'not_idle'} src={hoverLogo} />
      </Fragment>
    </a>
  )
}

export default LogoLink
