export const eases = {
  primary: [0.4, 0, 0, 1],
  accelerate: [0.5, 0, 1, 1],
  decelerate: [0, 0, 0.3, 1],
  easeDamp: [0.02, 0.85, 0.01, 0.98],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.7, 0, 0.05, 1],
};

export const cubicBezierEase = (list = []) =>
  `cubic-bezier(${list.join(", ")})`;

export const easeCurves = new Proxy(eases, {
  get: (obj, prop) => {
    return cubicBezierEase(obj[prop]);
  },
});
