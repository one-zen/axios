import{c as n}from"./app.92252524.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5904\u7406\u8BF7\u6C42-url-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u8BF7\u6C42-url-\u53C2\u6570" aria-hidden="true">#</a> \u5904\u7406\u8BF7\u6C42 url \u53C2\u6570</h1><h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h2><p>\u8FD8\u8BB0\u5F97\u6211\u4EEC\u4E0A\u8282\u8BFE\u9057\u7559\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u518D\u6765\u770B\u8FD9\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u5E0C\u671B\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?a=1&amp;b=2</code>\uFF0C\u8FD9\u6837\u670D\u52A1\u7AEF\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u7684 url \u89E3\u6790\u5230\u6211\u4EEC\u4F20\u6765\u7684\u53C2\u6570\u6570\u636E\u4E86\u3002\u5B9E\u9645\u4E0A\u5C31\u662F\u628A <code>params</code> \u5BF9\u8C61\u7684 key \u548C value \u62FC\u63A5\u5230 <code>url</code> \u4E0A\u3002</p><p>\u518D\u6765\u770B\u51E0\u4E2A\u66F4\u590D\u6742\u7684\u4F8B\u5B50\u3002</p><h3 id="\u53C2\u6570\u503C\u4E3A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u503C\u4E3A\u6570\u7EC4" aria-hidden="true">#</a> \u53C2\u6570\u503C\u4E3A\u6570\u7EC4</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo[]=bar&amp;foo[]=baz&#39;</code>\u3002</p><h3 id="\u53C2\u6570\u503C\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u503C\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> \u53C2\u6570\u503C\u4E3A\u5BF9\u8C61</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token punctuation">{</span>
      bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo=%7B%22bar%22:%22baz%22%7D</code>\uFF0C<code>foo</code> \u540E\u9762\u62FC\u63A5\u7684\u662F <code>{&quot;bar&quot;:&quot;baz&quot;}</code> encode \u540E\u7684\u7ED3\u679C\u3002</p><h3 id="\u53C2\u6570\u503C\u4E3A-date-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u503C\u4E3A-date-\u7C7B\u578B" aria-hidden="true">#</a> \u53C2\u6570\u503C\u4E3A Date \u7C7B\u578B</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    date
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?date=2019-04-01T05:55:39.030Z</code>\uFF0C<code>date</code> \u540E\u9762\u62FC\u63A5\u7684\u662F <code>date.toISOString()</code> \u7684\u7ED3\u679C\u3002</p><h3 id="\u7279\u6B8A\u5B57\u7B26\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u5B57\u7B26\u652F\u6301" aria-hidden="true">#</a> \u7279\u6B8A\u5B57\u7B26\u652F\u6301</h3><p>\u5BF9\u4E8E\u5B57\u7B26 <code>@</code>\u3001<code>:</code>\u3001<code>$</code>\u3001<code>,</code>\u3001<code></code>\u3001<code>[</code>\u3001<code>]</code>\uFF0C\u6211\u4EEC\u662F\u5141\u8BB8\u51FA\u73B0\u5728 <code>url</code> \u4E2D\u7684\uFF0C\u4E0D\u5E0C\u671B\u88AB encode\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;@:$, &#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo=@:$+</code>\uFF0C\u6CE8\u610F\uFF0C\u6211\u4EEC\u4F1A\u628A\u7A7A\u683C <code></code> \u8F6C\u6362\u6210 <code>+</code>\u3002</p><h3 id="\u7A7A\u503C\u5FFD\u7565" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C\u5FFD\u7565" aria-hidden="true">#</a> \u7A7A\u503C\u5FFD\u7565</h3><p>\u5BF9\u4E8E\u503C\u4E3A <code>null</code> \u6216\u8005 <code>undefined</code> \u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u662F\u4E0D\u4F1A\u6DFB\u52A0\u5230 url \u53C2\u6570\u4E2D\u7684\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    baz<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo=bar</code>\u3002</p><h3 id="\u4E22\u5F03-url-\u4E2D\u7684\u54C8\u5E0C\u6807\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4E22\u5F03-url-\u4E2D\u7684\u54C8\u5E0C\u6807\u8BB0" aria-hidden="true">#</a> \u4E22\u5F03 url \u4E2D\u7684\u54C8\u5E0C\u6807\u8BB0</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get#hash&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo=bar</code></p><h3 id="\u4FDD\u7559-url-\u4E2D\u5DF2\u5B58\u5728\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u7559-url-\u4E2D\u5DF2\u5B58\u5728\u7684\u53C2\u6570" aria-hidden="true">#</a> \u4FDD\u7559 url \u4E2D\u5DF2\u5B58\u5728\u7684\u53C2\u6570</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get?foo=bar&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u8BF7\u6C42\u7684 <code>url</code> \u662F <code>/base/get?foo=bar&amp;bar=baz</code></p><h2 id="buildurl-\u51FD\u6570\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#buildurl-\u51FD\u6570\u5B9E\u73B0" aria-hidden="true">#</a> buildURL \u51FD\u6570\u5B9E\u73B0</h2><p>\u6839\u636E\u6211\u4EEC\u4E4B\u524D\u7684\u9700\u6C42\u5206\u6790\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\uFF0C\u628A <code>params</code> \u62FC\u63A5\u5230 <code>url</code> \u4E0A\u3002\u6211\u4EEC\u5E0C\u671B\u628A\u9879\u76EE\u4E2D\u7684\u4E00\u4E9B\u5DE5\u5177\u51FD\u6570\u3001\u8F85\u52A9\u65B9\u6CD5\u72EC\u7ACB\u7BA1\u7406\uFF0C\u4E8E\u662F\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A <code>helpers</code> \u76EE\u5F55\uFF0C\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u521B\u5EFA <code>url.ts</code> \u6587\u4EF6\uFF0C\u672A\u6765\u4F1A\u628A\u5904\u7406 <code>url</code> \u76F8\u5173\u7684\u5DE5\u5177\u51FD\u6570\u90FD\u653E\u5728\u8BE5\u6587\u4EF6\u4E2D\u3002</p><p><code>helpers/url.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isDate<span class="token punctuation">,</span> isObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util&#39;</span>

