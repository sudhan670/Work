from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from Work.config import Config
from Work.models import db, User
from routes.userroutes import user_routes
from routes.adminroutes import admin_routes
from Work.models import db, User, Train, Booking

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'user_routes.login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

app.register_blueprint(user_routes)
app.register_blueprint(admin_routes)

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)

    with app.app_context():
        db.create_all()  # Create database tables

    return app

app = create_app()
if __name__ == '__main__':
    app.run(debug=True)
