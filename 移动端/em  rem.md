## em

```
em是CSS3中一种新增的长度单位.
参照的元素的字号大小,其次参照父元素字号,再其次参照浏览器默认字号.
```

## rem

```
rem是CSS3中一种新增的长度单位.
rem始终参照根元素html的字号.
```

```css
<!-- 屏幕适配rem -->
    <style>
            ul {
                list-style: none;
            }
    
            html {
                font-size: 100px;
            }
    
            @media screen and (min-width: 320px) {
                html {
                    font-size: 50px;
                }
            }
    
            @media screen and (min-width: 360px) {
                html {
                    font-size: 56.25px;
                }
            }
    
            @media screen and (min-width: 400px) {
                html {
                    font-size: 62.5px;
                }
            }
    
            @media screen and (min-width: 440px) {
                html {
                    font-size: 68.75px;
                }
            }
    
            @media screen and (min-width: 480px) {
                html {
                    font-size: 75px;
                }
            }
    
            /* 设计图多大就用写多大,对应的是font-size就是100 */
    
            @media screen and (min-width: 640px) {
                html {
                    font-size: 100px;
                }
            }
    </style>
```

