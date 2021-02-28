import * as React from 'react'

const attributeNameMap = {
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  allowfullscreen: 'allowFullScreen',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  charset: 'charSet',
  classid: 'classID',
  class: 'className',
  colspan: 'colSpan',
  'content-editable': 'contentEditable',
  contextmenu: 'contextMenu',
  controlslist: 'controlsList',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  enctype: 'encType',
  formaction: 'formAsdfadfction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  hreflang: 'hrefLang',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv',
  inputmode: 'inputMode',
  keyparams: 'keyParams',
  keytype: 'keyType',
  marginheight: 'marginHeight',
  marginwidth: 'marginWidth',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  minlength: 'minLength',
  novalidate: 'noValidate',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  rowspan: 'rowSpan',
  spellcheck: 'spellCheck',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  tabindex: 'tabIndex',
  usemap: 'useMap',
  'accent-height': 'accentHeight',
  'alignment-baseline': 'alignmentBaseline',
  'arabic-form': 'arabicForm',
  'baseline-shift': 'baselineShift',
  'cap-height': 'capHeight',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation': 'colorInterpolation',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'color-profile': 'colorProfile',
  'color-rendering': 'colorRendering',
  'dominant-baseline': 'dominantBaseline',
  'enable-background': 'enableBackground',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-size-adjust': 'fontSizeAdjust',
  'font-stretch': 'fontStretch',
  'font-style': 'fontStyle',
  'font-variant': 'fontVariant',
  'font-weight': 'fontWeight',
  'glyph-name': 'glyphName',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  'glyph-ref': 'glyphRef',
  'horiz-adv-x': 'horizAdvX',
  'horiz-origin-x': 'horizOriginX',
  'image-rendering': 'imageRendering',
  'letter-spacing': 'letterSpacing',
  'lighting-color': 'lightingColor',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  'overline-position': 'overlinePosition',
  'overline-thickness': 'overlineThickness',
  'paint-order': 'paintOrder',
  'panose-1': 'panose1',
  'pointer-events': 'pointerEvents',
  'rendering-intent': 'renderingIntent',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'strikethrough-position': 'strikethroughPosition',
  'strikethrough-thickness': 'strikethroughThickness',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'text-rendering': 'textRendering',
  'transform-origin': 'transformOrigin',
  'underline-position': 'underlinePosition',
  'underline-thickness': 'underlineThickness',
  'unicode-bidi': 'unicodeBidi',
  'unicode-range': 'unicodeRange',
  'units-per-em': 'unitsPerEm',
  'v-alphabetic': 'vAlphabetic',
  'v-hanging': 'vHanging',
  'v-ideographic': 'vIdeographic',
  'v-mathematical': 'vMathematical',
  'vector-effect': 'vectorEffect',
  'vert-adv-y': 'vertAdvY',
  'vert-origin-x': 'vertOriginX',
  'vert-origin-y': 'vertOriginY',
  'word-spacing': 'wordSpacing',
  'writing-mode': 'writingMode',
  'x-height': 'xHeight',
  'xlink:actuate': 'xlinkActuate',
  'xlink:arcrole': 'xlinkArcrole',
  'xlink:href': 'xlinkHref',
  'xlink:role': 'xlinkRole',
  'xlink:show': 'xlinkShow',
  'xlink:title': 'xlinkTitle',
  'xlink:type': 'xlinkType',
  'xmlns:xlink': 'xmlnsXlink',
  'xml:base': 'xmlBase',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace'
}

const booleanAttributes = [
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'controls',
  'default',
  'disabled',
  'formnovalidate',
  'hidden',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
  'truespeed'
]

const attributePropMapper = (name: string) => {
  const mapped = attributeNameMap[name]

  if (mapped) {
    return mapped
  }

  return name
}

const getStyleObject = (element: HTMLElement) => {
  const { style } = element

  return Object.entries(style).reduce((previousStyleObject, [key, value]) => {
    if (!value) {
      return previousStyleObject
    }

    if (key === 'cssText') {
      return previousStyleObject
    }

    if (/\d+/.test(key)) {
      return previousStyleObject
    }

    previousStyleObject[key] = value

    return previousStyleObject
  }, {})
}

const parseNodeList = (
  nodeList: NodeList,
  replace?: Replacer
): React.ReactNode => {
  return [...nodeList].reduce(
    (
      previousNodes: React.ReactNode[],
      node: Node,
      index
    ): React.ReactNode[] => {
      if (node.nodeType === 3) {
        let text = node.textContent

        if (!text) {
          return previousNodes
        }

        text = text.replace(/\s+/g, ' ')

        // Don't add empty text nodes
        if (text.trim().length > 0) {
          previousNodes.push(text)
        }
      }

      if (node.nodeType === 1) {
        previousNodes.push(parseElement(node as HTMLElement, replace, index))
      }

      return previousNodes
    },
    [] as React.ReactNode[]
  )
}

export const parseElement = (
  element: HTMLElement | NodeList,
  replacer?: Replacer,
  index = 0
): React.ReactElement => {
  // Handle if the node is actually a node list
  if (element instanceof NodeList) {
    return React.createElement(
      React.Fragment,
      {},
      parseNodeList(element, replacer)
    )
  }

  // Handle the replace() function
  let toReplace = null

  if (replacer) {
    toReplace = replacer(element)

    if (!React.isValidElement(toReplace)) {
      toReplace = null
    }
  }

  if (toReplace) {
    return React.cloneElement(toReplace, { key: index })
  }

  const type = element.nodeName.toLowerCase()
  const props: { [key: string]: any } = {}
  let children = null

  props.key = index

  if (element.hasAttributes()) {
    for (let i = 0; i < element.attributes.length; i++) {
      const attribute = element.attributes[i]

      if (attribute.name === 'style') {
        props.style = getStyleObject(element)
        continue
      }

      if (booleanAttributes.includes(attribute.name)) {
        props[attributePropMapper(attribute.name)] = true
        continue
      }

      props[attributePropMapper(attribute.name)] = attribute.value
    }
  }

  if (element.hasChildNodes()) {
    children = parseNodeList(element.childNodes, replacer)
  }

  return React.createElement(type, props, children)
}

export type Replacer = (element: HTMLElement) => React.ReactNode

export const parseHTML = (html: string, replacer?: Replacer) => {
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')
  const parseError = dom.querySelector('parsererror')

  if (parseError) {
    throw new Error(`Error parsing HTML: ${parseError.textContent}`)
  }

  const bodyHtml = dom.querySelector('body')

  if (!bodyHtml) {
    throw new Error('Unexpected body error. HTML `body` is null')
  }

  let elementsToParse: NodeList | HTMLElement = bodyHtml.childNodes

  if (elementsToParse.length === 1) {
    elementsToParse = elementsToParse[0] as HTMLElement
  }

  return parseElement(elementsToParse, replacer)
}
