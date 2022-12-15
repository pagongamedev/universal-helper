/**
 * @license
 * Copyright 2020-2022 Pagongamedev Authors
 * SPDX-License-Identifier: MIT
 */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  helperAPI: () => api_exports,
  helperPromise: () => promise_exports,
  helperZustand: () => zustand_exports
});
module.exports = __toCommonJS(src_exports);

// src/helper/api.ts
var api_exports = {};
__export(api_exports, {
  GolangResponse: () => GolangResponse
});
var GolangResponse = (promiseAPI) => __async(void 0, null, function* () {
  return promiseAPI.then((res) => {
    return { res: res.data, error: null };
  }).catch((error) => {
    if (error.response && typeof error.response.data == "object") {
      return { res: error.response.data, error };
    }
    return { res: null, error };
  });
});

// src/helper/promise.ts
var promise_exports = {};
__export(promise_exports, {
  GolangResponse: () => GolangResponse2,
  TypeReturn: () => TypeReturn,
  default: () => promise_default
});
var GolangResponse2 = (promiseAPI) => __async(void 0, null, function* () {
  return promiseAPI.then((res) => {
    return { res, error: null };
  }).catch((error) => {
    return { res: null, error };
  });
});
var TypeReturn = (res) => {
  return new Promise((resolve) => {
    resolve(res);
  });
};
var promise_default = () => {
  console.log("Hello");
};

// src/helper/zustand.ts
var zustand_exports = {};
__export(zustand_exports, {
  UseStore: () => UseStore
});
var import_shallow = __toESM(require("zustand/shallow"));
var UseStore = (stateList, store, isShallow) => {
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
    isShallow ? import_shallow.default : void 0
  );
};
