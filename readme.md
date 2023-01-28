# Universal Helper by Pagongamedev

## import universal-helper.d.ts
if type error import
create 'universal-helper.d.ts' in your project
```javascript
import 'universal-helper/src/types';
```

## helperZustand

### StateMapping
for easy calling zustand
<br/>

store.ts
```javascript
import { HelperZustand } from 'universal-helper';

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

## helperReact

### GetTempWhenSetState
```javascript
import { HelperReact } from 'universal-helper';

const JSX = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const _count = helperReact.GetTempWhenSetState(setCount, count + 1);
    console.log(_count);
  }, []);

  return <></>;
};
```

## helperPromise
### GolangResponse
```javascript
import { HelperPromise } from 'universal-helper';

const {res , error} = await helperPromise.GolangResponse(<Promise>);

if (error){
    console.log("error :", error);
    return
}

console.log("res :", res);
```
### GolangToThrowResponse
```javascript
import { HelperPromise } from 'universal-helper';

// error throw
const res = await helperPromise.GolangToThrowResponse(
   <Promise<TypeGolangResponse>>
   );
```

## helperAPI
### GolangResponse
```javascript
import { HelperAPI } from 'universal-helper';
import Axios from 'axios';

const {res , error} = await helperAPI.GolangResponse(Axios.get('url'));

if (error){
    console.log("error :", error);
    return
}

console.log("res :", res);
```

### GolangToThrowResponse
```javascript
import { HelperAPI } from 'universal-helper';

// error throw
const res = await helperAPI.GolangToThrowResponse(
   <Promise<TypeAPIDataGolangResponse>>
   );
```

## helperTailwind

### FixbugVHScreenInMobile
fixbug over size screen in mobile


### css/tailwind.css
import css before use FixbugVHScreenInMobile
```javascript
import 'universal-helper/css/tailwind.css';

// class
// .uh-h-screen
```
use uh-h-screen class instead of h-screen

```javascript
import { HelperTailwind } from 'universal-helper';

helperTailwind.FixbugVHScreenInMobile();
```
## helperI18Next

### TypeI18NDomain
```javascript
import { HelperI18Next } from 'universal-helper';

// type TypeI18NDomain = { name: string; locate: any };
const i18nLocale1: helperI18Next.TypeI18NDomain = {
  name: 'local1',
  locate: { en: { foo: '' }, th: { foo: '' } },
};
```

### MiddlewareInit
middleware for separate to i18n local store

 ```javascript
import { HelperI18Next } from 'universal-helper';

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
import { HelperI18Next } from 'universal-helper';

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
import { HelperType } from 'universal-helper';

// TypeGolangResponse = { res: any; error: Error | null }
const func = () : helperType.TypeGolangResponse => {

}
```

### TypeAPIData
```javascript
// confirm return with data
export type TypeAPIData = {
  data: any;
  [key: string]: any;
};
```

### TypeAPIDataGolangResponse
```javascript
export type TypeAPIDataGolangResponse = {
  res: TypeAPIData | null;
  error: Error | null;
};
```

### TypePaginationResponse

```javascript
export type TypePaginationResponse = {
  query: {
    limit: number;
    offset: number;
    page: number;
    size: number;
  };
  item: {
    from: number;
    to: number;
    total: number;
  };
  page: {
    current: number;
    last: number;
    size: number;
    url: {
      previous: string | null;
      next: string | null;
      first: string | null;
      last: string | null;
      templage: string | null;
    };
  };
};
```
### ReturnInterfacePromise
use for short return promise in useContext

```javascript
import { HelperType } from 'universal-helper';

// TypeGolangResponse = { res: any; error: Error | null }
const func = async () : helperType.TypeGolangResponse => {
return helperType.ReturnInterfacePromise({ res: null, error: null });
}
```

## helperTime

### WaitForMilliSecond

```javascript
import { HelperTime } from 'universal-helper';

const foo = async () => {
  await helperTime.WaitForMilliSecond(5000);
}
```

### ParseDate
make sure to Date for upload firestore or create DayJS
```javascript
import { HelperTime } from 'universal-helper';

