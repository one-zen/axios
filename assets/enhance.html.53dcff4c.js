import{r as p,o,a as e,b as s,d as c,F as r,c as n,e as a}from"./app.92252524.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const l={},i=n(`<h1 id="\u9519\u8BEF\u4FE1\u606F\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u4FE1\u606F\u589E\u5F3A" aria-hidden="true">#</a> \u9519\u8BEF\u4FE1\u606F\u589E\u5F3A</h1><h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u4E0A\u4E00\u8282\u8BFE\u6211\u4EEC\u5DF2\u7ECF\u6355\u83B7\u4E86\u51E0\u7C7B AJAX \u7684\u9519\u8BEF\uFF0C\u4F46\u662F\u5BF9\u4E8E\u9519\u8BEF\u4FE1\u606F\u63D0\u4F9B\u7684\u975E\u5E38\u6709\u9650\uFF0C\u6211\u4EEC\u5E0C\u671B\u5BF9\u5916\u63D0\u4F9B\u7684\u4FE1\u606F\u4E0D\u4EC5\u4EC5\u5305\u542B\u9519\u8BEF\u6587\u672C\u4FE1\u606F\uFF0C\u8FD8\u5305\u62EC\u4E86\u8BF7\u6C42\u5BF9\u8C61\u914D\u7F6E <code>config</code>\uFF0C\u9519\u8BEF\u4EE3\u7801 <code>code</code>\uFF0C<code>XMLHttpRequest</code> \u5BF9\u8C61\u5B9E\u4F8B <code>request</code>\u4EE5\u53CA\u81EA\u5B9A\u4E49\u54CD\u5E94\u5BF9\u8C61 <code>response</code>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/error/timeout&#39;</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u6837\u5BF9\u4E8E\u5E94\u7528\u65B9\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u5C31\u53EF\u4EE5\u6355\u83B7\u5230\u8FD9\u4E9B\u9519\u8BEF\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u505A\u8FDB\u4E00\u6B65\u7684\u5904\u7406\u3002</p><p>\u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u6765\u5BF9\u9519\u8BEF\u4FE1\u606F\u505A\u589E\u5F3A\u3002</p><h2 id="\u521B\u5EFA-axioserror-\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-axioserror-\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA AxiosError \u7C7B</h2><p>\u6211\u4EEC\u5148\u6765\u5B9A\u4E49 <code>AxiosError</code> \u7C7B\u578B\u63A5\u53E3\uFF0C\u7528\u4E8E\u5916\u90E8\u4F7F\u7528\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> AxiosRequestConfig
  code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  request<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  response<span class="token operator">?</span><span class="token operator">:</span> AxiosResponse
  isAxiosError<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u7740\u6211\u4EEC\u521B\u5EFA <code>error.ts</code> \u6587\u4EF6\uFF0C\u7136\u540E\u5B9E\u73B0 <code>AxiosError</code> \u7C7B\uFF0C\u5B83\u662F\u7EE7\u627F\u4E8E <code>Error</code> \u7C7B\u3002</p><p><code>helpers/error.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AxiosRequestConfig<span class="token punctuation">,</span> AxiosResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AxiosError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  isAxiosError<span class="token operator">:</span> <span class="token builtin">boolean</span>
  config<span class="token operator">:</span> AxiosRequestConfig
  code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  request<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  response<span class="token operator">?</span><span class="token operator">:</span> AxiosResponse

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">,</span>
    code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    request<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    response<span class="token operator">?</span><span class="token operator">:</span> AxiosResponse
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> config
    <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code
    <span class="token keyword">this</span><span class="token punctuation">.</span>request <span class="token operator">=</span> request
    <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> response
    <span class="token keyword">this</span><span class="token punctuation">.</span>isAxiosError <span class="token operator">=</span> <span class="token boolean">true</span>

    Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> AxiosError<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createError</span><span class="token punctuation">(</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">,</span>
  code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  request<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  response<span class="token operator">?</span><span class="token operator">:</span> AxiosResponse
<span class="token punctuation">)</span><span class="token operator">:</span> AxiosError <span class="token punctuation">{</span>
  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AxiosError</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> config<span class="token punctuation">,</span> code<span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">)</span>

  <span class="token keyword">return</span> error
<span class="token punctuation">}</span>
</code></pre></div>`,13),k=n("<code>AxiosError</code> \u7EE7\u627F\u4E8E <code>Error</code> \u7C7B\uFF0C\u6DFB\u52A0\u4E86\u4E00\u4E9B\u81EA\u5DF1\u7684\u5C5E\u6027\uFF1A<code>config</code>\u3001<code>code</code>\u3001<code>request</code>\u3001<code>response</code>\u3001<code>isAxiosError</code> \u7B49\u5C5E\u6027\u3002\u8FD9\u91CC\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 <code>Object.setPrototypeOf(this, AxiosError.prototype)</code>\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u51B3 TypeScript \u7EE7\u627F\u4E00\u4E9B\u5185\u7F6E\u5BF9\u8C61\u7684\u65F6\u5019\u7684\u5751\uFF0C",16),d={href:"https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work",target:"_blank",rel:"noopener noreferrer"},g=a("\u53C2\u8003"),f=a("\u3002"),x=n(`<p>\u53E6\u5916\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\uFF0C\u6211\u4EEC\u5BF9\u5916\u66B4\u9732\u4E86\u4E00\u4E2A <code>createError</code> \u7684\u5DE5\u5382\u65B9\u6CD5\u3002</p><h2 id="createerror-\u65B9\u6CD5\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#createerror-\u65B9\u6CD5\u5E94\u7528" aria-hidden="true">#</a> createError \u65B9\u6CD5\u5E94\u7528</h2><p>\u4FEE\u6539\u5173\u4E8E\u9519\u8BEF\u5BF9\u8C61\u521B\u5EFA\u90E8\u5206\u7684\u903B\u8F91\uFF0C\u5982\u4E0B\uFF1A</p><p><code>xhr.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./helpers/error&#39;</span>

