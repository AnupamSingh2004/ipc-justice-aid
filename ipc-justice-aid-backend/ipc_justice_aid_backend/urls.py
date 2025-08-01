from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def health_check(request):
    """Health check endpoint"""
    return Response({'status': 'ok', 'message': 'IPC Justice Aid API is running'})

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API v1 endpoints
    path('api/v1/auth/', include('authentication.urls')),
    path('api/v1/legal/', include('ipc_analysis.urls')),
    path('api/v1/leads/', include('leads.urls')),
    
    # Legacy API endpoints (for backward compatibility)
    path('api/auth/', include('authentication.urls')),
    path('api/legal/', include('ipc_analysis.urls')),
    
    # Health check
    path('api/health/', health_check, name='health_check'),
    path('health/', health_check, name='health_check_root'),
    
    # OAuth and social auth
    path('accounts/', include('allauth.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)