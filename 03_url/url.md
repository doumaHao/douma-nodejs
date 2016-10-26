url和uri

    url 是统一资源定位符 偏重定位地址 比如一个网站的网址肯定是个url，或者网络上某个静态资源的地址，都是url
    uri 是统一资源标识符 偏重标示
    url是uri的子集，即url肯定是uri,但是uri却不一定是url

url模块

    进入nodejs的环境 $ node
    查看对于url所支持的方法 $ url
    具体方法说明
        url.parse   将url解析转化为对象
            参数
                参数1     url
                参数2     是否将query转化为json对象（默认为false，即不转化）
                参数3     是否自动判断域名活地址（默认为false，即不自动判断）
            返回对象
                protocol    底层使用的协议
                slashes     是否有协议的双斜线
                auth        作者
                host        域名或者地址
                prot        端口,默认8080
                hostname    主机名
                hash        哈希值，通常使用锚点
                search      查询字符串参数
                query       参数串
                pathname    访问资源的路径名
                path        路径
                href        完整的超链接
        url.format  将对象转化为url
        url.resolve 主页地址拼接
