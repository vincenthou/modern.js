- Type: `Object`
- Default: `{}`

The config of DevServer can be modified through `tools.devServer`.

### Options

#### after

- Type: `Array`
- Default: `[]`

Provides the ability to execute custom middleware after all other middleware internally within the server.

```js
export default {
  tools: {
    devServer: {
      after: [
        async (req, res, next) => {
          console.log('after dev middleware');
          next();
        },
      ],
    },
  },
};
```

#### before

- Type: `Array`
- Default: `[]`

Provides the ability to execute custom middleware prior to all other middleware internally within the server.

```js
export default {
  tools: {
    devServer: {
      before: [
        async (req, res, next) => {
          console.log('before dev middleware');
          next();
        },
      ],
    },
  },
};
```

#### client

- Type:

```ts
{
    /** The path which the middleware is serving the event stream on */
    path?: string;
    /** Specify a port number to listen for requests on */
    port?: string;
    /** Specify a host to use */
    host?: string;
}
```

- Default:

```js
{
    path: '/webpack-hmr',
    port: '8080',
    host: networkAddress || 'localhost',
}
```

The config of hmr client.

#### devMiddleware

- Type:

```js
{
  writeToDisk: boolean | ((filename: string) => boolean);
}
```

- Default:

```js
{
  writeToDisk: (file: string) => !file.includes('.hot-update.') && !file.endsWith('.map'),
}
```

The config of devMiddleware. Current options is the subset of [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware).

#### headers

- Type: `Record<string, string>`
- Default: `undefined`

Adds headers to all responses.

```js
export default {
  tools: {
    devServer: {
      headers: {
        'X-Custom-Foo': 'bar',
      },
    },
  },
};
```

#### historyApiFallback

- Type: `boolean | ConnectHistoryApiFallbackOptions`
- Default: `false`

The index.html page will likely have to be served in place of any 404 responses. Enable `devServer.historyApiFallback` by setting it to `true`:

```js
export default {
  tools: {
    devServer: {
      historyApiFallback: true,
    },
  },
};
```

For more options and information, see the [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback) documentation.

#### hot

- Type: `boolean`
- Default: `true`

Enable [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) feature.

#### https

- Type: `boolean | { key: string; cert: string }`
- Default: `false`

By default, DevServer will be served over HTTP. It can optionally be served over HTTPS by setting `devServer.https` to `true`, and will disable the HTTP server.

You can also manually pass in the certificate and corresponding private key required by the HTTPS server:

```ts
export default {
  tools: {
    devServer: {
      https: {
        key: fs.readFileSync('certificates/private.pem'),
        cert: fs.readFileSync('certificates/public.pem'),
      },
    },
  },
};
```

#### liveReload

- Type: `boolean`
- Default: `true`

By default, the DevServer will reload/refresh the page when file changes are detected（`devServer.hot` option must be disabled in order for liveReload to take effect）.
Disable `devServer.liveReload` by setting it to `false`.

#### proxy

- Type: `Record<string, string> | Record<string, ProxyDetail>`
- Default: `undefined`

Proxying some URLs.

```js
export default {
  tools: {
    devServer: {
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  },
};
```

A request to /api/users will now proxy the request to http://localhost:3000/api/users.

If you don't want /api to be passed along, we need to rewrite the path:

```js
export default {
  tools: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          pathRewrite: { '^/api': '' },
        },
      },
    },
  },
};
```

The DevServer Proxy makes use of the [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) package. Check out its documentation for more advanced usages.

The full type definition of DevServer Proxy is:

```ts
import type { Options as HttpProxyOptions } from 'http-proxy-middleware';

type ProxyDetail = HttpProxyOptions & {
  bypass?: (
    req: IncomingMessage,
    res: ServerResponse,
    proxyOptions: ProxyOptions,
  ) => string | undefined | null | false;
  context?: string | string[];
};

type ProxyOptions =
  | Record<string, string>
  | Record<string, ProxyDetail>
  | ProxyDetail[]
  | ProxyDetail;
```

In addition to the http-proxy-middleware option, we also support the bypass and context configuration:

- bypass：bypass the proxy based on the return value of a function.
  - Return `null` or `undefined` to continue processing the request with proxy.
  - Return `false` to produce a 404 error for the request.
  - Return a path to serve from, instead of continuing to proxy the request.
- context：If you want to proxy multiple, specific paths to the same target, you can use an array of one or more objects with a context property.

```js
// custom bypass
export default {
  tools: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          bypass: function (req, res, proxyOptions) {
            if (req.headers.accept.indexOf('html') !== -1) {
              console.log('Skipping proxy for browser request.');
              return '/index.html';
            }
          },
        },
      },
    },
  },
};
```

```js
// proxy multiple
export default {
  tools: {
    devServer: {
      proxy: [
        {
          context: ['/auth', '/api'],
          target: 'http://localhost:3000',
        },
      ],
    },
  },
};
```

#### watch

- Type: `boolean`
- Default: `true`

Whether to watch files change in directories such as `mock/`, `server/`, `api/`.
