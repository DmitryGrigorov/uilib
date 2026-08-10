import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import "jest-styled-components";
import { configureToMatchImageSnapshot } from "jest-image-snapshot"

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

global.PointerEvent = MouseEvent as typeof PointerEvent;

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  comparisonMethod: "ssim",
  failureThreshold: 0.042,
  failureThresholdType: "percent",
  blur: 1
});

expect.extend({ toMatchImageSnapshot })

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

Object.defineProperty(window, "requestAnimationFrame", {
  writable: true,
  value: (callback: FrameRequestCallback) => window.setTimeout(callback, 0)
});

Object.defineProperty(window, "cancelAnimationFrame", {
  writable: true,
  value: (handle: number) => window.clearTimeout(handle)
});
