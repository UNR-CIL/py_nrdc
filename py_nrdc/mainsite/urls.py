from django.conf.urls import patterns, url

from mainsite import views

urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'data/$', views.data, name='data'),
    url(r'datasearch/$', views.data_search, name='datasearch'),
    url(r'currentconditions/$', views.current_conditions, name='currentconditions'),
    url(r'datacuration/$', views.data_curation, name='datacuration'),
    url(r'suggestdataset/$', views.suggest_dataset, name='suggestdataset'),
    url(r'projects/$', views.projects, name='projects'),
    url(r'outreach/$', views.outreach, name='outreach'),
)
