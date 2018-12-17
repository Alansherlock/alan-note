# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class NovelItem(scrapy.Item):
    # 小说名
    book_name = scrapy.Field()
    # 作者
    author = scrapy.Field()
    # 小说类型
    book_type = scrapy.Field()
    # 小说状态
    book_state = scrapy.Field()
    # 小说更新
    book_update = scrapy.Field()
 
    book_time = scrapy.Field()
    # 最新一章地址
    new_href = scrapy.Field()
    # 小说简介
    book_intro = scrapy.Field()
    pass
