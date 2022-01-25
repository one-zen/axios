import{r as o,o as e,a as c,b as n,d as t,F as u,e as s,c as p}from"./app.92252524.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=n("h1",{id:"\u8BF7\u6C42\u6A21\u5757\u5355\u5143\u6D4B\u8BD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BF7\u6C42\u6A21\u5757\u5355\u5143\u6D4B\u8BD5","aria-hidden":"true"},"#"),s(" \u8BF7\u6C42\u6A21\u5757\u5355\u5143\u6D4B\u8BD5")],-1),r=n("p",null,"\u8BF7\u6C42\u6A21\u5757\u662F axios \u6700\u57FA\u7840\u7684\u6A21\u5757\uFF0C\u901A\u8FC7\u4E00\u4E2A axios \u65B9\u6CD5\u53D1\u9001 Ajax \u8BF7\u6C42\u3002",-1),d=n("h2",{id:"jasmine-ajax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jasmine-ajax","aria-hidden":"true"},"#"),s(" jasmine-ajax")],-1),f={href:"https://jasmine.github.io/pages/getting_started.html",target:"_blank",rel:"noopener noreferrer"},g=s("Jasmine"),h=s(" \u662F\u4E00\u4E2A BDD(\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1)\u7684\u6D4B\u8BD5\u6846\u67B6\uFF0C\u5B83\u6709\u5F88\u591A\u6210\u719F\u7684\u63D2\u4EF6\uFF0C\u6BD4\u5982\u6211\u4EEC\u8981\u7528\u5230\u7684 "),x={href:"https://github.com/jasmine/jasmine-ajax",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"jasmine-ajax",-1),j=s("\uFF0C\u5B83\u4F1A\u4E3A\u6211\u4EEC\u53D1\u51FA\u7684 Ajax \u8BF7\u6C42\u6839\u636E\u89C4\u8303\u5B9A\u4E49\u4E00\u7EC4\u5047\u7684\u54CD\u5E94\uFF0C\u5E76\u8DDF\u8E2A\u6211\u4EEC\u53D1\u51FA\u7684Ajax\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u65B9\u4FBF\u7684\u4E3A\u7ED3\u679C\u505A\u65AD\u8A00\u3002"),y=p(`<p>\u5176\u5B9E Jest \u4E5F\u53EF\u4EE5\u53BB\u5199\u63D2\u4EF6\uFF0C\u4F46\u5E76\u6CA1\u6709\u73B0\u6210\u7684 Ajax \u76F8\u5173\u7684 Jest \u63D2\u4EF6\uFF0C\u4F46\u662F Jest \u6D4B\u8BD5\u4E2D\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 Jasmine \u76F8\u5173\u7684\u63D2\u4EF6\uFF0C\u53EA\u9700\u8981\u505A\u4E00\u4E9B\u5C0F\u5C0F\u7684\u914D\u7F6E\u5373\u53EF\u3002</p><p>\u5F53\u7136\uFF0C\u672A\u6765\u6211\u4E5F\u4F1A\u8003\u8651\u53BB\u7F16\u5199\u4E00\u4E2A Ajax \u76F8\u5173\u7684 Jest \u63D2\u4EF6\uFF0C\u76EE\u524D\u6211\u4EEC\u4ECD\u7136\u4F7F\u7528 <code>jasmine-ajax</code> \u53BB\u914D\u5408\u6211\u4EEC\u7F16\u5199\u6D4B\u8BD5\u3002</p><p><code>jasmine-ajax</code> \u4F9D\u8D56 <code>jasmine-core</code>\uFF0C\u56E0\u6B64\u9996\u5148\u6211\u4EEC\u8981\u5B89\u88C5\u51E0\u4E2A\u4F9D\u8D56\u5305\uFF0C<code>jasmine-ajax</code>\u3001<code>jasmine-core</code> \u548C <code>@types/jasmine-ajax</code>\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u53BB\u4FEE\u6539 <code>test/boot.ts</code> \u6587\u4EF6\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u8DD1\u5177\u4F53\u6D4B\u8BD5\u4EE3\u7801\u4E4B\u524D\u4F1A\u5148\u8FD0\u884C\u8BE5\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u91CC\u53BB\u521D\u59CB\u5316 <code>jasmine-ajax</code>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> JasmineCore <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;jasmine-core&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// @ts-ignore</span>
global<span class="token punctuation">.</span><span class="token function-variable function">getJasmineRequireObj</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> JasmineCore
<span class="token punctuation">}</span>
<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;jasmine-ajax&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,5),_=s("\u8FD9\u91CC\u4E3A\u4E86\u8BA9 "),q=n("code",null,"jasmine-ajax",-1),w=s(" \u63D2\u4EF6\u8FD0\u884C\u6210\u529F\uFF0C\u6211\u4EEC\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u5168\u5C40\u7684 "),A=n("code",null,"getJasmineRequireObj",-1),b=s(" \u65B9\u6CD5\uFF0C\u53C2\u8003 "),v={href:"https://github.com/jasmine/jasmine-ajax/issues/178",target:"_blank",rel:"noopener noreferrer"},R=s("issue"),B=s("\u3002"),E=p(`<p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u5F00\u59CB\u7F16\u5199\u8BF7\u6C42\u6A21\u5757\u7684\u5355\u5143\u6D4B\u8BD5\u3002</p><h2 id="\u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199" aria-hidden="true">#</a> \u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199</h2><p><code>test/requests.spec.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosResponse<span class="token punctuation">,</span> AxiosError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAjaxRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./helper&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;requests&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    jasmine<span class="token punctuation">.</span>Ajax<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    jasmine<span class="token punctuation">.</span>Ajax<span class="token punctuation">.</span><span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should treat single string arg as url&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should treat method value as lowercase string&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should reject on network errors&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resolveSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> rejectSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> e
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    jasmine<span class="token punctuation">.</span>Ajax<span class="token punctuation">.</span><span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span>reason<span class="token operator">:</span> AxiosResponse <span class="token operator">|</span> AxiosError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>reason <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reason <span class="token keyword">as</span> AxiosError<span class="token punctuation">)</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Network Error&#39;</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>reason<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>expect<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span>XMLHttpRequest<span class="token punctuation">)</span><span class="token punctuation">)</span>

      jasmine<span class="token punctuation">.</span>Ajax<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should reject when request timeout&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> err<span class="token operator">:</span> AxiosError

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      timeout<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      err <span class="token operator">=</span> error
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-ignore</span>
      request<span class="token punctuation">.</span>eventBus<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Timeout of 2000 ms exceeded&#39;</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should reject when validateStatus returns false&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resolveSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> rejectSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> e
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">validateStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> status <span class="token operator">!==</span> <span class="token number">500</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">500</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span>reason<span class="token operator">:</span> AxiosError <span class="token operator">|</span> AxiosResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>reason <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reason <span class="token keyword">as</span> AxiosError<span class="token punctuation">)</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Request failed with status code 500&#39;</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reason <span class="token keyword">as</span> AxiosError<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token operator">!</span><span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>

      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should resolve when validateStatus returns true&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resolveSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> rejectSpy <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> e
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">validateStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> status <span class="token operator">===</span> <span class="token number">500</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">500</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse <span class="token operator">|</span> AxiosError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>resolveSpy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>rejectSpy<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>config<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">)</span>

      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should return JSON when resolved&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response<span class="token operator">:</span> AxiosResponse

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/api/account/signup&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        Accept<span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      response <span class="token operator">=</span> res
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        statusText<span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>
        responseText<span class="token operator">:</span> <span class="token string">&#39;{&quot;a&quot;: 1}&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should return JSON when rejecting&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response<span class="token operator">:</span> AxiosResponse

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;/api/account/signup&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        Accept<span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      response <span class="token operator">=</span> error<span class="token punctuation">.</span>response
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        statusText<span class="token operator">:</span> <span class="token string">&#39;Bad Request&#39;</span><span class="token punctuation">,</span>
        responseText<span class="token operator">:</span> <span class="token string">&#39;{&quot;error&quot;: &quot;BAD USERNAME&quot;, &quot;code&quot;: 1}&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;BAD USERNAME&#39;</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should supply correct response&#39;</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response<span class="token operator">:</span> AxiosResponse

    axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      response <span class="token operator">=</span> res
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        statusText<span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>
        responseText<span class="token operator">:</span> <span class="token string">&#39;{&quot;foo&quot;: &quot;bar&quot;}&#39;</span><span class="token punctuation">,</span>
        responseHeaders<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
        <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should allow overriding Content-Type header case-insensitive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response<span class="token operator">:</span> AxiosResponse

    axios
      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
        <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> prop<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        response <span class="token operator">=</span> res
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">getAjaxRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>request <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>requestHeaders<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u8981\u6CE8\u610F\u7684\u4E00\u4E9B\u70B9\uFF0C\u5728\u8FD9\u91CC\u5217\u51FA\uFF1A</p><ul><li>beforeEach &amp; afterEach</li></ul>`,6),S={href:"https://jestjs.io/docs/en/api#beforeeachfn-timeout",target:"_blank",rel:"noopener noreferrer"},T=s("beforeEach"),C=s("\u8868\u793A\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u8FD0\u884C\u524D\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u6267\u884C "),J=n("code",null,"jasmine.Ajax.install()",-1),N=s(" \u5B89\u88C5 "),H=n("code",null,"jasmine.Ajax",-1),O=s("\u3002"),W={href:"https://jestjs.io/docs/en/api#aftereachfn-timeout",target:"_blank",rel:"noopener noreferrer"},D=s("afterEach"),P=s("\u8868\u793A\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u8FD0\u884C\u540E\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u6267\u884C "),L=n("code",null,"jasmine.Ajax.uninstall()",-1),V=s(" \u5378\u8F7D "),I=n("code",null,"jasmine.Ajax",-1),K=s("\u3002"),M=p("<ul><li><code>getAjaxRequest</code></li></ul><p><code>getAjaxRequest</code> \u662F\u6211\u4EEC\u5728 <code>test/helper.ts</code> \u5B9A\u4E49\u7684\u4E00\u4E2A\u8F85\u52A9\u65B9\u6CD5\uFF0C\u901A\u8FC7 <code>jasmine.Ajax.requests.mostRecent()</code> \u62FF\u5230\u6700\u8FD1\u4E00\u6B21\u8BF7\u6C42\u7684 <code>request</code> \u5BF9\u8C61\uFF0C\u8FD9\u4E2A <code>request</code> \u5BF9\u8C61\u662F <code>jasmine-ajax</code> \u5E93\u4F2A\u9020\u7684 <code>xhr</code> \u5BF9\u8C61\uFF0C\u5B83\u6A21\u62DF\u4E86 <code>xhr</code> \u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E00\u4E9B <code>api</code> \u8BA9\u6211\u4EEC\u4F7F\u7528\uFF0C\u6BD4\u5982 <code>request.respondWith</code> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u3002</p><ul><li>\u5F02\u6B65\u6D4B\u8BD5</li></ul>",3),F=s("\u6CE8\u610F\u5230\u6211\u4EEC\u8FD9\u91CC\u5927\u90E8\u5206\u7684\u6D4B\u8BD5\u7528\u4F8B\u4E0D\u518D\u662F\u540C\u6B65\u7684\u4EE3\u7801\u4E86\uFF0C\u51E0\u4E4E\u90FD\u662F\u4E00\u4E9B\u5F02\u6B65\u903B\u8F91\uFF0CJest \u975E\u5E38\u597D\u5730\u652F\u6301"),U={href:"https://jestjs.io/docs/en/asynchronous",target:"_blank",rel:"noopener noreferrer"},G=s("\u5F02\u6B65\u6D4B\u8BD5\u4EE3\u7801"),X=s("\u3002\u901A\u5E38\u6709 2 \u79CD\u89E3\u51B3\u65B9\u6848\u3002"),z=p(`<p>\u7B2C\u4E00\u79CD\u662F\u5229\u7528 <code>done</code> \u53C2\u6570\uFF0C\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u51FD\u6570\u6709\u4E00\u4E2A <code>done</code> \u53C2\u6570\uFF0C\u4E00\u65E6\u6211\u4EEC\u4F7F\u7528\u4E86\u8BE5\u53C2\u6570\uFF0C\u53EA\u6709\u5F53 <code>done</code> \u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\u8868\u793A\u8FD9\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u7ED3\u675F\u3002</p><p>\u7B2C\u4E8C\u79CD\u662F\u6211\u4EEC\u7684\u6D4B\u8BD5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u4E00\u65E6\u8FD9\u4E2A Promise \u5BF9\u8C61 <code>resolve</code> \u4E86\uFF0C\u8868\u793A\u8FD9\u4E2A\u6D4B\u8BD5\u7ED3\u675F\u3002</p><ul><li>expect.any(constructor)</li></ul><p>\u5B83\u8868\u793A\u5339\u914D\u4EFB\u610F\u7531 <code>constructor</code> \u521B\u5EFA\u7684\u5BF9\u8C61\u5B9E\u4F8B\u3002</p><ul><li><code>request.eventBus.trigger</code></li></ul><p>\u7531\u4E8E <code>request.responseTimeout</code> \u65B9\u6CD5\u5185\u90E8\u4F9D\u8D56\u4E86 <code>jasmine.clock</code> \u65B9\u6CD5\u4F1A\u5BFC\u81F4\u8FD0\u884C\u5931\u8D25\uFF0C\u8FD9\u91CC\u6211\u76F4\u63A5\u7528\u4E86 <code>request.eventBus.trigger(&#39;timeout&#39;)</code> \u65B9\u6CD5\u89E6\u53D1\u4E86 <code>timeout</code> \u4E8B\u4EF6\u3002\u56E0\u4E3A\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u5728\u63A5\u53E3\u5B9A\u4E49\u4E2D\uFF0C\u6240\u4EE5\u9700\u8981\u52A0 <code>// @ts-ignore</code>\u3002</p><p>\u53E6\u5916\uFF0C\u6211\u4EEC\u5728\u6D4B\u8BD5\u4E2D\u53D1\u73B0 2 \u4E2A case \u6CA1\u6709\u901A\u8FC7\u3002</p><p>\u7B2C\u4E00\u4E2A\u662F <code>should treat method value as lowercase string</code>\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u662F\u6211\u4EEC\u53D1\u9001\u8BF7\u6C42\u7684 <code> method</code> \u9700\u8981\u8F6C\u6362\u6210\u5C0F\u5199\u5B57\u7B26\u4E32\uFF0C\u8FD9\u4E48\u505A\u7684\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u4E4B\u540E <code>flattenHeaders</code> \u80FD\u6B63\u5E38\u5904\u7406\u8FD9\u4E9B <code>method</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4FEE\u6539\u6E90\u7801\u903B\u8F91\u3002</p><p><code>core/Axios.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>  <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> url <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      config<span class="token punctuation">.</span>url <span class="token operator">=</span> url
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      config <span class="token operator">=</span> url
    <span class="token punctuation">}</span>

    config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u5408\u5E76\u914D\u7F6E\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u628A <code>config.method</code> \u8F6C\u6210\u5C0F\u5199\u5B57\u7B26\u4E32\u3002</p><p>\u53E6\u4E00\u4E2A\u662F <code>should return JSON when rejecting</code>\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u662F\u5F53\u6211\u4EEC\u53D1\u9001\u8BF7\u6C42\u5931\u8D25\u540E\uFF0C\u4E5F\u80FD\u628A\u54CD\u5E94\u6570\u636E\u8F6C\u6362\u6210 JSON \u683C\u5F0F\uFF0C\u6240\u4EE5\u4E5F\u9700\u8981\u4FEE\u6539\u6E90\u7801\u903B\u8F91\u3002</p><p><code>core/dispatchRequest.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise <span class="token punctuation">{</span>
  <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token function">processConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">xhr</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token function">transformResponseData</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9664\u4E86\u5BF9\u6B63\u5E38\u60C5\u51B5\u7684\u54CD\u5E94\u6570\u636E\u505A\u8F6C\u6362\uFF0C\u6211\u4EEC\u4E5F\u9700\u8981\u5BF9\u5F02\u5E38\u60C5\u51B5\u7684\u54CD\u5E94\u6570\u636E\u505A\u8F6C\u6362\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u5B8C\u6210\u4E86 <code>ts-axios</code> \u5E93\u5BF9\u8BF7\u6C42\u6A21\u5757\u7684\u6D4B\u8BD5\uFF0C\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u4F1A\u4ECE\u4E1A\u52A1\u7684\u89D2\u5EA6\u6765\u6D4B\u8BD5 <code>headers</code> \u6A21\u5757\u3002</p>`,16);function Q(Y,Z){const a=o("ExternalLinkIcon");return e(),c(u,null,[k,r,d,n("p",null,[n("a",f,[g,t(a)]),h,n("a",x,[m,t(a)]),j]),y,n("p",null,[_,q,w,A,b,n("a",v,[R,t(a)]),B]),E,n("p",null,[n("a",S,[T,t(a)]),C,J,N,H,O]),n("p",null,[n("a",W,[D,t(a)]),P,L,V,I,K]),M,n("p",null,[F,n("a",U,[G,t(a)]),X]),z],64)}var sn=l(i,[["render",Q]]);export{sn as default};
