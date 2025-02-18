
from flask import render_template, request, jsonify
import google.generativeai as genai


import webbrowser


genai.configure(api_key="")

def chat_ai(user_input):
    try:
        
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        response = model.generate_content(user_input)
        return response.text  
    except Exception as e:
        
        return f"Error: {str(e)}"

def init_views(app):
    @app.route('/')
    def home():
        return render_template('index.html')  

    @app.route('/process', methods=['POST'])
    def process():
        try:
            
            input = request.json.get('input')
            user_input = input.lower()
            if not user_input:
                return jsonify({"response": "Error: No input provided"}), 400
            
            
            
            if "aaradhya" in user_input:
                return jsonify({"response" : "pagal bhag ja yahan se"})
            elif "golu" in user_input:
                return jsonify({"response" : "hello"})
            elif "your name" in user_input:
                return jsonify({"response" : "Gemini by Divyansh and yours?"})



            
            ai_response = chat_ai(user_input)
            return jsonify({"response": ai_response})
        except Exception as e:
            
            return jsonify({"response": f"Error: {str(e)}"}), 500
