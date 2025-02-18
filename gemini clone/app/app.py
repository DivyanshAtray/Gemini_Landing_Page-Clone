from flask import Flask
from routes import init_views


app = Flask(
    __name__,
    static_url_path='/',
    static_folder='static'  
)


init_views(app)

if __name__ == '__main__':
    
    app.run(host='0.0.0.0', port=5000, debug=True)
