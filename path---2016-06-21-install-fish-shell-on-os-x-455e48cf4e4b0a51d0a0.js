webpackJsonp([0x97b512b4ba6],{356:function(a,s){a.exports={data:{site:{siteMetadata:{title:"JIGSAWYE",author:"Evan Ye",siteUrl:"https://jigsawye.com",disqusShortname:"jigsawnotes"}},markdownRemark:{id:"/Users/jigsawye/projects/gatsby-blog/content/posts/2016-06-21-install-fish-shell-on-os-x.md absPath of file >>> MarkdownRemark",html:'<p>在 Mac 上用 <a href="https://github.com/robbyrussell/oh-my-zsh">zsh</a> 已經有一陣子了，最讓我詬病的就是 zsh 的 auto suggestion 及 auto completion 速度相當慢，而且有一些很奇怪的問題（bugs?）。最近 <a href="https://fishshell.com/">fish</a> 這個 shell 好像很紅，索性就把 zsh 換成 fish 了。</p>\n<p>裝完後不只速度 ++，連 plugin / theme 的套件管理都有（<a href="https://github.com/fisherman/fisherman">fisherman</a>），使用起來相當快速方便，要說缺點呢，就是與 bash 不相容，所以很常在寫 bash 的捧油只能看看囉。</p>\n<!-- more -->\n<blockquote>\n<p>Updated on 2016/06/21\n寫完這篇隔天就收到 oh-my-fish 已經不 maintain 了，所以換成 fisherman。</p>\n</blockquote>\n<h3 id="fish"><a href="#fish" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>fish</h3>\n<h5 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h5>\n<p>只要用 homebrew 安裝即可：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ brew <span class="token function">install</span> fish</code></pre>\n      </div>\n<h5 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h5>\n<p>不論你預設是 bash 還是 zsh，執行 <code class="language-text">fish</code> 就能切到 fish shell 了。</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ fish</code></pre>\n      </div>\n<h5 id="set-fish-as-default-shell"><a href="#set-fish-as-default-shell" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set fish as default shell</h5>\n<p>當然不可能每次開 terminal 就切換一次，我們可以把 fish 改成 terminal 的 default shell：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token keyword">echo</span> <span class="token string">"/usr/local/bin/fish"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/shells\n$ chsh -s /usr/local/bin/fish</code></pre>\n      </div>\n<h3 id="fisherman"><a href="#fisherman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>fisherman</h3>\n<p><code class="language-text">fisherman</code> 跟 <code class="language-text">oh-my-zsh</code> 用起來是截然不同的感受，oh-my-zsh 是把 plugins 全部都裝好了，只需要啟動，fishermane 用起來則像是 <code class="language-text">npm</code> 或 <code class="language-text">composer</code> 的套件管理器一樣。</p>\n<h5 id="installation-1"><a href="#installation-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h5>\n<p>curl 拉下來就行了：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">curl</span> -Lo ~/.config/fish/functions/fisher.fish --create-dirs git.io/fisher</code></pre>\n      </div>\n<h5 id="usage-1"><a href="#usage-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h5>\n<p>直接看官方 README 吧：<a href="https://github.com/fisherman/fisherman">https://github.com/fisherman/fisherman</a></p>\n<h3 id="額外補充"><a href="#%E9%A1%8D%E5%A4%96%E8%A3%9C%E5%85%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>額外補充</h3>\n<p>如果你有在使用 nvm 的話，因為 nvm 是透過 <code class="language-text">source ~/.nvm/nvm.sh</code> 執行，但因為 fish 不支援 bash，所以這支檔案裡的 shell 會直接爆給你看。</p>\n<p>要解決這個問題的話直接透過 fisherman 安裝 nvm 的 <a href="https://github.com/fisherman/nvm">plugin</a> 即可：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ fisher nvm</code></pre>\n      </div>\n<p>這樣還會發生一個問題，就是 nvm 不會自動使用 default 的 node 版本：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">$ node -v\nfish: Unknown <span class="token function">command</span> <span class="token string">\'node\'</span></code></pre>\n      </div>\n<p>用編輯器打開 <code class="language-text">~/.config/fish/config.fish</code> 新增下面這行即可：</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">bass <span class="token function">source</span> ~/.nvm/nvm.sh</code></pre>\n      </div>\n<p>bass 是讓 fish 可以執行 bash 的一個橋接工具，透過 bass 就能執行 bash 了。</p>',excerpt:"在 Mac 上用  zsh  已經有一陣子了，最讓我詬病的就是 zsh 的 auto suggestion 及 auto completion 速度相當慢，而且有一些很奇怪的問題（bugs?）。最近  fish  這個 shell 好像很紅，索性就把 zsh 換成 fish…",fields:{slug:"/2016/06/21/install-fish-shell-on-os-x/"},frontmatter:{title:"在 OSX 使用 Fish shell 取代 bash/zsh",date:"June 21, 2016"}}},pathContext:{slug:"/2016/06/21/install-fish-shell-on-os-x/"}}}});
//# sourceMappingURL=path---2016-06-21-install-fish-shell-on-os-x-455e48cf4e4b0a51d0a0.js.map