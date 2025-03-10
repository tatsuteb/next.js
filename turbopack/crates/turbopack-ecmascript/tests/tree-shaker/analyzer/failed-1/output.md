# Items

Count: 10

## Item 1: Stmt 0, `VarDeclarator(0)`

```js
let source;

```

- Declares: `source`
- Write: `source`

## Item 2: Stmt 1, `VarDeclarator(0)`

```js
const eventCallbacks = [];

```

- Declares: `eventCallbacks`
- Write: `eventCallbacks`

## Item 3: Stmt 2, `Normal`

```js
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}

```

- Hoisted
- Declares: `getSocketProtocol`
- Write: `getSocketProtocol`

## Item 4: Stmt 3, `Normal`

```js
export function addMessageListener(cb) {
    eventCallbacks.push(cb);
}

```

- Hoisted
- Declares: `addMessageListener`
- Reads (eventual): `eventCallbacks`
- Write: `addMessageListener`
- Write (eventual): `eventCallbacks`

## Item 5: Stmt 4, `Normal`

```js
export function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}

```

- Hoisted
- Declares: `sendMessage`
- Reads (eventual): `source`
- Write: `sendMessage`
- Write (eventual): `source`

## Item 6: Stmt 5, `Normal`

```js
export function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        }
        function handleMessage(event) {
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}

```

- Hoisted
- Declares: `connectHMR`
- Reads (eventual): `source`, `eventCallbacks`, `getSocketProtocol`
- Write: `connectHMR`
- Write (eventual): `source`, `eventCallbacks`

# Phase 1
```mermaid
graph TD
    Item1;
    Item2;
    Item3;
    Item4;
    Item5;
    Item6;
    Item7;
    Item7["ModuleEvaluation"];
    Item8;
    Item8["export addMessageListener"];
    Item9;
    Item9["export sendMessage"];
    Item10;
    Item10["export connectHMR"];
```
# Phase 2
```mermaid
graph TD
    Item1;
    Item2;
    Item3;
    Item4;
    Item5;
    Item6;
    Item7;
    Item7["ModuleEvaluation"];
    Item8;
    Item8["export addMessageListener"];
    Item9;
    Item9["export sendMessage"];
    Item10;
    Item10["export connectHMR"];
    Item8 --> Item4;
    Item9 --> Item5;
    Item10 --> Item6;
```
# Phase 3
```mermaid
graph TD
    Item1;
    Item2;
    Item3;
    Item4;
    Item5;
    Item6;
    Item7;
    Item7["ModuleEvaluation"];
    Item8;
    Item8["export addMessageListener"];
    Item9;
    Item9["export sendMessage"];
    Item10;
    Item10["export connectHMR"];
    Item8 --> Item4;
    Item9 --> Item5;
    Item10 --> Item6;
    Item4 --> Item2;
    Item5 --> Item1;
    Item6 --> Item1;
    Item6 --> Item2;
    Item6 --> Item3;
```
# Phase 4
```mermaid
graph TD
    Item1;
    Item2;
    Item3;
    Item4;
    Item5;
    Item6;
    Item7;
    Item7["ModuleEvaluation"];
    Item8;
    Item8["export addMessageListener"];
    Item9;
    Item9["export sendMessage"];
    Item10;
    Item10["export connectHMR"];
    Item8 --> Item4;
    Item9 --> Item5;
    Item10 --> Item6;
    Item4 --> Item2;
    Item5 --> Item1;
    Item6 --> Item1;
    Item6 --> Item2;
    Item6 --> Item3;
```
# Final
```mermaid
graph TD
    N0["Items: [ItemId(Export((&quot;addMessageListener&quot;, #2), &quot;addMessageListener&quot;))]"];
    N1["Items: [ItemId(Export((&quot;connectHMR&quot;, #2), &quot;connectHMR&quot;))]"];
    N2["Items: [ItemId(Export((&quot;sendMessage&quot;, #2), &quot;sendMessage&quot;))]"];
    N3["Items: [ItemId(0, VarDeclarator(0))]"];
    N4["Items: [ItemId(1, VarDeclarator(0))]"];
    N5["Items: [ItemId(2, Normal)]"];
    N6["Items: [ItemId(3, Normal)]"];
    N7["Items: [ItemId(4, Normal)]"];
    N8["Items: [ItemId(5, Normal)]"];
    N9["Items: [ItemId(ModuleEvaluation)]"];
    N0 --> N6;
    N2 --> N7;
    N1 --> N8;
    N6 --> N4;
    N7 --> N3;
    N8 --> N3;
    N8 --> N4;
    N8 --> N5;
```
# Entrypoints

```
{
    Export(
        "connectHMR",
    ): 1,
    ModuleEvaluation: 9,
    Export(
        "addMessageListener",
    ): 0,
    Exports: 10,
    Export(
        "sendMessage",
    ): 2,
}
```


# Modules (dev)
## Part 0
```js
import { a as addMessageListener } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -6
};
export { addMessageListener };

```
## Part 1
```js
import { b as connectHMR } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -8
};
export { connectHMR };

```
## Part 2
```js
import { c as sendMessage } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -7
};
export { sendMessage };

```
## Part 3
```js
let source;
export { source as d } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 4
```js
const eventCallbacks = [];
export { eventCallbacks as e } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 5
```js
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
export { getSocketProtocol as f } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 6
```js
import { e as eventCallbacks } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -4
};
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
export { addMessageListener as a } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 7
```js
import { d as source } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -3
};
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
export { sendMessage as c } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 8
```js
import { f as getSocketProtocol } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -5
};
import { d as source } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -3
};
import { e as eventCallbacks } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -4
};
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        }
        function handleMessage(event) {
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
export { connectHMR as b } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 9
```js
"module evaluation";

```
## Part 10
```js
export { addMessageListener } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export addMessageListener"
};
export { connectHMR } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export connectHMR"
};
export { sendMessage } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export sendMessage"
};

```
## Merged (module eval)
```js
"module evaluation";

```
# Entrypoints

```
{
    Export(
        "connectHMR",
    ): 1,
    ModuleEvaluation: 9,
    Export(
        "addMessageListener",
    ): 0,
    Exports: 10,
    Export(
        "sendMessage",
    ): 2,
}
```


# Modules (prod)
## Part 0
```js
import { a as addMessageListener } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -6
};
export { addMessageListener };

```
## Part 1
```js
import { b as connectHMR } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -8
};
export { connectHMR };

```
## Part 2
```js
import { c as sendMessage } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -7
};
export { sendMessage };

```
## Part 3
```js
let source;
export { source as d } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 4
```js
const eventCallbacks = [];
export { eventCallbacks as e } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 5
```js
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
export { getSocketProtocol as f } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 6
```js
import { e as eventCallbacks } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -4
};
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
export { addMessageListener as a } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 7
```js
import { d as source } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -3
};
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
export { sendMessage as c } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 8
```js
import { f as getSocketProtocol } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -5
};
import { d as source } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -3
};
import { e as eventCallbacks } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -4
};
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        }
        function handleMessage(event) {
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
export { connectHMR as b } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};

```
## Part 9
```js
"module evaluation";

```
## Part 10
```js
export { addMessageListener } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export addMessageListener"
};
export { connectHMR } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export connectHMR"
};
export { sendMessage } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export sendMessage"
};

```
## Merged (module eval)
```js
"module evaluation";

```
