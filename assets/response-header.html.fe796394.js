import{c as n}from"./app.92252524.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5904\u7406\u54CD\u5E94-header" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u54CD\u5E94-header" aria-hidden="true">#</a> \u5904\u7406\u54CD\u5E94 header</h1><h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u6211\u4EEC\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>getAllResponseHeaders</code> \u65B9\u6CD5\u83B7\u53D6\u5230\u7684\u503C\u662F\u5982\u4E0B\u4E00\u6BB5\u5B57\u7B26\u4E32\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>date: Fri, 05 Apr 2019 12:40:49 GMT
etag: W/&quot;d-Ssxx4FRxEutDLwo2+xkkxKc4y0k&quot;
connection: keep-alive
x-powered-by: Express
content-length: 13
content-type: application/json; charset=utf-8
</code></pre></div><p>\u6BCF\u4E00\u884C\u90FD\u662F\u4EE5\u56DE\u8F66\u7B26\u548C\u6362\u884C\u7B26 <code>\\r\\n</code> \u7ED3\u675F\uFF0C\u5B83\u4EEC\u662F\u6BCF\u4E2A <code>header</code> \u5C5E\u6027\u7684\u5206\u9694\u7B26\u3002\u5BF9\u4E8E\u4E0A\u9762\u8FD9\u4E32\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u5E0C\u671B\u6700\u7EC8\u89E3\u6790\u6210\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  date<span class="token operator">:</span> &#39;Fri<span class="token punctuation">,</span> <span class="token number">05</span> Apr <span class="token number">2019</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">49</span> GMT&#39;
  etag<span class="token operator">:</span> &#39;W/<span class="token string">&quot;d-Ssxx4FRxEutDLwo2+xkkxKc4y0k&quot;</span>&#39;<span class="token punctuation">,</span>
  connection<span class="token operator">:</span> &#39;keep-alive&#39;<span class="token punctuation">,</span>
  &#39;x-powered-by&#39;<span class="token operator">:</span> &#39;Express&#39;<span class="token punctuation">,</span>
  &#39;content-length&#39;<span class="token operator">:</span> &#39;<span class="token number">13</span>&#39;
  &#39;content-type&#39;<span class="token operator">:</span> &#39;application/json; charset=utf<span class="token number">-8</span>&#39;
<span class="token punctuation">}</span>
</code></pre></div><h2 id="parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" aria-hidden="true">#</a> parseHeaders \u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528</h2><p>\u6839\u636E\u9700\u6C42\u5206\u6790\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A <code>parseHeaders</code> \u5DE5\u5177\u51FD\u6570\u3002</p><p><code>helpers/headers.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parseHeaders</span><span class="token punctuation">(</span>headers<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parsed <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> parsed
  <span class="token punctuation">}</span>

  headers<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\\r\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>line <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span> <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
    key <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parsed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> parsed
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u51FD\u6570\uFF1A</p><p><code>xhr.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> responseHeaders <span class="token operator">=</span> <span class="token function">parseHeaders</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u63A5\u7740\u6211\u4EEC\u518D\u53BB\u770B\u521A\u624D\u7684 demo\uFF0C\u53D1\u73B0\u6211\u4EEC\u5DF2\u7ECF\u628A\u54CD\u5E94\u7684 <code>headers</code> \u5B57\u6BB5\u4ECE\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u5BF9\u8C61\u7ED3\u6784\u4E86\u3002\u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5728\u89E3\u51B3\u4E4B\u524D\u9057\u7559\u7684\u7B2C\u4E8C\u4E2A\u95EE\u9898\uFF1A\u5BF9\u54CD\u5E94 <code>data</code> \u5B57\u6BB5\u7684\u5904\u7406\u3002</p>`,14);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
