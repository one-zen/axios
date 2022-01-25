import{r as t,o as p,a as o,b as n,d as e,F as c,e as s,c as u}from"./app.92252524.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=n("h1",{id:"http-\u6388\u6743",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http-\u6388\u6743","aria-hidden":"true"},"#"),s(" HTTP \u6388\u6743")],-1),k=n("h2",{id:"\u9700\u6C42\u5206\u6790",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9700\u6C42\u5206\u6790","aria-hidden":"true"},"#"),s(" \u9700\u6C42\u5206\u6790")],-1),d=s("HTTP \u534F\u8BAE\u4E2D\u7684 "),h={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",target:"_blank",rel:"noopener noreferrer"},g=s("Authorization"),m=s(" \u8BF7\u6C42 header \u4F1A\u5305\u542B\u670D\u52A1\u5668\u7528\u4E8E\u9A8C\u8BC1\u7528\u6237\u4EE3\u7406\u8EAB\u4EFD\u7684\u51ED\u8BC1\uFF0C\u901A\u5E38\u4F1A\u5728\u670D\u52A1\u5668\u8FD4\u56DE 401 Unauthorized \u72B6\u6001\u7801\u4EE5\u53CA WWW-Authenticate \u6D88\u606F\u5934\u4E4B\u540E\u5728\u540E\u7EED\u8BF7\u6C42\u4E2D\u53D1\u9001\u6B64\u6D88\u606F\u5934\u3002"),f=u(`<p>axios \u5E93\u4E5F\u5141\u8BB8\u4F60\u5728\u8BF7\u6C42\u914D\u7F6E\u4E2D\u914D\u7F6E <code>auth</code> \u5C5E\u6027\uFF0C<code>auth</code> \u662F\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u5305\u542B <code>username</code> \u548C <code>password</code> 2 \u4E2A\u5C5E\u6027\u3002\u4E00\u65E6\u7528\u6237\u5728\u8BF7\u6C42\u7684\u65F6\u5019\u914D\u7F6E\u8FD9\u4FE9\u5C5E\u6027\uFF0C\u6211\u4EEC\u5C31\u4F1A\u81EA\u52A8\u5F80 HTTP \u7684 \u8BF7\u6C42 header \u4E2D\u6DFB\u52A0 <code>Authorization</code> \u5C5E\u6027\uFF0C\u5B83\u7684\u503C\u4E3A <code>Basic \u52A0\u5BC6\u4E32</code>\u3002 \u8FD9\u91CC\u7684\u52A0\u5BC6\u4E32\u662F <code>username:password</code> base64 \u52A0\u5BC6\u540E\u7684\u7ED3\u679C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  auth<span class="token operator">:</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><p>\u9996\u5148\u4FEE\u6539\u4E00\u4E0B\u7C7B\u578B\u5B9A\u4E49\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  auth<span class="token operator">?</span><span class="token operator">:</span> AxiosBasicCredentials
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosBasicCredentials</span> <span class="token punctuation">{</span>
  username<span class="token operator">:</span> <span class="token builtin">string</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u7740\u4FEE\u6539\u5408\u5E76\u89C4\u5219\uFF0C\u56E0\u4E3A auth \u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\u683C\u5F0F\uFF0C\u6240\u4EE5\u5B83\u7684\u5408\u5E76\u89C4\u5219\u662F <code>deepMergeStrat</code>\u3002</p><p><code>core/mergeConfig.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stratKeysDeepMerge <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auth&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>\u7136\u540E\u4FEE\u6539\u53D1\u9001\u8BF7\u6C42\u524D\u7684\u903B\u8F91\u3002</p><p><code>core/xhr.ts</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">/*...*/</span>
  auth
<span class="token punctuation">}</span> <span class="token operator">=</span> config

<span class="token keyword">if</span> <span class="token punctuation">(</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Basic &#39;</span> <span class="token operator">+</span> <span class="token function">btoa</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span>username <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> auth<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="demo-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#demo-\u7F16\u5199" aria-hidden="true">#</a> demo \u7F16\u5199</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  auth<span class="token operator">:</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53E6\u5916\uFF0C\u6211\u4EEC\u5728 <code>server.js</code> \u4E2D\u5BF9\u4E8E\u8FD9\u4E2A\u8DEF\u7531\u63A5\u53E3\u5199\u4E86\u4E00\u6BB5\u5C0F\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/more/post&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization
  <span class="token keyword">const</span> <span class="token punctuation">[</span>type<span class="token punctuation">,</span> credentials<span class="token punctuation">]</span> <span class="token operator">=</span> auth<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">atob</span><span class="token punctuation">(</span>credentials<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>username<span class="token punctuation">,</span> password<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>credentials<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;Basic&#39;</span> <span class="token operator">&amp;&amp;</span> username <span class="token operator">===</span> <span class="token string">&#39;Yee&#39;</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;UnAuthorization&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6CE8\u610F\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93 <code>atob</code> \u5B9E\u73B0 base64 \u4E32\u7684\u89E3\u7801\u3002</p><p>\u81F3\u6B64\uFF0C<code>ts-axios</code> \u652F\u6301\u4E86 HTTP \u6388\u6743\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E auth \u5BF9\u8C61\u5B9E\u73B0\u81EA\u52A8\u5728\u8BF7\u6C42 header \u4E2D\u6DFB\u52A0 <code>Authorization</code> \u5C5E\u6027\u3002\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5408\u6CD5\u72B6\u6001\u7801\u529F\u80FD\u3002</p>`,18);function x(y,_){const a=t("ExternalLinkIcon");return p(),o(c,null,[r,k,n("p",null,[d,n("a",h,[g,e(a)]),m]),f],64)}var v=l(i,[["render",x]]);export{v as default};
