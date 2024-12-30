from flask import Flask
from routes import init_views

# Initialize the Flask app
app = Flask(__name__, static_url_path='/', static_folder='static')

# Initialize routes
init_views(app)

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
