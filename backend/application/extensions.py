"""Extensions registry
All extensions here are used as singletons and
initialized in application factory
"""
import hashlib
import os
from typing import List
from flask_sqlalchemy import SQLAlchemy
from passlib.context import CryptContext
from flask_jwt_extended import JWTManager
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate


db = SQLAlchemy()
jwt = JWTManager()
ma = Marshmallow()
migrate = Migrate()
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")