request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span>
    <span class="token string">&#39;Network Error&#39;</span><span class="token punctuation">,</span>
    config<span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    request
  <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

request<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">handleTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Timeout of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>timeout<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ms exceeded</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    config<span class="token punctuation">,</span>
    <span class="token string">&#39;ECONNABORTED&#39;</span><span class="token punctuation">,</span>
    request
  <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handleResponse</span><span class="token punctuation">(</span>response<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Request failed with status code </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      config<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      request<span class="token punctuation">,</span>
      response
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5BFC\u51FA\u7C7B\u578B\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a> \u5BFC\u51FA\u7C7B\u578B\u5B9A\u4E49</h2><p>\u5728 demo \u4E2D\uFF0CTypeScript \u5E76\u4E0D\u80FD\u628A <code>e</code> \u53C2\u6570\u63A8\u65AD\u4E3A <code>AxiosError</code> \u7C7B\u578B\uFF0C\u4E8E\u662F\u6211\u4EEC\u9700\u8981\u624B\u52A8\u6307\u660E\u7C7B\u578B\uFF0C\u4E3A\u4E86\u8BA9\u5916\u90E8\u5E94\u7528\u80FD\u5F15\u5165 <code>AxiosError</code> \u7C7B\u578B\uFF0C\u6211\u4EEC\u4E5F\u9700\u8981\u628A\u5B83\u4EEC\u5BFC\u51FA\u3002</p><p>\u6211\u4EEC\u521B\u5EFA <code>axios.ts</code> \u6587\u4EF6\uFF0C\u628A\u4E4B\u524D\u7684 <code>index.ts</code> \u7684\u4EE3\u7801\u62F7\u8D1D\u8FC7\u53BB\uFF0C\u7136\u540E\u4FEE\u6539 <code>index.ts</code> \u7684\u4EE3\u7801\u3002</p><p><code>index.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;./axios&#39;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axios
</code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5728 demo \u4E2D\u5C31\u53EF\u4EE5\u5F15\u5165 <code>AxiosError</code> \u7C7B\u578B\u4E86\u3002</p><p><code>examples/error/app.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../src/index&#39;</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/error/timeout&#39;</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u5173\u4E8E <code>ts-axios</code> \u7684\u5F02\u5E38\u5904\u7406\u903B\u8F91\u5C31\u544A\u4E00\u6BB5\u843D\u3002\u4E0B\u9762\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u4F1A\u5BF9 <code>ts-axios</code> \u7684\u63A5\u53E3\u505A\u6269\u5C55\uFF0C\u8BA9\u5B83\u63D0\u4F9B\u66F4\u591A\u597D\u7528\u548C\u65B9\u4FBF\u7684 API\u3002</p>`,14);function y(h,m){const t=p("ExternalLinkIcon");return o(),e(r,null,[i,s("p",null,[k,s("a",d,[g,c(t)]),f]),x],64)}var E=u(l,[["render",y]]);export{E as default};
