export const elementMoveAction = (element, wrapper) => {
  if (element && wrapper) {
    const step = 50;
    const elemHeight = element.current.clientHeight;
    const elemWidth = element.current.clientWidth;
    const wrapHeight = wrapper.current.clientHeight;
    const wrapWidth = wrapper.current.clientWidth;
    const height = wrapHeight - elemHeight;
    const width = wrapWidth - elemWidth;
    const stepHeight = height / step;
    const stepWidth = width / step;
    let counter = 0;

    return setInterval(() => {
      if (counter === 0) {
        element.current.style.top = `${height}px`;
        element.current.style.left = '0px';
        element.current.style.opacity = 1;
        counter++;
      } else if (counter < 51) {
        element.current.style.left = `${counter * stepWidth}px`;
        counter++;
      } else if (counter < 101) {
        element.current.style.top = `${height - stepHeight * (counter - 50)}px`;
        element.current.style.left = `${width - stepWidth * (counter - 50)}px`;
        counter++;
      } else if (counter < 151) {
        element.current.style.left = `${stepWidth * (counter - 100)}px`;
        counter++;
      } else {
        counter = 0;
      }
    }, 50)
  }
};