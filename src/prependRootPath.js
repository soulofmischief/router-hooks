// @flow strict
import { prependToProps } from '@soulofmischief/js-utils'
import { appendForwardSlash } from '@soulofmischief/strings'


/** Append root path to an object containing path strings */
export function prependRootPath(
  paths: {[string]: mixed },
  root: string
) {

  return prependToProps(
    paths,
    // Ensure we only have one trailing slash.
    appendForwardSlash( root )
  )
}
