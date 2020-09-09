const step = 10;
export const initPositionElement = (element, wrapper) => {
  if (element && wrapper) {
    const elemHeight = element.current.clientHeight;
    const elemWidth = element.current.clientWidth;
    const wrapHeight = wrapper.current.clientHeight;
    const wrapWidth = wrapper.current.clientWidth;
    element.current.style.top = `${Math.floor(wrapHeight / 2 - elemHeight / 2)}px`;
    element.current.style.left = `${Math.floor(wrapWidth / 2 - elemWidth / 2)}px`;
    element.current.style.opacity = 1;
  }
}

export const goTo = (element, key) => {
  if (element) {
    if (parseInt(element.current.style[key]) - step > 0) {
      element.current.style[key] = `${parseInt(element.current.style[key]) - step}px`;
    } else {
      element.current.style[key] = 0;
    }
  }
}

export const goToDown = (element, wrapper) => {
  if (element && wrapper) {
    const elemHeight = element.current.clientHeight;
    const wrapHeight = wrapper.current.clientHeight;
    const height = wrapHeight - elemHeight;
    if (parseInt(element.current.style.top) + step < height) {
      element.current.style.top = `${parseInt(element.current.style.top) + step}px`;
    } else {
      element.current.style.top = `${height}px`;
    }
  }
}

export const goToRight = (element, wrapper) => {
  if (element && wrapper) {
    const elemWidth = element.current.clientWidth;
    const wrapWidth = wrapper.current.clientWidth;
    const width = wrapWidth - elemWidth;
    if (parseInt(element.current.style.left) + step < width) {
      element.current.style.left = `${parseInt(element.current.style.left) + step}px`;
    } else {
      element.current.style.left = `${width}px`;
    }
  }
}
