from django.contrib.sitemaps import Sitemap
from django.urls import reverse
import datetime


class StaticViewSitemap(Sitemap):
    
    priority = 1.0
    changefreq = 'monthly'

    def items(self):
        return ['home','about','services','components','contact']

    def location(self, item):
        return reverse(item)

    def lastmod(self, obj):
        return datetime.datetime.now()
        