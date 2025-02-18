# my-flask-app/my-flask-app/README.md

# My Flask App

This is a simple Flask application that demonstrates the basic structure and functionality of a Flask web application.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-flask-app
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To run the application, use the following command:
```
flask run
```

Make sure to set the `FLASK_APP` environment variable to `app`:
- On Windows:
  ```
  set FLASK_APP=app
  ```
- On macOS/Linux:
  ```
  export FLASK_APP=app
  ```

Once the server is running, you can access the application at `http://127.0.0.1:5000`.

## Project Structure

```
my-flask-app
├── app
│   ├── __init__.py
│   ├── routes.py
│   └── templates
│       └── index.html
├── venv
├── requirements.txt
└── README.md
```

## License

This project is licensed under the MIT License.