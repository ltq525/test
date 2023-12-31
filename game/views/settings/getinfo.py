from django.http import JsonResponse
from game.models.player.player import Player


def getinfo_app(request):
    player = Player.objects.all()[0]
    return JsonResponse({
        'result': "success",
        'username': player.user.username,
        'photo': player.photo,
    })

def getinfo_web(request):
    user = request.user
    
    if not user.is_authenticated:
        return JsonResponse({
            'result': "未登陆"
        })

    player = Player.objects.get(user = user) 
    return JsonResponse({
        'result': "success",
        'username': player.user.username,
        'photo': player.photo,
    })


def getinfo(request):
    platform = request.GET.get("platform")
    if platform == "web":
        return getinfo_web(request)
    else:
        return getinfo_app(request)

