# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


import pymysql


class NovelPipeline(object):
    def __init__(self):
        # 连接数据库
        self.conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='12345',
                                    db='testdb', charset='utf8')
        # 建立游标对象
        self.cursor = self.conn.cursor()
        self.cursor.execute('truncate table Book')
        self.conn.commit()

    def process_item(self, item, spider):
        try:
            self.cursor.execute("insert into Book (book_name,author,book_type,book_state,book_update,book_time,new_href,book_intro) \
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s)", (item['book_name'], item['author'], item['book_type'],
                                                item['book_state'], item['book_update'], item['book_time'],
                                                item['new_href'], item['book_intro']))
            self.conn.commit()
        except pymysql.Error:
            print("Error%s,%s,%s,%s,%s,%s,%s,%s" % (item['book_name'], item['author'], item['book_type'],
                                                    item['book_state'], item['book_update'], item['book_time'],
                                                    item['new_href'], item['book_intro']))
        return item
