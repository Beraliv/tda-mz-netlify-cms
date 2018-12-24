import { useEffect } from 'react'
import { withRouter } from 'react-router'
import usePrevious from '../util/usePrevious'

const ScrollToTop = ({ children = null, location }) => {
  const previousLocation = usePrevious(location)
  useEffect(() => {
    if (location !== previousLocation) {
      window.scrollTo(0, 0)
    }
  })

  return children
}

export default withRouter(ScrollToTop)
