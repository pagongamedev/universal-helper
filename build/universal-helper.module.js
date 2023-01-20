/**
 * @license
 * Copyright 2020-2022 Pagongamedev Authors
 * SPDX-License-Identifier: MIT
 */
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/helper/api.ts
var api_exports = {};
__export(api_exports, {
  GolangResponse: () => GolangResponse
});
var GolangResponse = (promiseAPI) => __async(void 0, null, function* () {
  try {
    return promiseAPI.then((res) => {
      return { res: res.data, error: null };
    }).catch((error) => {
      if (error.response && typeof error.response.data == "object") {
        return { res: error.response.data, error };
      }
      return { res: null, error };
    });
  } catch (error) {
    return { res: null, error };
  }
});

// src/helper/i18next.ts
var i18next_exports = {};
__export(i18next_exports, {
  MappingObject: () => MappingObject,
  MiddlewareInit: () => MiddlewareInit
});
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
var MiddlewareInit = ({ debug = true, fallbackLng = "en" }, i18nList) => {
  const resources = {};
  for (const i in i18nList) {
    if (i18nList[i].name !== "") {
      for (const key in i18nList[i].locate) {
        if (!resources.hasOwnProperty(key)) {
          resources[key] = {};
        }
        resources[key] = __spreadProps(__spreadValues({}, resources[key]), {
          [i18nList[i].name]: i18nList[i].locate[key]
        });
      }
    }
  }
  i18n.use(initReactI18next).init({
    debug,
    fallbackLng,
    interpolation: {
      escapeValue: false
    },
    resources
  });
  return i18n;
};
var MappingObject = (input, tranFunc) => {
  if (!input) {
    return "";
  }
  if (typeof input === "string" || input instanceof String) {
    return tranFunc(input) || "";
  }
  if (typeof input === "object" || input instanceof Object) {
    if ("key" in input) {
      return tranFunc(input.key, "option" in input ? input.option : void 0);
    }
  }
  console.log("cant mapping type of ", typeof input);
  return "";
};

// src/helper/promise.ts
var promise_exports = {};
__export(promise_exports, {
  GolangResponse: () => GolangResponse2
});
var GolangResponse2 = (promiseAPI) => __async(void 0, null, function* () {
  try {
    return promiseAPI.then((res) => {
      return { res, error: null };
    }).catch((error) => {
      return { res: null, error };
    });
  } catch (error) {
    return { res: null, error };
  }
});

// src/helper/react.ts
var react_exports = {};
__export(react_exports, {
  GetTempWhenSetState: () => GetTempWhenSetState
});
var GetTempWhenSetState = (setState, value) => {
  setState(value);
  return value;
};

// src/helper/pwa/index.ts
var pwa_exports = {};
__export(pwa_exports, {
  IsPWA: () => IsPWA
});
var IsPWA = () => {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone || false;
};

// src/helper/screen/index.ts
var screen_exports = {};
__export(screen_exports, {
  FullScreen: () => fullscreen_exports,
  Notch: () => notch_exports
});

// src/helper/screen/fullscreen.ts
var fullscreen_exports = {};
__export(fullscreen_exports, {
  Cancel: () => Cancel,
  IsFullScreen: () => IsFullScreen,
  IsSupported: () => IsSupported,
  OnChange: () => OnChange,
  Request: () => Request
});
var OnChange = (callback) => {
  document.addEventListener("fullscreenchange", (event) => {
    callback(event);
  });
  document.addEventListener("webkitfullscreenchange", function(event) {
    callback(event);
  });
};
var IsSupported = () => {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
};
var IsFullScreen = () => {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
};
var Request = (element, options) => __async(void 0, null, function* () {
  if (!element) {
    element = document.documentElement;
  }
  if (element.requestFullscreen) {
    yield element.requestFullscreen(options);
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    yield element.mozRequestFullScreen(options);
  } else if (element.msRequestFullscreen) {
    yield element.msRequestFullscreen(options);
  }
});
var Cancel = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

// src/helper/screen/notch.ts
var notch_exports = {};
__export(notch_exports, {
  AddEventListener: () => AddEventListener,
  GetNotchArea: () => GetNotchArea,
  InitOnChange: () => InitOnChange,
  RemoveEventListener: () => RemoveEventListener
});

// src/helper/event/index.ts
var event_exports = {};
__export(event_exports, {
  ClassEventObserver: () => ClassEventObserver
});
var ClassEventObserver = class {
  constructor() {
    this.subscribers = [];
  }
  subscribe(fn) {
    this.subscribers.push(fn);
  }
  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== fn
    );
  }
  notify(value) {
    this.subscribers.forEach((subscriber) => subscriber(value));
  }
};

