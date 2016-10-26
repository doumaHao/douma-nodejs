querystring 序列化和反序列化

querystring模块

    进入nodejs的环境 $ node
    查看对于querystring模块 $ querystring
    具体方法说明
        querystring.stringify   对象序列化
            参数说明
                参数1 对象
                    输入  querystring.stringify({a:'111',b:'222'})
                    返回  'a=111&b=222'
                参数2 序列化之后的字符串各组值之间的链接字符，默认是逗号【,】
                    输入  querystring.stringify({a:'111',b:'222'},',')
                    返回  'a=111,b=222'
                参数3 序列化之后的字符串键值对之间的链接字符，默认是等号【=】
                    输入  querystring.stringify({a:'111',b:'222'},',',':')
                    返回  'a:111,b:222'
        querystring.parse   字符串反序列化
                参数1 字符串
                参数2 反序列化字符串各组值之间的链接字符，默认是逗号【,】
                参数3 反序列化字符串键值对之间的链接字符，默认是等号【=】
                参数4 序列化的对象中属性的个数，默认是1000个，设置为0则是无上限
        querystring.escape  转义
        querystring.unescape    反转义
