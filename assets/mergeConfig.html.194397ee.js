import{c as n}from"./app.92252524.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="mergeconfig-\u6A21\u5757\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#mergeconfig-\u6A21\u5757\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> mergeConfig \u6A21\u5757\u5355\u5143\u6D4B\u8BD5</h1><p>\u5408\u5E76\u914D\u7F6E\u662F <code>ts-axios</code> \u6838\u5FC3\u6D41\u7A0B\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u73AF\u8282\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u5B83\u7684\u5404\u79CD\u60C5\u51B5\u53BB\u7F16\u5199\u6D4B\u8BD5\u3002</p><h2 id="\u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199" aria-hidden="true">#</a> \u6D4B\u8BD5\u4EE3\u7801\u7F16\u5199</h2><p><code>test/mergeConfig.spec.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> mergeConfig <span class="token keyword">from</span> <span class="token string">&#39;../src/core/mergeConfig&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;mergeConfig&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> defaults <span class="token operator">=</span> axios<span class="token punctuation">.</span>defaults

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should accept undefined for second argument&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should accept an object for second argument&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should not leave references&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should allow setting request options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;__sample url__&#39;</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token string">&#39;__sample params__&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should not inherit request options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localDefaults <span class="token operator">=</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;__sample url__&#39;</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token string">&#39;__sample params__&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>localDefaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should return default headers if pass config2 with undefined&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token string">&#39;x-mock-header&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">undefined</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      headers<span class="token operator">:</span> <span class="token string">&#39;x-mock-header&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should merge auth, headers with defaults&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should overwrite auth, headers with a non-object value&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token punctuation">{</span>
            common<span class="token operator">:</span> <span class="token punctuation">{</span>
              Accept<span class="token operator">:</span> <span class="token string">&#39;application/json, text/plain, */*&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      headers<span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should allow setting other options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      timeout<span class="token operator">:</span> <span class="token number">123</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD0\u884C\u6D4B\u8BD5\u540E\u6211\u4EEC\u53D1\u73B0 <code>mergeConfig.ts</code> \u6587\u4EF6\u7684\u5206\u652F\u8986\u76D6\u7387\u5E76\u672A\u8FBE\u5230 100%\uFF0C\u63D0\u793A\u662F 23 \u884C\uFF0C\u6253\u5F00\u6587\u4EF6\u540E\u53D1\u73B0\u6700\u540E\u4E00\u4E2A <code>else</code> \u903B\u8F91\u5E76\u672A\u8D70\u5230\uFF0C\u4E5F\u5C31\u662F <code>val1</code> \u4E3A <code>undefined</code> \u7684\u60C5\u51B5\u3002\u4F46\u5B9E\u9645\u4E0A\u5373\u4F7F <code>val1</code> \u4E3A <code>undefined</code>\uFF0C\u6211\u4EEC\u4E5F\u662F\u8FD4\u56DE <code>undefined</code>\uFF0C\u4E5F\u5C31\u662F\u8FD4\u56DE <code>val1</code>\uFF0C\u6240\u4EE5\u8FD9\u5757\u4EE3\u7801\u7684\u903B\u8F91\u53EF\u4EE5\u4F18\u5316\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deepMergeStrat</span><span class="token punctuation">(</span>val1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> val2<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val2 <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2 \u4E2A\u5206\u652F\u53EF\u4EE5\u5408\u5E76\u5230\u4E00\u4E2A\u5206\u652F\uFF0C\u8FD9\u6837\u6211\u4EEC\u518D\u6B21\u8DD1\u6D4B\u8BD5\uFF0C\u5206\u652F\u8986\u76D6\u7387\u5C31\u53EF\u4EE5\u8FBE\u5230 100% \u4E86\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u5B8C\u6210\u4E86 <code>ts-axios</code> \u5E93\u5BF9 <code>mergeConfig</code> \u6A21\u5757\u7684\u6D4B\u8BD5\uFF0C\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u6765\u6D4B\u8BD5\u53D6\u6D88\u6A21\u5757\u76F8\u5173\u4EE3\u7801\u3002</p>`,9);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
