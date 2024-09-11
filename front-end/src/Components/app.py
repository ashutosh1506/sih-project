from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set up OpenAI API credentials
openai.api_key = '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'

@app.route("/")
def index():
    return render_template("Chatbot.jsx")

@app.route("/api", methods=["POST"])
def api():
    # Get the message from the POST request
    message = request.json.get("message")
    # Send the message to OpenAI's API and receive the response
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": message}
        ]
    )
    response_message = completion.choices[0].message['content']
    return jsonify({'message': response_message})

if __name__ == '__main__':
    app.run(debug=True)