// support DayJS , Firestore.Timestamp , Date
const dayjs = Dayjs()
const date = helperTime.ParseDate(dayjs);
```

### IsJsonFirestoreTimeStamp
```javascript
import { HelperTime } from 'universal-helper';

const jsonData = { nanoseconds: 813000000, seconds: 1672944437 };
console.log(helperTime.IsJsonFirestoreTimeStamp(jsonData));
// true
```

### ConvertJsonFirestoreTimeStampToDate
make sure to Date for upload firestore or create DayJS
```javascript
import { HelperTime } from 'universal-helper';

const jsonData = { nanoseconds: 813000000, seconds: 1672944437 };
const date = helperTime.ConvertJsonFirestoreTimeStampToDate(jsonData);
```

## helperScreen

### FullScreen
### FullScreen.OnChange
```javascript
import { HelperScreen } from 'universal-helper';

const OnChangeFullScreen = (event: Event) => {
  if (helperScreen.FullScreen.IsFullScreen()) {
    console.log('Enter Full Screen');
  } else {
    console.log('Exit Full Screen');
  }
};
helperScreen.FullScreen.OnChange(OnChangeFullScreen);
```

### FullScreen.IsFullScreen

```javascript
import { HelperScreen } from 'universal-helper';

if (helperScreen.FullScreen.IsFullScreen()) {
  console.log('Enter Full Screen');
} else {
  console.log('Exit Full Screen');
}

```

### FullScreen.Request
```javascript
import { HelperScreen } from 'universal-helper';

// FullScreen
await helperScreen.FullScreen.Request();

// FullScreen Video
await helperScreen.FullScreen.Request(videoElement);

const options = {
  navigationUI: 'hide',
  direction: 'landscape'
};
// FullScreen With Options
await helperScreen.FullScreen.Request(null,options);
```
### FullScreen.Cancel
```javascript
import { HelperScreen } from 'universal-helper';

helperScreen.FullScreen.Cancel();
```
### Notch

### css/screen/notch.css
import css before use Screen.Notch
```javascript
import 'universal-helper/css/screen/notch.css';


// class
// uh-notch-p-t : safe-area padding top
// uh-notch-p-r : safe-area padding right
// uh-notch-p-b : safe-area padding bottom
// uh-notch-p-l : safe-area padding left

// uh-notch-p-x : safe-area padding r
// uh-notch-p-y : safe-area padding x

// uh-notch-p   : safe-area padding all

// uh-notch-m-t : safe-area margin top
// uh-notch-m-r : safe-area margin right
// uh-notch-m-b : safe-area margin bottom
// uh-notch-m-l : safe-area margin left

// uh-notch-m-x : safe-area margin r
// uh-notch-m-y : safe-area margin x

// uh-notch-m   : safe-area margin all
```

### Notch.GetNotchArea
```javascript
import { HelperScreen } from 'universal-helper';

const notchArea = helperScreen.Notch.GetNotchArea();
// { top: '0px', right: '0px', bottom: '0px', left: '0px' }
```

### Notch.InitOnChange
init for enable event notch onchange
```javascript
import { HelperScreen } from 'universal-helper';
helperScreen.Notch.InitOnChange();
```
### Notch.AddEventListener
```javascript
import { HelperScreen } from 'universal-helper';
helperScreen.Notch.AddEventListener(onNotchChange);
```

### Notch.RemoveEventListener
```javascript
import { HelperScreen } from 'universal-helper';
helperScreen.Notch.RemoveEventListener(onNotchChange);
```

## helperPWA

### IsPWA
```javascript
import { HelperPWA } from 'universal-helper';

console.log("Is PWA :",helperPWA.IsPWA());
```

## helperEvent

### ClassEventObserver
```javascript
import { HelperEvent } from 'universal-helper';

const onCustomEvent = new helperEvent.ClassEventObserver();

const fn = (value:any)=>{}

onCustomEvent.subscribe(fn);
onCustomEvent.unsubscribe(fn);

onCustomEvent.notify("new value");
```
