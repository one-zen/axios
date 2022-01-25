import{c as n}from"./app.92252524.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u57FA\u7840\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u7840\u7C7B\u578B</h1><p>TypeScript \u652F\u6301\u4E0E JavaScript \u51E0\u4E4E\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u6B64\u5916\u8FD8\u63D0\u4F9B\u4E86\u5B9E\u7528\u7684\u679A\u4E3E\u7C7B\u578B\u65B9\u4FBF\u6211\u4EEC\u4F7F\u7528\u3002</p><h2 id="\u5E03\u5C14\u503C" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u503C" aria-hidden="true">#</a> \u5E03\u5C14\u503C</h2><p>\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u5C31\u662F\u7B80\u5355\u7684 true/false \u503C\uFF0C\u5728JavaScript \u548C TypeScript \u91CC\u53EB\u505A <code>boolean</code>\uFF08\u5176\u5B83\u8BED\u8A00\u4E2D\u4E5F\u4E00\u6837\uFF09\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div><h2 id="\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57" aria-hidden="true">#</a> \u6570\u5B57</h2><p>\u548C JavaScript \u4E00\u6837\uFF0CTypeScript \u91CC\u7684\u6240\u6709\u6570\u5B57\u90FD\u662F\u6D6E\u70B9\u6570\u3002 \u8FD9\u4E9B\u6D6E\u70B9\u6570\u7684\u7C7B\u578B\u662F number\u3002 \u9664\u4E86\u652F\u6301\u5341\u8FDB\u5236\u548C\u5341\u516D\u8FDB\u5236\u5B57\u9762\u91CF\uFF0CTypeScript \u8FD8\u652F\u6301 ECMAScript 2015\u4E2D\u5F15\u5165\u7684\u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u5B57\u9762\u91CF\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0x14</span>
<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b10100</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o24</span>
</code></pre></div><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>JavaScript \u7A0B\u5E8F\u7684\u53E6\u4E00\u9879\u57FA\u672C\u64CD\u4F5C\u662F\u5904\u7406\u7F51\u9875\u6216\u670D\u52A1\u5668\u7AEF\u7684\u6587\u672C\u6570\u636E\u3002 \u50CF\u5176\u5B83\u8BED\u8A00\u91CC\u4E00\u6837\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>string</code> \u8868\u793A\u6587\u672C\u6570\u636E\u7C7B\u578B\u3002 \u548C JavaScript \u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528\u53CC\u5F15\u53F7\uFF08<code>&quot;</code>\uFF09\u6216\u5355\u5F15\u53F7\uFF08<code>&#39;</code>\uFF09\u8868\u793A\u5B57\u7B26\u4E32\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;bob&#39;</span>
name <span class="token operator">=</span> <span class="token string">&#39;smith&#39;</span>
</code></pre></div><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\uFF0C\u5B83\u53EF\u4EE5\u5B9A\u4E49\u591A\u884C\u6587\u672C\u548C\u5185\u5D4C\u8868\u8FBE\u5F0F\u3002 \u8FD9\u79CD\u5B57\u7B26\u4E32\u662F\u88AB\u53CD\u5F15\u53F7\u5305\u56F4\uFF08 <code>\`</code>\uFF09\uFF0C\u5E76\u4E14\u4EE5 <code>\${ expr }</code> \u8FD9\u79CD\u5F62\u5F0F\u5D4C\u5165\u8868\u8FBE\u5F0F</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Yee</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">37</span>
<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.

I&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> age <span class="token operator">+</span> <span class="token number">1</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>\u8FD9\u4E0E\u4E0B\u9762\u5B9A\u4E49 <code>sentence</code> \u7684\u65B9\u5F0F\u6548\u679C\u76F8\u540C\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Hello, my name is &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;.\\n\\n&#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;I\\&#39;ll be &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>age <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; years old next month.&#39;</span>
</code></pre></div><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><p>TypeScript \u50CF JavaScript \u4E00\u6837\u53EF\u4EE5\u64CD\u4F5C\u6570\u7EC4\u5143\u7D20\u3002 \u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6570\u7EC4\u3002 \u7B2C\u4E00\u79CD\uFF0C\u53EF\u4EE5\u5728\u5143\u7D20\u7C7B\u578B\u540E\u9762\u63A5\u4E0A <code>[]</code>\uFF0C\u8868\u793A\u7531\u6B64\u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528\u6570\u7EC4\u6CDB\u578B\uFF0C<code>Array&lt;\u5143\u7D20\u7C7B\u578B&gt;</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="\u5143\u7EC4-tuple" tabindex="-1"><a class="header-anchor" href="#\u5143\u7EC4-tuple" aria-hidden="true">#</a> \u5143\u7EC4 Tuple</h2><p>\u5143\u7EC4\u7C7B\u578B\u5141\u8BB8\u8868\u793A\u4E00\u4E2A\u5DF2\u77E5\u5143\u7D20\u6570\u91CF\u548C\u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u5404\u5143\u7D20\u7684\u7C7B\u578B\u4E0D\u5FC5\u76F8\u540C\u3002 \u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u5B9A\u4E49\u4E00\u5BF9\u503C\u5206\u522B\u4E3A <code>string</code> \u548C <code>number</code> \u7C7B\u578B\u7684\u5143\u7EC4\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token comment">// OK</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span> <span class="token comment">// Error</span>
</code></pre></div><p>\u5F53\u8BBF\u95EE\u4E00\u4E2A\u5DF2\u77E5\u7D22\u5F15\u7684\u5143\u7D20\uFF0C\u4F1A\u5F97\u5230\u6B63\u786E\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Error, &#39;number&#39; \u4E0D\u5B58\u5728 &#39;substr&#39; \u65B9\u6CD5</span>
</code></pre></div><p>\u5F53\u8BBF\u95EE\u4E00\u4E2A\u8D8A\u754C\u7684\u5143\u7D20\uFF0C\u4F1A\u4F7F\u7528\u8054\u5408\u7C7B\u578B\u66FF\u4EE3\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>x<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span> <span class="token comment">// OK, \u5B57\u7B26\u4E32\u53EF\u4EE5\u8D4B\u503C\u7ED9(string | number)\u7C7B\u578B</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// OK, &#39;string&#39; \u548C &#39;number&#39; \u90FD\u6709 toString</span>

x<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// Error, \u5E03\u5C14\u4E0D\u662F(string | number)\u7C7B\u578B</span>
</code></pre></div><p>\u8054\u5408\u7C7B\u578B\u662F\u9AD8\u7EA7\u4E3B\u9898\uFF0C\u6211\u4EEC\u4F1A\u5728\u4EE5\u540E\u7684\u7AE0\u8282\u91CC\u8BA8\u8BBA\u5B83\u3002</p><p><strong>\u6CE8\u610F</strong>\uFF1A\u81EA\u4ECE TyeScript 3.1 \u7248\u672C\u4E4B\u540E\uFF0C\u8BBF\u95EE\u8D8A\u754C\u5143\u7D20\u4F1A\u62A5\u9519\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u518D\u4F7F\u7528\u8BE5\u7279\u6027\u3002</p><h2 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h2><p><code>enum</code> \u7C7B\u578B\u662F\u5BF9 JavaScript \u6807\u51C6\u6570\u636E\u7C7B\u578B\u7684\u4E00\u4E2A\u8865\u5145\u3002 \u50CF C# \u7B49\u5176\u5B83\u8BED\u8A00\u4E00\u6837\uFF0C\u4F7F\u7528\u679A\u4E3E\u7C7B\u578B\u53EF\u4EE5\u4E3A\u4E00\u7EC4\u6570\u503C\u8D4B\u4E88\u53CB\u597D\u7684\u540D\u5B57\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>Red<span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue<span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green
</code></pre></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4ECE <code>0</code> \u5F00\u59CB\u4E3A\u5143\u7D20\u7F16\u53F7\u3002 \u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u7684\u6307\u5B9A\u6210\u5458\u7684\u6570\u503C\u3002 \u4F8B\u5982\uFF0C\u6211\u4EEC\u5C06\u4E0A\u9762\u7684\u4F8B\u5B50\u6539\u6210\u4ECE <code>1</code> \u5F00\u59CB\u7F16\u53F7\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue<span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green
</code></pre></div><p>\u6216\u8005\uFF0C\u5168\u90E8\u90FD\u91C7\u7528\u624B\u52A8\u8D4B\u503C\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Green <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Blue <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green
</code></pre></div><p>\u679A\u4E3E\u7C7B\u578B\u63D0\u4F9B\u7684\u4E00\u4E2A\u4FBF\u5229\u662F\u4F60\u53EF\u4EE5\u7531\u679A\u4E3E\u7684\u503C\u5F97\u5230\u5B83\u7684\u540D\u5B57\u3002 \u4F8B\u5982\uFF0C\u6211\u4EEC\u77E5\u9053\u6570\u503C\u4E3A 2\uFF0C\u4F46\u662F\u4E0D\u786E\u5B9A\u5B83\u6620\u5C04\u5230 Color \u91CC\u7684\u54EA\u4E2A\u540D\u5B57\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u627E\u76F8\u5E94\u7684\u540D\u5B57\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Green<span class="token punctuation">,</span> Blue<span class="token punctuation">}</span>
<span class="token keyword">let</span> colorName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> Color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorName<span class="token punctuation">)</span>  <span class="token comment">// \u663E\u793A&#39;Green&#39;\u56E0\u4E3A\u4E0A\u9762\u4EE3\u7801\u91CC\u5B83\u7684\u503C\u662F2</span>
</code></pre></div><h2 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h2><p>\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u60F3\u8981\u4E3A\u90A3\u4E9B\u5728\u7F16\u7A0B\u9636\u6BB5\u8FD8\u4E0D\u6E05\u695A\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E00\u4E2A\u7C7B\u578B\u3002 \u8FD9\u4E9B\u503C\u53EF\u80FD\u6765\u81EA\u4E8E\u52A8\u6001\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u6765\u81EA\u7528\u6237\u8F93\u5165\u6216\u7B2C\u4E09\u65B9\u4EE3\u7801\u5E93\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u7C7B\u578B\u68C0\u67E5\u5668\u5BF9\u8FD9\u4E9B\u503C\u8FDB\u884C\u68C0\u67E5\u800C\u662F\u76F4\u63A5\u8BA9\u5B83\u4EEC\u901A\u8FC7\u7F16\u8BD1\u9636\u6BB5\u7684\u68C0\u67E5\u3002 \u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>any</code> \u7C7B\u578B\u6765\u6807\u8BB0\u8FD9\u4E9B\u53D8\u91CF\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span>
notSure <span class="token operator">=</span> <span class="token string">&#39;maybe a string instead&#39;</span>
notSure <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u4E5F\u53EF\u4EE5\u662F\u4E2A boolean</span>
</code></pre></div><p>\u5728\u5BF9\u73B0\u6709\u4EE3\u7801\u8FDB\u884C\u6539\u5199\u7684\u65F6\u5019\uFF0C<code>any</code> \u7C7B\u578B\u662F\u5341\u5206\u6709\u7528\u7684\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u7F16\u8BD1\u65F6\u53EF\u9009\u62E9\u5730\u5305\u542B\u6216\u79FB\u9664\u7C7B\u578B\u68C0\u67E5\u3002\u5E76\u4E14\u5F53\u4F60\u53EA\u77E5\u9053\u4E00\u90E8\u5206\u6570\u636E\u7684\u7C7B\u578B\u65F6\uFF0C<code>any</code> \u7C7B\u578B\u4E5F\u662F\u6709\u7528\u7684\u3002 \u6BD4\u5982\uFF0C\u4F60\u6709\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u5305\u542B\u4E86\u4E0D\u540C\u7684\u7C7B\u578B\u7684\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;free&#39;</span><span class="token punctuation">]</span>

list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
</code></pre></div><h2 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h2><p>\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u6765\u8BF4\uFF0C<code>void</code> \u7C7B\u578B\u50CF\u662F\u4E0E <code>any</code> \u7C7B\u578B\u76F8\u53CD\uFF0C\u5B83\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B\u3002 \u5F53\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u4F60\u901A\u5E38\u4F1A\u89C1\u5230\u5176\u8FD4\u56DE\u503C\u7C7B\u578B\u662F <code>void</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">warnUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;This is my warning message&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u58F0\u660E\u4E00\u4E2A <code>void</code> \u7C7B\u578B\u7684\u53D8\u91CF\u6CA1\u6709\u4EC0\u4E48\u5927\u7528\uFF0C\u56E0\u4E3A\u4F60\u53EA\u80FD\u4E3A\u5B83\u8D4B\u4E88 <code>undefined</code> \u548C <code>null</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre></div><h2 id="null-\u548C-undefined" tabindex="-1"><a class="header-anchor" href="#null-\u548C-undefined" aria-hidden="true">#</a> null \u548C undefined</h2><p>TypeScript \u91CC\uFF0C<code>undefined</code> \u548C <code>null</code> \u4E24\u8005\u5404\u81EA\u6709\u81EA\u5DF1\u7684\u7C7B\u578B\u5206\u522B\u53EB\u505A <code>undefined</code> \u548C <code>null</code>\u3002 \u548C <code>void</code> \u76F8\u4F3C\uFF0C\u5B83\u4EEC\u7684\u672C\u8EAB\u7684\u7C7B\u578B\u7528\u5904\u4E0D\u662F\u5F88\u5927\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>null</code> \u548C <code>undefined</code> \u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002 \u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u628A <code>null</code> \u548C <code>undefined</code> \u8D4B\u503C\u7ED9 <code>number</code> \u7C7B\u578B\u7684\u53D8\u91CF\u3002</p><p>\u7136\u800C\uFF0C\u5F53\u4F60\u6307\u5B9A\u4E86 <code>--strictNullChecks</code> \u6807\u8BB0\uFF0C<code>null</code> \u548C <code>undefined</code> \u53EA\u80FD\u8D4B\u503C\u7ED9 <code>void</code> \u548C\u5B83\u4EEC\u5404\u81EA\uFF0C\u8FD9\u80FD\u907F\u514D \u5F88\u591A\u5E38\u89C1\u7684\u95EE\u9898\u3002 \u4E5F\u8BB8\u5728\u67D0\u5904\u4F60\u60F3\u4F20\u5165\u4E00\u4E2A <code>string</code> \u6216 <code>null</code> \u6216 <code>undefined</code>\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8054\u5408\u7C7B\u578B <code>string | null | undefined</code>\u3002 \u518D\u6B21\u8BF4\u660E\uFF0C\u7A0D\u540E\u6211\u4EEC\u4F1A\u4ECB\u7ECD\u8054\u5408\u7C7B\u578B\u3002</p><h2 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h2><p><code>never</code> \u7C7B\u578B\u8868\u793A\u7684\u662F\u90A3\u4E9B\u6C38\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B\u3002 \u4F8B\u5982\uFF0C <code>never</code> \u7C7B\u578B\u662F\u90A3\u4E9B\u603B\u662F\u4F1A\u629B\u51FA\u5F02\u5E38\u6216\u6839\u672C\u5C31\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u6216\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF1B \u53D8\u91CF\u4E5F\u53EF\u80FD\u662F <code>never</code> \u7C7B\u578B\uFF0C\u5F53\u5B83\u4EEC\u88AB\u6C38\u4E0D\u4E3A\u771F\u7684\u7C7B\u578B\u4FDD\u62A4\u6240\u7EA6\u675F\u65F6\u3002</p><p><code>never</code> \u7C7B\u578B\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4EFB\u4F55\u7C7B\u578B\uFF1B\u7136\u800C\uFF0C\u6CA1\u6709\u7C7B\u578B\u662F <code>never</code> \u7684\u5B50\u7C7B\u578B\u6216\u53EF\u4EE5\u8D4B\u503C\u7ED9<code>never</code> \u7C7B\u578B\uFF08\u9664\u4E86 <code>never</code> \u672C\u8EAB\u4E4B\u5916\uFF09\u3002 \u5373\u4F7F <code>any</code> \u4E5F\u4E0D\u53EF\u4EE5\u8D4B\u503C\u7ED9 <code>never</code>\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u8FD4\u56DE <code>never</code> \u7C7B\u578B\u7684\u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// \u8FD4\u56DEnever\u7684\u51FD\u6570\u5FC5\u987B\u5B58\u5728\u65E0\u6CD5\u8FBE\u5230\u7684\u7EC8\u70B9</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u63A8\u65AD\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3Anever</span>
<span class="token keyword">function</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Something failed&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DEnever\u7684\u51FD\u6570\u5FC5\u987B\u5B58\u5728\u65E0\u6CD5\u8FBE\u5230\u7684\u7EC8\u70B9</span>
<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h2><p><code>object</code> \u8868\u793A\u975E\u539F\u59CB\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u9664 <code>number</code>\uFF0C<code>string</code>\uFF0C<code>boolean</code>\uFF0C<code>symbol</code>\uFF0C<code>null</code>\u6216<code>undefined</code> \u4E4B\u5916\u7684\u7C7B\u578B\u3002</p><p>\u4F7F\u7528 <code>object</code> \u7C7B\u578B\uFF0C\u5C31\u53EF\u4EE5\u66F4\u597D\u7684\u8868\u793A\u50CF <code>Object.create</code> \u8FD9\u6837\u7684 <code>API</code>\u3002\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span>o<span class="token operator">:</span> object <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prop<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>
<span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>

<span class="token function">create</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
<span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
<span class="token function">create</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
<span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
</code></pre></div><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h2><p>\u6709\u65F6\u5019\u4F60\u4F1A\u9047\u5230\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u4F60\u4F1A\u6BD4 TypeScript \u66F4\u4E86\u89E3\u67D0\u4E2A\u503C\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002 \u901A\u5E38\u8FD9\u4F1A\u53D1\u751F\u5728\u4F60\u6E05\u695A\u5730\u77E5\u9053\u4E00\u4E2A\u5B9E\u4F53\u5177\u6709\u6BD4\u5B83\u73B0\u6709\u7C7B\u578B\u66F4\u786E\u5207\u7684\u7C7B\u578B\u3002</p><p>\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u544A\u8BC9\u7F16\u8BD1\u5668\uFF0C\u201C\u76F8\u4FE1\u6211\uFF0C\u6211\u77E5\u9053\u81EA\u5DF1\u5728\u5E72\u4EC0\u4E48\u201D\u3002 \u7C7B\u578B\u65AD\u8A00\u597D\u6BD4\u5176\u5B83\u8BED\u8A00\u91CC\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u4F46\u662F\u4E0D\u8FDB\u884C\u7279\u6B8A\u7684\u6570\u636E\u68C0\u67E5\u548C\u89E3\u6784\u3002 \u5B83\u6CA1\u6709\u8FD0\u884C\u65F6\u7684\u5F71\u54CD\uFF0C\u53EA\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u8D77\u4F5C\u7528\u3002 TypeScript \u4F1A\u5047\u8BBE\u4F60\uFF0C\u7A0B\u5E8F\u5458\uFF0C\u5DF2\u7ECF\u8FDB\u884C\u4E86\u5FC5\u987B\u7684\u68C0\u67E5\u3002</p><p>\u7C7B\u578B\u65AD\u8A00\u6709\u4E24\u79CD\u5F62\u5F0F\u3002 \u5176\u4E00\u662F\u201C\u5C16\u62EC\u53F7\u201D\u8BED\u6CD5\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;this is a string&#39;</span>

<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre></div><p>\u53E6\u4E00\u4E2A\u4E3A <code>as</code> \u8BED\u6CD5\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;this is a string&#39;</span>

<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre></div><p>\u4E24\u79CD\u5F62\u5F0F\u662F\u7B49\u4EF7\u7684\u3002 \u81F3\u4E8E\u4F7F\u7528\u54EA\u4E2A\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u662F\u51ED\u4E2A\u4EBA\u559C\u597D\uFF1B\u7136\u800C\uFF0C\u5F53\u4F60\u5728 TypeScript \u91CC\u4F7F\u7528 JSX \u65F6\uFF0C\u53EA\u6709 <code>as</code> \u8BED\u6CD5\u65AD\u8A00\u662F\u88AB\u5141\u8BB8\u7684\u3002</p>`,70);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
