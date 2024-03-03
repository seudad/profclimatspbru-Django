from django.shortcuts import render

# Create your views here.
def kondicionery(request):
    context = {
        'title' : 'Кондиционеры',
        'goods' : [
            {
                'title' : 'Кондиционер сплит-система настенный Ballu BSO-09HN1_20Y (серия Olympio Edge)',
                'cooled' : '2,6',
                'heat' : '2,9',
                'price' : 28000
            },
            {
                'title' : 'Кондиционер сплит-система настенный Fujitsu ASYG07KMCC/AOYG07KMCC (серия Genios)',
                'cooled' : '3,2',
                'heat' : '5,2',
                'price' : 55549
            }
        ]
    }
    return render(request, 'kondicionery/kondicionery.html', context)

def cunit(request):
    return render(request, 'kondicionery/cunit.html')