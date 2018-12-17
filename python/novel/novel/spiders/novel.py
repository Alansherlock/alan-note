from scrapy.spiders import Spider
from scrapy.http import Request
from scrapy.selector import Selector
 
from novel.items import NovelItem
import requests
 
 
class NovelSpider(Spider):
    # 爬虫名字，重要
    name = 'novel'
    # 反爬措施
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36'}
    url = "https://www.qidian.com/rank/yuepiao?style=1"
    start_urls = ['qidian.com']
 
 
    def start_requests(self):
        url = "https://www.qidian.com/rank/yuepiao?style=1"
        yield Request(url, headers=self.headers, callback=self.parse)
 
 
    def parse(self, response):
        item = NovelItem()
        selector = Selector(response)
        books = selector.xpath('//div[@class="book-mid-info"]')
        for book in books:
            name = book.xpath('h4/a/text()').extract()
            author = book.xpath('p[@class="author"]/a[@class="name"]/text()').extract()
            type = book.xpath('p[@class="author"]/a[@data-eid="qd_C42"]/text()').extract()
            state = book.xpath('p[@class="author"]/span/text()').extract()
            intro = book.xpath('p[@class="intro"]/text()').extract()
            update = book.xpath('p[@class="update"]/a[@target="_blank"]/text()').extract()
            href = book.xpath('p[@class="update"]/a/@href').extract()
            time = book.xpath('p[@class="update"]/span/text()').extract()
 
            item['book_name'] = name[0]
            item['author'] = author[0]
            item['book_type'] = type[0]
            item['book_state'] = state[0]
            item['book_update'] = update[0]
            item['book_time'] = time[0]
            item['new_href'] = 'https:' + href[0]
            item['book_intro'] = ''.join(intro).replace(' ','').replace('\n','')
            yield item
