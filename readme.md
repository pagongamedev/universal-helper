# Universal Helper by Pagongamedev

## helperZustand

### StateMapping
for easy calling zustand
<br/>

store.ts
```javascript
import { helperZustand } from 'universal-helper';

import create from 'zustand';

export const store = create((setState, getState) => ({
  user: '',
  setUser: (name: string) => setState(() => ({ user: name })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, store, isShallow);
};

export const setStore = (state: any) => store.setState(state);
```

using file
```javascript
// auto shallow
  const { user , setUser }: any = useStore(['user','setUser']);

// disable shallow for refresh very thing
  const { user , setUser }: any = useStore(['user','setUser'], false);

// get by one without shallow
  const { user }: any = useStore(['user']);
  const { setUser }: any = useStore(['setUser']);

```
<br/>

## helperPromise
### GolangResponse
```javascript
import { helperPromise } from 'universal-helper';

const {res , error} = await helperPromise.GolangResponse(<Promise>);

if (error){
    console.log("error :", error);
    return
}

console.log("res :", res);
```

## helperAPI
### GolangResponse
```javascript
import { helperAPI } from 'universal-helper';
import Axios from 'axios';

const {res , error} = await helperAPI.GolangResponse(Axios.get('url'));

if (error){
    console.log("error :", error);
    return
}

console.log("res :", res);
```

## helperTailwind

### FixbugVHScreenInMobile
fixbug over size screen in mobile

```javascript
import { helperTailwind } from 'universal-helper';

helperTailwind.FixbugVHScreenInMobile();
```

use HScreen class instead of h-screen
```css
.HScreen {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
```

## helperI18Next

### TypeI18NDomain
```javascript
import { helperI18Next } from 'universal-helper';

// type TypeI18NDomain = { name: string; locate: any };
const i18nLocale1: helperI18Next.TypeI18NDomain = {
  name: 'local1',
  locate: { en: { foo: '' }, th: { foo: '' } },
};
```

### MiddlewareInit
middleware for separate to i18n local store

 ```javascript
import { helperI18Next } from 'universal-helper';

const i18nList = [
  { name: 'main', locate: { en: { foo: '' }, th: { foo: '' } } },
  { name: 'local1', locate: { en: { foo: '' }, th: { foo: '' } } },
  { name: 'local2', locate: { en: { foo: '' }, th: { foo: '' } } },
];

helperI18Next.MiddlewareInit(
  {
    debug: true,
    fallbackLng: 'th',
  },
  i18nList,
);
```

### MappingObject

```javascript
import { helperI18Next } from 'universal-helper';

const JSX = () => {
  const { t } = useTranslation([i18nDomainName]);

  return (
    <>
      <div>{helperI18Next.MappingObject('validate.required', t)}</div>
      <div>
        {helperI18Next.MappingObject({ key: 'validate.min', option: { count: 4 } }, t)}
      </div>
    </>
  );
};
```

## helperType

### TypeGolangResponse

```javascript
import { helperType } from 'universal-helper';

// TypeGolangResponse = { res: any; error: Error | null }
const func = () : helperType.TypeGolangResponse => {

}
```

### TypeReturn
use for short return promise in useContext

```javascript
import { helperType } from 'universal-helper';

// TypeGolangResponse = { res: any; error: Error | null }
const func = async () : helperType.TypeGolangResponse => {
return helperType.ReturnInterfacePromise({ res: null, error: null });
}
```

## helperTime

## WaitForMilliSecond

```javascript
import { helperTime } from 'universal-helper';

const foo = async () => {
  await helperTime.WaitForMilliSecond(5000);
}
```
