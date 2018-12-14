# 爬取Python百度百科词条
import requests
import re
import pandas as pd

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 "
                  "Safari/537.36"
}

title_list = []
description_list = []


def get_urls(url):
    hrefs = []
    res = requests.get(url, headers=headers)
    res.encoding = "utf-8"
    data = re.findall(r'<a target=_blank href="/item/(.*?)">', res.text)
    for i in data:
        hrefs.append("https://baike.baidu.com/item/" + i)
    for href in hrefs:
        if '"' in href:
            href = href[:href.index('"')]
        get_page(href)


def get_page(url):
    res = requests.get(url, headers=headers)
    res.encoding = "utf-8"
    t = re.search(r'<h1 >(.*?)</h1>', res.text)
    title = t.group().lstrip('<h1 >').rstrip('</h1>').strip()
    d = re.search(r'name="description" content="(.*?)"', res.text)
    description = d.group().lstrip('name="description" content="').rstrip('"').strip()
    title_list.append(title)
    description_list.append(description)


if __name__ == '__main__':
    url = "https://baike.baidu.com/item/Python/407313?fr=aladdin"
    get_page(url)
    get_urls(url)
    infos = {'title': title_list, 'description': description_list}
    data = pd.DataFrame(infos, columns=['title', 'description'])
    data.to_csv("Python词条.csv")
    print("爬取成功！")