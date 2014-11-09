from django.shortcuts import render

def index(request):
    context = {}
    return render(request, 'mainsite/index.html', {})

def data(request):
    context = {}
    return render(request, 'mainsite/data.html', {})

def data_search(request):
    context = {}
    return render(request, 'mainsite/datasearch.html', {})

def current_conditions(request):
    context = {}
    return render(request, 'mainsite/currentconditions.html', {})

def data_curation(request):
    context = {}
    return render(request, 'mainsite/datacuration.html', {})

def suggest_dataset(request):
    context = {}
    return render(request, 'mainsite/suggestdataset.html', {})

def projects(request):
    context = {}
    return render(request, 'mainsite/projects.html', {})

def outreach(request):
    context = {}
    return render(request, 'mainsite/outreach.html', {})
