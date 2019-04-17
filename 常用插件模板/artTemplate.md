前置插件

```
artTemplate/template-web.js
jquery/jquery.js 
```

html模板部分:

```html
<div id="insert">
    //待渲染数据部分
</div>
<script type = "text/template" id = "tpl">
	{{each rows<!--ajax取回的结果-->}}
		<li>
            <a href="$value.url1">
                <img src="{{$value.address}}" alt="">
                <p>{{$value.Name}}</p>
            </a>
        </li>
	{{/each}}
</script>
<script type = "text/template" id = "simpleTpl">
//如果不用遍历,这样就行
{{name}}
{{age}}
</script>
```

js部分

```js
    $.ajax({
        type:'get',
        url:'接口地址',
        dataType:'json',
        success: function(res) {
            var html = template("tpl",res);//第一个参数放模板的id
            $("#insert").html(html);
            // 一级分类加载完成后请求第一个分类的二级分类信息
            $("#insert").find("li").eq(0).addClass("active");
            var firstTopid = res.rows[0].id;
            getSecondCategory(firstTopid);
        }
    })
```