<span class="token keyword">function</span> <span class="token function">encode</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%40</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%3A</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%24</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%2C</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%20</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%5B</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%5D</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bulidURL</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> url
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> parts<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> params<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> values<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      values <span class="token operator">=</span> val
      key <span class="token operator">+=</span> <span class="token string">&#39;[]&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      values <span class="token operator">=</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDate</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      parts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> serializedParams <span class="token operator">=</span> parts<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>serializedParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> markIndex <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markIndex <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      url <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> markIndex<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    url <span class="token operator">+=</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> serializedParams
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> url
<span class="token punctuation">}</span>
</code></pre></div><p><code>helpers/util.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> toString <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isDate</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Date <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Date]&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Object <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5B9E\u73B0-url-\u53C2\u6570\u5904\u7406\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-url-\u53C2\u6570\u5904\u7406\u903B\u8F91" aria-hidden="true">#</a> \u5B9E\u73B0 url \u53C2\u6570\u5904\u7406\u903B\u8F91</h2><p>\u6211\u4EEC\u5DF2\u7ECF\u5B9E\u73B0\u4E86 <code>buildURL</code> \u51FD\u6570\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5229\u7528\u5B83\u5B9E\u73B0 <code>url</code> \u53C2\u6570\u7684\u5904\u7406\u903B\u8F91\u3002</p><p>\u5728 <code>index.ts</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">axios</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">processConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">processConfig</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token function">transformUrl</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">transformUrl</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> params <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">return</span> <span class="token function">bulidURL</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u6267\u884C <code>xhr</code> \u51FD\u6570\u524D\uFF0C\u6211\u4EEC\u5148\u6267\u884C <code>processConfig</code> \u65B9\u6CD5\uFF0C\u5BF9 <code>config</code> \u4E2D\u7684\u6570\u636E\u505A\u5904\u7406\uFF0C\u9664\u4E86\u5BF9 <code>url</code> \u548C <code>params</code> \u5904\u7406\u4E4B\u5916\uFF0C\u672A\u6765\u8FD8\u4F1A\u5904\u7406\u5176\u5B83\u5C5E\u6027\u3002</p><p>\u5728 <code>processConfig</code> \u51FD\u6570\u5185\u90E8\uFF0C\u6211\u4EEC\u901A\u8FC7\u6267\u884C <code>transformUrl</code> \u51FD\u6570\u4FEE\u6539\u4E86 <code>config.url</code>\uFF0C\u8BE5\u51FD\u6570\u5185\u90E8\u8C03\u7528\u4E86 <code>buildURL</code>\u3002</p><p>\u90A3\u4E48\u81F3\u6B64\uFF0C\u6211\u4EEC\u5BF9 <code>url</code> \u53C2\u6570\u5904\u7406\u903B\u8F91\u5C31\u5B9E\u73B0\u5B8C\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u5F00\u59CB\u7F16\u5199 demo \u4E86\u3002</p><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><p>\u5728 <code>examples</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>base</code> \u76EE\u5F55\uFF0C\u5728 <code>base</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>index.html</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Base example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/__build__/base.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u63A5\u7740\u521B\u5EFA <code>app.ts</code> \u4F5C\u4E3A\u5165\u53E3\u6587\u4EF6\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;../../src/index&#39;</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token punctuation">{</span>
      bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    date
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;@:$, &#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    baz<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get#hash&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  url<span class="token operator">:</span> <span class="token string">&#39;/base/get?foo=bar&#39;</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    bar<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u63A5\u7740\u5728 <code>server.js</code> \u6DFB\u52A0\u65B0\u7684\u63A5\u53E3\u8DEF\u7531\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/base/get&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\u5728\u547D\u4EE4\u884C\u8FD0\u884C <code>npm run dev</code>\uFF0C\u63A5\u7740\u6253\u5F00 chrome \u6D4F\u89C8\u5668\uFF0C\u8BBF\u95EE <code>http://localhost:8080/</code> \u5373\u53EF\u8BBF\u95EE\u6211\u4EEC\u7684 demo \u4E86\uFF0C\u6211\u4EEC\u70B9\u5230 <code>Base</code> \u76EE\u5F55\u4E0B\uFF0C\u901A\u8FC7\u5F00\u53D1\u8005\u5DE5\u5177\u7684 network \u90E8\u5206\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6210\u529F\u53D1\u9001\u7684\u591A\u6761\u8BF7\u6C42\uFF0C\u5E76\u53EF\u4EE5\u89C2\u5BDF\u5B83\u4EEC\u6700\u7EC8\u8BF7\u6C42\u7684 url\uFF0C\u5DF2\u7ECF\u5982\u671F\u6DFB\u52A0\u4E86\u8BF7\u6C42\u53C2\u6570\u3002</p><p>\u90A3\u4E48\u81F3\u6B64\u6211\u4EEC\u7684\u8BF7\u6C42 <code>url</code> \u53C2\u6570\u5904\u7406\u7F16\u5199\u5B8C\u4E86\uFF0C\u4E0B\u4E00\u5C0F\u8282\u6211\u4EEC\u4F1A\u5BF9 <code>request body</code> \u6570\u636E\u505A\u5904\u7406\u3002</p>`,51);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
