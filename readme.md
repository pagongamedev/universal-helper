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

### TypeReturn
use for short return promise in useContext

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

### fixbugVHScreenInMobile
fixbug over size screen in mobile

```javascript
import { helperTailwind } from 'universal-helper';

helperTailwind.fixbugVHScreenInMobile()
```

use HScreen class instead of h-screen
```css
.HScreen {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
```

