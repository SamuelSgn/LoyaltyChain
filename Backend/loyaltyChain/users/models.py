from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        verbose_name = "Custom User"
        verbose_name_plural = "Custom Users"

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',  # Nom unique pour éviter le conflit
        blank=True,
        help_text="Les groupes auxquels cet utilisateur appartient.",
        verbose_name="groups",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',  # Nom unique pour éviter le conflit
        blank=True,
        help_text="Les permissions spécifiques pour cet utilisateur.",
        verbose_name="user permissions",
    )
