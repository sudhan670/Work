class Config:
    SECRET_KEY = 'your_secret_key'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:root@localhost:3306/railway_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False