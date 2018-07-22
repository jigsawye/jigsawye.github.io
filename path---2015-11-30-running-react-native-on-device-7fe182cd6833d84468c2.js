webpackJsonp([0xbf7e70e8012e],{451:function(e,a){e.exports={data:{site:{siteMetadata:{title:"JIGSAWYE",author:"Evan Ye",siteUrl:"https://jigsawye.com",disqusShortname:"jigsawnotes"}},markdownRemark:{id:"/Users/jigsawye/projects/gatsby-blog/content/posts/2015-11-30-running-react-native-on-device.md absPath of file >>> MarkdownRemark",html:'<p>之前在練著寫 React Native 時詢問過開發 iOS 的朋友，能不能將 App 燒至自己的裝置上。當時好像因為 Apple 規範的關係，必須加入 <a href="https://developer.apple.com/programs/">Developer Program</a> 並 <strong>年付 $99</strong> 取得憑證才行。而因為我沒有打算上架到 App Store 上所以只好放棄付錢作罷。</p>\n<p>最近剛好想寫一些自己的工具，又試著上網找了一下資料，發現在 XCode 7 之後已經開放未付費也可以燒至裝置上了，因此紀錄一下。</p>\n<!-- more -->\n<!-- toc -->\n<h3 id="加入-apple-id-至-xcode"><a href="#%E5%8A%A0%E5%85%A5-apple-id-%E8%87%B3-xcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>加入 Apple ID 至 XCode</h3>\n<p>將 iDevice 透過 USB 連接，並在 XCode 選擇你的裝置：</p>\n<p>{% asset_img 01.png %}</p>\n<p>按工具列的執行或 cmd + R 執行，接著會跳出錯誤告知你需要有效的憑證，這邊我們點 <strong>Fix issue</strong>：</p>\n<p>{% asset_img 02.png %}</p>\n<p>如果你沒有 Apple ID 或是還沒加入 Developer Program，就選左邊的 <strong>Join a Program</strong>，如果你已經有了，就選擇 <strong>Add</strong> 並填入你的 Apple ID：</p>\n<p>{% asset_img 03.png %}</p>\n<p>接著你就可以看到帳號已經加入完成：</p>\n<p>{% asset_img 04.png %}</p>\n<h3 id="將-app-build-至-idevice-上"><a href="#%E5%B0%87-app-build-%E8%87%B3-idevice-%E4%B8%8A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>將 App Build 至 iDevice 上</h3>\n<p>接著我們在 Build 一次，又跳出了一個錯誤，得知是安全性的問題：</p>\n<p>{% asset_img 05.png %}</p>\n<p>打開你的裝置，依序選擇 <strong>設定</strong>-><strong>一般</strong>-><strong>描述檔</strong>-><code class="language-text">你的 Apple ID</code>-><strong>信任「<code class="language-text">你的 Apple ID</code>」</strong>：</p>\n<p>{% asset_img 06.png %}</p>\n<h3 id="執行你的-app"><a href="#%E5%9F%B7%E8%A1%8C%E4%BD%A0%E7%9A%84-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>執行你的 App</h3>\n<p>完成後就可以執行你的 App 了，然後又出現了錯誤，因為路徑是 localhost，所以讀不到 bundle 檔案：</p>\n<p>{% asset_img 07.png %}</p>\n<p>打開 XCode，在你的 Project 裡找到 <code class="language-text">AppDelgate.m</code> 檔案，將 <code class="language-text">jsCodeLocation</code> 中的 <code class="language-text">localhost</code> 修改成你的 IP：</p>\n<p>{% asset_img 08.png %}</p>\n<h3 id="done"><a href="#done" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Done!</h3>\n<p>完成！別忘了搖晃裝置可以叫出 dev menu，記得打開 Live Reload 讓開發更方便！</p>\n<p>{% asset_img 09.png %}</p>',fields:{slug:"/2015/11/30/running-react-native-on-device/"},frontmatter:{title:"在 iDevice 上執行 React Native（不需付費）",date:"November 30, 2015"}}},pathContext:{slug:"/2015/11/30/running-react-native-on-device/"}}}});
//# sourceMappingURL=path---2015-11-30-running-react-native-on-device-7fe182cd6833d84468c2.js.map