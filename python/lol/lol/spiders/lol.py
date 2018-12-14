import scrapy


class lol(scrapy.Spider):
    name = "lol"
    start_urls = ["https://www.huya.com/g/lol"]

    def parse(self, response):
        title_list = response.xpath('//*[@id="js-live-list"]/li/a[2]/text()').extract()
        name_list = response.xpath('//*[@id="js-live-list"]/li/span/span[1]/i/text()').extract()
        for i in range(1,100):
            print(name_list[i-1], ': ',title_list[i-1])