// src/helper/screen/notch.ts
var GetNotchArea = () => {
  const computedStyle = window.getComputedStyle(document.documentElement);
  const notchArea = {
    top: computedStyle.getPropertyValue("--uh-sat"),
    right: computedStyle.getPropertyValue("--uh-sar"),
    bottom: computedStyle.getPropertyValue("--uh-sab"),
    left: computedStyle.getPropertyValue("--uh-sal")
  };
  return notchArea;
};
var onNotchChange = new ClassEventObserver();
var _notchArea = { top: "0px", right: "0px", bottom: "0px", left: "0px" };
var fnOnNotchChange = (event) => {
  const notchArea = GetNotchArea();
  if (notchArea.top == _notchArea.top && notchArea.right == _notchArea.right && notchArea.bottom == _notchArea.bottom && notchArea.left == _notchArea.left) {
    return;
  }
  _notchArea = notchArea;
  onNotchChange.notify(_notchArea);
};
var InitOnChange = () => {
  window.addEventListener("resize", fnOnNotchChange);
  window.addEventListener("orientationchange", fnOnNotchChange);
};
var AddEventListener = (fn) => {
  onNotchChange.subscribe(fn);
};
var RemoveEventListener = (fn) => {
  onNotchChange.unsubscribe(fn);
};

// src/helper/tailwind/index.ts
var tailwind_exports = {};
__export(tailwind_exports, {
  FixbugVHScreenInMobile: () => FixbugVHScreenInMobile
});
var updateVHScreen = () => {
  const vh = (IsPWA() ? window.outerHeight : window.innerHeight) * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
var FixbugVHScreenInMobile = () => {
  updateVHScreen();
  window.addEventListener("resize", updateVHScreen);
  window.addEventListener("orientationchange", updateVHScreen);
};

// src/helper/time.ts
var time_exports = {};
__export(time_exports, {
  ConvertJsonFirestoreTimeStampToDate: () => ConvertJsonFirestoreTimeStampToDate,
  IsJsonFirestoreTimeStamp: () => IsJsonFirestoreTimeStamp,
  ParseDate: () => ParseDate,
  WaitForMilliSecond: () => WaitForMilliSecond
});
import Dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
var WaitForMilliSecond = (delay) => {
  return new Promise((res) => setTimeout(res, delay));
};
var IsJsonFirestoreTimeStamp = (object) => {
  return "seconds" in object && "nanoseconds" in object;
};
var ConvertJsonFirestoreTimeStampToDate = ({
  seconds,
  nanoseconds
}) => {
  return new Date(seconds * 1e3 + nanoseconds / 1e6);
};
var ParseDate = (object) => {
  if (Object.getPrototypeOf(object) === Date.prototype) {
    return object;
  }
  if (Object.getPrototypeOf(object) === Dayjs.prototype) {
    return object.toDate();
  }
  if (Object.getPrototypeOf(object) === Timestamp.prototype) {
    return object.toDate();
  }
  if (IsJsonFirestoreTimeStamp(object)) {
    return ConvertJsonFirestoreTimeStampToDate(object);
  }
  console.log("ParseDate : Not Support");
  return object;
};

// src/helper/type.ts
var type_exports = {};
__export(type_exports, {
  ReturnInterfacePromise: () => ReturnInterfacePromise
});
var ReturnInterfacePromise = (res) => {
  return new Promise((resolve) => {
    resolve(res);
  });
};

// src/helper/zustand.ts
var zustand_exports = {};
__export(zustand_exports, {
  StateMapping: () => StateMapping
});
import shallow from "zustand/shallow";
var StateMapping = (stateList, store, isShallow) => {
  if (isShallow == void 0) {
    isShallow = true;
  }
  if (stateList.length == 0) {
    console.log("not have store element");
    return;
  }
  if (stateList.length == 1) {
    const obj = store((state) => {
      if (stateList[0] in state) {
        return state[stateList[0]];
      } else {
        console.log("Not Have Store :", stateList[0]);
        return;
      }
    });
    return { [stateList[0]]: obj };
  }
  return store(
    (state) => {
      const obj = {};
      for (const index in stateList) {
        if (stateList[index] in state) {
          const objMapping = { [stateList[index]]: state[stateList[index]] };
          Object.assign(obj, objMapping);
        } else {
          console.log("Not Have Store :", stateList[index]);
        }
      }
      return obj;
    },
    isShallow ? shallow : void 0
  );
};
export {
  api_exports as helperAPI,
  event_exports as helperEvent,
  i18next_exports as helperI18Next,
  pwa_exports as helperPWA,
  promise_exports as helperPromise,
  react_exports as helperReact,
  screen_exports as helperScreen,
  tailwind_exports as helperTailwind,
  time_exports as helperTime,
  type_exports as helperType,
  zustand_exports as helperZustand
};
