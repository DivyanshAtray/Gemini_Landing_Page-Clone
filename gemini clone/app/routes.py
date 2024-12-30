from flask import render_template, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set OpenAI API key
openai.api_key = "your key here"

def chat_ai(prompt):
    try:
        # Make the call to the API with the correct method
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        # Get the AI response
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        return f"Error: {str(e)}"

def init_views(app):
    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/process', methods=['POST'])
    def process():
        user_input = request.json.get('input', '')
        if not user_input:
            return jsonify({"response": "Error: No input provided"}), 400

        ai_response = chat_ai(user_input)
        return jsonify({"response": ai_response})


