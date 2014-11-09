from django.conf.urls import patterns, include, url
from django.contrib import admin

from mainsite import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'py_nrdc.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),                       
    url(r'^nrdc/', include('mainsite.urls')),
)
